import connectMongoDB from "@/libs/mongodb";
import Task from "@/models/task";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = await params;
  const { judulBaru: judul, deskripsiBaru: deskripsi } = await request.json();
  await Task.findByIdAndUpdate(id, { judul, deskripsi });
  return NextResponse.json({ message: "Data Successfully Updated." }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = await params;
  await connectMongoDB();
  const data = await Task.findOne({ _id: id });
  return NextResponse.json({ data }, { status: 200 });
}
