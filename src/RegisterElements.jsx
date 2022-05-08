import React from "react";
import Loader from "./Loader";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

export default function (props) {
  const [step, stepper] = React.useState(0);
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
  const updatePhone = (e) => {
    let newVal = { ...props.modalObject.data };
    newVal.phoneNumber = e.target.value;
    props.modalObject.setMethod(newVal);
  };
  const updateFirstName = (e) => {
    let newVal = { ...props.modalObject.data };
    newVal.firstName = e.target.value;
    props.modalObject.setMethod(newVal);
  };
  const updateLastName = (e) => {
    let newVal = { ...props.modalObject.data };
    newVal.lastName = e.target.value;
    props.modalObject.setMethod(newVal);
  };
  const register = (e) => {
    e.preventDefault();
    props.userPack.methods.handleRegister();
  };
  const openLogin = () => {
    let newVal = { ...props.modalObject.data };
    if (window.location.href.includes("loginMobile")) {
      newVal.login = false;
      props.modalObject.setMethod(newVal);
    } else {
      newVal.active = true;
      newVal.login = true;
      props.modalObject.setMethod(newVal);
    }
  };
  const responseGoogle = (e) => {
    console.log("qloq");
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
      {props.modalObject.data.innerError ? (
        <div className="alignCenter justify">
          <p style={{ color: "red", paddingBottom: "10px", zIndex: "40" }}>
            {props.modalObject.data.innerError}
          </p>
        </div>
      ) : null}
      {props.modalObject.data.innerLoading ? (
        <Loader />
      ) : (
        <>
          {step === 0 ? (
            <>
              <div className="fieldBox upperFieldBox ">
                <p
                  className="smallText"
                  style={{ position: "absolute", top: "4px" }}
                >
                  País/Región
                </p>
                <p
                  className=" normalText"
                  style={{ position: "absolute", bottom: "10px" }}
                >
                  República Dominicana (+1)
                </p>
                <a href="#">
                  <svg
                    style={{ position: "Absolute", right: "15px" }}
                    width="22"
                    height="13"
                    viewBox="0 0 22 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.0989 1.37235L20.0087 0.331722C19.5422 -0.118278 18.781 -0.108903 18.3243 0.350472L10.7227 6.90204L3.12076 0.350472C2.66406 -0.104215 1.9029 -0.11359 1.43638 0.331722L0.346205 1.37235C-0.115402 1.80828 -0.115402 2.52079 0.346205 2.96141L9.89263 12.0739C10.3493 12.5145 11.0958 12.5145 11.5574 12.0739L16.3281 7.51766L21.0989 2.96141C21.5605 2.52547 21.5605 1.81297 21.0989 1.37235Z"
                      fill="#2D2D2D"
                    />
                  </svg>
                </a>
              </div>
              <div className="fieldBox bottomFieldBox">
                <input
                  onChange={updatePhone}
                  value={props.modalObject.data.phoneNumber}
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  required
                  style={{ width: "95%" }}
                  className="invisible normalText"
                  placeholder="Número de teléfono"
                ></input>
              </div>

              {/* <div className="fieldBox"  style={{marginTop:"15px"}}>
                <input type="password" style={{width:"95%"}} className="invisible normalText" placeholder="Contraseña"></input>
              </div> */}
              <a
                href="#"
                onClick={nextStep}
                className="wideButton alignCenter justify"
                style={{ marginTop: "15px" }}
              >
                <p className="wideText">Continuar</p>
              </a>
              <a href="#" onClick={nextStep}>
                <div
                  className="optionBox alignCenter justify"
                  style={{ marginTop: "15px" }}
                >
                  <div style={{ position: "absolute", left: "20px" }}>
                    <svg
                      width="23"
                      height="19"
                      viewBox="0 0 23 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.5 14.25C9.66 14.25 7.82 12.5875 6.9 11.875C2.3 8.55 0.92 7.3625 0 6.65V16.625C0 17.9364 1.02997 19 2.3 19H20.7C21.97 19 23 17.9364 23 16.625V6.65C22.08 7.3625 20.7 8.55 16.1 11.875C15.18 12.5875 13.34 14.25 11.5 14.25ZM20.7 0H2.3C1.02997 0 0 1.06355 0 2.375V3.5625C1.84 4.9875 1.61 4.9875 8.28 9.975C8.97 10.45 10.35 11.875 11.5 11.875C12.65 11.875 14.03 10.45 14.72 10.2125C21.39 5.225 21.16 5.225 23 3.8V2.375C23 1.06355 21.97 0 20.7 0Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <p className="normalText">Continuar con correo eléctronico</p>
                </div>
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
                        <img width="22" height="23" src="media/google.png" />
                      </div>
                      <p className="normalText">Continuar con Google</p>
                    </div>
                  </div>
                )}
                buttonText="Login"
                onSuccess={responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
            </>
          ) : null}
          {step === 1 ? (
            <>
              <a href="#">
                <svg
                  onClick={prevStep}
                  style={{ position: "relative", bottom: "20px" }}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.4965 18.6605L10.5055 19.6772C10.0859 20.1077 9.40743 20.1077 8.9923 19.6772L0.314697 10.7786C-0.104899 10.3481 -0.104899 9.65199 0.314697 9.22607L8.9923 0.322929C9.4119 -0.107572 10.0849 -0.107675 10.5 0.322827L11.4786 1.5001C10.9832 0.991744 9.93299 2.07409 9.5 2.50001L2.5 9.26728L18.5 9C19.0937 9 20 8.65817 20 9.26728V10.7328C20 11.3419 19.5937 11 19 11L2.5 10.7786L11 18.5C11.4375 18.9259 11.925 18.2254 11.4965 18.6605Z"
                    fill="#616161"
                  />
                </svg>
              </a>

              <div className="fieldBox upperFieldBox">
                <input
                  onChange={updateFirstName}
                  value={props.modalObject.data.firstName}
                  type="text"
                  style={{ width: "95%" }}
                  className="invisible normalText"
                  placeholder="Nombre"
                />
              </div>
              <div className="fieldBox bottomFieldBox">
                <input
                  onChange={updateLastName}
                  value={props.modalObject.data.lastName}
                  type="text"
                  style={{ width: "95%" }}
                  className="invisible normalText"
                  placeholder="Apellido"
                />
              </div>
              <div className="fieldBox" style={{ marginTop: "15px" }}>
                <input
                  onChange={updateUsername}
                  value={props.modalObject.data.username}
                  type="email"
                  style={{ width: "95%" }}
                  className="invisible normalText"
                  placeholder="Correo"
                />
              </div>
              <div className="fieldBox" style={{ marginTop: "15px" }}>
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
                onClick={register}
                className="wideButton alignCenter justify"
                style={{ marginTop: "20px" }}
              >
                <p className="wideText">Completar registro</p>
              </a>
            </>
          ) : null}
          <a
            href="#"
            onClick={openLogin}
            className="alignCenter"
            style={{ top: "16px", position: "relative", zIndex: "2" }}
          >
            <p className="normalText">
              Ya estás registrado?{" "}
              <span style={{ color: "#37A000" }}>Inicia sesion.</span>
            </p>
          </a>
        </>
      )}
    </>
  );
}
