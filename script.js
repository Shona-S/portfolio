function switchTab(tabNumber) {
    document.querySelectorAll('.tab').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.tab:nth-child(${tabNumber})`).classList.add('active');

    document.querySelectorAll('.project-container').forEach(container => {
        container.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabNumber}"]`).classList.add('active');
}