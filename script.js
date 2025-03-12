
document.querySelectorAll(".gallery img").forEach(image =>{
    image.onclick = () =>{
        document.querySelector(".popup-imagen").style.display = "block";
        document.querySelector(".popup-imagen img").src = image.getAttribute("src");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const imageslazy = document.querySelectorAll("img.lazyload");
    imageslazy.forEach(img => {
        img.src = img.dataset.src;
    });
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

    // Selecciona la imagen de la lightbox
    const lightboxImg = document.querySelector(".popup-imagen img");

    // Crea el elemento de la lupa
    const magnifier = document.createElement("div");
    magnifier.classList.add("magnifier");
    document.body.appendChild(magnifier);

    // Escucha el movimiento del mouse sobre la imagen
    lightboxImg.addEventListener("mousemove", (e) => {
        // Muestra la lupa
        magnifier.style.display = "block";

        // Obtiene las coordenadas del mouse relativas a la imagen
        const rect = lightboxImg.getBoundingClientRect(); // Obtiene la posición y tamaño de la imagen
        const x = e.clientX - rect.left; // Coordenada X relativa a la imagen
        const y = e.clientY - rect.top; // Coordenada Y relativa a la imagen
        const { width, height } = rect; // Ancho y alto de la imagen
        
        // Calcula la posición de la lupa
        const magnifierSize = 150; // Tamaño de la lupa
        magnifier.style.left = `${e.pageX - magnifierSize / 2}px`;
        magnifier.style.top = `${e.pageY - magnifierSize / 2}px`;

        // Calcula el fondo de la lupa (porción ampliada de la imagen)
        const bgX = (x / width) * 100;
        const bgY = (y / height) * 100;
        magnifier.style.backgroundImage = `url('${lightboxImg.src}')`;
        magnifier.style.backgroundPosition = `${bgX}% ${bgY}%`;

    // Ajusta el tamaño de la imagen dentro de la lupa
        const scaleFactor = 2; // Factor de ampliación (2 = 2x zoom)
        magnifier.style.backgroundSize = `${width * scaleFactor}px ${height * scaleFactor}px`;
        
    });

// Oculta la lupa cuando el mouse sale de la imagen
lightboxImg.addEventListener("mouseleave", () => {
    magnifier.style.display = "none";
});

document.fonts.load('1em mwfont').then(() => {
    document.body.classList.add('font-loaded');
  });

  window.addEventListener('load', function() {
    // Ocultar el círculo de carga
    const loading = document.getElementById('loading');
    loading.style.opacity = '0';
  
    // Esperar 0.5 segundos antes de ocultar completamente el círculo de carga
    setTimeout(() => {
      loading.style.display = 'none';
  
      // Mostrar el contenido de la página después de ocultar el círculo de carga
      const content = document.getElementById('content');
      content.style.display = 'block';
    }, 500); // 500 ms = 0.5 segundos
  });