export function createProfileCard(name, role) {
    const cardContainer = document.getElementById('profileCards');
    
    const card = document.createElement('div');
    card.className = 'profile-card';
    
    card.innerHTML = `
        <h3>${name}</h3>
        <p>${role}</p>
        <button class="remove-btn">Remove</button>
    `;
    
    const removeBtn = card.querySelector('.remove-btn');
    removeBtn.addEventListener('click', () => {
        cardContainer.removeChild(card);
    });
    
    cardContainer.appendChild(card);
}