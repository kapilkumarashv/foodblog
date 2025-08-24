"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "./lib/auth";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    const success = loginUser(username, password);
    if (success) {
      alert("Login successful");
      router.push("/main");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} /><br /><br />
      <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
      <button onClick={handleLogin}>Login</button><br /><br />
      <button onClick={() => router.push("/register")}>Register</button>
    </div>
  );
}
