import Link from "next/link";

const Navbar = () => {
  return (
    <div className="py-4 px-6 bg-slate-800 text-white flex items-center justify-between">
      <div>
        <Link href={"/"} className="text-xl font-bold">
          Ngoding.
        </Link>
      </div>
      <div>
        <Link href={"/addTask"} className="bg-slate-100 text-black py-2 px-4 font-bold border-none shadow-none rounded">
          Add Task
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
