// === DOM Element Selections ===
const folderUpload = document.getElementById("folder-upload");
const fileUpload = document.getElementById("file-upload");
const video = document.querySelector("video");
const videoContainer = document.querySelector(".video-container");
const track = video.querySelector("track");
// Other player controls are selected implicitly or not shown for brevity
document.querySelector('.controls').innerHTML = `<button class="play-pause-btn"><svg class="play-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" /></svg><svg class="pause-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M14,19H18V5H14M6,19H10V5H6V19Z" /></svg></button><div class="volume-container"><button class="mute-btn"><svg class="volume-high-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" /></svg><svg class="volume-low-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M5,9V15H9L14,20V4L9,9M18.5,12C18.5,10.23 17.5,8.71 16,7.97V16C17.5,15.29 18.5,13.76 18.5,12Z" /></svg><svg class="volume-muted-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z" /></svg></button><input class="volume-slider" type="range" min="0" max="1" step="any" value="1" /></div><div class="duration-container"><div class="current-time">0:00</div> / <div class="total-time"></div></div><button class="captions-btn"><svg viewBox="0 0 24 24"><path fill="currentColor" d="M18,11H16.5V10.5H14.5V13.5H16.5V13H18V14A1,1 0 0,1 17,15H14A1,1 0 0,1 13,14V10A1,1 0 0,1 14,9H17A1,1 0 0,1 18,10V11M11,11H9.5V10.5H7.5V13.5H9.5V13H11V14A1,1 0 0,1 10,15H7A1,1 0 0,1 6,14V10A1,1 0 0,1 7,9H10A1,1 0 0,1 11,10V11M19,4H5C3.89,4 3,4.89 3,6V18A2,2 0 0,0 5,20H19A2,2 0 0,0 21,18V6C21,4.89 20.11,4 19,4Z" /></svg></button><button class="speed-btn wide-btn">1x</button><button class="mini-player-btn"><svg viewBox="0 0 24 24"><path fill="currentColor" d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zm-10-7h9v6h-9z" /></svg></button><button class="theater-btn"><svg class="tall" viewBox="0 0 24 24"><path fill="currentColor" d="M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z" /></svg><svg class="wide" viewBox="0 0 24 24"><path fill="currentColor" d="M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H5V9h14v6z" /></svg></button><button class="full-screen-btn"><svg class="open" viewBox="0 0 24 24"><path fill="currentColor" d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" /></svg><svg class="close" viewBox="0 0 24 24"><path fill="currentColor" d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" /></svg></button>`;

const svgWave = `<svg class="wave" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect class="wave1" width="3.53982" height="16.4602" rx="1.76991" fill="#0B7EEA"/><rect class="wave2" x="5.30957" width="3.53982" height="11.73451" rx="1.76991" fill="#3BA0FF"/><rect class="wave3" x="10.6191" width="3.53982" height="20" rx="1.76991" fill="#0084FF"/><rect class="wave4" x="15.9297" width="3.53982" height="2.73451" rx="1.76991" fill="#097DE9"/></svg>`;

const LOCAL_STORAGE_KEY = 'tutoPlayerPlaylist';
const EXPIRATION_TIME_MS = 7 * 24 * 60 * 60 * 1000;
let subtitleFiles = new Map(); // Map: filename (normalized) -> blob URL or File object
let savedSubtitlePaths = []; // List of subtitle paths (relative)
let currentFlattenedPlaylist = [];
let currentPlaylistStructure = null;

let courses = [];
let currentCourseIndex = -1;

function getBaseName(filename) {
    return filename.split('.').slice(0, -1).join('.').trim().toLowerCase();
}

function levenshteinDistance(a, b) {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;

    const matrix = [];

    // increment along the first column of each row
    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }

    // increment each column in the first row
    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    // Fill in the rest of the matrix
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) == a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1, // substitution
                    Math.min(
                        matrix[i][j - 1] + 1, // insertion
                        matrix[i - 1][j] + 1 // deletion
                    )
                );
            }
        }
    }

    return matrix[b.length][a.length];
}

function calculateSimilarity(a, b) {
    const maxLength = Math.max(a.length, b.length);
    if (maxLength === 0) return 1.0;
    const distance = levenshteinDistance(a, b);
    return 1.0 - distance / maxLength;
}

