import Categories from "../components/categories/Categories";
import Ad from "../components/home/Ad";
import Banner from "../components/home/Banner";
import Features from "../components/home/Features";
import Wrapper from "../components/layouts/Wrapper";
import Products from "../components/products/Products";

const Home = () => {
  return (
    <Wrapper title="Home | Ecommerce">
      <Banner />
      <Features />
      <Categories />
      <Products title={"top new arrival"} column={4} />
      <Ad />
      <Products title={"recomended for you"} column={4} />
    </Wrapper>
  );
};

export default Home;
