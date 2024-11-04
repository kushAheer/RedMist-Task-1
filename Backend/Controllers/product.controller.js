//GET REQUEST

export const productGetProgressRequest = async (req, res) => {

    try {
        const {productId} = req.params;
        console.log(productId);
        res.status(200).json({message: "Product Progress Retrieved Successfully"});
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"});
    }
};

//POST REQUEST
export const productUpdateRequest = async (req, res) => {};




export const productCreateRequest = async (req, res) => {

    try {
        const {productId} = req.params;
        const {product} = req.body;
        console.log(productId);
        console.log(product);
        res.status(200).json({message: "Product Created Successfully"});
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"});
    }

};

export const productGeneralInfoRequest = async (req, res) => {

    try {
        const {productId} = req.params;
        const {product} = req.body;
        console.log(productId);
        console.log(product);
        res.status(200).json({message: "Product General Info Updated Successfully"});
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"});
    }
};

export const productCatalogRequest = async (req, res) => {

    try {
        const {productId} = req.params;
        const {product} = req.body;
        console.log(productId);
        console.log(product);
        res.status(200).json({message: "Product Catalog Updated Successfully"});
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"});
    }
};


export const productAdditionalInfoRequest = async (req, res) => {

    try {
        const {productId} = req.params;
        const {product} = req.body;
        console.log(productId);
        console.log(product);
        res.status(200).json({message: "Product Additional Info Updated Successfully"});
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"});
    }
};

export const productMediaInfoRequest = async (req, res) => {

    try {
        const {productId} = req.params;
        const {product} = req.body;
        console.log(productId);
        console.log(product);
        res.status(200).json({message: "Product Media Info Updated Successfully"});
    } catch (error) {
        res.status(500).json({message: "Internal Server Error"});
    }
};






