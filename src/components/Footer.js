import React from "react"
import "./Footer.css"

// https://github.com/chusyntax/react-simple-footer

const Footer = () => {
    return(
      <footer>
      <div className="footer_content">
          <ul className="socials">
              <li><a href="https://www.instagram.com/jonthephenomenon/"><i className="fa fa-instagram"></i></a></li>
              <li><a href="https://www.linkedin.com/in/jonmleblanc/"><i className="fa fa-linkedin-square"></i></a></li>
          </ul>
      </div>
      <div className="footer_bottom">
          <p>&copy;2023 JONPRODUCTION</p>
      </div>
  </footer>

    );
}

export default Footer