function findBestSubtitleMatch(videoName) {
    const videoBase = getBaseName(videoName);
    let bestMatch = null;
    let maxSimilarity = 0;

    for (const [subName, subFile] of subtitleFiles.entries()) {
        const subBase = getBaseName(subName);
        const similarity = calculateSimilarity(videoBase, subBase);

        if (similarity > maxSimilarity) {
            maxSimilarity = similarity;
            bestMatch = subFile;
        }
    }

    // If no match in memory, check saved paths (Persistence)
    if (!bestMatch && savedSubtitlePaths && savedSubtitlePaths.length > 0) {
        let maxPathSimilarity = 0;
        for (const subPath of savedSubtitlePaths) {
            const subName = subPath.split('/').pop(); // Extract filename from path
            const subBase = getBaseName(subName);
            const similarity = calculateSimilarity(videoBase, subBase);

            if (similarity > maxPathSimilarity) {
                maxPathSimilarity = similarity;
                bestMatch = subPath; // Return the String path
            }
        }
        if (maxPathSimilarity < 0.7) return null;
    }

    // Threshold: 0.7 (70% match)
    return maxSimilarity >= 0.7 || (typeof bestMatch === 'string') ? bestMatch : null;
}
function savePlaylistToLocalStorage() {
    const item = {
        data: {
            courses: courses,
            currentCourseIndex: currentCourseIndex
        },
        expiry: new Date().getTime() + EXPIRATION_TIME_MS
    };
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(item));
}

function loadPlaylistFromLocalStorage() {
    const itemStr = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!itemStr) return null;
    const item = JSON.parse(itemStr);
    if (new Date().getTime() > item.expiry) {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        return null;
    }
    return item.data;
}

function flattenPlaylist(structure) {
    const flat = [];
    // 1. Root files
    if (structure.root && structure.root.length > 0) {
        structure.root.forEach((item, originalIndex) => {
            flat.push({ ...item, type: 'root', originalIndex });
        });
    }
    // 2. Sections
    if (structure.sections && structure.sections.length > 0) {
        structure.sections.forEach(section => {
            section.videos.forEach((item, originalIndex) => {
                flat.push({ ...item, type: 'section', sectionTitle: section.title, originalIndex });
            });
        });
    }
    return flat;
}

function buildAndDisplayPlaylist(folder, structure) {
    document.body.classList.add("playlist-loaded");
    document.querySelector("h3.folder-name").textContent = `${folder}`;
    document.title = `TutoPlayer - ${folder}`;

    const tutorialsListContainer = document.querySelector(".tutorials"); // It's an OL, but we'll append Details/UL to it or replace it?
    // Replacing OL with a DIV container logic would be cleaner but let's stick to appending to the existing container
    // but we need to clear it first.
    tutorialsListContainer.innerHTML = "";

    // We need to rebuild the global flattened playlist
    currentPlaylistStructure = structure;
    currentFlattenedPlaylist = flattenPlaylist(structure);

    let globalIndex = 0;

    // Helper to create a list item
    const createListItem = (item, index) => {
        const listItem = document.createElement("li");
        listItem.className = "tutos";
        listItem.dataset.index = index; // Store global index
        listItem.innerHTML = svgWave + `<span>${item.name}</span>`;
        listItem.onclick = () => {
            if (currentCourseIndex !== -1 && courses[currentCourseIndex]) {
                courses[currentCourseIndex].currentTime = 0;
            }
            loadVideo(index, true, false);
        };
        return listItem;
    };

    // 1. Render Root Files (if any)
    if (structure.root && structure.root.length > 0) {
        // Maybe wrap root files in a "General" section if there are also sub-sections?
        // For now, list them at the top.
        structure.root.forEach(item => {
            tutorialsListContainer.appendChild(createListItem(item, globalIndex++));
        });
    }

    // 2. Render Sections
    if (structure.sections && structure.sections.length > 0) {
        structure.sections.forEach(section => {
            const details = document.createElement('details');
            details.className = 'playlist-section';

            const summary = document.createElement('summary');
            summary.className = 'playlist-section-header';
            summary.textContent = section.title;
            details.appendChild(summary);

            const ul = document.createElement('ul');
            section.videos.forEach(video => {
                ul.appendChild(createListItem(video, globalIndex++));
            });
            details.appendChild(ul);
            tutorialsListContainer.appendChild(details);
        });
    }
}

