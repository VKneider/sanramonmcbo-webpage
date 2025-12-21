const fs = require('fs');
const path = require('path');

// Leer las traducciones existentes
const translationsPath = path.join(__dirname, 'src', 'i18n', 'apostolados.ts');
const translationsContent = fs.readFileSync(translationsPath, 'utf-8');

// Parsear las traducciones
const translations = eval(`(${translationsContent.replace('export const apostoladosTranslations = ', '').replace(';', '')})`);

function createApostolateFiles() {
  const baseDir = path.join(__dirname, 'src', 'i18n', 'chapels');

  // Para cada capilla
  Object.keys(translations.es.apostolados.chapelsList).forEach(chapelKey => {
    const chapelDir = path.join(baseDir, chapelKey);
    const chapelApostolates = translations.es.apostolados.chapelsList[chapelKey].apostolates;

    // Para cada apostolado en la capilla
    Object.keys(chapelApostolates).forEach(apostolateKey => {
      const esData = translations.es.apostolados.chapelsList[chapelKey].apostolates[apostolateKey];
      const enData = translations.en.apostolados.chapelsList[chapelKey].apostolates[apostolateKey];

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
      const fileName = `${apostolateKey}.ts`;
      const filePath = path.join(chapelDir, fileName);
      fs.writeFileSync(filePath, fileContent, 'utf-8');

      console.log(`✅ Creado archivo: ${chapelKey}/${fileName}`);
    });
  });

  console.log('🚀 Archivos de apostolados creados exitosamente!');
}

createApostolateFiles();
