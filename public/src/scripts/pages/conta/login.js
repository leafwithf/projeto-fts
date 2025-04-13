window.onload = function() {
    // Função para alternar a visibilidade da senha
    function togglePassword() {
        const passwordField = document.getElementById('password');
        const eyeIcon = document.getElementById('eye-icon');

        const type = passwordField.type === 'password' ? 'text' : 'password';
        passwordField.type = type;

        if (type === 'password') {
            eyeIcon.classList.remove('fa-eye');
            eyeIcon.classList.add('fa-eye-slash');
        } else {
            eyeIcon.classList.remove('fa-eye-slash');
            eyeIcon.classList.add('fa-eye');
        }
    }

    // Agora você pode usar a função togglePassword para o ícone
    const eyeIcon = document.getElementById('eye-icon');
    if (eyeIcon) {
        eyeIcon.addEventListener('click', togglePassword);
    }
};
