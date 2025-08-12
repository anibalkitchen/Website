// Ideas data - organized by month folders (Ideas)
const ideasData = [
    // Agosto (3 ideas)
    { name: "Boom Bap - Agosto 10 - 2025 - Idea", file: "Agosto/Boom Bap - Agosto 10 - 2025 - Idea.mp3", genre: "agosto", size: 3376320 },
    { name: "Idea 1 - Agosto 11 - 2025", file: "Agosto/Idea 1 - Agosto 11 - 2025.mp3", genre: "agosto", size: 3064320 },
    { name: "Idea 2 - Agosto 11 - 2025", file: "Agosto/Idea 2 - Agosto 11 - 2025.mp3", genre: "agosto", size: 3563520 }
];

// Beats data - organized by folder structure
const beats = [
    // Boom Bap (87 beats)
    { name: "100k Stack", file: "Boom Bap/100k Stack.mp3", genre: "boom-bap", size: 4003400 },
    { name: "7 Kilos", file: "Boom Bap/7 Kilos.mp3", genre: "boom-bap", size: 4291397 },
    { name: "Abnormal Thoughts", file: "Boom Bap/Abnormal Thoughts.mp3", genre: "boom-bap", size: 4940367 },
    { name: "Ain't Easy", file: "Boom Bap/Ain't Easy.mp3", genre: "boom-bap", size: 3854600 },
    { name: "Ares", file: "Boom Bap/Ares.mp3", genre: "boom-bap", size: 3246434 },
    { name: "Ashes", file: "Boom Bap/Ashes.mp3", genre: "boom-bap", size: 4069155 },
    { name: "At Night", file: "Boom Bap/At Night.mp3", genre: "boom-bap", size: 3654918 },
    { name: "Beast", file: "Boom Bap/Beast.mp3", genre: "boom-bap", size: 3730755 },
    { name: "Belial", file: "Boom Bap/Belial.mp3", genre: "boom-bap", size: 3690916 },
    { name: "Bizarre Dream", file: "Boom Bap/Bizarre Dream.mp3", genre: "boom-bap", size: 4269803 },
    { name: "Block Party Blues", file: "Boom Bap/Block Party Blues.mp3", genre: "boom-bap", size: 4389327 },
    { name: "Blood Stain", file: "Boom Bap/Blood Stain.mp3", genre: "boom-bap", size: 3894441 },
    { name: "Cashing Out", file: "Boom Bap/Cashing Out.mp3", genre: "boom-bap", size: 3686601 },
    { name: "Cerberus", file: "Boom Bap/Cerberus.mp3", genre: "boom-bap", size: 4417158 },
    { name: "Clandestine", file: "Boom Bap/Clandestine.mp3", genre: "boom-bap", size: 3903081 },
    { name: "Cursed", file: "Boom Bap/Cursed.mp3", genre: "boom-bap", size: 4947556 },
    { name: "Dangerous", file: "Boom Bap/Dangerous.mp3", genre: "boom-bap", size: 4195399 },
    { name: "Dark Boom Bap - Void", file: "Boom Bap/Dark Boom Bap - Void.mp3", genre: "boom-bap", size: 4203090 },
    { name: "Dark Knight", file: "Boom Bap/Dark Knight.mp3", genre: "boom-bap", size: 4311081 },
    { name: "Dark Times", file: "Boom Bap/Dark Times.mp3", genre: "boom-bap", size: 3353960 },
    { name: "Diamond Cut", file: "Boom Bap/Diamond Cut.mp3", genre: "boom-bap", size: 3858441 },
    { name: "Echoes of Yesterday", file: "Boom Bap/Echoes of Yesterday.mp3", genre: "boom-bap", size: 3904529 },
    { name: "El Barrio", file: "Boom Bap/El Barrio.mp3", genre: "boom-bap", size: 3664039 },
    { name: "Engulfed By Madness", file: "Boom Bap/Engulfed By Madness.mp3", genre: "boom-bap", size: 3814289 },
    { name: "Ethereal Illusions", file: "Boom Bap/Ethereal Illusions.mp3", genre: "boom-bap", size: 4744528 },
    { name: "Expanded Perception", file: "Boom Bap/Expanded Perception.mp3", genre: "boom-bap", size: 4536689 },
    { name: "Faded Page", file: "Boom Bap/Faded Page.mp3", genre: "boom-bap", size: 3886280 },
    { name: "Fate", file: "Boom Bap/Fate.mp3", genre: "boom-bap", size: 3007394 },
    { name: "Final Boss", file: "Boom Bap/Final Boss.mp3", genre: "boom-bap", size: 4031240 },
    { name: "From The Darkness", file: "Boom Bap/From The Darkness.mp3", genre: "boom-bap", size: 4283247 },
    { name: "Furious", file: "Boom Bap/Furious.mp3", genre: "boom-bap", size: 2930117 },
    { name: "Gucci", file: "Boom Bap/Gucci.mp3", genre: "boom-bap", size: 4249635 },
    { name: "Hallucinations", file: "Boom Bap/Hallucinations.mp3", genre: "boom-bap", size: 3550284 },
    { name: "Hard Life", file: "Boom Bap/Hard Life.mp3", genre: "boom-bap", size: 3637639 },
    { name: "Haze", file: "Boom Bap/Haze.mp3", genre: "boom-bap", size: 3443714 },
    { name: "Headshot", file: "Boom Bap/Headshot.mp3", genre: "boom-bap", size: 4735878 },
    { name: "Heaven And Hell", file: "Boom Bap/Heaven And Hell.mp3", genre: "boom-bap", size: 4501165 },
    { name: "Ice Box", file: "Boom Bap/Ice Box.mp3", genre: "boom-bap", size: 4304837 },
    { name: "Illusion of Choice", file: "Boom Bap/Illusion of Choice.mp3", genre: "boom-bap", size: 4203088 },
    { name: "Impala", file: "Boom Bap/Impala.mp3", genre: "boom-bap", size: 3129796 },
    { name: "Infinite Dream", file: "Boom Bap/Infinite Dream.mp3", genre: "boom-bap", size: 3521004 },
    { name: "Infinite Labyrinth", file: "Boom Bap/Infinite Labyrinth.mp3", genre: "boom-bap", size: 3939088 },
    { name: "Joker", file: "Boom Bap/Joker.mp3", genre: "boom-bap", size: 3120195 },
    { name: "Ketamine", file: "Boom Bap/Ketamine.mp3", genre: "boom-bap", size: 4003398 },
    { name: "King", file: "Boom Bap/King.mp3", genre: "boom-bap", size: 2612834 },
    { name: "Legacy", file: "Boom Bap/Legacy.mp3", genre: "boom-bap", size: 4096516 },
    { name: "Machiavelli", file: "Boom Bap/Machiavelli.mp3", genre: "boom-bap", size: 4181961 },
    { name: "Mad", file: "Boom Bap/Mad.mp3", genre: "boom-bap", size: 3858433 },
    { name: "Medusa", file: "Boom Bap/Medusa.mp3", genre: "boom-bap", size: 4281316 },
    { name: "Melting Mind", file: "Boom Bap/Melting Mind.mp3", genre: "boom-bap", size: 4205482 },
    { name: "Mente Rota", file: "Boom Bap/Mente Rota.mp3", genre: "boom-bap", size: 3961160 },
    { name: "Midnight", file: "Boom Bap/Midnight.mp3", genre: "boom-bap", size: 3880038 },
    { name: "Millitia", file: "Boom Bap/Millitia.mp3", genre: "boom-bap", size: 3157638 },
    { name: "Mind State", file: "Boom Bap/Mind State.mp3", genre: "boom-bap", size: 3724520 },
    { name: "Moloc", file: "Boom Bap/Moloc.mp3", genre: "boom-bap", size: 3946755 },
    { name: "Money In Hand", file: "Boom Bap/Money In Hand.mp3", genre: "boom-bap", size: 3683243 },
    { name: "Monster", file: "Boom Bap/Monster.mp3", genre: "boom-bap", size: 4291397 },
    { name: "Most Wanted", file: "Boom Bap/Most Wanted.mp3", genre: "boom-bap", size: 3663561 },
    { name: "Mysterious Force", file: "Boom Bap/Mysterious-Force.mp3", genre: "boom-bap", size: 4003406 },
    { name: "Night Light", file: "Boom Bap/Night Light.mp3", genre: "boom-bap", size: 3624681 },
    { name: "Night Plan", file: "Boom Bap/Night Plan.mp3", genre: "boom-bap", size: 3647720 },
    { name: "No Sleep", file: "Boom Bap/No Sleep.mp3", genre: "boom-bap", size: 4108518 },
    { name: "Not Easy", file: "Boom Bap/Not Easy.mp3", genre: "boom-bap", size: 4180518 },
    { name: "Orias", file: "Boom Bap/Orias.mp3", genre: "boom-bap", size: 4159395 },
    { name: "Ouroboros", file: "Boom Bap/Ouroboros.mp3", genre: "boom-bap", size: 3495079 },
    { name: "Phantom Shadow", file: "Boom Bap/Phantom Shadow.mp3", genre: "boom-bap", size: 3097164 },
    { name: "Rage", file: "Boom Bap/Rage.mp3", genre: "boom-bap", size: 4218914 },
    { name: "Raw Play", file: "Boom Bap/Raw Play.mp3", genre: "boom-bap", size: 3317478 },
    { name: "Reflection", file: "Boom Bap/Reflection.mp3", genre: "boom-bap", size: 3683240 },
    { name: "Ritual Night", file: "Boom Bap/Ritual Night.mp3", genre: "boom-bap", size: 4291402 },
    { name: "Robbery", file: "Boom Bap/Robbery.mp3", genre: "boom-bap", size: 4298117 },
    { name: "Smoke - Griselda", file: "Boom Bap/Smoke - Griselda.mp3", genre: "boom-bap", size: 4622606 },
    { name: "Smoke", file: "Boom Bap/Smoke.mp3", genre: "boom-bap", size: 3926115 },
    { name: "Stolas", file: "Boom Bap/Stolas.mp3", genre: "boom-bap", size: 4858276 },
    { name: "Subconscious", file: "Boom Bap/Subconscious.mp3", genre: "boom-bap", size: 4408042 },
    { name: "Tinta Negra", file: "Boom Bap/Tinta Negra.mp3", genre: "boom-bap", size: 4242441 },
    { name: "Transdimensional Picnic", file: "Boom Bap/Transdimensional Picnic.mp3", genre: "boom-bap", size: 4132533 },
    { name: "True Grit", file: "Boom Bap/True Grit.mp3", genre: "boom-bap", size: 4259239 },
    { name: "UFO Ride", file: "Boom Bap/UFO Ride.mp3", genre: "boom-bap", size: 4033638 },
    { name: "Uncut Lines", file: "Boom Bap/Uncut Lines.mp3", genre: "boom-bap", size: 3792681 },
    { name: "Unidentified Encounters", file: "Boom Bap/Unidentified Encounters.mp3", genre: "boom-bap", size: 3917013 },
    { name: "Villain", file: "Boom Bap/Villain.mp3", genre: "boom-bap", size: 3975557 },
    { name: "Voices on My Head", file: "Boom Bap/Voices on My Head.mp3", genre: "boom-bap", size: 4125807 },
    { name: "Void", file: "Boom Bap/Void.mp3", genre: "boom-bap", size: 4447394 },
    { name: "Walking Through Chaos", file: "Boom Bap/Walking Through Chaos.mp3", genre: "boom-bap", size: 3956371 },
    { name: "Witchcraft", file: "Boom Bap/Witchcraft.mp3", genre: "boom-bap", size: 3799400 },
    { name: "illuminati", file: "Boom Bap/illuminati.mp3", genre: "boom-bap", size: 3783080 },

    // Trap (25 beats)
    { name: "24/7", file: "Trap/24_7.mp3", genre: "trap", size: 3399600 },
    { name: "300", file: "Trap/300.mp3", genre: "trap", size: 2694433 },
    { name: "Account", file: "Trap/Account.mp3", genre: "trap", size: 3400037 },
    { name: "Airport", file: "Trap/Airport.mp3", genre: "trap", size: 3057797 },
    { name: "Demons", file: "Trap/Demons.mp3", genre: "trap", size: 3547876 },
    { name: "Diamond", file: "Trap/Diamond.mp3", genre: "trap", size: 3283397 },
    { name: "Extra Hours", file: "Trap/Extra Hours.mp3", genre: "trap", size: 3276201 },
    { name: "Glizzy", file: "Trap/Glizzy.mp3", genre: "trap", size: 2943076 },
    { name: "Heat", file: "Trap/Heat.mp3", genre: "trap", size: 2563681 },
    { name: "Honey", file: "Trap/Honey.mp3", genre: "trap", size: 3411075 },
    { name: "Incantations", file: "Trap/Incantations.mp3", genre: "trap", size: 3742282 },
    { name: "Jupiter", file: "Trap/Jupiter.mp3", genre: "trap", size: 3203237 },
    { name: "Lil Baby - No Sleep", file: "Trap/Lil Baby - No Sleep.mp3", genre: "trap", size: 2781329 },
    { name: "Marching Flute", file: "Trap/Marching Flute.mp3", genre: "trap", size: 3603084 },
    { name: "My Turn", file: "Trap/My Turn.mp3", genre: "trap", size: 3299717 },
    { name: "Never Look Back", file: "Trap/Never Look Back.mp3", genre: "trap", size: 3548845 },
    { name: "Never Stopping", file: "Trap/Never Stopping.mp3", genre: "trap", size: 4069389 },
    { name: "Not Luck", file: "Trap/Not Luck.mp3", genre: "trap", size: 2762598 },
    { name: "R.I.C.O.", file: "Trap/R.I.C.O..mp3", genre: "trap", size: 2998278 },
    { name: "Special Ops", file: "Trap/Special Ops.mp3", genre: "trap", size: 3315081 },
    { name: "Telepathy", file: "Trap/Telepathy.mp3", genre: "trap", size: 3449479 },
    { name: "Tiktok", file: "Trap/Tiktok.mp3", genre: "trap", size: 3386116 },
    { name: "Top Dog", file: "Trap/Top Dog.mp3", genre: "trap", size: 2883077 },
    { name: "Turbo", file: "Trap/Turbo.mp3", genre: "trap", size: 3660675 },
    { name: "Worst Without me", file: "Trap/Worst Without me.mp3", genre: "trap", size: 2847566 },

    // Drill (4 beats)
    { name: "Beast Mode", file: "Drill/Beast Mode.mp3", genre: "drill", size: 3911720 },
    { name: "Cuerno", file: "Drill/Cuerno.mp3", genre: "drill", size: 2862916 },
    { name: "Risky", file: "Drill/Risky.mp3", genre: "drill", size: 5214915 },
    { name: "Scars", file: "Drill/Scars.mp3", genre: "drill", size: 3363075 },

    // Reggaeton (6 beats)
    { name: "Conocida", file: "Reggaeton/Conocida.mp3", genre: "reggaeton", size: 3616038 },
    { name: "Historia", file: "Reggaeton/Historia.mp3", genre: "reggaeton", size: 3742278 },
    { name: "Olvidarte", file: "Reggaeton/Olvidarte.mp3", genre: "reggaeton", size: 3950119 },
    { name: "Otro Numero", file: "Reggaeton/Otro Numero.mp3", genre: "reggaeton", size: 3655401 },
    { name: "Recuerdo", file: "Reggaeton/Recuerdo.mp3", genre: "reggaeton", size: 4148838 },
    { name: "Regresa", file: "Reggaeton/Regresa.mp3", genre: "reggaeton", size: 4643237 },

    // Rage (5 beats)
    { name: "Can't Do This", file: "Rage/Can't Do This.mp3", genre: "rage", size: 3441405 },
    { name: "FLXN", file: "Rage/FLXN.mp3", genre: "rage", size: 2340194 },
    { name: "IDKY", file: "Rage/IDKY.mp3", genre: "rage", size: 2813954 },
    { name: "Nascar", file: "Rage/Nascar.mp3", genre: "rage", size: 2847556 },
    { name: "SHXT", file: "Rage/SHXT.mp3", genre: "rage", size: 2340194 },

    // Electronic (4 beats)
    { name: "Discover You", file: "Electronic/Discover You.mp3", genre: "electronic", size: 4841482 },
    { name: "Memories", file: "Electronic/Memories.mp3", genre: "electronic", size: 3256998 },
    { name: "Rizz", file: "Electronic/Rizz.mp3", genre: "electronic", size: 3187874 },
    { name: "Sueños", file: "Electronic/Sueños.mp3", genre: "electronic", size: 4186767 },

    // Rock (1 beat)
    { name: "Break You", file: "Rock/Break You.mp3", genre: "rock", size: 4241479 }
];

