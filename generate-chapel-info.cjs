const fs = require('fs');
const path = require('path');

// Leer las traducciones existentes
const translationsPath = path.join(__dirname, 'src', 'i18n', 'apostolados.ts');
const translationsContent = fs.readFileSync(translationsPath, 'utf-8');

// Parsear las traducciones (usando eval por simplicidad)
const translations = eval(`(${translationsContent.replace('export const apostoladosTranslations = ', '').replace(';', '')})`);

function createChapelInfoFiles() {
  const baseDir = path.join(__dirname, 'src', 'i18n', 'chapels');

  // Para cada capilla en español
  Object.keys(translations.es.apostolados.chapelsList).forEach(chapelKey => {
    const chapelDir = path.join(baseDir, chapelKey);

    // Información de la capilla
    const chapelInfo = {
      es: {
        title: translations.es.apostolados.chapelsList[chapelKey].title,
        description: `Información sobre la capilla ${translations.es.apostolados.chapelsList[chapelKey].title}`
      },
      en: {
        title: translations.en.apostolados.chapelsList[chapelKey].title,
        description: `Information about ${translations.en.apostolados.chapelsList[chapelKey].title} chapel`
      }
    };

    // Crear archivo info.ts
    const infoContent = `export const chapelInfo = ${JSON.stringify(chapelInfo, null, 2)};

export type ChapelInfo = typeof chapelInfo;
`;

    const infoPath = path.join(chapelDir, 'info.ts');
    fs.writeFileSync(infoPath, infoContent, 'utf-8');

    console.log(`✅ Creado archivo info.ts para: ${chapelKey}`);
  });

  console.log('🚀 Archivos info.ts creados exitosamente!');
}

createChapelInfoFiles();
