import { useState, useEffect } from "react";

function SalesPage(props) {
  const [sales, setSales] = useState(props.sales);

  useEffect(() => {
    fetch(
      "https://next-backend-d11b0-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const salesArray = [];
        for (const key in data) {
          salesArray.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          });
        }
        console.log(salesArray);
        setSales(salesArray);
      });
  }, []);

  if (!sales) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sales.id}>
          {sale.username} - {sale.volume}
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://next-backend-d11b0-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json"
  );
  const data = await response.json();
  const salesArray = [];
  for (const key in data) {
    salesArray.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    });
  }
  // return { props: { sales: salesArray }, revalidate: 10 };
  return { props: { sales: salesArray } };
}

export default SalesPage;
