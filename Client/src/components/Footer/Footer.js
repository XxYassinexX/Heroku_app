import React from "react";
import "./Footer.css";
import {  brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {
  return (
    <div className="footer">
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>Converter</h6>
              <p class="text-justify">
                GoMyCode Final Project
              </p>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">
                Copyright &copy; 2022 All Rights Reserved by
                <a href="https://www.facebook.com/Jesser.lb/">     Jesser Blanc</a>.
              </p>
            </div>

            <div class="col-md-4 col-sm-6 col-xs-12">
              <ul class="social-icons">
                <li>
                  <a class="facebook" href="https://www.facebook.com/Jesser.lb/">
                  <FontAwesomeIcon icon={brands('facebook')} />
                  </a>
                </li>
                <li>
                  <a class="twitter" href="#">
                  <FontAwesomeIcon icon={brands('twitter')} />

                  </a>
                </li>
                <li>
                  <a class="dribbble" href="#">
                  <FontAwesomeIcon icon={brands('instagram')} />
                  </a>
                </li>
                <li>
                  <a class="linkedin" href="https://github.com/ElBlanc">
                  <FontAwesomeIcon icon={brands('github')} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
