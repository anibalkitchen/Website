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
            
            # Determinar género - usar el nombre de la carpeta directa
            folder = os.path.basename(os.path.dirname(full_path))
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

# 6. Pull remote changes first to avoid conflicts
echo "⬇️  Verificando cambios remotos..."
git fetch origin main

# Check if there are remote changes
if ! git diff --quiet HEAD origin/main; then
    echo "🔄 Cambios remotos detectados, haciendo pull..."
    git pull origin main
    
    # Check if there are merge conflicts
    if [ $? -ne 0 ]; then
        echo "⚠️  Conflictos de merge detectados. Resolviendo automáticamente..."
        
        # Accept remote changes for key files and re-sync
        git checkout --theirs script.js styles.css version.txt 2>/dev/null || true
        
        # Re-run sync after resolving conflicts
        echo "🔄 Re-sincronizando después de resolver conflictos..."
        python3 -c "
import os
import json
import re

def get_file_size(filepath):
    try:
        return os.path.getsize(filepath)
    except OSError:
        return 0

def scan_directory(base_path, folder_name):
    folder_path = os.path.join(base_path, folder_name)
    files = []
    
    if not os.path.exists(folder_path):
        return files
    
    for root, dirs, filenames in os.walk(folder_path):
        for filename in filenames:
            if filename.endswith('.mp3'):
                full_path = os.path.join(root, filename)
                relative_path = os.path.relpath(full_path, base_path)
                # Remove the base folder name (MP3/ or Ideas/) from the path
                path_parts = relative_path.replace(os.sep, '/').split('/')
                if len(path_parts) > 1:
                    file_path = '/'.join(path_parts[1:])  # Remove first part (MP3 or Ideas)
                else:
                    file_path = relative_path.replace(os.sep, '/')
                
                name = os.path.splitext(filename)[0]
                size = get_file_size(full_path)
                
                subfolder = os.path.basename(root)
                genre_map = {
                    'Boom Bap': 'boom-bap',
                    'Dark Boom Bap': 'dark-boom-bap',
                    'Trap': 'trap',
                    'Drill': 'drill',
                    'Electronic': 'electronic',
                    'Reggaeton': 'reggaeton',
                    'Rage': 'rage',
                    'Rock': 'rock',
                    'Agosto': 'agosto'
                }
                genre = genre_map.get(subfolder, subfolder.lower().replace(' ', '-'))
                
                files.append({
                    'name': name,
                    'file': file_path,
                    'genre': genre,
                    'size': size
                })
    
    return files

# Escanear archivos
mp3_files = scan_directory('.', 'MP3')
ideas_files = scan_directory('.', 'Ideas')

# Leer script.js actual
with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Generar nuevos datos
import datetime
timestamp = datetime.datetime.now().isoformat()

# Ideas data
ideas_js = '// Ideas data - organized by month folders (Ideas)\nconst ideasData = [\n'
ideas_js += f'    // Generado automáticamente - {timestamp}\n'
for file in sorted(ideas_files, key=lambda x: x['name']):
    ideas_js += f'    {{ name: \"{file[\"name\"]}\", file: \"{file[\"file\"]}\", genre: \"{file[\"genre\"]}\", size: {file[\"size\"]} }},\n'
ideas_js += '];\n'

# Beats data
beats_js = '// Beats data - organized by folder structure\nconst beats = [\n'
beats_js += f'    // Generado automáticamente - {timestamp}\n'

all_beats = [f for f in mp3_files if f['genre'] != 'agosto']
for file in sorted(all_beats, key=lambda x: x['name']):
    beats_js += f'    {{ name: \"{file[\"name\"]}\", file: \"{file[\"file\"]}\", genre: \"{file[\"genre\"]}\", size: {file[\"size\"]} }},\n'
beats_js += '];\n'

# DARK_BOOM_BAP_FILES set
dark_boom_bap_files = [f for f in mp3_files if f['genre'] == 'dark-boom-bap']
dark_files_set = 'const DARK_BOOM_BAP_FILES = new Set([\n'
for file in sorted(dark_boom_bap_files, key=lambda x: x['name']):
    filename = os.path.basename(file['file'])
    dark_files_set += f'    \"{filename}\",\n'
dark_files_set += ']);\n'

# Reemplazar en script.js
import re

# Reemplazar ideas data
ideas_pattern = r'// Ideas data.*?\];'
content = re.sub(ideas_pattern, ideas_js.rstrip(), content, flags=re.DOTALL)

# Reemplazar beats data
beats_pattern = r'// Beats data.*?\];'
content = re.sub(beats_pattern, beats_js.rstrip(), content, flags=re.DOTALL)

# Reemplazar DARK_BOOM_BAP_FILES
dark_pattern = r'const DARK_BOOM_BAP_FILES = new Set\(\[.*?\]\);'
content = re.sub(dark_pattern, dark_files_set.rstrip(), content, flags=re.DOTALL)

# Escribir archivo actualizado
with open('script.js', 'w', encoding='utf-8') as f:
    f.write(content)

print('   ✅ Re-sincronización completada')
"
        
        # Update version again
        NEW_VERSION=$(date +"%Y%m%d%H%M%S")
        echo "$NEW_VERSION" > version.txt
        
        # Add resolved files and commit
        git add script.js version.txt styles.css
        git commit -m "Resolve merge conflicts and re-sync database - $NEW_VERSION"
    fi
fi

# 7. Push a GitHub
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
