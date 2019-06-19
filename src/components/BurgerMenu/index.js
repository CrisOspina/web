import React from "react";
import Popup from "reactjs-popup";
import BurgerIcon from "./BurgerIcon";
import Menu from "./Menu";
import "./index.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  marginTop: "40px"
};
const contentStyle = {
  background: "rgba(255,255,255,0)",
  width: "80%",
  border: "none",
  color: "#fff"
};

const BurgerMenu = () => {
  return (
    <div style={styles}>
        <Popup
          modal
          overlayStyle={{ background: "#242424" }}
          contentStyle={contentStyle}
          closeOnDocumentClick={false}
          trigger={open => <BurgerIcon open={open} />}
        >
        {close => <Menu close={close} />}
      </Popup>
    </div>
  );
}

export default BurgerMenu;