import React from "react";
import Avatar from "./Avatar";

export default function Header() {
  return (
    <div className="container__main__header">
      <div className="container__main__header__left">
        <Avatar
          pic="https://www.w3schools.com/howto/img_avatar.png"
          size="lg"
          alt="hello"
        />
      </div>
      <div className="container__main__header__right"></div>
    </div>
  );
}
