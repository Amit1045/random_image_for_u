import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.render("index.ejs",
    {
        wone:600,
        hone:600
    }); 
});

app.post("/submit", async (req, res) => {
    const ho=req.body.hon;
    const wo=req.body.won;
    res.render("index.ejs",{
        wone:wo,
        hone:ho
    });
});


app.listen(port, () => {
    console.log(`Server is  running on ${port}..`);
});