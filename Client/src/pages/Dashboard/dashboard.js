import "./dashboard.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NavBarList from "../../components/Navbar/Navigation";
import Slider from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";


function dashboard() {
  return (
    <div>
      <NavBarList />
      <Slider />
      <div className="title">
        <br/>
      </div>
      <div className="Pcontainer">
        <p className="paragraph">
          {" "}
          Our Website: <br></br>It may happen that you do not know the Fiscal
          Power (CV) of your vehicle. This is often the case for vehicles
          purchased abroad. It is necessary to differentiate the Engine Power
          which is expressed in Horsepower (hp) and the Fiscal Power which is
          established by the State to calculate the Registration Tax on
          vehicles, expressed in Fiscal Horsepower (CV). For that we created
          this WebApp to help you out with
        </p>
      </div>
      <Footer/>
    </div>
  );
};


export default dashboard;
