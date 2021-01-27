import React from "react";
import "./styles/login.css";

function Login() {
  return (
    <div className="container-login">
      <div className="formulario">
        <div className="form-left">
          <h2>¡Hola de nuevo!</h2>
          <br></br>
          <h3>Nos alegramos mucho de volver a verte</h3>
          <br></br>
          <br></br>
          <form>
            <div className="form-group">
              <label>CORREO ELECTRONICO Ó NÚMERO DE TELEFONO</label>
              <br></br>
              <input className="form-control" type="email" name="email" />
            </div>
            <br></br>
            <div className="form-group">
              <label>CONTRASEÑA</label>
              <br></br>
              <input
                className="form-control"
                type="contrasena"
                name="contrasena"
              />
            </div>
            <p className="forgot">¿Has olvidado tu contraseña?</p>
            <button className="btn btn-primary">Iniciar sesión</button>
          </form>
        </div>
        <div className="form-right">
          <div className="img-QR"></div>
          <h2 className="titulo-QR">Iniciar sesion con código QR</h2>
          <p className="mensaje-QR">
            Escanee esto con la <strong>aplicación móvil Discord</strong> para
            iniciar sesión al instante
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
