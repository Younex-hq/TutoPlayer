// === DOM Element Selections ===
const folderInput = document.getElementById("input-folder");
const videosInput = document.getElementById("input");
const loadPlaylistBtn = document.getElementById("inputButton");
const video = document.querySelector("video");
const videoContainer = document.querySelector(".video-container");
const track = video.querySelector("track");
// Other player controls are selected implicitly or not shown for brevity
document.querySelector('.controls').innerHTML = `<button class="play-pause-btn"><svg class="play-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" /></svg><svg class="pause-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M14,19H18V5H14M6,19H10V5H6V19Z" /></svg></button><div class="volume-container"><button class="mute-btn"><svg class="volume-high-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" /></svg><svg class="volume-low-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M5,9V15H9L14,20V4L9,9M18.5,12C18.5,10.23 17.5,8.71 16,7.97V16C17.5,15.29 18.5,13.76 18.5,12Z" /></svg><svg class="volume-muted-icon" viewBox="0 0 24 24"><path fill="currentColor" d="M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z" /></svg></button><input class="volume-slider" type="range" min="0" max="1" step="any" value="1" /></div><div class="duration-container"><div class="current-time">0:00</div> / <div class="total-time"></div></div><button class="captions-btn"><svg viewBox="0 0 24 24"><path fill="currentColor" d="M18,11H16.5V10.5H14.5V13.5H16.5V13H18V14A1,1 0 0,1 17,15H14A1,1 0 0,1 13,14V10A1,1 0 0,1 14,9H17A1,1 0 0,1 18,10V11M11,11H9.5V10.5H7.5V13.5H9.5V13H11V14A1,1 0 0,1 10,15H7A1,1 0 0,1 6,14V10A1,1 0 0,1 7,9H10A1,1 0 0,1 11,10V11M19,4H5C3.89,4 3,4.89 3,6V18A2,2 0 0,0 5,20H19A2,2 0 0,0 21,18V6C21,4.89 20.11,4 19,4Z" /></svg></button><button class="speed-btn wide-btn">1x</button><button class="mini-player-btn"><svg viewBox="0 0 24 24"><path fill="currentColor" d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zm-10-7h9v6h-9z" /></svg></button><button class="theater-btn"><svg class="tall" viewBox="0 0 24 24"><path fill="currentColor" d="M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z" /></svg><svg class="wide" viewBox="0 0 24 24"><path fill="currentColor" d="M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H5V9h14v6z" /></svg></button><button class="full-screen-btn"><svg class="open" viewBox="0 0 24 24"><path fill="currentColor" d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" /></svg><svg class="close" viewBox="0 0 24 24"><path fill="currentColor" d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" /></svg></button>`;

const svgWave = `<svg class="wave" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect class="wave1" width="3.53982" height="16.4602" rx="1.76991" fill="#0B7EEA"/><rect class="wave2" x="5.30957" width="3.53982" height="11.73451" rx="1.76991" fill="#3BA0FF"/><rect class="wave3" x="10.6191" width="3.53982" height="20" rx="1.76991" fill="#0084FF"/><rect class="wave4" x="15.9297" width="3.53982" height="2.73451" rx="1.76991" fill="#097DE9"/></svg>`;

