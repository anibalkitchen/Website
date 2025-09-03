#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configuración
const MP3_DIR = './MP3';
const IDEAS_DIR = './Ideas';
const SCRIPT_FILE = './script.js';

// Mapeo de carpetas a géneros
const GENRE_MAPPING = {
    'Boom Bap': 'boom-bap',
    'Dark Boom Bap': 'dark-boom-bap',
    'Trap': 'trap',
    'Drill': 'drill',
    'Reggaeton': 'reggaeton',
    'Rage': 'rage',
    'Electronic': 'electronic',
    'Rock': 'rock',
    'West Coast': 'west-coast'
};

// Mapeo de carpetas de ideas a géneros
const IDEAS_GENRE_MAPPING = {
    'Agosto': 'agosto'
};

console.log('🎵 Sincronizando base de datos de audio...\n');

// Función para obtener todos los archivos MP3 recursivamente
function getAllMP3Files(dir, baseDir = '') {
    const files = [];
    
    if (!fs.existsSync(dir)) {
        console.log(`⚠️  Directorio no encontrado: ${dir}`);
        return files;
    }
    
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            // Recursivo para subdirectorios
            const subFiles = getAllMP3Files(fullPath, path.join(baseDir, item));
            files.push(...subFiles);
        } else if (item.toLowerCase().endsWith('.mp3')) {
            const relativePath = path.join(baseDir, item);
            const name = path.basename(item, '.mp3');
            
            files.push({
                name: name,
                file: relativePath.replace(/\\/g, '/'), // Normalizar separadores
                size: stat.size,
                genre: getGenreFromPath(relativePath)
            });
        }
    }
    
    return files;
}

// Función para determinar el género basado en la ruta del archivo
function getGenreFromPath(filePath) {
    const parts = filePath.split('/');
    const folder = parts[0];
    return GENRE_MAPPING[folder] || 'unknown';
}

// Función para determinar el género de ideas basado en la ruta
function getIdeasGenreFromPath(filePath) {
    const parts = filePath.split('/');
    const folder = parts[0];
    return IDEAS_GENRE_MAPPING[folder] || folder.toLowerCase();
}

// Obtener archivos de beats
console.log('📁 Escaneando archivos de beats...');
const beatsFiles = getAllMP3Files(MP3_DIR);
console.log(`   Encontrados ${beatsFiles.length} archivos de beats`);

// Obtener archivos de ideas
console.log('📁 Escaneando archivos de ideas...');
const ideasFiles = getAllMP3Files(IDEAS_DIR).map(file => ({
    ...file,
    genre: getIdeasGenreFromPath(file.file)
}));
console.log(`   Encontrados ${ideasFiles.length} archivos de ideas`);

// Leer el archivo script.js actual
console.log('\n📝 Leyendo script.js actual...');
let scriptContent = fs.readFileSync(SCRIPT_FILE, 'utf8');

// Generar nuevo array de beats
const beatsArray = beatsFiles.map(file => {
    return `    { name: "${file.name}", file: "${file.file}", genre: "${file.genre}", size: ${file.size} }`;
}).join(',\n');

// Generar nuevo array de ideas
const ideasArray = ideasFiles.map(file => {
    return `    { name: "${file.name}", file: "${file.file}", genre: "${file.genre}", size: ${file.size} }`;
}).join(',\n');

// Reemplazar el array de beats en el script
const beatsRegex = /const beats = \[\s*\/\/.*?\n([\s\S]*?)\n\];/;
const newBeatsSection = `const beats = [
    // Generado automáticamente - ${new Date().toISOString()}
${beatsArray}
];`;

scriptContent = scriptContent.replace(beatsRegex, newBeatsSection);

// Reemplazar el array de ideas en el script
const ideasRegex = /const ideasData = \[\s*\/\/.*?\n([\s\S]*?)\n\];/;
const newIdeasSection = `const ideasData = [
    // Generado automáticamente - ${new Date().toISOString()}
${ideasArray}
];`;

scriptContent = scriptContent.replace(ideasRegex, newIdeasSection);

// Actualizar el conjunto DARK_BOOM_BAP_FILES
const darkBoomBapFiles = beatsFiles
    .filter(file => file.file.startsWith('Dark Boom Bap/'))
    .map(file => `"${path.basename(file.file)}"`)
    .join(',');

const darkBoomBapRegex = /const DARK_BOOM_BAP_FILES = new Set\(\[\s*([\s\S]*?)\s*\]\);/;
const newDarkBoomBapSection = `const DARK_BOOM_BAP_FILES = new Set([
    ${darkBoomBapFiles}
]);`;

scriptContent = scriptContent.replace(darkBoomBapRegex, newDarkBoomBapSection);

// Escribir el archivo actualizado
console.log('💾 Escribiendo script.js actualizado...');
fs.writeFileSync(SCRIPT_FILE, scriptContent);

// Resumen
console.log('\n✅ Sincronización completada!');
console.log(`   📊 Beats: ${beatsFiles.length} archivos`);
console.log(`   💡 Ideas: ${ideasFiles.length} archivos`);

// Mostrar distribución por género
const genreCount = {};
beatsFiles.forEach(file => {
    genreCount[file.genre] = (genreCount[file.genre] || 0) + 1;
});

console.log('\n📈 Distribución por género:');
Object.entries(genreCount).forEach(([genre, count]) => {
    console.log(`   ${genre}: ${count} archivos`);
});

console.log('\n🎉 Tu página web ahora está sincronizada con todos los archivos MP3!');
console.log('   Puedes ejecutar este script cada vez que agregues nuevos archivos.');
