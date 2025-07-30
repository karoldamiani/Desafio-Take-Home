'use client'
import Image from "next/image";
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Erro na requisição:', err);
        setLoading(false);
      });
  }, []);

  console.log (JSON.stringify(data, null, 2))

  return (
    <main className="">
      

         
    </main>
  );
}
