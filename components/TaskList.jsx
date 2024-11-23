import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getTask = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/tasks", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch Tasks!");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const TaskList = async () => {
  const { data } = await getTask();

  // console.log(data);

  return (
    <>
      {data.map((t) => (
        <div className="flex justify-between items-center py-4 px-6" key={t._id}>
          <div>
            <h1 className="text-2xl/normal font-bold mb-1">{t.judul}</h1>
            <p className="text-sm/normal text-slate-600">{t.deskripsi}</p>
          </div>
          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/editTask/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default TaskList;
