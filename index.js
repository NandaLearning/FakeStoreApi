import express from "express"
import cors from "cors"
import { getStore,createStore,updateStoreById,deleteStoreById } from "./controller/fakeStoreController.js"

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.get("/store",getStore)
app.post("/store",createStore)
app.put("/store/:id",updateStoreById)
app.delete("/store/:id",deleteStoreById)





app.listen(port, () => {
    console.log("server jalan...")
})