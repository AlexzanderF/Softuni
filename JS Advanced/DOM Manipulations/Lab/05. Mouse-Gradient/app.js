function attachGradientEvents() {
    const result = document.getElementById('result');
    const gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', (e) => {
        let position = Number(e.offsetX);
        let percentage = Math.floor(position / 300 * 100);
        result.textContent = `${percentage}%`;
    });
}