function loadVideo(index, autoPlay = false, resume = false) {
    if (index < 0 || index >= currentFlattenedPlaylist.length) return;

    const item = currentFlattenedPlaylist[index];

    // Update UI active state
    // Find the list item with data-index = index
    const allListItems = document.querySelectorAll("li.tutos");
    allListItems.forEach(li => {
        li.classList.remove("active");
        const wave = li.querySelector(".wave");
        if (wave) wave.classList.remove("active");
    });

    const activeLi = document.querySelector(`li.tutos[data-index="${index}"]`);
    if (activeLi) {
        activeLi.classList.add("done", "active");
        const wave = activeLi.querySelector(".wave");
        if (wave) wave.classList.add("active");

        // Auto-expand parent details if needed
        const parentDetails = activeLi.closest('details');
        if (parentDetails && !parentDetails.open) {
            parentDetails.open = true;
        }

        // Scroll into view
        activeLi.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Auto-scroll to top in theater mode when a video is selected
        if (document.querySelector(".content").classList.contains("content-theater")) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }

    if (currentCourseIndex !== -1 && courses[currentCourseIndex]) {
        courses[currentCourseIndex].lastPlayedIndex = index;
    }
    savePlaylistToLocalStorage(); // Save all courses state

    const folderName = (currentCourseIndex !== -1 && courses[currentCourseIndex]) ? courses[currentCourseIndex].folderName : ".";
    const selectedTitle = item.name;

    // Update Folder Name Display (Use Section Title if available)
    const folderNameDisplay = document.querySelector("h3.folder-name");
    if (item.type === 'section') {
        folderNameDisplay.textContent = item.sectionTitle;
    } else {
        folderNameDisplay.textContent = folderName;
    }

    // Construct URL using path
    // Path is relative to the dropped folder.
    // item.path is "subfolder/video.mp4" or "video.mp4"
    // We need to split and encode each component
    const encodedPath = item.path.split('/').map(part => encodeURIComponent(part)).join('/');
    const encodedRootFolder = folderName.split('/').map(part => encodeURIComponent(part)).join('/');

    video.src = `${encodedRootFolder}/${encodedPath}`;

    // --- Subtitle Loading ---
    const subtitleMatch = findBestSubtitleMatch(item.name); // Using filename for matching logic

    if (subtitleMatch) {
        if (track.src) URL.revokeObjectURL(track.src);

        if (typeof subtitleMatch === 'string') {
            // It's a path
            const encodedSubPath = subtitleMatch.split('/').map(part => encodeURIComponent(part)).join('/');
            track.src = `${encodedRootFolder}/${encodedSubPath}`;
        } else {
            // It's a File/Blob
            track.src = URL.createObjectURL(subtitleMatch);
        }

        // Wait for the track to load to access textTracks
        track.onload = () => {
            const textTrack = video.textTracks[0];
            if (textTrack) {
                const enabled = localStorage.getItem('subtitlesEnabled') === 'true';
                textTrack.mode = enabled ? 'showing' : 'hidden';
                document.querySelector('.captions-btn').classList.toggle('active', enabled);

                // Force bottom alignment to prevent clipping when resizing
                if (textTrack.cues) {
                    Array.from(textTrack.cues).forEach(cue => {
                        cue.snapToLines = false;
                        cue.line = 98; // Position at 90% of video height // position the subtitle at the bottom of the video
                        cue.lineAlign = 'end'; // Anchor text bottom to that line
                    });
                }
            }
        };
    } else {
        track.removeAttribute('src'); // Clear src
        document.querySelector('.captions-btn').classList.remove('active');
        if (video.textTracks[0]) video.textTracks[0].mode = 'hidden';
    }

    if (resume && currentCourseIndex !== -1 && courses[currentCourseIndex].currentTime) {
        const onLoaded = () => {
            video.currentTime = courses[currentCourseIndex].currentTime;
            video.removeEventListener('loadedmetadata', onLoaded);
            if (autoPlay) video.play();
        };
        video.addEventListener('loadedmetadata', onLoaded);
    } else {
        if (autoPlay) video.play();
    }
    document.querySelector("h1.title").textContent = item.name.split('.').slice(0, -1).join('.');
}

