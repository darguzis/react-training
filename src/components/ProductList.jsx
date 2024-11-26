const ProductList = () => {
  const products = [
    { id: 1, name: "Phone", price: "$700" },
    { id: 2, name: "Laptop", price: "$1500" },
    { id: 3, name: "Tablet", price: "$500" },
  ];
  return (
    <div>
      {products.map((product) => (
        <ul key="{product.id}">
          <li>{product.name}</li>
          <li>{product.price}</li>
        </ul>
      ))}
    </div>
  );
};

export default ProductList;
