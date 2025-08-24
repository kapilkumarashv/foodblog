"use client";
import { useRouter } from "next/navigation";

export default function CategoriesPage() {
  const router = useRouter();
  const categories = ["Pizza", "Burger", "Salad", "Drinks", "Desserts"];

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>
            <button onClick={() => router.push(`/foods?category=${cat}`)}>
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
