import EditTaskForm from "@/components/EditTaskForm";

const getTaskById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/tasks/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch Tasks.");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const EditTask = async ({ params }) => {
  const { id } = await params;
  const { data } = await getTaskById(id);
  const { judul, deskripsi } = data;
  console.log("id: ", id);

  return (
    <div>
      <EditTaskForm id={id} judul={judul} deskripsi={deskripsi} />
    </div>
  );
};

export default EditTask;
