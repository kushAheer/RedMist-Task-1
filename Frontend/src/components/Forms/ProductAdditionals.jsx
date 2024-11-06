import React from 'react'
import { useForm } from 'react-hook-form'
import Card from '../UI/Card';
import classes from './Form.module.css'
import toast from 'react-hot-toast';
import InputErrorHandler from '../UI/InputErrorHandler';
import { useDispatch , useSelector } from 'react-redux';
import { incrementStep } from '../../Context/Slices/ProgressSlice';
import { setProductAdditionalInfo } from '../../Context/Slices/ProductSlice';
function ProductAdditionals() {



    const { register, formState: { errors }, handleSubmit } = useForm();
    
    const dispatch = useDispatch();
    const product = useSelector(state => state.product.productDetails);

    async function onSubmit(data) {
        const productData = {
            weight: data.weight,
            material : data.material,
            otherInfo : data.otherInfo
        }
        
        const response = await fetch(`/api/products/${product._id}/additional-info`,{
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
        const progressResponse = await fetch(`/api/products/${product._id}/progress`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({step: 4})
        })
        const progressData = await progressResponse.json();

        if(progressData.success != true){
            toast.error(progressData.message);
            return;
        }


        dispatch(setProductAdditionalInfo(responseData.data));
        dispatch(incrementStep());
    }


    return (
        <>
            <Card>
                <div className={`${classes.titleWrapper}`}>

                    <h1 className={`${classes.title}`}>Product Additional Info</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className={`${classes.formWrapper}`}>


                    <div className={`${classes.formItem}`}>

                        <input type="number" min={0} className={` ${classes.formInput}`} placeholder="Enter Product Weight"
                            {...register("weight", {
                                required: "Product Weight is required",
                                
                            })} />
                        <InputErrorHandler message={errors.weight != undefined ? errors.weight.message : ""} />
                    </div>

                    <div className={`${classes.formItem}`}>

                        <input
                            type='text'
                            className={` ${classes.formInput}`}
                            placeholder="Enter Product Material"

                            {...register("material", {
                                required: "Product Material is Required"
                            })}

                        ></input>
                        <InputErrorHandler message={errors.material != undefined ? errors.material.message : ""} />
                    </div>
                    <div className={`${classes.formItem}`}>

                        <textarea
                            type='text'
                            className={` ${classes.formInput}`}
                            placeholder="Enter Other Info"

                            {...register("otherInfo", {
                                required: false
                            })}

                        ></textarea>
                        <InputErrorHandler message={errors.otherInfo != undefined ? errors.otherInfo.message : ""} />
                    </div>
                    <input className={`${classes.submitButton}`} type="submit" />
                </form>
            </Card>








        </>
    )
}

export default ProductAdditionals
