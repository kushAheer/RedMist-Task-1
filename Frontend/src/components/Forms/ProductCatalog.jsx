
import React from 'react'
import { useForm } from 'react-hook-form'
import Card from '../UI/Card';
import classes from './Form.module.css'

import InputErrorHandler from '../UI/InputErrorHandler';
import { useDispatch } from 'react-redux';
import { incrementStep } from '../../Context/Slices/ProgressSlice';
import { useSelector } from 'react-redux';
import { setProductCatalogInfo } from '../../Context/Slices/ProductSlice';
function ProductCatalog() {
    
    const { register, formState: { errors }, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const product = useSelector(state => state.product.productDetails);
    
    async function onSubmit(data) {
        const productData = {
            stockQuantity: data.stockQuantity,
            discount: data.discount,
            discountStartDate: data.discountStartDate,
            discountEndDate: data.discountEndDate
        }
        
        const response = await fetch(`https://redmist-task-1.onrender.com/api/products/${product._id}/catalog-info`,{
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
        const progressResponse = await fetch(`https://redmist-task-1.onrender.com/api/products/${product._id}/progress`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({step: 3})
        })
        const progressData = await progressResponse.json();

        if(progressData.success != true){
            toast.error(progressData.message);
            return;
        }




        dispatch(setProductCatalogInfo(responseData.data));
        dispatch(incrementStep());
    }
    return (
        <>
            <Card>
                <div className={`${classes.titleWrapper}`}>

                    <h1 className={`${classes.title}`}>Product Catalog Info</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className={`${classes.formWrapper}`}>


                    <div className={`${classes.formItem}`}>

                        <input type="number" min={0} className={` ${classes.formInput}`} placeholder="Enter Stock Quantity"
                            {...register("stockQuantity", {
                                required: "Stock Quantity is required",
                            })} />
                        <InputErrorHandler message={errors.stockQuantity != undefined ? errors.stockQuantity.message : ""} />
                    </div>

                    <div className={`${classes.formItem}`}>

                        <input
                            type='number'
                            className={` ${classes.formInput}`}
                            placeholder="Enter Product Discount"

                            {...register("discount", {
                                required : false,
                                min:{
                                    value: 0,
                                    message: "Discount must be greater than 0"
                                }
                            })}

                        ></input>
                        <InputErrorHandler message={errors.discount != undefined ? errors.discount.message : ""} />
                    </div>
                    <div className={`${classes.formItem}`}>
                        <label>Discount Start Date</label>
                        <input type="date" className={` ${classes.formInput}`} 
                            {...register("discountStartDate", { required: false })} />
                        <InputErrorHandler message={errors.discountStartDate != undefined ? errors.discountStartDate.message : ""} />
                    </div>
                    <div className={`${classes.formItem}`}>
                        <label>Discount End Date</label>
                        <input type="date" className={` ${classes.formInput}`} placeholder="Enter Discount End Date "
                            {...register("discountEndDate", { required: false })} />
                        <InputErrorHandler message={errors.discountEndDate != undefined ? errors.discountEndDate.message : ""} />
                    </div>
                    


                    <input className={`${classes.submitButton}`} type="submit" />
                </form>
            </Card>






        </>
    )
}

export default ProductCatalog
