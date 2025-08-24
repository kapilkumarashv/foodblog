"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { foodItems } from "@/foodData"; // ✅ use @/ for root import

export default function FoodsPage() {
  const [items, setItems] = useState([]);
  const router = useRouter();
  const search = useSearchParams();

  useEffect(() => {
    const cat = search.get("category");
    setItems(cat ? foodItems.filter(i => i.cat === cat) : foodItems);
  }, [search]);

  return (
    <div>
      <h1>Foods</h1>
      <div className="food-grid">
        {items.map(i => (
          <div
            key={i.id}
            className="food-card"
            onClick={() => router.push(`/food/${i.id}`)}
          >
            <img src={i.img} alt={i.name} />
            <div className="info">
              <h3>{i.name}</h3>
              <p>{i.desc}</p>
              <p>{i.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
