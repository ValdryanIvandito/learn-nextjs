import fs from "fs";
import path from "path";
import process from "process";

function ProductDetail(props) {
  const { loadedProduct } = props;
  console.log(loadedProduct);
  return (
    <div>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.product_id;
  const productData = await getData();

  const productDetail = productData.products.find(
    (product) => product.id === productId
  );

  return {
    props: {
      loadedProduct: productDetail,
    },
  };
}

export async function getStaticPaths() {
  const productData = await getData();
  const ids = productData.products.map((product) => product.id);
  // console.log(ids);

  // expected format
  // [
  //   { params: { product_id: "p1" } },
  //   { params: { product_id: "p2" } },
  //   { params: { product_id: "p3" } },
  // ]

  const params = ids.map((id) => ({ params: { product_id: id } }));
  // console.log(params);

  return {
    paths: params,
    fallback: false, // it will redirect to 404 page not found
  };
}

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-data.json");
  const data = await fs.promises.readFile(filePath);
  const productData = JSON.parse(data);

  return productData;
}

export default ProductDetail;
