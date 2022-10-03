import Nav from "../components/Navigation/Nav";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className="bg-whiteish px-4">{children}</main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
