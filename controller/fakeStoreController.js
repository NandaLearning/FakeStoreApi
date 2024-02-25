import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const getStore = async (req,res) => {
    try{
        const data = await prisma.store.findMany()
        res.send(data)
    }catch(error){
        console.log(error)
    }
}


export const getStoreById = async (req,res) => {
    try{
        const {id} = req.params
        const data = await prisma.store.findUnique({
            where:{
                id:Number(id)
            }
        })
        res.send(data)
    }catch(error){
        console.log(error)
    }
}
