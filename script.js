
document.querySelectorAll(".gallery img").forEach(image =>{
    image.onclick = () =>{
        document.querySelector(".popup-imagen").style.display = "block";
        document.querySelector(".popup-imagen img").src = image.getAttribute("src");
    }
});

document.querySelector(".popup-imagen span").onclick = function() {
    // Selecciona el elemento de la lightbox
    const lightbox = document.querySelector(".popup-imagen");

    // Aplica la animación de salida
    lightbox.style.animation = "transitionOut 0.5s";

    // Espera a que la animación termine
    lightbox.addEventListener("animationend", function() {
        // Oculta la lightbox después de que la animación haya terminado
        lightbox.style.display = "none";

        // Restablece la animación y otros estilos
        lightbox.style.animation = ""; // Elimina la animación
        lightbox.style.opacity = "1";  // Restablece la opacidad (si es necesario)
        lightbox.style.transform = "scale(1)"; // Restablece transformaciones (si es necesario)
    }, { once: true }); // El evento se ejecutará solo una vez
};


document.addEventListener('contextmenu' , function(e) {
    e.preventDefault();
})
