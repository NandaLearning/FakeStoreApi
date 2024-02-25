import express from "express"
import cors from "cors"
import { getStore,getStoreById } from "./controller/fakeStoreController.js"

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.get("/store",getStore)
app.get("/store/:id",getStoreById)





app.listen(port, () => {
    console.log("server jalan...")
})