import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  background: #363d67;
  height: 8vh;
  width: 10vw;
  font-size: 1em;
  color: white;
  position: relative;
  bottom: 150px;
  left: 100px;

  @media (max-width: 680px) {
    bottom: 112px;
    left: 48px;
  }

  @media (max-width: 500px) {
    font-size: 0.7em;
  }

  @media (max-width: 400px) {
    font-size: 0.5em;
  }

  :hover {
    -webkit-transition: 0.5s ease;
    transition: 0.5s ease;
    background: aqua;
  }
`;

// toggles show or hide of modal

const ToggleButton = ({ buttonImage, buttonTitle, children }) => {
  const [isShown, setIsShown] = useState(false);
  const hide = () => setIsShown(false);
  const show = () => setIsShown(true);

  return (
    <>
      <div className="App__projects__case__chest">
        <img className="App__projects__case__chest__demo1" src={buttonImage} />
        <Button onClick={show}>{buttonTitle}</Button>
      </div>
      {isShown && children ? children(hide) : null}
    </>
  );
};

ToggleButton.defaultProps = {
  buttonTitle: "Learn More"
};

export default ToggleButton;
