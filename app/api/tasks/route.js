import connectMongoDB from "@/libs/mongodb";
import Task from "@/models/task";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { judul, deskripsi } = await request.json();
  await connectMongoDB();
  await Task.create({ judul, deskripsi });
  return NextResponse.json({ message: "Data Successfully Created." }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const data = await Task.find();
  return NextResponse.json({ data }, { status: 200 });
}

export async function DELETE(request) {
  const id = await request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  // console.log(id);
  await Task.findByIdAndDelete(id);
  return NextResponse.json({ message: "Data Successfully Deleted." }, { status: 200 });
}
