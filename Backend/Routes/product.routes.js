import { Router } from "express";
import { productAdditionalInfoRequest, productCatalogRequest, productCreateRequest, productGeneralInfoRequest, productGetProgressRequest, productMediaInfoRequest, productUpdateRequest } from "../Controllers/product.controller.js";
import { upload } from "../middleware/multer.middleware.js";

const router = Router();

//TESTING
// router.get('/', (req, res) => {
//     res.send('Hello World /api/products');
// })
// router.get('/:productId', (req, res) => {
//     const productId = req.params.productId;
//     res.send('Hello World /api/products/'+productId);
// })


router.get('/:productId/progress', productGetProgressRequest);

router.post('/:productId/progress', productUpdateRequest);

router.post('/create-product', productCreateRequest );

router.post('/:productId/general-info', productGeneralInfoRequest );

router.post('/:productId/catalog-info', productCatalogRequest );

router.post('/:productId/additional-info', productAdditionalInfoRequest );

router.post('/:productId/media-info',upload.fields([
    {
        name : "frontImage" ,
        maxCount : 1
    },
    {
        name : "productGallary" , 
        maxCount : 8
    }
]) , productMediaInfoRequest);



export default router;
