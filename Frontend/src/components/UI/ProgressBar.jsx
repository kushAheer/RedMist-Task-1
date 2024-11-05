import React from 'react'
import classes from './ProgressBar.module.css'
import { useSelector } from 'react-redux'

function ProgressBar() {

    const step = useSelector((state) => state.progress.step)

    return (
        <>
            <div className={`${classes.stepperWrapper}`}>
                <div className={`${classes.lineWrapper}`}>

                <div className={`${classes.line}`}></div>
                </div>
                <div className={`${classes.stepperItem}  `}>
                    <div className={`${classes.stepCounter} ${step > 0 ? classes.stepCounterDone : classes.stepCounterNotDone}`}>1</div>
                    <div className="step-name">Create</div>
                </div>
                <div className={`${classes.stepperItem} `}>
                    <div className={`${classes.stepCounter} ${step > 1 ? classes.stepCounterDone : classes.stepCounterNotDone}`}>2</div>
                    <div className="step-name">General-Info</div>
                </div>
                <div className={`${classes.stepperItem} `}>
                    <div className={`${classes.stepCounter} ${step > 2 ? classes.stepCounterDone : classes.stepCounterNotDone}`}>3</div>
                    <div className="step-name">Catalog-Info</div>
                </div>
                <div className={`${classes.stepperItem} `}>
                    <div className={`${classes.stepCounter} ${step > 3 ? classes.stepCounterDone : classes.stepCounterNotDone}`}>4</div>
                    <div className="step-name">Additional-Info</div>
                </div>
                <div className={`${classes.stepperItem} `}>
                    <div className={`${classes.stepCounter} ${step > 4 ? classes.stepCounterDone : classes.stepCounterNotDone}`}>5</div>
                    <div className="step-name">Media-Info</div>
                </div>
            </div>
        </>
    )
}

export default ProgressBar
