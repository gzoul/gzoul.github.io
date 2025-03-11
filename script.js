const imagenes = [
    "imagen1.jpg",
    "imagen2.jpg",
    "imagen3.jpg",
    "imagen4.jpg",
    "imagen5.jpg",
    "imagen6.jpg",
    "imagen7.jpg",
    "imagen8.jpg",
    "imagen9.jpg",
    "imagen10.jpg",
    "imagen11.jpg",
    "imagen12.jpg",
    "imagen13.jpg",
];

const gallery = document.querySelector(".gallery");

function cargarImagenes() {
    imagenes.forEach((imagen) => {
        const pane = document.createElement("div");
        pane.classList.add("panes");
        const img = document.createElement("img");
        img.src = `imagenes/${imagen}`;
        img.loading = "lazy";
        pane.appendChild(img);
        gallery.appendChild(pane);
    });

    document.querySelectorAll(".gallery img").forEach(image => {
        image.onclick = () => {
            document.querySelector(".popup-imagen").style.display = "block";
            document.querySelector(".popup-imagen img").src = image.getAttribute("src");
        }
    });
}

cargarImagenes();

document.querySelector(".popup-imagen span").onclick = function() {
    const lightbox = document.querySelector(".popup-imagen");
    lightbox.style.animation = "transitionOut 0.5s";
    lightbox.addEventListener("animationend", function() {
        lightbox.style.display = "none";
        lightbox.style.animation = "";
        lightbox.style.opacity = "1";
        lightbox.style.transform = "scale(1)";
    }, { once: true });
};

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

const lightboxImg = document.querySelector(".popup-imagen img");
const magnifier = document.createElement("div");
magnifier.classList.add("magnifier");
document.body.appendChild(magnifier);

lightboxImg.addEventListener("mousemove", (e) => {
    magnifier.style.display = "block";
    const rect = lightboxImg.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const { width, height } = rect;
    const magnifierSize = 150;
    magnifier.style.left = `${e.pageX - magnifierSize / 2}px`;
    magnifier.style.top = `${e.pageY - magnifierSize / 2}px`;
    const bgX = (x / width) * 100;
    const bgY = (y / height) * 100;
    magnifier.style.backgroundImage = `url('${lightboxImg.src}')`;
    magnifier.style.backgroundPosition = `${bgX}% ${bgY}%`;
    const scaleFactor = 2;
    magnifier.style.backgroundSize = `${width * scaleFactor}px ${height * scaleFactor}px`;
});

lightboxImg.addEventListener("mouseleave", () => {
    magnifier.style.display = "none";
});