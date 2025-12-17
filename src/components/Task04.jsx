import React, { useEffect, useState } from "react";
import Task04_card from "./Task04_card";
import axios from "axios"

const Task04 = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProductsData();
  }, []);
  return (
    <div>
      {products.map((product) => (
        <Task04_card
          key={product.id}
          name={product.name}
          email={product.email}
          phone={product.phone}
          website={product.website}
        />
      ))}
    </div>
  );
};

export default Task04;
