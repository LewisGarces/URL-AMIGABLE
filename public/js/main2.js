document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    formData.append('action', 'login'); // Especificar que es una acción de login

    fetch('app/controller/Usuarios.php', { 
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            Swal.fire('Éxito', data.message, 'success').then(() => {
                window.location.href = 'inicio'; // Redirigir si el login fue exitoso
            });
        } else {
            Swal.fire('Error', data.message, 'error');
        }
    })
    .catch(() => {
        Swal.fire('Error', 'Ocurrió un error en el servidor.', 'error');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const registrarUsuarioBtn = document.getElementById('registrarUsuarioBtn');

    if (registrarUsuarioBtn) {  // Verificamos que el botón exista en el DOM
        registrarUsuarioBtn.addEventListener('click', function(event) {
            event.preventDefault(); // Evitar redirección inmediata

            Swal.fire({
                title: '¿Estás seguro?',
                text: 'Serás redirigido a la página de registro de usuario.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, registrar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    // Mostrar mensaje breve antes de redirigir
                    Swal.fire({
                        title: 'Redirigiendo...',
                        text: 'Cargando la página de registro.',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500 // La alerta se cierra después de 1.5 segundos
                    }).then(() => {
                        window.location.href = 'registrar'; // Ajusta la ruta si es necesario
                    });
                }
            });
        });
    } else {
        console.error('El botón "registrarUsuarioBtn" no se encontró.');
    }
});
