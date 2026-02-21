# TutoPlayer

A simple, browser-based video player for watching video tutorials and courses.

---

## How to Use

TutoPlayer is designed to be dead simple: just one HTML file sitting next to your videos.

### Option 1: Drop a Folder

1.  Place `TutoPlayer_v4.3.0.html` **in the same directory as your video folders** (recommended for persistent local paths on refresh).
2.  Open the HTML file in your browser.
3.  Drag and drop one or **multiple** folders (or standalone files) onto the page.
4.  The playlist will be built with collapsible sections, adding separate course tabs if you drop multiple root folders simultaneously.

**Example structure:**
```
|TutoPlayer_v4.3.0.html
|
|Course1/
├── Introduction/
│   ├── 1. Welcome.mp4
│   └── 1. Welcome.vtt
├── Chapter 1 - Basics/
│   ├── 1. Setup.mp4
│   └── 2. First Code.mp4
├── Chapter 2 - Advanced/
│   └── ...
└── Summary.mp4
|
|Course2/
├── Introduction/
│   ├── 1. Welcome.mp4
│   └── 1. Welcome.vtt
└── Summary.mp4
```

### Option 2: Drop Video Files

1.  Place `TutoPlayer_v4.1.0.html` **inside the folder with your videos**.
2.  Open the HTML file in your browser.
3.  Select all your video (and subtitle) files and drag them onto the page.

**Example structure:**
```
Algorithm and DS/
├── TutoPlayer_v4.3.0.html
├── 1. Introduction.mp4
├── 1. Introduction_en.vtt
├── 2. Big O Notation.mp4
└── ...
```

### ⚠️ Important Note on Refreshing

If you refresh the page or close/reopen it:
-   **Videos:** Will be remembered and work automatically without re-uploading (if the file path hasn't changed).
-   **Subtitles:** Due to browser security restrictions, **subtitles may be lost** on reload. To restore them, simply **drag and drop the course folder again**.

---

## Features (Updated for v4.3.0)

-   **Multi-Course Tabs:** 
    - Upload multiple folders at once to generate separate course tabs (I, II, III).
    - **Right-click** any tab to delete it.

-   **Per-Video Playback Persistence:** 
    - TutoPlayer securely remembers the *exact second* you left off for **every individual video**, not just a single timestamp per course. Switch seamlessly between tabs and videos without losing your spot!

-   **Logo "Clear All":** 
    - Click the **TutoPlayer logo** in the top left to instantly wipe all loaded playlists and clear your local storage data.

-   **Keyboard Shortcuts:**
    -   `Space` or `K`: Play/Pause (Spacebar scrolling is disabled)
    -   `F`: Toggle Fullscreen
    -   `T`: Toggle Theater Mode
    -   `M`: Mute/Unmute
    -   `C`: Toggle Subtitles
    -   `J` or `←`: Rewind 5 seconds
    -   `L` or `→`: Fast-forward 5 seconds
    -   `H`: Rewind 10 seconds
    -   `;`: Fast-forward 10 seconds

-   **Subtitles (New in v4.1):**
    -   **Fuzzy Matching**: Automatically loads subtitles that are at least ~70% similar to the video name (e.g., `video.mp4` matches `video_us.vtt`).
    -   **Resize**: Hover over the **[CC]** button and **scroll up/down** with your mouse to change the text size.
    -   **Background Opacity**: **Right-click** on the **[CC]** button to toggle the background transparency (100% vs 25%).
    -   **Smart Positioning**: Subtitles are bottom-anchored, so they grow upwards when resized and are never cut off.

-   **Dynamic Title:** The browser tab title updates to `TutoPlayer - [Folder Name]`.

-   **Natural Sorting:** Files are sorted numerically (1, 2, 10, 11) rather than alphabetically (1, 10, 11, 2).

-   **Fullscreen Auto-Hide:** In fullscreen mode, controls and the cursor automatically hide after 2 seconds of inactivity.

---

## Local Storage

TutoPlayer saves your current playlist and progress to your browser's **local storage**. This means:

-   **Your playlist is remembered:** When you reopen the page, your last playlists and tabs will be automatically loaded.
-   **Per-Video Memory:** The player remembers your exact `<video>` timestamp for every single file.
-   **Your preferences are saved:** Subtitle size, background opacity, and toggle state are persisted.
-   **7-day expiry:** The saved data automatically expires after 7 days of inactivity.

**To safely clear your saved playlist at any time, simply click the "TutoPlayer" logo in the navigation bar.**

---

## Supported Formats

TutoPlayer supports standard web video formats:
-   `.mp4`
-   `.webm`
-   `.mov`
-   `.mkv`
-   `.ogg`
-   `.avi` (browser support may vary)
-   `.vtt` (Subtitles)
