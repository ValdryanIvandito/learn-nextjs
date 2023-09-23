import { useState, useEffect } from "react";

function SalesPage() {
  const [sales, setSales] = useState([]);

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

export default SalesPage;
