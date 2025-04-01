// Initialize aura level from local storage
let auraLevel = parseInt(localStorage.getItem('auraLevel')) || 10;
document.getElementById('aura-level').textContent = auraLevel;

// Function to determine rank based on aura level
function determineRank(aura) {
    if (aura < 10) return "Flickering Flame";             // Beginner
    else if (aura < 20) return "Sparkling Ember";         // Novice
    else if (aura < 35) return "Radiant Seeker";          // Apprentice
    else if (aura < 50) return "Mystic Voyager";          // Intermediate
    else if (aura < 70) return "Astral Sentinel";         // Skilled
    else if (aura < 85) return "Celestial Guardian";      // Advanced
    else if (aura < 100) return "Ethereal Champion";      // Expert
    else if (aura < 150) return "Stellar Protector";      // Elite
    else if (aura < 200) return "Lunar Emissary";         // Grandmaster
    else if (aura < 300) return "Solar Sovereign";        // Supreme
    else if (aura < 400) return "Galactic Overlord";      // Legendary
    else if (aura < 500) return "Infinity Warden";        // Master
    else if (aura < 650) return "Eternal Ascendant";      // Ascendant
    else if (aura < 800) return "Cosmic Ruler";           // Supreme Ascendant
    else if (aura < 1000) return "Divine Sovereign";      // Celestial Master
    else if (aura < 1500) return "Transcendent Being";    // Ultimate Master
    else if (aura < 2000) return "Eternal Luminary";       // Omniscient
    else if (aura < 2500) return "Infinite Wanderer";      // Omnipresent
    else if (aura < 3000) return "Cosmic Architect";       // Omniversal
    else if (aura < 4000) return "Celestial Paragon";      // Omnipotent
    else return "Omnipotent Entity";                       // Beyond Master
}

// Update rank display
function updateRank() {
    const rank = determineRank(auraLevel);
    document.getElementById('current-rank').textContent = rank;
}

updateRank();

// Function to update aura level in local storage
function updateAura() {
    localStorage.setItem('auraLevel', auraLevel);
    document.getElementById('aura-level').textContent = auraLevel; // Update aura level display
    updateRank(); // Update rank display
}

// Function to apply custom background for free
function applyCustomBackground(wallpaper) {
    localStorage.setItem('customBackground', wallpaper); // Set custom background path
    document.getElementById('desktop').style.backgroundImage = `url('${wallpaper}')`;
    showNotification('Custom background applied!', 'success');
}

// Function to show notifications
function showNotification(message, type) {
    const notification = document.getElementById('notification');
    if (notification) {
        notification.textContent = message;
        notification.className = `notification ${type}`;
        notification.style.display = 'block'; // Show the notification

        // Hide the notification after 5 seconds
        setTimeout(() => {
            notification.style.display = 'none';
        }, 5000);
    }
}

// Apply custom background if purchased
const hasCustomBackground = localStorage.getItem('customBackground');
if (hasCustomBackground) {
    document.getElementById('desktop').style.backgroundImage = `url('${hasCustomBackground}')`;
}

// Function to update the current time every second
function updateTime() {
    const now = new Date();
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    document.getElementById('current-time').textContent = now.toLocaleString('en-US', options);
}

// Update time every second
setInterval(updateTime, 1000);

// Hide purchase buttons for already purchased items
window.onload = function() {
    // No items to hide since everything is free
};