// === Drag and Drop Functionality ===
const dropZone = document.body;
const VALID_VIDEO_EXTENSIONS = ['mp4', 'webm', 'mov', 'mkv', 'ogg', 'avi'];
const VALID_SUBTITLE_EXTENSIONS = ['vtt'];

dropZone.addEventListener('dragover', (e) => { e.preventDefault(); dropZone.classList.add('dragging'); });
dropZone.addEventListener('dragleave', (e) => { e.preventDefault(); dropZone.classList.remove('dragging'); });

dropZone.addEventListener('drop', async (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragging');

    const items = e.dataTransfer.items;
    if (!items || items.length === 0) return;

    const firstItemEntry = items[0].webkitGetAsEntry();

    if (firstItemEntry && firstItemEntry.isDirectory) {
        try {
            const { folderName, structure, subtitlePaths: droppedSubtitles, hasVideos } = await processDroppedFolder(firstItemEntry);

            // Store subtitles (paths)
            savedSubtitlePaths = droppedSubtitles;

            if (hasVideos) {
                addCourse(folderName, structure, droppedSubtitles);
            } else {
                alert('No valid video files found in the dropped folder.');
            }
        } catch (error) {
            console.error("Error processing dropped folder:", error);
            alert("Could not read the dropped folder.");
        }
    } else {
        const droppedFiles = Array.from(e.dataTransfer.files);
        handleFilesList(droppedFiles);
    }
});

/**
 * Reads all entries from a DirectoryReader (handles batching).
 */
async function readAllDirectoryEntries(directoryReader) {
    const entries = [];
    let readEntries = await new Promise((resolve, reject) => directoryReader.readEntries(resolve, reject));
    while (readEntries.length > 0) {
        entries.push(...readEntries);
        readEntries = await new Promise((resolve, reject) => directoryReader.readEntries(resolve, reject));
    }
    return entries;
}

/**
 * Recursively scans a directory/file entry.
 * Returns a flat list of items relative to the start entry.
 */
async function scanEntry(entry, basePath = '') {
    if (entry.isFile) {
        const file = await new Promise((resolve, reject) => entry.file(resolve, reject));
        return [{ entry, file, path: basePath + entry.name }];
    } else if (entry.isDirectory) {
        const dirReader = entry.createReader();
        const entries = await readAllDirectoryEntries(dirReader);
        const results = [];
        for (const child of entries) {
            // Recursive call: append current folder name to path
            const children = await scanEntry(child, basePath + entry.name + '/');
            results.push(...children);
        }
        return results;
    }
    return [];
}

async function processDroppedFolder(dirEntry) {
    const dirReader = dirEntry.createReader();
    const topLevelEntries = await readAllDirectoryEntries(dirReader);

    const structure = {
        root: [], // Files directly in the root folder
        sections: [] // Subfolders
    };

    const collectedSubtitlePaths = [];

    for (const entry of topLevelEntries) {
        if (entry.isFile) {
            // Top-level file
            const file = await new Promise((resolve, reject) => entry.file(resolve, reject));
            const extension = file.name.split('.').pop().toLowerCase();

            if (VALID_VIDEO_EXTENSIONS.includes(extension)) {
                structure.root.push({ name: file.name, path: file.name, file: file }); // path is just name for root
            } else if (VALID_SUBTITLE_EXTENSIONS.includes(extension)) {
                subtitleFiles.set(file.name, file);
                collectedSubtitlePaths.push(file.name);
            }

        } else if (entry.isDirectory) {
            // It's a section (subfolder)
            // We scan this subfolder deeply.
            // Note: scanEntry returns a flat list of all descendents.
            // For a section "Chapter 1", we want all matching videos inside it.
            // The 'path' returned by scanEntry will be relative to "Chapter 1/".
            const sectionVideos = [];
            const sectionItems = await scanEntry(entry, ''); // Start with empty base path relative to this folder? 
            // Actually, we want the path relative to the ROOT dropped folder.
            // So scanEntry called here should pass 'DirectoryName/' as base?
            // No, let's just use scanEntry on the dirEntry itself, that handles recursion.
            // But I want to group them under this Top-Level Directory Name.

            // Let's manually recurse the children of this top-level directory:
            const subDirReader = entry.createReader();
            const subEntries = await readAllDirectoryEntries(subDirReader);

            for (const subEntry of subEntries) {
                const descendants = await scanEntry(subEntry, entry.name + '/');
                descendants.forEach(item => {
                    const extension = item.file.name.split('.').pop().toLowerCase();
                    if (VALID_VIDEO_EXTENSIONS.includes(extension)) {
                        sectionVideos.push({ name: item.name || item.file.name, path: item.path, file: item.file });
                    } else if (VALID_SUBTITLE_EXTENSIONS.includes(extension)) {
                        subtitleFiles.set(item.file.name, item.file);
                        collectedSubtitlePaths.push(item.path);
                    }
                });
            }

            if (sectionVideos.length > 0) {
                // Sort videos in this section
                sectionVideos.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' }));
                structure.sections.push({
                    title: entry.name,
                    videos: sectionVideos
                });
            }
        }
    }

    // Sort root videos
    structure.root.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' }));
    // Sort sections by title
    structure.sections.sort((a, b) => a.title.localeCompare(b.title, undefined, { numeric: true, sensitivity: 'base' }));

    // Gather all video files for simple "valid video" check
    const allVideoFiles = [...structure.root, ...structure.sections.flatMap(s => s.videos)];

    return { folderName: dirEntry.name, structure, subtitlePaths: collectedSubtitlePaths, hasVideos: allVideoFiles.length > 0 };
}

