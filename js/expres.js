import express from "express"
import cors from "cors"
import { promises as fs } from "fs"
const app = express()
app.use(cors())
app.use(express.json())

app.post("/data", async (req, res) => {
    const data = req.body.data
    let olddata = await fs.readFile("data.json", "utf8", ((err, data) => {
        if (err) {
            console.log(err, 1)
        }
        else {
            console.log(2);
        }
    }))
    olddata = await JSON.parse(olddata)
    olddata.push(data);
    fs.writeFile("data.json", JSON.stringify(olddata))
})

app.get("/reports", async (req, res) => {
    let data = await fs.readFile("data.json", "utf8", ((err, data) => {
        if (err) {
            console.log(err, 1)
        }
        else {
            console.log(2);
        }
    }))
    console.log(data);
    res.json({data})
    
})


app.listen("5000", () => {
    console.log("server run ...");
})