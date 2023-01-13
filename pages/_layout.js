import Nav from "../components/Navigation/Nav";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className="bg-whiteish px-4 md:px-16 lg:px-24 xl:px-40">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