function addCourse(folderName, structure, subtitlePaths = []) {
    const existingIndex = courses.findIndex(c => c.folderName === folderName);
    if (existingIndex !== -1) {
        courses[existingIndex] = {
            ...courses[existingIndex],
            structure,
            subtitlePaths
        };
        currentCourseIndex = existingIndex;
    } else {
        courses.push({
            folderName,
            structure,
            subtitlePaths,
            lastPlayedIndex: 0
        });
        currentCourseIndex = courses.length - 1;
    }

    renderTabs();
    switchCourse(currentCourseIndex);
}

function switchCourse(index) {
    if (index < 0 || index >= courses.length) return;
    currentCourseIndex = index;
    const course = courses[index];

    savedSubtitlePaths = course.subtitlePaths || [];

    renderTabs();
    buildAndDisplayPlaylist(course.folderName, course.structure);
    loadVideo(course.lastPlayedIndex || 0, false, true);
}

function renderTabs() {
    const tabsContainer = document.querySelector(".tabs-container");
    if (!tabsContainer) return;
    tabsContainer.innerHTML = "";

    if (courses.length <= 1) {
        tabsContainer.style.display = 'none';
        return;
    }

    tabsContainer.style.display = 'flex';
    const numerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

    courses.forEach((course, index) => {
        const tab = document.createElement("button");
        tab.className = "course-tab";
        if (index === currentCourseIndex) tab.classList.add("active");

        tab.textContent = numerals[index] || (index + 1).toString();
        tab.title = course.folderName;

        tab.onclick = () => {
            switchCourse(index);
        };

        tabsContainer.appendChild(tab);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const savedPlaylist = loadPlaylistFromLocalStorage();
    if (savedPlaylist) {
        if (savedPlaylist.courses) {
            courses = savedPlaylist.courses;
            currentCourseIndex = savedPlaylist.currentCourseIndex;
            if (courses.length > 0) {
                switchCourse(currentCourseIndex >= 0 ? currentCourseIndex : 0);
            }
        } else {
            savedSubtitlePaths = savedPlaylist.subtitlePaths || [];

            let structure;
            if (typeof savedPlaylist.videos === 'string') {
                const names = savedPlaylist.videos.split('|').map(s => s.trim()).filter(s => s.length);
                structure = {
                    root: names.map(name => ({ name, path: name, file: null })),
                    sections: []
                };
            } else {
                structure = savedPlaylist.videos;
            }

            addCourse(savedPlaylist.folder, structure, savedSubtitlePaths);
            if (savedPlaylist.lastPlayedIndex !== undefined) {
                courses[0].lastPlayedIndex = savedPlaylist.lastPlayedIndex;
                switchCourse(0);
            }
        }
    }

    // Apply saved subtitle preferences
    const savedFontSize = localStorage.getItem('subtitleFontSize');
    if (savedFontSize) {
        document.documentElement.style.setProperty('--subtitle-font-size', `${savedFontSize}rem`);
    }

    const savedOpacity = localStorage.getItem('subtitleBgOpacity');
    if (savedOpacity) {
        document.documentElement.style.setProperty('--subtitle-bg-opacity', savedOpacity);
    }
});

folderUpload.addEventListener('change', async (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    const structure = { root: [], sections: [] };
    const droppedSubtitles = [];

    const folderName = files[0].webkitRelativePath.split('/')[0] || 'Uploaded Folder';

    files.forEach(file => {
        const extension = file.name.split('.').pop().toLowerCase();
        const parts = file.webkitRelativePath.split('/');

        if (VALID_SUBTITLE_EXTENSIONS.includes(extension)) {
            subtitleFiles.set(file.name, file);
            droppedSubtitles.push(file.webkitRelativePath.substring(folderName.length + 1));
        } else if (VALID_VIDEO_EXTENSIONS.includes(extension)) {
            const relPath = file.webkitRelativePath.substring(folderName.length + 1);
            if (parts.length === 2) {
                structure.root.push({ name: file.name, path: relPath, file: file });
            } else if (parts.length > 2) {
                const sectionTitle = parts[1];
                let section = structure.sections.find(s => s.title === sectionTitle);
                if (!section) {
                    section = { title: sectionTitle, videos: [] };
                    structure.sections.push(section);
                }
                section.videos.push({ name: file.name, path: relPath, file: file });
            }
        }
    });

    structure.root.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' }));
    structure.sections.forEach(s => s.videos.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' })));
    structure.sections.sort((a, b) => a.title.localeCompare(b.title, undefined, { numeric: true, sensitivity: 'base' }));

    addCourse(folderName, structure, droppedSubtitles);
});

fileUpload.addEventListener('change', (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;
    handleFilesList(files);
});

function handleFilesList(droppedFiles) {
    const droppedSubtitles = [];
    droppedFiles.forEach(file => {
        const extension = file.name.split('.').pop().toLowerCase();
        if (VALID_SUBTITLE_EXTENSIONS.includes(extension)) {
            subtitleFiles.set(file.name, file);
            droppedSubtitles.push(file.name);
        }
    });

    const videoFiles = droppedFiles.filter(file => {
        const extension = file.name.split('.').pop().toLowerCase();
        return VALID_VIDEO_EXTENSIONS.includes(extension);
    });

    if (videoFiles.length > 0) {
        videoFiles.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' }));

        if (currentCourseIndex !== -1) {
            const course = courses[currentCourseIndex];
            const newVideos = videoFiles.map(f => ({ name: f.name, path: f.name, file: f }));
            course.structure.root.push(...newVideos);
            course.structure.root.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' }));
            if (droppedSubtitles.length > 0) {
                course.subtitlePaths = (course.subtitlePaths || []).concat(droppedSubtitles);
            }
            buildAndDisplayPlaylist(course.folderName, course.structure);
            savePlaylistToLocalStorage();
        } else {
            const structure = {
                root: videoFiles.map(f => ({ name: f.name, path: f.name, file: f })),
                sections: []
            };
            addCourse('Uploaded Files', structure, droppedSubtitles);
        }
    } else {
        alert('No valid video files found.');
    }
}

// === Keyboard Shortcuts & Player Controls ===
const playerControls = {
    playPauseBtn: document.querySelector(".play-pause-btn"),
    theaterBtn: document.querySelector(".theater-btn"),
    fullScreenBtn: document.querySelector(".full-screen-btn"),
    miniPlayerBtn: document.querySelector(".mini-player-btn"),
    muteBtn: document.querySelector(".mute-btn"),
    speedBtn: document.querySelector(".speed-btn"),
    volumeSlider: document.querySelector(".volume-slider"),
    timelineContainer: document.querySelector(".timeline-container"),
    currentTimeElem: document.querySelector(".current-time"),
    totalTimeElem: document.querySelector(".total-time"),
    captionsBtn: document.querySelector(".captions-btn"),
};

playerControls.captionsBtn.onclick = toggleSubtitles;

// -- 1. Scroll: Resize Font --
playerControls.captionsBtn.addEventListener('wheel', (e) => {
    e.preventDefault();
    const direction = e.deltaY < 0 ? 1 : -1;
    let currentSize = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--subtitle-font-size')) || 1.5;
    let newSize = currentSize + (direction * 0.1);

    // Clamp size: 0.8rem to 3rem
    newSize = Math.max(0.8, Math.min(3, newSize));

    document.documentElement.style.setProperty('--subtitle-font-size', `${newSize}rem`);
    localStorage.setItem('subtitleFontSize', newSize);
});

// -- 2. Right Click: Toggle Opacity --
playerControls.captionsBtn.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    let currentOpacity = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--subtitle-bg-opacity'));
    let newOpacity = currentOpacity === 1 ? 0.25 : 1;

    document.documentElement.style.setProperty('--subtitle-bg-opacity', newOpacity);
    localStorage.setItem('subtitleBgOpacity', newOpacity);
});