// Global variables
let currentMode = 'beats'; // 'beats' or 'ideas'
let currentData = beats;
let currentBeatIndex = 0;
let isPlaying = false;
let filteredBeats = [...beats];
let audioElement = document.getElementById('audioElement');

// DOM elements
const modeSwitch = document.getElementById('modeSwitch');
const genreHeader = document.getElementById('genreHeader');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const currentTrack = document.getElementById('currentTrack');
const currentTime = document.getElementById('currentTime');
const duration = document.getElementById('duration');
const progress = document.getElementById('progress');
const progressBar = document.querySelector('.progress-bar');
const volumeSlider = document.getElementById('volumeSlider');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
// const itemCount = document.getElementById('itemCount'); // Removed
const beatsContainer = document.getElementById('beatsContainer');
const loading = document.getElementById('loading');
const searchToggle = document.getElementById('searchToggle');
const searchOverlay = document.getElementById('searchOverlay');
const searchClose = document.getElementById('searchClose');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    renderBeats();
    setupEventListeners();
    loading.style.display = 'none';
});

// Render beats list
function renderBeats() {
    beatsContainer.innerHTML = '';
    
    filteredBeats.forEach((beat, index) => {
        const beatRow = document.createElement('div');
        beatRow.className = 'beat-row';
        const beatIndex = currentData.indexOf(beat);
        beatRow.innerHTML = `
            <div class="beat-title">${beat.name}</div>
            <div class="beat-genre ${beat.genre}">${beat.genre}</div>
            <div class="beat-duration" data-file="${beat.file}">Loading...</div>
            <div class="beat-size">${formatFileSize(beat.size)}</div>
            <button class="beat-play-btn" onclick="playBeat(${beatIndex})">
                <i class="fas fa-play"></i>
            </button>
        `;
        beatsContainer.appendChild(beatRow);
        
        // Load duration asynchronously
        loadBeatDuration(beat.file, beatRow.querySelector('.beat-duration'));
    });
}

