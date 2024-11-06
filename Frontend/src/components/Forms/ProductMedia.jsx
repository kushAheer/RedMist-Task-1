import React from 'react'
import { useForm } from 'react-hook-form'
import Card from '../UI/Card';
import classes from './Form.module.css'
import toast from 'react-hot-toast';

import InputErrorHandler from '../UI/InputErrorHandler';
import { useDispatch, useSelector } from 'react-redux';
import { incrementStep } from '../../Context/Slices/ProgressSlice';
import { setProductMediaInfo } from '../../Context/Slices/ProductSlice';
function ProductMedia() {



    const { register, formState: { errors }, handleSubmit } = useForm();
    
    const dispatch = useDispatch();
    const product = useSelector(state => state.product.productDetails);

    async function onSubmit(data) {
        console.log(data);
        const formData = new FormData();

        formData.append('frontImage', data.frontImage[0]);
        formData.append('productGallary', data.productGallary[0]);

        
        
        const response  = await fetch(`http://localhost:5000/api/products/${product._id}/media-info`, {
            method: "POST",
            // credentials: 'include',

            body: formData
        })
        if(response.status != 200){
            toast.error("Something went wrong");
        }
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
            body: JSON.stringify({step: 5})
        })
        const progressData = await progressResponse.json();

        if(progressData.success != true){
            toast.error(progressData.message);
            return;
        }

        dispatch(setProductMediaInfo(responseData.data));
        dispatch(incrementStep());
    }
  
    return (
        <>
            <Card>
                <div className={`${classes.titleWrapper}`}>

                    <h1 className={`${classes.title}`}>Product Media Info</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className={`${classes.formWrapper}`}>


                    <div className={`${classes.formItem}`}>
                        <label>Front Image</label>
                        <input type="file" className={` ${classes.formInput}`} placeholder="Enter Product Front Image"
                            {...register("frontImage", {
                                required: "Product Front Image is required",
                            })} />
                        <InputErrorHandler message={errors.frontImage != undefined ? errors.frontImage.message : ""} />
                    </div>

                    <div className={`${classes.formItem}`}>
                        <label>Product Image</label>
                        <input
                            type="file"
                            className={` ${classes.formInput}`}
                            placeholder="Enter Product Image"

                            {...register("productGallary", {
                                required: "Product Image is Required"
                            })}

                        ></input>
                        <InputErrorHandler message={errors.productGallary != undefined ? errors.productGallary.message : ""} />
                    </div>
                    <input className={`${classes.submitButton}`} type="submit" />
                </form>
            </Card>








    </>
  )
}

export default ProductMedia
