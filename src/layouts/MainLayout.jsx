import Navbar from "../components/Navbar/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="w-100">
      <Navbar />
      {children}
    </div>
  );
}

export default MainLayout;