#!/bin/bash

# Script para actualizar version.txt, sincronizar base de datos y hacer push a GitHub
# Uso: ./deploy.sh "mensaje del commit"

echo "🚀 Iniciando despliegue automático..."

# Verificar si estamos en un repositorio git
if [ ! -d ".git" ]; then
    echo "❌ Error: No estás en un repositorio git"
    exit 1
fi

# Verificar si hay cambios para commitear
if git diff --quiet && git diff --staged --quiet; then
    echo "⚠️  No hay cambios para commitear"
else
    echo "📝 Cambios detectados, continuando..."
fi

# 1. Sincronizar base de datos de audio
echo "🎵 Sincronizando base de datos de audio..."
python3 -c "
import os
import json
import re
from pathlib import Path

# Configuración
MP3_DIR = './MP3'
IDEAS_DIR = './Ideas'
SCRIPT_FILE = './script.js'

# Mapeo de carpetas a géneros
GENRE_MAPPING = {
    'Boom Bap': 'boom-bap',
    'Dark Boom Bap': 'dark-boom-bap',
    'Trap': 'trap',
    'Drill': 'drill',
    'Reggaeton': 'reggaeton',
    'Rage': 'rage',
    'Electronic': 'electronic',
    'Rock': 'rock'
}

IDEAS_GENRE_MAPPING = {
    'Agosto': 'agosto'
}

def get_all_mp3_files(directory, base_dir=''):
    files = []
    if not os.path.exists(directory):
        return files
    
    for item in os.listdir(directory):
        full_path = os.path.join(directory, item)
        if os.path.isdir(full_path):
            sub_files = get_all_mp3_files(full_path, os.path.join(base_dir, item))
            files.extend(sub_files)
        elif item.lower().endswith('.mp3'):
            relative_path = os.path.join(base_dir, item).replace('\\\\', '/')
            name = os.path.splitext(item)[0]
            size = os.path.getsize(full_path)
            
            # Determinar género
            parts = relative_path.split('/')
            folder = parts[0] if parts else ''
            genre = GENRE_MAPPING.get(folder, 'unknown')
            
            files.append({
                'name': name,
                'file': relative_path,
                'size': size,
                'genre': genre
            })
    
    return files

# Obtener archivos
beats_files = get_all_mp3_files(MP3_DIR)
ideas_files = get_all_mp3_files(IDEAS_DIR)
for file in ideas_files:
    parts = file['file'].split('/')
    folder = parts[0] if parts else ''
    file['genre'] = IDEAS_GENRE_MAPPING.get(folder, folder.lower())

# Leer script.js
with open(SCRIPT_FILE, 'r', encoding='utf-8') as f:
    script_content = f.read()

# Generar arrays
beats_array = ',\n'.join([
    f'    {{ name: \"{file[\"name\"]}\", file: \"{file[\"file\"]}\", genre: \"{file[\"genre\"]}\", size: {file[\"size\"]} }}'
    for file in beats_files
])

ideas_array = ',\n'.join([
    f'    {{ name: \"{file[\"name\"]}\", file: \"{file[\"file\"]}\", genre: \"{file[\"genre\"]}\", size: {file[\"size\"]} }}'
    for file in ideas_files
])

# Reemplazar beats
beats_pattern = r'const beats = \[[\s\S]*?\];'
new_beats = f'''const beats = [
    // Generado automáticamente - {__import__('datetime').datetime.now().isoformat()}
{beats_array}
];'''

script_content = re.sub(beats_pattern, new_beats, script_content)

# Reemplazar ideas
ideas_pattern = r'const ideasData = \[[\s\S]*?\];'
new_ideas = f'''const ideasData = [
    // Generado automáticamente - {__import__('datetime').datetime.now().isoformat()}
{ideas_array}
];'''

script_content = re.sub(ideas_pattern, new_ideas, script_content)

# Actualizar DARK_BOOM_BAP_FILES
dark_files = [f'\"{os.path.basename(file[\"file\"])}\"' for file in beats_files if file['file'].startswith('Dark Boom Bap/')]
dark_files_str = ','.join(dark_files)

dark_pattern = r'const DARK_BOOM_BAP_FILES = new Set\(\[[\s\S]*?\]\);'
new_dark = f'''const DARK_BOOM_BAP_FILES = new Set([
    {dark_files_str}
]);'''

script_content = re.sub(dark_pattern, new_dark, script_content)

# Escribir archivo
with open(SCRIPT_FILE, 'w', encoding='utf-8') as f:
    f.write(script_content)

print(f'   ✅ Sincronizados {len(beats_files)} beats y {len(ideas_files)} ideas')
"

if [ $? -ne 0 ]; then
    echo "❌ Error al sincronizar base de datos"
    exit 1
fi

# 2. Generar nueva versión (timestamp)
NEW_VERSION=$(date +"%Y%m%d%H%M%S")
echo "🔄 Actualizando version.txt a: $NEW_VERSION"
echo "$NEW_VERSION" > version.txt

# 3. Agregar archivos al staging
echo "📦 Agregando archivos modificados..."
git add .

# 4. Verificar si hay cambios después de agregar
if git diff --staged --quiet; then
    echo "ℹ️  No hay cambios nuevos para commitear después de la sincronización"
else
    # 5. Hacer commit
    COMMIT_MESSAGE="${1:-"Auto-deploy: Sync database and update version to $NEW_VERSION"}"
    echo "💾 Haciendo commit: $COMMIT_MESSAGE"
    git commit -m "$COMMIT_MESSAGE"
    
    if [ $? -ne 0 ]; then
        echo "❌ Error al hacer commit"
        exit 1
    fi
fi

# 6. Push a GitHub
echo "⬆️  Haciendo push a GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo "✅ ¡Despliegue completado exitosamente!"
    echo "   📊 Nueva versión: $NEW_VERSION"
    echo "   🌐 Los cambios estarán disponibles en tu sitio web"
    echo "   🔄 Los dispositivos cargarán automáticamente la nueva versión"
else
    echo "❌ Error al hacer push a GitHub"
    echo "   Verifica tu conexión y permisos de repositorio"
    exit 1
fi
