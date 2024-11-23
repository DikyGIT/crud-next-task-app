"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const EditTaskForm = ({ id, judul, deskripsi }) => {
  const router = useRouter();

  const [judulBaru, setJudulBaru] = useState(judul);
  const [deskripsiBaru, setDeskripsiBaru] = useState(deskripsi);

  // console.log({ judulBaru, deskripsiBaru });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ judulBaru, deskripsiBaru }),
      });

      if (!res.ok) {
        throw new Error("Failed to fetch Task.");
      }

      router.push("/");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input onChange={(e) => setJudulBaru(e.target.value)} value={judulBaru} type="text" placeholder="Masukkan Judul Task" className="border border-slate-400 p-4 rounded" />
      <input onChange={(e) => setDeskripsiBaru(e.target.value)} value={deskripsiBaru} type="text" placeholder="Masukkan Deskripsi Task" className="border border-slate-400 p-4 rounded" />
      <button type="submit" className="bg-green-600 text-white font-bold py-3 px-4 w-fit">
        Update Task
      </button>
    </form>
  );
};

export default EditTaskForm;