const LOCAL_STORAGE_KEY = 'tutoPlayerPlaylist';
const EXPIRATION_TIME_MS = 7 * 24 * 60 * 60 * 1000;
let subtitleFiles = new Map(); // Map: filename (normalized) -> blob URL or File object

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

  // Threshold: 0.7 (70% match)
  return maxSimilarity >= 0.7 ? bestMatch : null;
}
function savePlaylistToLocalStorage(folder, videos, lastPlayedIndex) {
  const item = { data: { folder, videos, lastPlayedIndex }, expiry: new Date().getTime() + EXPIRATION_TIME_MS };
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

function buildAndDisplayPlaylist(folder, videoString) {
  document.body.classList.add("playlist-loaded");
  document.querySelector("h3.folder-name").textContent = `${folder}`;
  document.title = `TutoPlayer - ${folder}`;
  const episodes = videoString.split("|").map(ep => ep.trim()).filter(ep => ep.length > 0);
  const tutorialsList = document.querySelector(".tutorials");
  tutorialsList.innerHTML = "";
  episodes.forEach((ep, index) => {
    const listItem = document.createElement("li");
    listItem.className = "tutos";
    listItem.innerHTML = svgWave + `<span>${ep}</span>`;
    tutorialsList.appendChild(listItem);
    listItem.onclick = () => {
      loadVideo(index, true);
      savePlaylistToLocalStorage(folder, videoString, index);
    };
  });
}

function loadVideo(index, autoPlay = false) {
  const allListItems = document.querySelectorAll("li.tutos");
  if (index < 0 || index >= allListItems.length) return;
  const listItem = allListItems[index];

  allListItems.forEach(item => item.classList.remove("active"));
  document.querySelectorAll("svg.wave").forEach(wave => wave.classList.remove("active"));

  const folderName = folderInput.value || ".";
  const selectedTitle = listItem.querySelector("span").textContent;

  // URL-encode path components to handle special characters like '#'
  const encodedFolderPath = folderName.split('/').map(part => encodeURIComponent(part)).join('/');
  const encodedFileName = encodeURIComponent(selectedTitle);

  video.src = `${encodedFolderPath}/${encodedFolderPath ? '/' : ''}${encodedFileName}`;

  // --- Subtitle Loading ---
  const subtitleFile = findBestSubtitleMatch(selectedTitle);
  if (subtitleFile) {
    if (track.src) URL.revokeObjectURL(track.src);
    track.src = URL.createObjectURL(subtitleFile);

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

  if (autoPlay) video.play();
  listItem.classList.add("done", "active");
  listItem.querySelector(".wave").classList.add("active");
  document.querySelector("h1.title").textContent = selectedTitle.split('.').slice(0, -1).join('.');
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
      const { folderName, videoFiles, subtitleFiles: droppedSubtitles } = await processDroppedFolder(firstItemEntry);

      // Store subtitles
      droppedSubtitles.forEach(file => {
        subtitleFiles.set(file.name, file);
      });

      if (videoFiles.length > 0) {
        const videoNamesString = videoFiles.map(f => f.name).join(' | ');
        folderInput.value = folderName;
        videosInput.value = videoNamesString;
        startPlaylist(folderName, videoNamesString);
      } else {
        alert('No valid video files found in the dropped folder.');
      }
    } catch (error) {
      console.error("Error processing dropped folder:", error);
      alert("Could not read the dropped folder.");
    }
  } else {
    const droppedFiles = Array.from(e.dataTransfer.files);

    // Extract subtitles first
    droppedFiles.forEach(file => {
      const extension = file.name.split('.').pop().toLowerCase();
      if (VALID_SUBTITLE_EXTENSIONS.includes(extension)) {
        subtitleFiles.set(file.name, file);
      }
    });

    const videoFiles = droppedFiles.filter(file => {
      const extension = file.name.split('.').pop().toLowerCase();
      return VALID_VIDEO_EXTENSIONS.includes(extension);
    });

    if (videoFiles.length > 0) {
      videoFiles.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' }));
      const videoNamesString = videoFiles.map(f => f.name).join(' | ');
      const folderName = folderInput.value || '.';
      videosInput.value = videoNamesString;
      startPlaylist(folderName, videoNamesString);
    } else {
      alert('No valid video files were dropped.');
    }
  }
});

async function processDroppedFolder(dirEntry) {
  const dirReader = dirEntry.createReader();
  const entries = await new Promise((resolve, reject) => dirReader.readEntries(resolve, reject));
  const videoFiles = [];
  const subFiles = [];
  for (const entry of entries) {
    if (entry.isFile) {
      const file = await new Promise((resolve, reject) => entry.file(resolve, reject));
      const extension = file.name.split('.').pop().toLowerCase();
      if (VALID_VIDEO_EXTENSIONS.includes(extension)) {
        videoFiles.push(file);
      } else if (VALID_SUBTITLE_EXTENSIONS.includes(extension)) {
        subFiles.push(file);
      }
    }
  }
  videoFiles.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' }));
  return { folderName: dirEntry.name, videoFiles, subtitleFiles: subFiles };
}

function startPlaylist(folder, videos) {
  buildAndDisplayPlaylist(folder, videos);
  savePlaylistToLocalStorage(folder, videos, 0);
  loadVideo(0, true);
}

document.addEventListener('DOMContentLoaded', () => {
  const savedPlaylist = loadPlaylistFromLocalStorage();
  if (savedPlaylist) {
    folderInput.value = savedPlaylist.folder;
    videosInput.value = savedPlaylist.videos;
    buildAndDisplayPlaylist(savedPlaylist.folder, savedPlaylist.videos);
    loadVideo(savedPlaylist.lastPlayedIndex || 0, false);
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

loadPlaylistBtn.onclick = () => {
  if (!videosInput.value) {
    alert("Please enter video names in the input field.");
    return;
  }
  startPlaylist(folderInput.value || '.', videosInput.value);
};

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
});

const leadingZeroFormatter = new Intl.NumberFormat(undefined, { minimumIntegerDigits: 2 });
function formatDuration(time) {
  const seconds = Math.floor(time % 60), minutes = Math.floor(time / 60) % 60, hours = Math.floor(time / 3600);
  if (hours === 0) return `${minutes}:${leadingZeroFormatter.format(seconds)}`;
  else return `${hours}:${leadingZeroFormatter.format(minutes)}:${leadingZeroFormatter.format(seconds)}`;
}

function skip(duration) { video.currentTime += duration; }

playerControls.muteBtn.addEventListener("click", toggleMute);
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