function toggleSubtitles() {
    const textTrack = video.textTracks[0];
    if (!textTrack) return;

    const isShowing = textTrack.mode === 'showing';
    textTrack.mode = isShowing ? 'hidden' : 'showing';
    playerControls.captionsBtn.classList.toggle('active', !isShowing);
    localStorage.setItem('subtitlesEnabled', !isShowing);
}

const isFirefox = navigator.userAgent.toLowerCase().includes('firefox');
if (isFirefox) {
    playerControls.miniPlayerBtn.style.display = 'none';
}

document.addEventListener("keydown", (e) => {
    const tagName = document.activeElement.tagName.toLowerCase();
    if (tagName === "input") return;
    if (e.key === " ") e.preventDefault();
    showControls();
    switch (e.key.toLowerCase()) {
        case " ":
            if (tagName === "button") return;
        case "k":
            togglePlay();
            break;
        case "f":
            toggleFullScreenMode();
            break;
        case "t":
            toggleTheaterMode();
            break;
        case "i":
            if (!isFirefox) toggleMiniPlayerMode();
            break;
        case "m":
            toggleMute();
            break;
        case "c":
            toggleSubtitles();
            break;
        case "arrowleft":
        case "j":
            skip(-5);
            break;
        case "arrowright":
        case "l":
            skip(5);
            break;
        case "h":
            skip(-10);
            break;
        case ";":
            skip(10);
            break;
    }
});

