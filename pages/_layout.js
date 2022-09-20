import Nav from "../components/Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className="bg-whiteish px-4">{children}</main>
    </>
  );
};

export default Layout;
