import Categories from "../components/categories/Categories";
import Ad from "../components/home/Ad";
import Banner from "../components/home/Banner";
import Features from "../components/home/Features";
import Wrapper from "../components/layouts/Wrapper";
import Products from "../components/products/Products";
import { useGetAllProductsQuery } from "../features/product/productApi";

const Home = () => {
  const { data: products, isLoading } = useGetAllProductsQuery();
  const featuredProducts = products?.filter(product => product.isFeatured === true);

  return (
    <Wrapper title="Home | Ecommerce">
      <Banner />
      <Features />
      <Categories />
      <Products title={"Featured Products"} products={featuredProducts} column={4} isLoading={isLoading} />
      <Ad />
      <Products title={"recomended for you"} products={products} isLoading={isLoading} column={4} />
    </Wrapper>
  );
};

export default Home;
