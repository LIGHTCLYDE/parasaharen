const simButton = document.querySelector('.nao');

function getRandomPosition() {
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);

    return { x, y};
}

simButton.addEventListener('mouseover', function() {

    const randomPosition = getRandomPosition();

    simButton.style.left = `${randomPosition.x}%`;
    simButton.style.top = `${randomPosition.y}%`;
})