// Load beat duration
function loadBeatDuration(file, element) {
    const folderPath = currentMode === 'beats' ? 'MP3' : 'Ideas';
    const audio = new Audio(`${folderPath}/${file}`);
    audio.addEventListener('loadedmetadata', function() {
        element.textContent = formatTime(audio.duration);
    });
    audio.addEventListener('error', function() {
        element.textContent = '0:00';
    });
}

// Play specific beat
function playBeat(index) {
    currentBeatIndex = index;
    const beat = currentData[currentBeatIndex];
    const folderPath = currentMode === 'beats' ? 'MP3' : 'Ideas';
    
    audioElement.src = `${folderPath}/${beat.file}`;
    audioElement.load();
    
    currentTrack.textContent = beat.name;
    updatePlayingState();
    
    audioElement.play().then(() => {
        isPlaying = true;
        updatePlayButton();
        updateBeatCards();
    }).catch(error => {
        console.error('Error playing audio:', error);
        // Show user-friendly error message
        currentTrack.textContent = 'Error loading audio file';
        isPlaying = false;
        updatePlayButton();
    });
}

// Setup event listeners
function setupEventListeners() {
    // Mode switch
    if (modeSwitch) {
        modeSwitch.addEventListener('change', toggleMode);
    }
    
    // Player controls
    playBtn.addEventListener('click', togglePlay);
    prevBtn.addEventListener('click', previousBeat);
    nextBtn.addEventListener('click', nextBeat);
    
    // Audio events
    audioElement.addEventListener('timeupdate', updateProgress);
    audioElement.addEventListener('loadedmetadata', updateDuration);
    audioElement.addEventListener('ended', nextBeat);
    
    // Progress bar
    progressBar.addEventListener('click', seekAudio);
    
    // Volume control
    volumeSlider.addEventListener('input', updateVolume);
    audioElement.volume = volumeSlider.value / 100;
    
    // Search functionality
    searchToggle.addEventListener('click', openSearch);
    searchClose.addEventListener('click', closeSearch);
    searchInput.addEventListener('input', filterBeats);
    
    // Close search on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && searchOverlay.classList.contains('active')) {
            closeSearch();
        }
    });
    
    // Close search when clicking outside
    searchOverlay.addEventListener('click', function(e) {
        if (e.target === searchOverlay) {
            closeSearch();
        }
    });
    
    // Filter
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterBeats);
    }
}

