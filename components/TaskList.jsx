import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const TaskList = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-2xl/normal font-bold mb-1">Judul Task</h1>
        <p className="text-sm/normal text-slate-600">Deskripsi Task</p>
      </div>
      <div className="flex gap-2">
        <RemoveBtn />
        <Link href={"/editTask/123"}>
          <HiPencilAlt size={24} />
        </Link>
      </div>
    </div>
  );
};

export default TaskList;
