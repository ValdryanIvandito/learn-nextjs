import { useRouter } from "next/router";

function ProductDetail() {
  const router = useRouter();
  console.log(router.query);
  const id = router.query.product_id;

  return (
    <div>
      <h1>This is The Detail of Product With ID Number: {id}</h1>
    </div>
  );
}

export default ProductDetail;
