document.addEventListener('DOMContentLoaded', async function() {
    const response = await fetch('obtener_usuario.php');
    const usuario = await response.json();

    if (usuario && !usuario.error) {
        document.getElementById('usuario').value = usuario.usuario;
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se pudo cargar la información del usuario.'
        });
    }
});

document.getElementById('editarUsuarioForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const usuario = document.getElementById('usuario').value.trim();
    const password = document.getElementById('password').value.trim();

    if (usuario === '' || password === '') {
        Swal.fire({
            icon: 'warning',
            title: 'Campos vacíos',
            text: 'Por favor, completa todos los campos.'
        });
        return;
    }

    const formData = new FormData(this);
    formData.append('action', 'update');

    const response = await fetch('editar_usuario.php', {
        method: 'POST',
        body: formData
    });

    const result = await response.json();

    if (result.success) {
        Swal.fire({
            icon: 'success',
            title: '¡Éxito!',
            text: result.message
        }).then(() => {
            window.location.href = 'sesion';
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: result.message
        });
    }
});



document.addEventListener('DOMContentLoaded', function() {
    const volverBtn = document.getElementById('volverBtn');

    if (volverBtn) {  // Aseguramos que el botón existe antes de agregar el event listener
        volverBtn.addEventListener('click', function() {
            Swal.fire({
                title: '¿Estás seguro?',
                text: 'No se guardarán los cambios.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, volver',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    // Mostrar la alerta de redirección antes de ir a la página de inicio
                    Swal.fire({
                        title: 'Redirigiendo al productos',
                        text: 'Serás redirigido a la página de productos.',
                        icon: 'success', // Ícono de palomita
                        showConfirmButton: false, // No necesitamos el botón de confirmación
                        timer: 1000 // La alerta desaparece después de 2 segundos
                    }).then(() => {
                        window.location.href = 'inicio'; // Asegúrate de que 'inicio' sea una ruta válida
                    });
                }
            });
        });
    } else {
        console.error('El botón "volverBtn" no se encontró.');
    }
});
