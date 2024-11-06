import React from 'react'
import { useForm } from 'react-hook-form'
import Card from '../UI/Card';
import classes from './Form.module.css'
import { ErrorMessage } from "@hookform/error-message";
import InputErrorHandler from '../UI/InputErrorHandler';
import { useDispatch } from 'react-redux';
import { incrementStep } from '../../Context/Slices/ProgressSlice';
import toast from 'react-hot-toast';
import { setProductDetails } from '../../Context/Slices/ProductSlice';

function ProductCreate() {

    const {register, formState: { errors }, handleSubmit } = useForm();

    const dispatch = useDispatch();

    async function onSubmit(data) {
        
        
        const productData = {
            name: data.name,
            description: data.description,
            price: data.price
        }
        
        const response = await fetch("/api/products/create-product",{
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
        
        const progressResponse = await fetch(`/api/products/${responseData.data._id}/progress`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({step: 1})
        })
        const progressData = await progressResponse.json();

        if(progressData.success != true){
            toast.error(progressData.message);
            return;
        }
        dispatch(setProductDetails(responseData.data));
        dispatch(incrementStep());


    }
    
    console.log(errors);


    return (
        <>
            <Card>
                <div className={`${classes.titleWrapper}`}>

                    <h1 className={`${classes.title}`}>Product Create</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className={`${classes.formWrapper}`}>


                    <div className={`${classes.formItem}`}>

                        <input type="text" className={` ${classes.formInput}`} placeholder="Product Name"
                            {...register("name", {
                                required: "Product Name is required",

                                minLength: {
                                    value: 10,
                                    message: "This input must exceed 10 characters"
                                }
                            })} />
                        <InputErrorHandler message={errors.name != undefined ? errors.name.message : "" } />
                    </div>

                    <div className={`${classes.formItem}`}>

                        <textarea
                            className={` ${classes.formInput}`}
                            placeholder="Enter Product Description"

                            {...register("description", {
                                required: "Product Description is Required", maxLength: {
                                    value: 100,
                                    message: "This input must not exceed 100 characters"
                                }
                            })}

                        ></textarea>
                        <InputErrorHandler message={errors.description != undefined ? errors.description.message : "" } />
                    </div>
                    <div className={`${classes.formItem}`}>

                        <input type="number" min={0} className={` ${classes.formInput}`} placeholder="Enter Product Price"
                        {...register("price", { required: "Product Price is Required" })} />
                        <InputErrorHandler message={errors.price != undefined ? errors.price.message : "" } />
                    </div>

                
                    <input className={`${classes.submitButton}`} type="submit" />
                </form>
            </Card>

        </>
    )
}

export default ProductCreate
