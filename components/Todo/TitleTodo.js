import React from "react";
import Image from "next/image";

import sun from "../../public/images/icon-sun.svg"
import moon from "../../public/images/icon-moon.svg"

const TitleTodo = (props) => {
  const { currentTheme, changeTheme } = props;

  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontWeight: "700" }}>
      <span style={{ color: "white", fontSize: "2.5rem", letterSpacing: "15px", lineHeight: "2rem" }}>TODO</span>
      {currentTheme == 0 ? (
        <div style={{ cursor: "pointer" }}>
          <Image onClick={() => {
            changeTheme();
          }} src={sun} alt="" />
        </div>

      ) : (
        <div style={{ cursor: "pointer" }}>
          <Image onClick={() => {
            changeTheme();
          }} src={moon} alt="" />
        </div>

      )}

      {/* <button
        style={{ top: "0", position: "absolute", zIndex: "99" }}
        onClick={() => {
          changeTheme();
          setIndex((index + 1) % 2);
        }}
      >
        change
      </button> */}
    </div>
  );
};

export default TitleTodo;
