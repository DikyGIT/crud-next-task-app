"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const AddTask = () => {
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const router = useRouter();

  // console.log(judul, deskripsi);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!judul || !deskripsi) {
      alert("Judul dan Deskripsi tidak boleh kosong.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/tasks", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ judul, deskripsi }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Gagal membuat data Task.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input onChange={(e) => setJudul(e.target.value)} value={judul} type="text" placeholder="Masukkan Judul Task" className="border border-slate-400 p-4 rounded" />
        <input onChange={(e) => setDeskripsi(e.target.value)} value={deskripsi} type="text" placeholder="Masukkan Deskripsi Task" className="border border-slate-400 p-4 rounded" />
        <button type="submit" className="bg-green-600 text-white font-bold py-3 px-4 w-fit">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
