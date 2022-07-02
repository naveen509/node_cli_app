
const fs=require('fs');
const path=require('path');
const {readFile,writeFile}=require("../utils");
const filepath=path.join(__dirname, "../../data/products.json");

const getProducts=async (req,res)=>{

    const products =await readFile(filepath);
    res.json(products);
    // res.send("In products");
};

const createProduct=async (req,res)=>{
    console.log(req.body);
    const newProduct=req.body;
    const products=await readFile(filepath);
    products.push(newProduct);
    console.log(products);

    await writeFile(filepath,products);

    res.send("New product added");
};

const deleteProduct= async (req, res)=>{

    const {id}=req.params;
    // console.log(req.params);

    const products=await readFile(filepath);
    const newProducts=products.filter((product)=>{
        if(product.id==parseInt(id)){
            return false;
        }
        return true;
    });

    // console.log(newProducts);
    await writeFile(filepath,newProducts);
    res.send("product deleted");

};

const updateProduct=async (req,res)=>{
    const {id}=req.params;
    const newData=req.body;
    const products=await readFile(filepath);

    const newProducts=products.map((p)=>{
        if(p.id===parseInt(id)){
            const newProduct={
                ...p,
                name:newData.name
            }

            return newProduct;
        }

        return p;
    });


    // console.log(newData);
    await writeFile(filepath,newProducts);
    res.send("Product updated");
   
};


module.exports={
getProducts,
createProduct,
deleteProduct,
updateProduct,

};