import Product from "./Product";

const Products = ({ title, products, column }) => {
  let columnStyle = column ? `lg:grid-cols-${column}` : `lg:grid-cols-3`;
  return (
    <div className="container pb-16">
      <h2 className="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">
        {title}
      </h2>
      {/* <!-- product wrapper --> */}
      <div className={`grid ${columnStyle} sm:grid-cols-2 gap-6`}>
        {/* <!-- single product --> */}
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />

        {/* <!-- single product end --> */}
      </div>
      {/* <!-- product wrapper end --> */}
    </div>
  );
};

export default Products;
