// Espera o DOM estar totalmente carregado
document.addEventListener('DOMContentLoaded', function () {
    // Seleciona o checkbox do tema
    const themeToggleCheckbox = document.getElementById('theme-toggle');

    // Verifica se há um tema salvo no localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
        document.body.classList.add('light-theme');
        themeToggleCheckbox.checked = true; // Marca o switch como ativado
    }

    // Adiciona um evento para o toggle do tema
    themeToggleCheckbox.addEventListener('change', () => {
        // Alterna a classe do tema
        document.body.classList.toggle('light-theme');

        // Salva a preferência do tema no localStorage
        if (document.body.classList.contains('light-theme')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    });
});