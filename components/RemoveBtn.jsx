"use client";

import React from "react";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

const RemoveBtn = ({ id }) => {
  const router = useRouter();

  const removeTask = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/tasks?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button onClick={removeTask}>
      <HiOutlineTrash size={24} className="text-red-400" />
    </button>
  );
};

export default RemoveBtn;
