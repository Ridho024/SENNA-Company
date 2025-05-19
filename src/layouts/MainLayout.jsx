import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="w-100">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;