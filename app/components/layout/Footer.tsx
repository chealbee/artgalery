import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerTop">
        <p>
          Не пропустіть цю неповторну подію, яка об'єднає вас з мистецтвом та
          творчістю!
        </p>
        <p className="footerContacts">
          Для отримання додаткової інформації та реєстрації, будь ласка,
          звертайтесь за телефоном <a href="#">+380 96 32 06 144</a> <br />
          або електронною поштою <a href="#">pochta@gmail.com</a>
        </p>
      </div>
      <div className="footerBottom">
        {/* <p>Побачимось на виставці</p> */}
        <span>Вінниця фест © 2024</span>
      </div>
    </footer>
  );
};

export default Footer;
