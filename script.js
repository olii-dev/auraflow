// Initialize aura level from local storage
let auraLevel = parseInt(localStorage.getItem('auraLevel')) || 10; // Start with 10 aura
document.getElementById('aura-level').textContent = auraLevel;

// Function to update aura level in local storage
function updateAura() {
    localStorage.setItem('auraLevel', auraLevel);
    document.getElementById('aura-level').textContent = auraLevel;
}