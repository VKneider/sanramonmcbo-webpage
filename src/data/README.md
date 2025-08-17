# 📁 Datos Centralizados - Parroquia San Ramón Nonato

Esta carpeta contiene todos los datos de la parroquia organizados en archivos separados para facilitar la edición y mantenimiento.

## 📋 Archivos de Datos

### 🏛️ `parishInfo.ts`
**Información general de la parroquia**
- Nombre de la parroquia
- Dirección completa
- Información de contacto
- URL del mapa de Google Maps
- Instrucciones de cómo llegar

### ⏰ `massSchedules.ts`
**Horarios de misas y celebraciones**
- Misas diarias
- Misas dominicales
- Rosario
- Adoración eucarística
- Confesiones

### ⛪ `chapels.ts`
**Información de las capillas filiales**
- Datos de cada capilla (Divina Misericordia, Nuestra Señora de la Merced, etc.)
- Historia de cada capilla
- Horarios específicos
- Ubicación y mapas
- Imágenes

### 👥 `apostolates.ts`
**Información de los apostolados**
- Organizados por capilla
- Datos completos de cada apostolado
- Horarios, requisitos, actividades
- Información de contacto
- Imágenes específicas

### 🎵 `ministries.ts`
**Ministerios de la página principal**
- Lista de ministerios con descripciones
- Iconos asociados

### 💰 `donations.ts`
**Información de donaciones**
- Datos bancarios
- Métodos de donación
- Mensaje de agradecimiento

## 🔧 Cómo Editar

### 1. **Información de Contacto**
Edita `parishInfo.ts` para cambiar:
- Dirección de la parroquia
- Número de teléfono
- Email
- URL del mapa

### 2. **Horarios de Misas**
Edita `massSchedules.ts` para cambiar:
- Horarios de misas diarias
- Horarios de misas dominicales
- Horarios de rosario y adoración

### 3. **Capillas**
Edita `chapels.ts` para cambiar:
- Información de cada capilla
- Horarios específicos
- URLs de mapas
- Imágenes

### 4. **Apostolados**
Edita `apostolates.ts` para cambiar:
- Información de cada apostolado
- Horarios de reuniones
- Requisitos
- Contactos
- Imágenes

### 5. **Ministerios**
Edita `ministries.ts` para cambiar:
- Lista de ministerios
- Descripciones
- Iconos

### 6. **Donaciones**
Edita `donations.ts` para cambiar:
- Datos bancarios
- Información de contacto
- Mensajes

## 📝 Ejemplo de Uso

```typescript
// Importar todos los datos
import { parishInfo, massSchedules, chapels, apostolates } from '@/data';

// Usar en componentes
const phone = parishInfo.contact.phone;
const address = parishInfo.address;
const schedules = massSchedules.dailyMasses;
```

## 🎯 Ventajas

✅ **Fácil edición**: Solo edita un archivo para cambiar la información
✅ **Organización**: Cada tipo de dato tiene su propio archivo
✅ **Mantenimiento**: No necesitas buscar en múltiples componentes
✅ **Reutilización**: Los datos se pueden usar en cualquier componente
✅ **Consistencia**: Toda la información está centralizada

## 📞 Contacto

Para dudas sobre la edición de datos, contacta al administrador del sistema. 