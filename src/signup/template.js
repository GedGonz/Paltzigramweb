var yoyo = require("yo-yo");
var landing = require('../landing');



var box = yoyo ` <div class="col s12 m7">
<div class="row">
    <div class="signup-box">
        <h1 class="platzigram">Platzigram</h1>
        <form class="signup-form">
            <h2>Rigistrate para ver fotos de tus amigos estudiando en Platzi</h2>
            <div class="section">
                <a class=" btn btn-fb hiden-on-small-only">Iniciar sesión con Facebook</a>
                <a class=" btn btn-fb hide-on-med-and-up">Iniciar sesión</a>
            </div>
            <div class="diviver"></div>
            <div class="section">
                <input type="email" name="email" placeholder="Correo electrónico">
                <input type="text" name="name" placeholder="Nombre completo">
                <input type="text" name="username" placeholder="Nombre de usuario">
                <input type="password" name="password" placeholder="Contraseña">
                <button class="btn waves-effect wave-light btn-signup" type="submit">Regístrate</button>
            </div>
        </form>
    </div>
</div>
<div class="row">
    <div class="login-box">
        ¿Tienes una cuenta? <a href="/signin">Entrar</a>
    </div>
</div>
</div>`;

module.exports = landing(box);