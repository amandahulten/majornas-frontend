import Nav from "../components/Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className="px-4">{children}</main>
    </>
  );
};

export default Layout;
