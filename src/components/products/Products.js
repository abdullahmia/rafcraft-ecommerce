import ProductLoaders from "../loaders/ProductLoaders";
import Product from "./Product";

const Products = ({ title, products, column, isLoading }) => {
  let columnStyle = column ? `lg:grid-cols-${column}` : `lg:grid-cols-3`;

  

  return (
    <div className="container pb-16">
      {
        isLoading ? <ProductLoaders column={column} /> : (<>
          <h2 className="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">
            {title}
          </h2>
          {/* <!-- product wrapper --> */}
          <div className={`grid ${columnStyle} sm:grid-cols-2 gap-6`}>
            {/* <!-- single product --> */}
            {
              products?.map((product, key) => (
                <Product key={key} product={product} />
              ))
            }

            {/* <!-- single product end --> */}
          </div>
          {/* <!-- product wrapper end --> */}
        </>)
      }      
    </div>
  );
};

export default Products;
