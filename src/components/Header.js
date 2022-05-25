import React from "react";
import Avatar from "./Avatar";

export default function Header() {
  return (
    <div className="container__main__header">
      <div className="container__main__header__left">
        <Avatar alt="hello workd" size={20} />
        <Avatar
          pic="https://www.w3schools.com/howto/img_avatar.png"
          size="lg"
        />
        <Avatar
          pic="https://www.w3schools.com/howto/img_avatar.png"
          size="md"
        />
        <Avatar
          pic="https://www.w3schools.com/howto/img_avatar.png"
          size="sm"
        />
      </div>
      <div className="container__main__header__right"></div>
    </div>
  );
}
