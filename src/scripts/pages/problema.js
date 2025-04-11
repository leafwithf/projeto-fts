document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("yMyAcoSCYnlGNxm5j"); // Use a chave pública que você forneceu
});


document.querySelector(".form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const name = document.querySelector("input[type='text']").value;
    const phone = document.querySelector("input[type='phone']").value;
    const email = document.querySelector("input[type='email']").value;
    const message = document.querySelector("textarea[name='mensagem']").value;

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

    if (message.trim() === "") {
        valid = false;
        errorMessage += "Mensagem é obrigatória.\n";
    }

    if (!valid) {
        alert(errorMessage); 
    } else {
        submitForm(name, phone, email, message);
    }
});
function submitForm(name, phone, email, message) {
    const currentTime = new Date().toLocaleString(); 

    const formData = {
        name: name,
        phone: phone,
        email: email,
        message: message,
        time: currentTime 
    };

    emailjs.send("service_hvwnd6t", "template_johnytn", formData)
    .then(function(response) {
        console.log("Success:", response);
        alert("Formulário enviado com sucesso!");
        document.querySelector(".form").reset(); 
    }, function(error) {
        console.error("Erro:", error);
        alert("Houve um erro ao enviar o formulário. Tente novamente.");
    });
}