let isScrubbing = false, wasPaused;
playerControls.timelineContainer.addEventListener("mousemove", handleTimelineUpdate);
playerControls.timelineContainer.addEventListener("mousedown", toggleScrubbing);
document.addEventListener("mouseup", (e) => { if (isScrubbing) toggleScrubbing(e); });
document.addEventListener("mousemove", (e) => { if (isScrubbing) handleTimelineUpdate(e); });

function toggleScrubbing(e) {
    const rect = playerControls.timelineContainer.getBoundingClientRect();
    const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width;
    isScrubbing = (e.buttons & 1) === 1;
    videoContainer.classList.toggle("scrubbing", isScrubbing);
    if (isScrubbing) {
        wasPaused = video.paused;
        video.pause();
    } else {
        video.currentTime = percent * video.duration;
        if (!wasPaused) video.play();
    }
    handleTimelineUpdate(e);
}

function handleTimelineUpdate(e) {
    const rect = playerControls.timelineContainer.getBoundingClientRect();
    const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width;
    playerControls.timelineContainer.style.setProperty("--preview-position", percent);
    if (isScrubbing) {
        e.preventDefault();
        playerControls.timelineContainer.style.setProperty("--progress-position", percent);
    }
}

playerControls.speedBtn.addEventListener("wheel", (event) => {
    event.preventDefault();
    const direction = event.deltaY < 0 ? 1 : -1;
    let newPlaybackRate = Number((video.playbackRate + direction * 0.1).toFixed(2));
    video.playbackRate = Math.max(0.5, Math.min(3, newPlaybackRate));
    playerControls.speedBtn.textContent = `${video.playbackRate}x`;
});

playerControls.speedBtn.onclick = () => { video.playbackRate = 1; playerControls.speedBtn.textContent = `1x`; };
video.addEventListener("loadeddata", () => { playerControls.totalTimeElem.textContent = formatDuration(video.duration); });
video.addEventListener("timeupdate", () => {
    playerControls.currentTimeElem.textContent = formatDuration(video.currentTime);
    playerControls.timelineContainer.style.setProperty("--progress-position", video.currentTime / video.duration);

    if (currentCourseIndex !== -1 && courses[currentCourseIndex]) {
        courses[currentCourseIndex].currentTime = video.currentTime;
    }
});

