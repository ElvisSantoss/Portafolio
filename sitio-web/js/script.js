// Archivo de script placeholder
console.log('Sitio-web placeholder');

        // Simulación de base de datos JSON
        const proyectosData = {
            "proyectos": [
                {
                    "id": 1,
                    "persona": "Luis",
                    "categoria": "Mosaicos",
                    "titulo": "Mosaicos Creativos",
                    "descripcion": "Exploración artística a través de composiciones de mosaico que combinan colores, texturas y formas geométricas.",
                    "imagen": "imagenes/luis/mosaicos/luis-mosaicos-1.jpg",
                    "tecnologias": ["Diseño", "Arte Digital", "Composición"]
                },
                {
                    "id": 2,
                    "persona": "Luis",
                    "categoria": "Salud Mental",
                    "titulo": "Conciencia sobre Salud Mental",
                    "descripcion": "Proyecto visual que busca crear conciencia sobre la importancia del bienestar emocional y psicológico.",
                    "imagen": "imagenes/luis/salud-mental/luis-salud-mental-1.jpg",
                    "tecnologias": ["Psicología", "Diseño Social", "Ilustración"]
                },
                // Más proyectos seguirían aquí...
            ]
        };

        // Funcionalidades JavaScript
        document.addEventListener('DOMContentLoaded', function() {
            // Navegación suave
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        window.scrollTo({
                            top: target.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // Efecto de navbar al hacer scroll
            window.addEventListener('scroll', function() {
                const navbar = document.querySelector('.navbar');
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });

            // Animación de elementos al hacer scroll
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.animate').forEach(el => {
                observer.observe(el);
            });

            // Controles de audio
            const audio = document.getElementById('backgroundMusic');
            const playBtn = document.getElementById('playBtn');
            const pauseBtn = document.getElementById('pauseBtn');
            const volumeControl = document.getElementById('volumeControl');

            playBtn.addEventListener('click', () => {
                audio.play();
            });

            pauseBtn.addEventListener('click', () => {
                audio.pause();
            });

            volumeControl.addEventListener('input', (e) => {
                audio.volume = e.target.value;
            });

            // Formulario de contacto
            document.getElementById('contact-form').addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Mensaje enviado con éxito. ¡Gracias por contactarnos!');
                e.target.reset();
            });

            // Filtrado de proyectos (si se implementa)
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    document.querySelector('.filter-btn.active').classList.remove('active');
                    btn.classList.add('active');
                    const filter = btn.dataset.filter;
                    // Aquí iría la lógica de filtrado
                });
            });
        });

        // Función para abrir modal de imagen
        function openModal(btn) {
            const imgSrc = btn.closest('.gallery-item').querySelector('img').src;
            document.getElementById('modalImage').src = imgSrc;
            const modal = new bootstrap.Modal(document.getElementById('imageModal'));
            modal.show();
        }

        // Función para abrir modal desde imagen o botón
function openImageModal(element) {
    let imgSrc;
    
    // Si hicieron clic en la imagen
    if (element.tagName === 'IMG') {
        imgSrc = element.src;
    } 
    // Si hicieron clic en el botón
    else {
        imgSrc = element.closest('.image-container').querySelector('img').src;
    }
    
    document.getElementById('modalImage').src = imgSrc;
    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    modal.show();
}

// Cerrar modal con ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modal = bootstrap.Modal.getInstance(document.getElementById('imageModal'));
        if (modal) {
            modal.hide();
        }
    }
});

// Cerrar modal haciendo clic fuera de la imagen
document.getElementById('imageModal').addEventListener('click', function(e) {
    if (e.target === this) {
        const modal = bootstrap.Modal.getInstance(this);
        modal.hide();
    }
});

// Toggle modo oscuro/claro
document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
    
    // Cargar preferencia guardada
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
        toggle.checked = true;
    }
    
    // Evento para cambiar modo
    toggle.addEventListener('change', function() {
        if (this.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
    
    // También detectar preferencia del sistema
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Si no hay preferencia guardada, usar la del sistema
    if (!localStorage.getItem('dark-mode') && systemPrefersDark.matches) {
        body.classList.add('dark-mode');
        toggle.checked = true;
    }
    
    // Escuchar cambios en la preferencia del sistema
    systemPrefersDark.addEventListener('change', function(e) {
        if (!localStorage.getItem('dark-mode')) {
            if (e.matches) {
                body.classList.add('dark-mode');
                toggle.checked = true;
            } else {
                body.classList.remove('dark-mode');
                toggle.checked = false;
            }
        }
    });
});