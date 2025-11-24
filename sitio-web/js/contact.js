document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const data = {
        nombre: document.getElementById("nombre").value,
        email: document.getElementById("email").value,
        asunto: document.getElementById("asunto").value,
        mensaje: document.getElementById("mensaje").value
    };

    fetch("https://script.google.com/macros/s/AKfycbz0vqj62vf4lfliNsRh_neUmyTi02HjPivFpVVzS3-xy6r4THreYy_5QE-L_UoXyhJc_Q/exec", {
        method: "POST",
        body: JSON.stringify(data)
    })
    .then(() => {
        alert("Mensaje enviado correctamente.");
        document.getElementById("contact-form").reset();
    })
    .catch(err => {
        alert("Error al enviar el mensaje.");
        console.error(err);
    });
});
