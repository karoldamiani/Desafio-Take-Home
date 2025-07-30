"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro na requisição:", err);
        setLoading(false);
      });
  }, []);

  return (
    <main className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {data.map((user) => (
        <div className="bg-white shadow-sm border border-slate-200 rounded-lg">
          <div className="p-4">
            <h5 className="mb-2 text-slate-800 text-xl font-semibold">
              {user.name}
            </h5>
            <p className="text-slate-600 leading-normal font-light">
              📧 {user.email}
            </p>
            <p className="text-slate-600 leading-normal font-light">
              📍 {user.address.city}
            </p>
          </div>
        </div>
      ))}
    </main>
  );
}
