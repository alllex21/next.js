"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      const response = axios.post("/api/auth/login", {
        username: username,
        password: password,
      });
      alert("Login successful");
      router.push("/");
    } catch (error) {
      alert("Login failed: " + error.response?.data?.message || "Unknown error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input
          type="input-text"
          placeholder="username"
          value={email}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Login
        </button>
      </form>
    </div>
  );
}