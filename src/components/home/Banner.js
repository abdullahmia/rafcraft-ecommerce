import { Link } from "react-router-dom";
import bannerBg from "../../assets/images/banner-bg.jpg";

const Banner = () => {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center py-36 relative"
      style={{
        background: `url(${bannerBg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        {/* <!-- banner content --> */}
        <h1 className="xl:text-6xl md:text-5xl text-4xl text-gray-800 font-medium mb-4">
          Best Collection For <br className="hidden sm:block" /> Home Decoration
        </h1>
        <p className="text-base text-gray-600 leading-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa{" "}
          <br className="hidden sm:block" />
          assumenda aliquid inventore nihil laboriosam odio
        </p>
        {/* <!-- banner button --> */}
        <div className="mt-12">
          <Link
            to={"/shop"}
            className="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md uppercase hover:bg-transparent
               hover:text-primary transition"
          >
            Shop now
          </Link>
        </div>
        {/* <!-- banner button end -->
            <!-- banner content end --> */}
      </div>
    </div>
  );
};

export default Banner;
