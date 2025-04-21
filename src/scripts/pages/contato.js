document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("ADICIONAR");
    
    const form = document.querySelector(".form");
    const customSelect = document.querySelector('.custom-select');
    const selected = customSelect.querySelector('.selected');
    const options = customSelect.querySelectorAll('.custom-option');
    const hiddenInput = document.getElementById('assunto');

    customSelect.addEventListener('click', () => {
        customSelect.classList.toggle('open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.textContent = option.textContent;
            hiddenInput.value = option.getAttribute('data-value');
            customSelect.classList.remove('open');
        });
    });

    document.addEventListener('click', (e) => {
        if (!customSelect.contains(e.target)) {
            customSelect.classList.remove('open');
        }
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.querySelector("input[type='text']").value;
        const phone = document.querySelector("input[type='phone']").value;
        const email = document.querySelector("input[type='email']").value;
        const message = document.querySelector("textarea[name='mensagem']").value;
        const assunto = hiddenInput.value;

        let valid = true;
        let errorMessage = "";

        if (name.trim() === "") {
            valid = false;
            errorMessage += "Nome é obrigatório.\n";
        }

        const phoneRegex = /^[\d\s\(\)-]+$/;
        if (!phone.match(phoneRegex)) {
            valid = false;
            errorMessage += "Telefone inválido.\n";
        }

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!email.match(emailRegex)) {
            valid = false;
            errorMessage += "E-mail inválido.\n";
        }

        if (assunto === "") {
            valid = false;
            errorMessage += "Por favor, selecione um assunto.\n";
        }

        if (message.trim() === "") {
            valid = false;
            errorMessage += "Mensagem é obrigatória.\n";
        }

        if (!valid) {
            alert(errorMessage);
        } else {
            submitForm(name, phone, email, message, assunto);
        }
    });

    function submitForm(name, phone, email, message, assunto) {
        const currentTime = new Date().toLocaleString();

        const formData = {
            name: name,
            phone: phone,
            email: email,
            message: message,
            assunto: assunto,
            time: currentTime
        };

        emailjs.send("service_hvwnd6t", "template_johnytn", formData)
            .then(function (response) {
                console.log("Success:", response);
                alert("Formulário enviado com sucesso!");
                document.querySelector(".form").reset();
                selected.textContent = "Selecione"; 
                hiddenInput.value = "";
            }, function (error) {
                console.error("Erro:", error);
                alert("Houve um erro ao enviar o formulário. Tente novamente.");
            });
    }
});
