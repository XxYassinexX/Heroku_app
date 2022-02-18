import React from "react";
import "./Landpage.css";
import NavBarList from "../../components/Navbar/Navigation";
import Slider from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";

const Landpage = () => {
  return (
    <div>
      <NavBarList />
      <Slider />
      <div className="title">
        <br></br>
      </div>
      <div className="Pcontainer">
        <p className="paragraph">
          {" "}
          <h1 className="tittle0">Our Website:</h1> <br></br>It may happen that you do not know the Fiscal
          Power (CV) of your vehicle. This is often the case for vehicles
          purchased abroad. It is necessary to differentiate the Engine Power
          which is expressed in Horsepower (hp) and the Fiscal Power which is
          established by the State to calculate the Registration Tax on
          vehicles, expressed in Fiscal Horsepower (CV). For that we created
          this WebApp to help you out with
        </p>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Landpage;
