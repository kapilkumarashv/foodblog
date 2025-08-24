"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { foodItems } from "/foodData";

export default function FoodPage() {
  const [foods, setFoods] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setFoods(foodItems); // simulate fetch
  }, []);

  return (
    <div>
      <h1>Available Foods</h1>
      {foods.map((item) => (
        <div key={item.id} onClick={() => router.push(`/food/${item.id}`)} style={{ cursor: "pointer" }}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>{item.price}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
