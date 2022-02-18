import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import NavBarList from "../../components/Navbar/Navigation";

function AdminDashboard() {
  return (
    <div>
      <Container>
        <NavBarList></NavBarList>
        <br />
      </Container>
      <Footer/>
    </div>
  );
}

export default AdminDashboard;
