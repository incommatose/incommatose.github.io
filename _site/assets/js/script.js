document.addEventListener('DOMContentLoaded', function() {
    // Add a typing effect to the about section
    const aboutText = document.querySelector('#about p');
    const text = aboutText.textContent;
    aboutText.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            aboutText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    typeWriter();

    // Add a hover effect to project items
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('mouseover', () => {
            project.style.backgroundColor = 'rgba(0, 255, 0, 0.2)';
        });
        project.addEventListener('mouseout', () => {
            project.style.backgroundColor = 'rgba(0, 255, 0, 0.05)';
        });
    });
});

// Button to copy
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('pre code').forEach((codeBlock) => {
        // Crear el contenedor
        const container = document.createElement('div');
        container.className = 'code-wrapper';

        // Crear el botón de copiar
        const button = document.createElement('button');
        button.innerText = 'copy';
        button.className = 'copy-btn glitch-link';

        // Reorganizar el DOM
        const pre = codeBlock.parentNode;
        pre.parentNode.insertBefore(container, pre);
        container.appendChild(pre); // Añadir el bloque de código al contenedor
        container.appendChild(button); // Añadir el botón al contenedor

        // Funcionalidad del botón de copiar
        button.addEventListener('click', () => {
            navigator.clipboard.writeText(codeBlock.innerText).then(() => {
                button.innerText = 'copied';
                setTimeout(() => button.innerText = 'copy', 2000);
            });
        });
    });
});


// Zoom functions
document.addEventListener("DOMContentLoaded", function () {
    // Crear el fondo oscuro (overlay) dinámicamente
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    document.body.appendChild(overlay);

    // Seleccionar todas las imágenes del sitio
    document.querySelectorAll("img").forEach(img => {
        img.classList.add("zoomable"); // Agregar clase para estilos

        img.addEventListener("click", function () {
            if (img.classList.contains("zoomed")) {
                img.classList.remove("zoomed");
                overlay.style.display = "none";
            } else {
                img.classList.add("zoomed");
                overlay.style.display = "block";
            }
        });
    });

    overlay.addEventListener("click", function () {
        document.querySelectorAll(".zoomed").forEach(img => img.classList.remove("zoomed"));
        overlay.style.display = "none";
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            document.querySelectorAll(".zoomed").forEach(img => img.classList.remove("zoomed"));
            overlay.style.display = "none";
        }
    });
});


const commands = [
            'sudo apt update',
            'ifconfig',
            'docker ps -a',
            'ls -lha',
            'uname -a',
            'ssh root@127.0.0.1',
            'nano ~/.bashrc',
            'python3 -m venv env',
            'curl -O http://',
            'rm -rf /'
        ];
        
        let currentCommand = 0;
        let currentChar = 0;
        let isDeleting = false;
        let timeoutId = null;
        const placeholderElement = document.getElementById('animated-placeholder');
        const inputField = document.getElementById('search-box');

        function typeCommand() {
            if (inputField.value.length > 0) return; // Detener si hay texto
            
            const currentText = commands[currentCommand];
            
            if (isDeleting) {
                placeholderElement.textContent = currentText.substring(0, currentChar--);
                if (currentChar < 0) {
                    isDeleting = false;
                    currentCommand = (currentCommand + 1) % commands.length;
                }
            } else {
                placeholderElement.textContent = currentText.substring(0, currentChar++);
                if (currentChar > currentText.length) {
                    isDeleting = true;
                    timeoutId = setTimeout(typeCommand, 2000);
                    return;
                }
            }
            
            const speed = isDeleting ? 50 : 150;
            timeoutId = setTimeout(typeCommand, speed);
        }

        // Controlar la visibilidad y animación
        inputField.addEventListener('input', function(e) {
            if (this.value.length > 0) {
                placeholderElement.style.visibility = 'hidden';
                clearTimeout(timeoutId);
            } else {
                placeholderElement.style.visibility = 'visible';
                currentCommand = 0;
                currentChar = 0;
                isDeleting = false;
                clearTimeout(timeoutId);
                typeCommand();
            }
        });

        // Iniciar animación
        typeCommand();
