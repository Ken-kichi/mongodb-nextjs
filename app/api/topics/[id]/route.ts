import connectMongoDB from "@/lib/mongodb";
import Topic from "@/models/topic";
import { NextRequest } from "next/server";

export const PUT = async (request: NextRequest, { params }: { params: { id: string } }) => {
    const {id} = params
    const {newTitle:title,newDescription:description,__v:__v} = await request.json()
    await connectMongoDB()
    await Topic.findByIdAndUpdate(id,{title,description,__v:__v})
    return Response.json({message:"トピックを更新しました。"},{status:200})
}

export const GET = async (request: NextRequest, { params }: { params: { id: string } }) => {
    const {id} = params
    await connectMongoDB()
    const topic = await Topic.findOne({_id:id})
    return Response.json({topic},{status:200})
}

export const DELETE = async (request: NextRequest, { params }: { params: { id: string } }) => {
    const {id} = params
    await connectMongoDB()
    await Topic.findByIdAndDelete(id)
    return Response.json({message:"トピックを削除しました。"},{status:200})
}


