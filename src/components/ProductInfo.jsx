const ProductInfo = () => {
  const product = {
    name: "Laptop",
    price: "$1200",
    availability: "In Stock",
  };
  return (
    <div>
      <ul>
        <li>Product name : {product.name}</li>
        <li>Price: {product.price}</li>
        <li>Availability: {product.availability}</li>
      </ul>
    </div>
  );
};

export default ProductInfo;
