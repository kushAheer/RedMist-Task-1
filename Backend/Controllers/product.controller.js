import MediaInfo from "../Models/media_info.model.js";
import AdditionalInfo from "../Models/additional_info.model.js";
import Catalog from "../Models/catalog.model.js";
import GeneralInfo from "../Models/general_info.model.js";
import Product from "../Models/product.model.js";
import Progress from "../Models/progress.model.js";

//GET REQUEST

export const productGetProgressRequest = async (req, res) => {

    try {
        const {productId} = req.params;
        
        const product = await Product.findById(productId);

        if(!product){
            return res.status(404).json({message: "Product Not Found"});
        }

        const productProgress = await Progress.find({productId});

        if(!productProgress){
            return res.status(404).json({message: "Product Progress Not Found"});
        }

        res.status(200).json({success : true , message: "Product Progress Retrieved Successfully" , data : productProgress});



        
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"});
    }
};

//POST REQUEST
export const productUpdateRequest = async (req, res) => {
    try {

        const {productId} = req.params;
        const {step} = req.body;
        if(!step){
            return res.status(400).json({message: "Progress is Required"});
        }
        
        const product = await Product.findById(productId);
        
        if(!product){
            return res.status(404).json({message: "Product Not Found"});
        }
        

        const progressStatus = await Progress.create(
            {
                productId , 
                progressStatus : step
            });

        if(!progressStatus){
            return res.status(500).json({message: "Product Progress Creation Failed"});
        }

        await progressStatus.save();

        res.status(200).json({success : true , message: "Product Progress Updated Successfully" , data : progressStatus});
        
    } catch (error) {
        res.status(500).json({message: " Server Error" , error : error.message});
        
    }
};

export const productCreateRequest = async (req, res) => {

    try {
        
        const {name , description , price} = req.body;
        
        if(!name || !description || !price){

            return res.status(400).json({message: "All Fields are Required"});

        }

        if(name.length < 10 ){

            return res.status(400).json({message: "Product Name must exceed 10 characters"});
        }
        if(description.length > 100 ){
                
            return res.status(400).json({message: "Product Description must not exceed 100 characters"});
        }
        if(price < 0 ){
            return res.status(400).json({message: "Product Price must be greater than 0"});
        }

        const product = await Product.create({name, description, price});

        
        if(!product){
            return res.status(500).json({message: "Product Creation Failed"});
        }
        await product.save();



        return res.status(200).json({success : true , message: "Product Created Successfully" ,data : product});

    } catch (error) {
        res.status(500).json({message: "Internal Server Error"});
    }

};

export const productGeneralInfoRequest = async (req, res) => {

    try {
        const {productId} = req.params;
        
        const {category , brand , model , color , warranty} = req.body;

        if(!category || !brand || !model || !color || !warranty){
            
            return res.status(400).json({message: "All Fields are Required"});

        }

        if(brand.length > 25){
            
            return res.status(400).json({message: "Product Brand must not exceed 25 characters"});

        }

        const product = await Product.findById(productId);

        if(!product){
            return res.status(404).json({message: "Product Not Found"});
        }

        const generalInfo = await GeneralInfo.create({productId , category , brand , model , color , warranty});

        if(!generalInfo){
            return res.status(500).json({message: "Product General Info Creation Failed"});
        }

        await generalInfo.save();


        res.status(200).json({success : true ,message: "Product General Info Updated Successfully" , data : generalInfo});




        
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"});
    }
};

export const productCatalogRequest = async (req, res) => {

    try {
        const {productId} = req.params;
        const {stockQuantity , discount , discountStartDate , discountEndDate } = req.body;
        
        if(!stockQuantity){
            return res.status(400).json({message: "Stock Quantity is Required"});

        }

        if(stockQuantity < 0){
            return res.status(400).json({message: "Stock Quantity must be greater than 0"});

        }

        const product = await Product.findById(productId);

        if(!product){
            return res.status(404).json({message: "Product Not Found"});
        }
        
        const productCatalog = await Catalog.create({productId , stockQuantity , discount , discountStartDate , discountEndDate});

        

        if(!productCatalog){
            return res.status(500).json({message: "Product Catalog Creation Failed"});

        }
        await productCatalog.save();

        
        res.status(200).json({success : true ,message: "Product Catalog Updated Successfully" ,data : productCatalog});

    } catch (error) {

        res.status(500).json({message: "Internal Server Error"});

    }
};

export const productAdditionalInfoRequest = async (req, res) => {

    try {
        const {productId} = req.params;
        const {weight , material , otherInfo} = req.body;

        if(!weight || !material){
            return res.status(400).json({message: "All Fields are Required"});

        }

        if(weight < 0){
            return res.status(400).json({message: "Product Weight must be greater than 0"});

        }
        const product = await Product.findById(productId);

        if(!product){
            return res.status(404).json({message: "Product Not Found"});
        }


        const additionalInfo = await AdditionalInfo.create({productId , weight , material , otherInfo});

        if(!additionalInfo){
            return res.status(500).json({message: "Product Additional Info Creation Failed"});
        }

        await additionalInfo.save();

        return res.status(200).json({success : true ,message: "Product Additional Info Updated Successfully" , data : additionalInfo});

        
        
        
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"});
    }
};

export const productMediaInfoRequest = async (req, res) => {

    try {
        
        const {productId} = req.params;
        
        const {frontImage , productGallary} = req.files;

        if(!frontImage || !productGallary){
            return res.status(400).json({message: "All Fields are Required"});
        }

        const product = await Product.findById(productId);

        if(!product){
            return res.status(404).json({message: "Product Not Found"});
        }

        const frontImageName = frontImage[0].filename;
        const productGallaryNames = productGallary[0].filename;

        const productImage = await  MediaInfo.create(
            { 
                productId , 
                frontImage : frontImageName ,
                productGallary :  productGallaryNames
            }
        );

        if(!productImage){
            return res.status(500).json({message: "Product Media Info Creation Failed"});
        }

        await product.save();

        return res.status(200).json({success : true, message: "Product Media Info Updated Successfully" , data : productImage});


    } catch (error) {
        res.status(500).json({message: "Internal Server Error"});
    }
};