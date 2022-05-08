import React from "react";
import Loader from "./Loader";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

export default function (props) {
  const [step, stepper] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const nextStep = (e) => {
    e.preventDefault();
    stepper((prev) => prev + 1);
  };
  const prevStep = (e) => {
    e.preventDefault();
    stepper((prev) => prev - 1);
  };
  const updateUsername = (e) => {
    let newVal = { ...props.modalObject.data };
    newVal.username = e.target.value;
    props.modalObject.setMethod(newVal);
  };
  const updatePassword = (e) => {
    let newVal = { ...props.modalObject.data };
    newVal.password = e.target.value;
    props.modalObject.setMethod(newVal);
  };
  const login = (e) => {
    props.userPack.methods.login(
      props.modalObject.data.username,
      props.modalObject.data.password
    );
  };
  const close = () => {
    let newVal = { ...props.modalObject.data };
    newVal.active = false;
    props.modalObject.setMethod(newVal);
  };
  const openRegister = () => {
    let newVal = { ...props.modalObject.data };
    if (window.location.href.includes("loginMobile")) {
      newVal.login = true;
      props.modalObject.setMethod(newVal);
    } else {
      newVal.active = true;
      newVal.login = false;
      props.modalObject.setMethod(newVal);
    }
  };
  const responseGoogle = (e) => {
    console.log("qloq", e.profileObj);
    const data = e.profileObj;
    let newVal = { ...props.modalObject.data };
    newVal.username = data.email;
    newVal.password = "Default3xsd1Pass";
    newVal.social = true;
    props.modalObject.setMethod(newVal);
    props.userPack.methods.handleRegister(data);
  };
  const responseFacebook = (e) => {
    //e.preventDefault()

    console.log("still here", e);
    if (e.status !== "unknown") {
      let newVal = { ...props.modalObject.data };
      newVal.username = e.email;
      newVal.password = "Default3xsd1Pass";
      newVal.social = true;
      props.modalObject.setMethod(newVal);
      props.userPack.methods.handleRegister({ ...e });
    }
  };
  return (
    <>
      {props.modalObject.data.innerLoading ? (
        <Loader />
      ) : (
        <>
          {props.modalObject.data.innerError ? (
            <div
              className="alignCenter justify"
              style={{ top: "-12px", position: "relative", zIndex: "2" }}
            >
              <p className="normalText">
                <span style={{ color: "red" }}>
                  {props.modalObject.data.innerError}
                </span>
              </p>
            </div>
          ) : null}

          <div className="fieldBox upperFieldBox">
            <input
              onChange={updateUsername}
              value={props.modalObject.data.username}
              type="text"
              style={{ width: "95%" }}
              className="invisible normalText"
              placeholder="Correo ó número de teléfono"
            />
          </div>
          <div className="fieldBox bottomFieldBox">
            <input
              onChange={updatePassword}
              value={props.modalObject.data.password}
              type="password"
              style={{ width: "95%" }}
              className="invisible normalText"
              placeholder="Contraseña"
            />
          </div>

          <a
            href="#"
            onClick={login}
            className="wideButton alignCenter justify"
            style={{ marginTop: "15px" }}
          >
            <p className="wideText">Iniciar sesion</p>
          </a>

          <FacebookLogin
            appId="327442284949288"
            disableMobileRedirect={true}
            callback={responseFacebook}
            fields="name,first_name,last_name,email,picture"
            render={(renderProps) => (
              <div className="buttonClass" onClick={renderProps.onClick}>
                <div
                  className="optionBox alignCenter justify"
                  style={{ marginTop: "15px" }}
                >
                  <div style={{ position: "absolute", left: "20px" }}>
                    <svg
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.7306 23C22.4316 23 23 22.4317 23 21.7306V1.2694C23 0.568259 22.4316 0 21.7306 0H1.2694C0.568172 0 0 0.568259 0 1.2694V21.7306C0 22.4317 0.568172 23 1.2694 23H21.7306Z"
                        fill="#395185"
                      />
                      <path
                        d="M17.789 23V13.8771H21.327L21.8567 10.3218H17.789V8.05172C17.789 7.02234 18.1193 6.32085 19.8248 6.32085L22 6.32002V3.14015C21.6236 3.09681 20.3325 3 18.8304 3C15.6941 3 13.5471 4.65688 13.5471 7.69973V10.3218H10V13.8771H13.5471V23H17.789Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <p className="normalText">Continuar con Facebook</p>
                </div>
              </div>
            )}
          />

          <GoogleLogin
            scope="email https://www.googleapis.com/auth/analytics https://www.googleapis.com/auth/analytics.edit https://www.googleapis.com/auth/analytics.readonly"
            clientId="483932223498-7aopai2dl8boii87lrjf6nto5ob0opnt.apps.googleusercontent.com"
            render={(renderProps) => (
              <div className="buttonClass" onClick={renderProps.onClick}>
                <div
                  className="optionBox alignCenter justify"
                  style={{ marginTop: "15px" }}
                >
                  <div style={{ position: "absolute", left: "20px" }}>
                    <img
                      width="22"
                      height="23"
                      src="media/google.png"
                      alt="bobo"
                    />
                  </div>
                  <p className="normalText">Continuar con Google</p>
                </div>
              </div>
            )}
            buttonText="Login"
            onSuccess={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />

          <a
            href="#"
            onClick={openRegister}
            className="alignCenter"
            style={{ top: "16px", position: "relative", zIndex: "2" }}
          >
            <p className="normalText">
              Aún no tienes cuenta?{" "}
              <span style={{ color: "#37A000", fontSize: "26px !important" }}>
                Regístrate.
              </span>
            </p>
          </a>
          <a
            href="#"
            onClick={openRegister}
            className="alignCenter"
            style={{ top: "28px", position: "relative", zIndex: "2" }}
          >
            <p className="normalText">
              Problemas para ingresar?{" "}
              <span style={{ color: "#37A000" }}>Olvidé mi contraseña.</span>
            </p>
          </a>
        </>
      )}
    </>
  );
}
