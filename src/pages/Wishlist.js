import Bredcrum from "../components/Bredcrum";
import AccountWrapper from "../components/layouts/AccountWrapper";
import Wrapper from "../components/layouts/Wrapper";
import WishListProduct from "../components/WishListProduct";

const Wishlist = () => {
  return (
    <Wrapper title="My Wishlist">
      <Bredcrum name="Account" name2="My Wishlist" />
      <AccountWrapper>
        <div className="col-span-9 mt-6 lg:mt-0 space-y-4">
          {/* <!-- single wishlist --> */}
          <WishListProduct />
          <WishListProduct />
          <WishListProduct />

          {/* <!-- single wishlist end --> */}
        </div>
      </AccountWrapper>
    </Wrapper>
  );
};

export default Wishlist;
