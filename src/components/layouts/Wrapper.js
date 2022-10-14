import { useEffect } from "react";
import Footer from "../Footer";
import Header from "../Header";

const Wrapper = ({ children, title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Wrapper;