const leadingZeroFormatter = new Intl.NumberFormat(undefined, { minimumIntegerDigits: 2 });
function formatDuration(time) {
    const seconds = Math.floor(time % 60), minutes = Math.floor(time / 60) % 60, hours = Math.floor(time / 3600);
    if (hours === 0) return `${minutes}:${leadingZeroFormatter.format(seconds)}`;
    else return `${hours}:${leadingZeroFormatter.format(minutes)}:${leadingZeroFormatter.format(seconds)}`;
}

function skip(duration) { video.currentTime += duration; }

playerControls.muteBtn.addEventListener("click", toggleMute);

let audioCtx;
let sourceNode;
let gainNode;

playerControls.muteBtn.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    if (!audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContext();
        sourceNode = audioCtx.createMediaElementSource(video);
        gainNode = audioCtx.createGain();
        sourceNode.connect(gainNode);
        gainNode.connect(audioCtx.destination);
    }

    const isBoosted = gainNode.gain.value > 1;
    if (isBoosted) {
        gainNode.gain.value = 1;
        playerControls.volumeSlider.parentElement.classList.remove('boosted');
    } else {
        gainNode.gain.value = 3;
        playerControls.volumeSlider.parentElement.classList.add('boosted');
    }
});

window.addEventListener('beforeunload', () => {
    savePlaylistToLocalStorage();
});

playerControls.volumeSlider.addEventListener("input", (e) => {
    video.volume = e.target.value;
    video.muted = e.target.value === 0;
});

function toggleMute() { video.muted = !video.muted; }
video.addEventListener("volumechange", () => {
    playerControls.volumeSlider.value = video.volume;
    let volumeLevel;
    if (video.muted || video.volume === 0) {
        playerControls.volumeSlider.value = 0;
        volumeLevel = "muted";
    } else if (video.volume >= 0.5) {
        volumeLevel = "high";
    } else {
        volumeLevel = "low";
    }
    videoContainer.dataset.volumeLevel = volumeLevel;
});

playerControls.theaterBtn.addEventListener("click", toggleTheaterMode);
playerControls.fullScreenBtn.addEventListener("click", toggleFullScreenMode);
playerControls.miniPlayerBtn.addEventListener("click", toggleMiniPlayerMode);

function toggleTheaterMode() {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    }
    document.querySelector(".content").classList.toggle("content-theater");
    document.querySelector("main").classList.toggle("main-theater");
    document.querySelector("ol.tutorials").classList.toggle("ol-theater");
    document.querySelector(".contenet-table").classList.toggle("contentTable-theater");
    document.querySelector(".nav-bar").classList.toggle("nav-bar-theater");
}

function toggleFullScreenMode() {
    if (document.fullscreenElement == null) videoContainer.requestFullscreen();
    else document.exitFullscreen();
}

function toggleMiniPlayerMode() {
    if (videoContainer.classList.contains("mini-player")) document.exitPictureInPicture();
    else video.requestPictureInPicture();
}

document.addEventListener("fullscreenchange", () => {
    videoContainer.classList.toggle("full-screen", document.fullscreenElement);
});

video.addEventListener("enterpictureinpicture", () => {
    videoContainer.classList.add("mini-player");
});

video.addEventListener("leavepictureinpicture", () => {
    videoContainer.classList.remove("mini-player");
});

playerControls.playPauseBtn.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
function togglePlay() { video.paused ? video.play() : video.pause(); }
video.addEventListener("play", () => { videoContainer.classList.remove("paused"); });
video.addEventListener("pause", () => { videoContainer.classList.add("paused"); });

// === Inactivity Timer for Fullscreen ===
let inactivityTimeout;
const INACTIVITY_DELAY = 2000;

function showControls() {
    videoContainer.classList.remove('controls-hidden');
    clearTimeout(inactivityTimeout);
    if (document.fullscreenElement) {
        inactivityTimeout = setTimeout(() => {
            if (!video.paused) {
                videoContainer.classList.add('controls-hidden');
            }
        }, INACTIVITY_DELAY);
    }
}

videoContainer.addEventListener('mousemove', showControls);
videoContainer.addEventListener('mousedown', showControls);
video.addEventListener('play', showControls);
video.addEventListener('pause', showControls);
document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        videoContainer.classList.remove('controls-hidden');
        clearTimeout(inactivityTimeout);
    } else {
        showControls();
    }
});
