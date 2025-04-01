// Initialize aura level from local storage
let auraLevel = parseInt(localStorage.getItem('auraLevel')) || 10; // Start with 10 aura
document.getElementById('aura-level').textContent = auraLevel;

// Function to determine rank based on aura level
function determineRank(aura) {
    if (aura < 20) return "Sparkling Ember";         // Novice
    else if (aura < 50) return "Mystic Voyager";      // Intermediate
    else if (aura < 100) return "Celestial Guardian";  // Advanced
    else return "Infinity Warden";                     // Master
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
    document.getElementById('aura-level').textContent = auraLevel;
    updateRank();
}

// Function to purchase an item
function purchaseItem(itemId, cost) {
    let auraLevel = parseInt(localStorage.getItem('auraLevel')) || 10;
    let purchasedItems = JSON.parse(localStorage.getItem('purchasedItems')) || [];

    if (purchasedItems.includes(itemId)) {
        showNotification(`You have already purchased ${itemId}.`, 'error');
        return;
    }

    if (auraLevel >= cost) {
        auraLevel -= cost;
        localStorage.setItem('auraLevel', auraLevel);
        document.getElementById('aura-level').textContent = auraLevel; // Update aura level display
        updateRank(); // Update rank display
        showNotification(`You have successfully purchased the ${itemId}!`, 'success');

        // Add item to purchased items
        purchasedItems.push(itemId);
        localStorage.setItem('purchasedItems', JSON.stringify(purchasedItems));

        // Remove the purchase button
        document.getElementById(`purchase-button-${itemId}`).style.display = 'none';

        // Apply the purchased item
        if (itemId === 'item1') {
            localStorage.setItem('customBackground', 'wallpaper-1.png'); // Set custom background path
            applyCustomBackground('wallpaper-1.png'); // Apply the background immediately
        }
    } else {
        showNotification(`Not enough aura to purchase ${itemId}.`, 'error');
    }
}

// Function to apply custom background
function applyCustomBackground(wallpaper) {
    const hasCustomBackground = localStorage.getItem('customBackground');
    if (hasCustomBackground) {
        localStorage.setItem('customBackground', wallpaper);
        document.getElementById('desktop').style.backgroundImage = `url('${wallpaper}')`;
        showNotification('Custom background applied!', 'success');
    } else {
        showNotification('You have not purchased a custom background.', 'error');
    }
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
    let purchasedItems = JSON.parse(localStorage.getItem('purchasedItems')) || [];
    purchasedItems.forEach(itemId => {
        const button = document.getElementById(`purchase-button-${itemId}`);
        if (button) {
            button.style.display = 'none';
        }
    });
};