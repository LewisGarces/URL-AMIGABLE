
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Editar Usuario</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="/public/css/editar.css">
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <div class="container mt-5">
        <h2>Editar Usuario</h2>
        <form id="editarUsuarioForm">
            <div class="form-group">
                <label for="usuario">Nuevo Usuario:</label>
                <input type="text" class="form-control" id="usuario" name="usuario">
            </div>
            <div class="form-group">
                <label for="password">Nueva Contraseña:</label>
                <input type="password" class="form-control" id="password" name="password">
            </div>
            <button type="submit" class="btn btn-primary">Guardar Cambios</button>
        </form>
        <button id="volverBtn" class="btn btn-secondary mt-3">Volver</button>
    </div>
    <script src="./public/js/editar.js"></script>