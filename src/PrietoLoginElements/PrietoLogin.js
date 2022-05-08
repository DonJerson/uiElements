import "./media/css/styles.css";
import React from "react";
import LoginElements from "./LoginElements";
import RegisterElements from "./RegisterElements";
import Publish from "./Publish";

export default function PrietoLogin(props) {
  const [step, stepper] = React.useState(0);
  const [modalData, setmodalData] = React.useState({
    innerLoading: false,
    innerError: "",
    username: "",
    password: "",
    active: true,
    login: true
  });
  const [publishSwitch, setpublishSwitch] = React.useState("");
  const modalObject = { data: modalData, setMethod: setmodalData };

  try {
    props.userPack.loginModal.login;
  } catch (error) {
    //
  }

  const nextStep = (e) => {
    e.preventDefault();
    stepper((prev) => prev + 1);
  };
  const prevStep = (e) => {
    e.preventDefault();
    stepper((prev) => prev - 1);
  };
  const updateUsername = (e) => {
    let newVal = { ...modalData };
    setmodalData(newVal);
    newVal.username = e.target.value;
    props.userPack.switchLoginModal(newVal);
  };
  const updatePassword = (e) => {
    let newVal = { ...modalData };
    setmodalData(newVal);
    newVal.password = e.target.value;
    props.userPack.switchLoginModal(newVal);
  };
  const close = () => {
    let newVal = { ...modalData };
    newVal.active = false;
    setmodalData(newVal);
  };
  const openLogin = () => {
    let newVal = { ...modalData };
    newVal.active = true;
    newVal.login = true;
    setmodalData(newVal);
  };
  const openRegister = () => {
    let newVal = { ...modalData };

    newVal.active = true;
    newVal.login = false;
    //!newVal.login

    setmodalData(newVal);
  };
  //props.userPack.loginModal.type
  switch (publishSwitch) {
    case "publish":
      return <Publish userPack={props.userPack} />;
  }

  return (
    <div className="modal alignCenter justify">
      <div className="modalLoginCard">
        <div className="upperCard justify">
          <a href="#" className="closeIcon" onClick={close}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 1.6375L12.3625 0.5L7 5.8625L1.6375 0.5L0.5 1.6375L5.8625 7L0.5 12.3625L1.6375 13.5L7 8.1375L12.3625 13.5L13.5 12.3625L8.1375 7L13.5 1.6375Z"
                fill="#1F1F1F"
              />
            </svg>
          </a>
          <p className="secondTitle">
            {" "}
            {modalData.login ? "Inicia sesión" : "Regístrate"}
          </p>
        </div>
        {/* <div className="closeIcon" style={{marginTop:"12px"}}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4965 18.6605L10.5055 19.6772C10.0859 20.1077 9.40743 20.1077 8.9923 19.6772L0.314697 10.7786C-0.104899 10.3481 -0.104899 9.65199 0.314697 9.22607L8.9923 0.322929C9.4119 -0.107572 10.0849 -0.107675 10.5 0.322827L11.4786 1.5001C10.9832 0.991744 9.93299 2.07409 9.5 2.50001L2.5 9.26728L18.5 9C19.0937 9 20 8.65817 20 9.26728V10.7328C20 11.3419 19.5937 11 19 11L2.5 10.7786L11 18.5C11.4375 18.9259 11.925 18.2254 11.4965 18.6605Z" fill="#616161"/>
</svg>
        </div> */}
        <div style={{ width: "100%", height: "100%" }} className="alignCenter">
          <div className="centerCard">
            {modalData.login ? (
              <LoginElements
                modalObject={modalObject}
                userPack={props.userPack}
              />
            ) : (
              <RegisterElements
                modalObject={modalObject}
                userPack={props.userPack}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
