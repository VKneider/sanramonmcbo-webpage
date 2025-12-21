const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

/*
INSTRUCCIONES PARA CONFIGURAR IMÁGENES DE GOOGLE DRIVE:

1. Subir las imágenes a Google Drive
2. Hacer clic derecho en cada imagen → "Obtener enlace"
3. Cambiar permisos a "Cualquier persona con el enlace puede ver"
4. Copiar la URL que se genera (https://drive.google.com/open?id=...)
5. Pegar esa URL en el formulario de apostolados

El script automáticamente convertirá estas URLs al formato web correcto:
https://drive.google.com/open?id=1Dwz9rhy2bTf9iEzi5LzVaXotLfDSvK93
    ↓
https://lh3.googleusercontent.com/d/1Dwz9rhy2bTf9iEzi5LzVaXotLfDSvK93

IMPORTANTE: Las imágenes DEBEN estar configuradas como públicas para que se vean en el sitio web.
*/

// Función para convertir nombre de apostolado a slug válido para archivo
function slugifyApostolateName(name) {
  return name
    .toLowerCase()
    // Reemplazar caracteres especiales
    .replace(/á/g, 'a')
    .replace(/é/g, 'e')
    .replace(/í/g, 'i')
    .replace(/ó/g, 'o')
    .replace(/ú/g, 'u')
    .replace(/ñ/g, 'n')
    // Reemplazar espacios y caracteres especiales con guiones
    .replace(/[^a-z0-9]+/g, '-')
    // Eliminar guiones al inicio y final
    .replace(/^-+|-+$/g, '')
    // Limitar longitud para evitar nombres demasiado largos
    .substring(0, 50);
}

// Función para convertir URLs de Google Drive a imagen completa
// Función para convertir URLs de Google Drive a formato web accesible
function convertToThumbnail(url) {
  return getBestImageUrl(url);
}

// Función para validar que la URL convertida sea accesible
async function validateImageUrl(url) {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    console.warn(`⚠️  URL no accesible: ${url}`);
    return false;
  }
}

// Función para probar múltiples formatos si uno falla
function getBestImageUrl(originalUrl) {
  if (!originalUrl || typeof originalUrl !== 'string') return originalUrl;

  // Extraer ID del archivo
  const patterns = [
    /https:\/\/drive\.google\.com\/file\/d\/([^\/]+)\/view/,
    /https:\/\/drive\.google\.com\/open\?id=([^&]+)/,
  ];

  let fileId = null;
  for (const pattern of patterns) {
    const match = originalUrl.match(pattern);
    if (match && match[1]) {
      fileId = match[1];
      break;
    }
  }

  if (!fileId) return originalUrl;

  // Probar diferentes formatos (priorizando el más confiable)
  const formats = [
    `https://lh3.googleusercontent.com/d/${fileId}`, // Más confiable
    `https://drive.google.com/uc?export=view&id=${fileId}`, // Alternativo
    `https://drive.google.com/thumbnail?id=${fileId}&sz=w800`, // Thumbnail
  ];

  // Por ahora devolver el más confiable, luego podemos implementar validación
  return formats[0];
}

// Función para procesar arrays de URLs
function processImageUrls(urls) {
  if (!Array.isArray(urls)) return urls;
  return urls.map(convertToThumbnail);
}

// Función para parsear Excel
function parseExcel(excelPath) {
  console.log('📊 Leyendo archivo Excel...');

  // Leer el archivo Excel
  const workbook = XLSX.readFile(excelPath);

  // Obtener la primera hoja
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];

  // Convertir a JSON con headers
  const jsonData = XLSX.utils.sheet_to_json(worksheet);

  console.log(`✅ Encontrados ${jsonData.length} registros en Excel`);

  // Los datos ya vienen con los headers correctos de Excel
  return jsonData;
}

