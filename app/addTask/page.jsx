import React from "react";

const AddTask = () => {
  return (
    <div>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Masukkan Judul Task" className="border border-slate-400 p-4 rounded" />
        <input type="text" placeholder="Masukkan Deskripsi Task" className="border border-slate-400 p-4 rounded" />
        <button type="submit" className="bg-green-600 text-white font-bold py-3 px-4 w-fit">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;