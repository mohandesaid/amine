// Toggle between Light and Dark Mode
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

// Show the Channel Creation Modal
function showChannelForm() {
    document.getElementById("channel-modal").classList.add("active");
}

// Close the Channel Creation Modal
function closeChannelForm() {
    document.getElementById("channel-modal").classList.remove("active");
}

// Add Video to the Video Grid
function addVideo() {
    const channelName = document.getElementById("channel-name").value.trim();
    const videoDescription = document.getElementById("video-description").value.trim();
    const videoUrl = document.getElementById("video-url").value.trim();

    if (!channelName || !videoUrl) {
        alert("Channel Name and Video URL are required.");
        return;
    }

    const videoGrid = document.getElementById("video-grid");
    const videoCard = document.createElement("div");
    videoCard.classList.add("video-card");

    let videoContent;
    if (videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")) {
        videoContent = `<iframe src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
    } else {
        videoContent = `<video controls><source src="${videoUrl}" type="video/mp4"></video>`;
    }

    videoCard.innerHTML = `
        ${videoContent}
        <div class="video-info">
            <h3>${channelName}</h3>
            <p>${videoDescription}</p>
        </div>
    `;

    // Add event listener for full-screen playback
    videoCard.addEventListener("click", () => openFullscreen(videoContent));

    videoGrid.appendChild(videoCard);
    closeChannelForm();
}

// Open Fullscreen Modal
function openFullscreen(content) {
    const fullscreenModal = document.getElementById("fullscreen-modal");
    const fullscreenContent = document.getElementById("fullscreen-content");

    fullscreenContent.innerHTML = content;
    fullscreenModal.classList.add("active");
}

// Close Fullscreen Modal
function closeFullscreen() {
    const fullscreenModal = document.getElementById("fullscreen-modal");
    fullscreenModal.classList.remove("active");
    document.getElementById("fullscreen-content").innerHTML = "";
}
