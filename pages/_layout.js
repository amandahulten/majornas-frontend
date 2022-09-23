import Nav from "../components/Navigation/Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  );
};

export default Layout;
