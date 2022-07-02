const express=require("express");
const app=express();
const PORT=4200;

// routes

const productRouter=require("./routes/productRoutes");

app.use(express.json());
app.use("/products",productRouter);

app.get("/",(req,res)=>{

    res.send("welcome to Shop API");
});


app.listen(PORT,()=>{
console.log(`listening on PORT : ${PORT}`);
});