// Toggle play/pause
function togglePlay() {
    if (audioElement.src) {
        if (isPlaying) {
            audioElement.pause();
            isPlaying = false;
        } else {
            audioElement.play();
            isPlaying = true;
        }
        updatePlayButton();
    } else if (currentData.length > 0) {
        playBeat(0);
    }
}

// Previous beat
function previousBeat() {
    currentBeatIndex = currentBeatIndex > 0 ? currentBeatIndex - 1 : currentData.length - 1;
    playBeat(currentBeatIndex);
}

// Next beat
function nextBeat() {
    currentBeatIndex = currentBeatIndex < currentData.length - 1 ? currentBeatIndex + 1 : 0;
    playBeat(currentBeatIndex);
}

// Update play button icon
function updatePlayButton() {
    const icon = playBtn.querySelector('i');
    icon.className = isPlaying ? 'fas fa-pause' : 'fas fa-play';
}

// Update progress bar
function updateProgress() {
    if (audioElement.duration) {
        const progressPercent = (audioElement.currentTime / audioElement.duration) * 100;
        progress.style.width = progressPercent + '%';
        currentTime.textContent = formatTime(audioElement.currentTime);
    }
}

// Update duration display
function updateDuration() {
    duration.textContent = formatTime(audioElement.duration);
}

