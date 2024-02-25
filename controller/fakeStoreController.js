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



export const createStore = async (req,res) => {
    try{
        const { nama_product,gambar_product,harga,deskripsi,rating } = req.body
        const data = await prisma.store.create({
            data:{
                nama_product:nama_product,
                gambar_product:gambar_product,
                harga:Number(harga),
                deskripsi:deskripsi,
                rating:Number(rating)
            }
        })
        res.send(data)
    }catch(error){
        console.log(error)
    }
}

export const updateStoreById = async (req,res) => {
    try{
        const { nama_product,gambar_product,harga,deskripsi,rating } = req.body
        const { id } = req.params
        const data = await prisma.store.update({
            where:{
                id:Number(id)
            },
            data:{
                nama_product:nama_product,
                gambar_product:gambar_product,
                harga:Number(harga),
                deskripsi:deskripsi,
                rating:Number(rating)
            }
        })
        res.send(data)
    }catch(error){
        console.log(error)
    }
}


export const deleteStoreById = async (req,res) => {
    try{
        const { id } = req.params
        const data = await prisma.store.delete({
            where:{
                id:Number(id)
            }
        })
        res.send(data)
    }catch(error){
        console.log(error)
    }
}

