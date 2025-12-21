const fs = require('fs');
const path = require('path');

// Lista de capillas existentes
const chapels = [
  'temploSanRamon',
  'divinaMisericordia',
  'nuestraSeñoraMerced',
  'sanPedroNolasco',
  'ermitaCarmen'
];

// Crear estructura de carpetas
function createChapelStructure() {
  const baseDir = path.join(__dirname, 'src', 'i18n', 'chapels');

  // Crear directorio base si no existe
  if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir, { recursive: true });
  }

  // Crear carpeta para cada capilla
  chapels.forEach(chapel => {
    const chapelDir = path.join(baseDir, chapel);
    if (!fs.existsSync(chapelDir)) {
      fs.mkdirSync(chapelDir, { recursive: true });
      console.log(`✅ Creada carpeta: ${chapelDir}`);
    }
  });

  console.log('🚀 Estructura de carpetas creada exitosamente!');
}

createChapelStructure();
