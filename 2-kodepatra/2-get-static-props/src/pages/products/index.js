import fs from "fs";
import path from "path";
import process from "process";

function Products(props) {
  const { products } = props;
  return (
    <div>
      <h1>This is Products Page</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-data.json");
  const data = await fs.promises.readFile(filePath);
  const productData = JSON.parse(data);

  return {
    props: {
      products: productData.products,
    },
    // revalidate: 10, // In production server, it will delay 10 second for waiting fetch data
  };
}

export default Products;