// Seek audio
function seekAudio(e) {
    if (audioElement.duration) {
        const rect = progressBar.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;
        const clickPercent = clickX / width;
        audioElement.currentTime = clickPercent * audioElement.duration;
    }
}

// Update volume
function updateVolume() {
    audioElement.volume = volumeSlider.value / 100;
}

// Filter beats
function filterBeats() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter ? categoryFilter.value : '';
    
    filteredBeats = currentData.filter(beat => {
        const matchesSearch = beat.name.toLowerCase().includes(searchTerm);
        const matchesCategory = !selectedCategory || beat.genre === selectedCategory;
        return matchesSearch && matchesCategory;
    });
    
    renderBeats();
}

// Toggle between beats and ideas mode
function toggleMode() {
    currentMode = modeSwitch.checked ? 'ideas' : 'beats';
    currentData = currentMode === 'beats' ? beats : ideasData;
    
    // Update header text
    updateHeaderText();
    
    // Update filter options
    updateCategoryFilter();
    
    // Reset filters and render
    searchInput.value = '';
    if (categoryFilter) categoryFilter.value = '';
    filteredBeats = [...currentData];
    
    renderBeats();
    
    // Stop current playback
    if (isPlaying) {
        audioElement.pause();
        isPlaying = false;
        updatePlayButton();
    }
    
    currentTrack.textContent = currentMode === 'beats' ? 'Select a beat to play' : 'Select an idea to play';
}

