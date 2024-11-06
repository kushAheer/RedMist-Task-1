import React from 'react'
import Card from '../components/UI/Card'
import classes from './HomePage.module.css'
import { useDispatch } from 'react-redux'
import { resetStep } from '../Context/Slices/ProgressSlice'
import { clearProductDetails } from '../Context/Slices/ProductSlice'

function HomePage() {

    const dispatch = useDispatch()
    const onClickHandler = ()=>{
        dispatch(clearProductDetails())
        dispatch(resetStep())
    }


    return (
        <>
            <Card>
                <div className={`${classes.titleWrapper}`}>

                    <h1 className={`${classes.title}`}>Product Home Info</h1>
                    <button className={`${classes.btn}`} onClick={onClickHandler}>Create New Product</button>
                </div>
            </Card>

        </>
    )
}

export default HomePage
