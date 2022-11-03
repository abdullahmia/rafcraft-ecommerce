import { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Footer from "../Footer";
import Header from "../Header";

const Wrapper = ({ children, title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);


  let location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location])

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Wrapper;