// Función para convertir datos del CSV al formato de traducciones
function convertCSVToApostolateData(csvData) {
  const apostolates = {};

  csvData.forEach((row, index) => {
    // Mapear el templo a la clave de capilla
    const templeMapping = {
      'San Ramón Nonato': 'temploSanRamon'
    };

    const chapelKey = templeMapping[row['Templo donde es efectuado']] || 'temploSanRamon';

    // Crear clave única para el apostolado
    const apostolateKey = `apostolate_${index + 1}`;

    // Procesar actividades (dividir por líneas si contienen guiones)
    const activitiesText = row['Descripción de actividades que se realizan dentro del mismo'] || '';
    const activities = activitiesText
      .split('\n')
      .map(activity => activity.replace(/^- /, '').trim())
      .filter(activity => activity.length > 0);

    // Crear coordinadores
    const coordinadores = [];
    if (row['Nombre del Coordinador 1'] && row['Nombre del Coordinador 1'].trim()) {
      coordinadores.push({
        nombre: row['Nombre del Coordinador 1'].trim(),
        telefono: row['Teléfono del Coordinador 1'] ? row['Teléfono del Coordinador 1'].trim() : undefined
      });
    }
    if (row['Nombre del Coordinador 2'] && row['Nombre del Coordinador 2'].trim()) {
      coordinadores.push({
        nombre: row['Nombre del Coordinador 2'].trim(),
        telefono: row['Teléfono del Coordinador 2'] ? row['Teléfono del Coordinador 2'].trim() : undefined
      });
    }

    // Procesar fotos adicionales
    const activityImages = [];
    if (row['Fotos adicionales']) {
      const additionalPhotos = row['Fotos adicionales'].split(',').map(url => url.trim());
      activityImages.push(...additionalPhotos.filter(url => url.length > 0));
    }

    // Construir horario
    const dias = row['¿Qué días se reunen?'] || '';
    const horario = row['¿En qué horario se reunen?'] || '';
    const schedule = [dias, horario].filter(s => s.trim()).join(' ').trim() || undefined;

    // Procesar requisitos
    const requisitosRespuesta = row['¿Hay requisitos para poder tir/participar del mismo? En caso que sí, indique'] || '';
    const requirements = requisitosRespuesta.toLowerCase() === 'no' ? undefined :
                        requisitosRespuesta === '¿Hay requisitos para poder tir/participar del mismo? En caso que sí, indique' ?
                        undefined : requisitosRespuesta;

    // Crear estructura del apostolado
    const apostolateData = {
      name: row['Nombre del Apostolado'] || '',
      description: row['Descripción del Apostolado'] || '',
      ageRange: row['¿Quienes pueden participar?'] || undefined,
      schedule: schedule,
      location: row['Templo donde es efectuado'] || '',
      activities: activities.length > 0 ? activities : undefined,
      requirements: requirements,
      coordinadores: coordinadores.length > 0 ? coordinadores : undefined,
      activityImages: activityImages.length > 0 ? activityImages : undefined
    };

    // Agregar imagen de portada si existe
    if (row['Foto de portada del apostolado']) {
      apostolateData.image = row['Foto de portada del apostolado'];
    }

    // Organizar por capilla
    if (!apostolates[chapelKey]) {
      apostolates[chapelKey] = {};
    }

    apostolates[chapelKey][apostolateKey] = apostolateData;
  });

  return apostolates;
}

// Función principal
function main() {
  try {
    console.log('🚀 Procesando Excel de apostolados...');

    // Leer el archivo Excel
    const excelPath = path.join(__dirname, 'Formulario de Apostolados_ Pagina Web (respuestas).xlsx');

    // Parsear Excel
    const excelData = parseExcel(excelPath);
    console.log(`📊 Encontrados ${excelData.length} apostolados en el Excel`);

    // Crear estructura de carpetas solo para las capillas que tienen datos
    const chapelKey = 'temploSanRamon'; // Solo esta capilla tiene datos del Excel
    const chapelDir = path.join(__dirname, 'src', 'i18n', 'chapels', chapelKey);

    // Crear directorio si no existe
    if (!fs.existsSync(chapelDir)) {
      fs.mkdirSync(chapelDir, { recursive: true });
    }

    console.log(`📁 Procesando capilla: ${chapelKey}`);

    // Crear archivo info.ts para la capilla
    const chapelInfo = {
      es: {
        title: "Templo San Ramón Nonato",
        description: "Información sobre la capilla Templo San Ramón Nonato"
      },
      en: {
        title: "San Ramón Nonato Temple",
        description: "Information about San Ramón Nonato Temple chapel"
      }
    };

    const infoContent = `export const chapelInfo = ${JSON.stringify(chapelInfo, null, 2)};

export type ChapelInfo = typeof chapelInfo;
`;
    fs.writeFileSync(path.join(chapelDir, 'info.ts'), infoContent, 'utf-8');
    console.log(`  ✅ Creado: ${chapelKey}/info.ts`);

    // Procesar cada apostolado del Excel
    excelData.forEach((row, index) => {
      const apostolateName = row['Nombre del Apostolado'] || `apostolate_${index + 1}`;
      const fileName = `${slugifyApostolateName(apostolateName)}.ts`;

      // Procesar actividades
      const activitiesText = row['Descripción de actividades que se realizan dentro del mismo'] || '';
      const activities = activitiesText
        .split('\n')
        .map(activity => activity.replace(/^- /, '').trim())
        .filter(activity => activity.length > 0);

      // Crear coordinadores
      const coordinadores = [];
      if (row['Nombre del Coordinador 1'] && row['Nombre del Coordinador 1'].trim()) {
        coordinadores.push({
          nombre: row['Nombre del Coordinador 1'].trim(),
          telefono: row['Teléfono del Coordinador 1'] ? row['Teléfono del Coordinador 1'].trim() : undefined
        });
      }
      if (row['Nombre del Coordinador 2'] && row['Nombre del Coordinador 2'].trim()) {
        coordinadores.push({
          nombre: row['Nombre del Coordinador 2'].trim(),
          telefono: row['Teléfono del Coordinador 2'] ? row['Teléfono del Coordinador 2'].trim() : undefined
        });
      }

      // Procesar fotos adicionales (convertidas a thumbnails)
      const activityImages = [];
      if (row['Fotos adicionales']) {
        const additionalPhotos = row['Fotos adicionales'].split(',').map(url => url.trim());
        const processedPhotos = additionalPhotos.filter(url => url.length > 0).map(convertToThumbnail);
        activityImages.push(...processedPhotos);
      }

      // Construir horario
      const dias = row['¿Qué días se reunen?'] || '';
      const horario = row['¿En qué horario se reunen?'] || '';
      const schedule = [dias, horario].filter(s => s.trim()).join(' ').trim() || undefined;

      // Procesar requisitos
      const requisitosRespuesta = row['¿Hay requisitos para poder tir/participar del mismo? En caso que sí, indique'] || '';
      const requirements = requisitosRespuesta.toLowerCase() === 'no' ? undefined :
                          requisitosRespuesta === '¿Hay requisitos para poder tir/participar del mismo? En caso que sí, indique' ?
                          undefined : requisitosRespuesta;

      // Crear datos del apostolado
      const esData = {
        name: apostolateName,
        description: row['Descripción del Apostolado'] || '',
        ageRange: row['¿Quienes pueden participar?'] || undefined,
        schedule: schedule,
        location: row['Templo donde es efectuado'] || '',
        activities: activities.length > 0 ? activities : undefined,
        requirements: requirements,
        coordinadores: coordinadores.length > 0 ? coordinadores : undefined,
        activityImages: activityImages.length > 0 ? activityImages : undefined
      };

      // Agregar imagen de portada si existe (convertida a thumbnail)
      if (row['Foto de portada del apostolado']) {
        esData.image = convertToThumbnail(row['Foto de portada del apostolado']);
      }

      // Crear versión en inglés (simplificada)
      const enData = {
        ...esData,
        name: esData.name, // Aquí podrías agregar traducción automática
        description: esData.description, // Aquí podrías agregar traducción automática
        activities: esData.activities // Aquí podrías agregar traducción automática
      };

      // Crear objeto con datos del apostolado
      const apostolateData = {
        es: esData,
        en: enData
      };

      // Crear contenido del archivo
      const fileContent = `export const apostolateData = ${JSON.stringify(apostolateData, null, 2)};

export type ApostolateData = typeof apostolateData;
`;

      // Crear archivo
      const filePath = path.join(chapelDir, fileName);
      fs.writeFileSync(filePath, fileContent, 'utf-8');

      console.log(`  ✅ Creado: ${chapelKey}/${fileName}`);
    });

    // Generar archivo index.ts automáticamente
    generateIndexFile(chapelKey, excelData);

    console.log('✅ Archivos de apostolados creados exitosamente!');
    console.log(`📈 Total de apostolados procesados: ${excelData.length}`);

  } catch (error) {
    console.error('❌ Error procesando el Excel:', error.message);
    process.exit(1);
  }
}

