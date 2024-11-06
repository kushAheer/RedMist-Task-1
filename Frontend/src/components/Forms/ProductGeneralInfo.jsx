
import React from 'react'
import { useForm } from 'react-hook-form'
import Card from '../UI/Card';
import classes from './Form.module.css'
import toast from 'react-hot-toast';
import InputErrorHandler from '../UI/InputErrorHandler';
import { useDispatch } from 'react-redux';
import { incrementStep } from '../../Context/Slices/ProgressSlice';
import { useSelector } from 'react-redux';
import { setProductGeneralInfo } from '../../Context/Slices/ProductSlice';

function ProductGeneralInfo() {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const product = useSelector(state => state.product.productDetails);

    async function onSubmit(data) {
        
        const productData = {
            category: data.category,
            brand: data.brand,
            model: data.model,
            color: data.color,
            warranty: data.warranty
        }
        
        const response = await fetch(`http://localhost:5000/api/products/${product._id}/general-info`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        
        const responseData = await response.json();
        
        if(responseData.success != true){
            toast.error(responseData.message);
            return;
        }
        const progressResponse = await fetch(`http://localhost:5000/api/products/${product._id}/progress`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({step: 2})
        })
        const progressData = await progressResponse.json();

        if(progressData.success != true){
            toast.error(progressData.message);
            return;
        }



        dispatch(setProductGeneralInfo(responseData.data));
        dispatch(incrementStep());
    }

    console.log(errors);
    return (
        <>
            <Card>
                <div className={`${classes.titleWrapper}`}>

                    <h1 className={`${classes.title}`}>Product General Info</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className={`${classes.formWrapper}`}>


                    <div className={`${classes.formItem}`}>

                        <input type="text" className={` ${classes.formInput}`} placeholder="Enter Product Category"
                            {...register("category", {
                                required: "Product Category is required",
                            })} />
                        <InputErrorHandler message={errors.category != undefined ? errors.category.message : ""} />
                    </div>

                    <div className={`${classes.formItem}`}>

                        <input
                            type='text'
                            className={` ${classes.formInput}`}
                            placeholder="Enter Product brand"

                            {...register("brand", {
                                required: "Product Brand is Required", maxLength: {
                                    value: 25,
                                    message: "This input must not exceed 25 characters"
                                }
                            })}

                        ></input>
                        <InputErrorHandler message={errors.brand != undefined ? errors.brand.message : ""} />
                    </div>
                    <div className={`${classes.formItem}`}>

                        <input type="text" className={` ${classes.formInput}`} placeholder="Enter Product Model"
                            {...register("model", { required: "Product Model is Required" })} />
                        <InputErrorHandler message={errors.model != undefined ? errors.model.message : ""} />
                    </div>
                    <div className={`${classes.formItem}`}>

                        <input type="text" className={` ${classes.formInput}`} placeholder="Enter Product Color"
                            {...register("color", { required: "Product color is Required" })} />
                        <InputErrorHandler message={errors.color != undefined ? errors.color.message : ""} />
                    </div>
                    <div className={`${classes.formItem}`}>

                        <input type="text" className={` ${classes.formInput}`} placeholder="Enter Product Warranty"
                            {...register("warranty", { required: "Product warranty is Required" })} />
                        <InputErrorHandler message={errors.warranty != undefined ? errors.warranty.message : ""} />
                    </div>


                    <input className={`${classes.submitButton}`} type="submit" />
                </form>
            </Card>
        </>
    )
}

export default ProductGeneralInfo
