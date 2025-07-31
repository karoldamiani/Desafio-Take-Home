"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('')
  

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro na requisição:", err);
        setLoading(false);
      });
  }, []);

  const filteredUsers = users.filter((user) => 
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
      <div className="col-span-3 max-w-sm mt-2">
        <div className="col-span-1">
          <div className="relative flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600">
              <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
            </svg>
        
            <input
            className="bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Name or e-mail" 
            value={search}
            onChange={(ev) => setSearch(ev.target.value)} 
            />
            
            <button
              className="rounded-md bg-slate-800 py-2 px-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
              type="button"
            >
              Search
            </button> 
          </div>         
        </div>

      </div>

      {filteredUsers.map((user) => (
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
