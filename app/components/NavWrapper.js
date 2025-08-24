"use client";

import { usePathname } from "next/navigation";

export default function NavWrapper({ children }) {
  const pathname = usePathname();
  const hideNavbar = pathname === "/" || pathname === "/register";

  return (
    <>
      {!hideNavbar && (
        <header>
          <div className="navbar">
            <a href="/main">Home</a>
            <a href="/foods">Foods</a>
            <a href="/categories">Categories</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>
        </header>
      )}
      <main className="container">{children}</main>
    </>
  );
}
