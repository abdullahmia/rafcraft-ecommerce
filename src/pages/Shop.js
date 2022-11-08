import Bredcrum from "../components/Bredcrum";
import Wrapper from "../components/layouts/Wrapper";
import Products from "../components/products/Products";
import ProductFilter from "../components/shop/ProductFilter";
import ProductFilterReset from "../components/shop/ProductFilterReset";
import { useGetAllProductsQuery } from "../features/product/productApi";

const Shop = () => {
  const { data: productsArray, isLoading } = useGetAllProductsQuery();
  

  return (
    <Wrapper title={"Shop | RAFCRAFT"}>
      <Bredcrum name={"Shop"} />

      <div className="container grid lg:grid-cols-4 gap-6 pt-4 pb-16 items-start relative">
        <ProductFilter />
        <div className="col-span-3">
          <ProductFilterReset />
          <Products column={3} isLoading={isLoading} products={productsArray} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Shop;