// Función para generar el archivo index.ts automáticamente
function generateIndexFile(chapelKey, excelData) {
  const indexPath = path.join(__dirname, 'src', 'i18n', 'chapels', 'index.ts');

  // Generar imports de capillas
  const chapelImports = `// Importar información de capillas
import { chapelInfo as ${chapelKey}Info } from './${chapelKey}/info';`;

  // Generar imports de apostolados
  const apostolateImports = excelData.map((row, index) => {
    const apostolateName = row['Nombre del Apostolado'] || `apostolate_${index + 1}`;
    const fileName = slugifyApostolateName(apostolateName);
    const varName = camelCaseFromSlug(fileName);
    return `import { apostolateData as ${varName}Data } from './${chapelKey}/${fileName}';`;
  }).join('\n');

  // Generar objeto chapelInfos
  const chapelInfos = `
// Información de capillas
export const chapelInfos = {
  ${chapelKey}: ${chapelKey}Info,
};`;

  // Generar objeto chapelApostolates
  const apostolateEntries = excelData.map((row, index) => {
    const apostolateName = row['Nombre del Apostolado'] || `apostolate_${index + 1}`;
    const fileName = slugifyApostolateName(apostolateName);
    const varName = camelCaseFromSlug(fileName);
    return `      ${varName}: ${varName}Data,`;
  }).join('\n');

  const chapelApostolates = `
// Apostolados organizados por capilla (solo del Excel)
export const chapelApostolates = {
  ${chapelKey}: {
    title: ${chapelKey}Info.es.title,
    apostolates: {
${apostolateEntries}
    }
  },
};`;

  // Generar types
  const types = `
export type ChapelApostolates = typeof chapelApostolates;
export type ChapelInfos = typeof chapelInfos;`;

  // Combinar todo
  const indexContent = `${chapelImports}

${apostolateImports}${chapelInfos}${chapelApostolates}${types}`;

  // Escribir archivo
  fs.writeFileSync(indexPath, indexContent, 'utf-8');
  console.log('  ✅ Archivo index.ts actualizado automáticamente');
}

// Función auxiliar para convertir slug a camelCase
function camelCaseFromSlug(slug) {
  return slug
    .split('-')
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join('');
}

// Ejecutar si se llama directamente
if (require.main === module) {
  main();
}

module.exports = { parseExcel, convertCSVToApostolateData };