// Update header text based on mode
function updateHeaderText() {
    if (genreHeader) {
        genreHeader.textContent = currentMode === 'beats' ? 'Genre' : 'Month';
    }
}

// Open search overlay
function openSearch() {
    searchOverlay.classList.add('active');
    setTimeout(() => {
        searchInput.focus();
    }, 300);
}

// Close search overlay
function closeSearch() {
    searchOverlay.classList.remove('active');
    // Don't clear search input to maintain search state
}

// Update category filter options
function updateCategoryFilter() {
    if (!categoryFilter) return;
    
    if (currentMode === 'beats') {
        categoryFilter.innerHTML = `
            <option value="">All Genres</option>
            <option value="boom-bap">Boom Bap</option>
            <option value="trap">Trap</option>
            <option value="drill">Drill</option>
            <option value="reggaeton">Reggaeton</option>
            <option value="rage">Rage</option>
            <option value="electronic">Electronic</option>
            <option value="rock">Rock</option>
        `;
    } else {
        categoryFilter.innerHTML = `
            <option value="">All Months</option>
            <option value="agosto">Agosto</option>
        `;
    }
}

// Update beat count (removed - no longer needed)

// Update playing state visual indicators
function updatePlayingState() {
    updateBeatCards();
}

// Update beat rows visual state
function updateBeatCards() {
    const beatRows = document.querySelectorAll('.beat-row');
    beatRows.forEach((row, index) => {
        const beatIndex = currentData.indexOf(filteredBeats[index]);
        if (beatIndex === currentBeatIndex && isPlaying) {
            row.classList.add('playing');
            const playBtn = row.querySelector('.beat-play-btn i');
            playBtn.className = 'fas fa-pause';
        } else {
            row.classList.remove('playing');
            const playBtn = row.querySelector('.beat-play-btn i');
            playBtn.className = 'fas fa-play';
        }
    });
}

// Format time in MM:SS
function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Format file size
function formatFileSize(bytes) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    switch(e.code) {
        case 'Space':
            e.preventDefault();
            togglePlay();
            break;
        case 'ArrowLeft':
            e.preventDefault();
            previousBeat();
            break;
        case 'ArrowRight':
            e.preventDefault();
            nextBeat();
            break;
    }
});

// Update audio element events
audioElement.addEventListener('play', () => {
    isPlaying = true;
    updatePlayButton();
    updateBeatCards();
});

audioElement.addEventListener('pause', () => {
    isPlaying = false;
    updatePlayButton();
    updateBeatCards();
});
