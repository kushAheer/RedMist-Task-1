import React from 'react'
import classes from './ProgressBar.module.css'
import { useSelector } from 'react-redux'

function ProgressBar() {

    const step = useSelector((state) => state.progress.step)

    return (
        <>
            <div className={`${classes.stepperWrapper}`}>
                <div className={`${classes.lineWrapper}`}>

                    <div style={{width : `${step*25}%`}} className={`${classes.line}`}></div>
                </div>
                <div className={`${classes.stepperItem}  `}>
                    <div className={`
                        ${classes.stepCounter} 
                        ${step > 0 ? classes.stepCounterDone : 
                        step == 0 ? classes.stepCounterActive : classes.stepCounterNotDone}`}>
                            {step > 0 ? <img width="32" height="32" src="https://img.icons8.com/color/48/checked--v1.png" alt="checked--v1"/> : 1}
                    </div>
                    <div className="step-name">Create</div>
                </div>
                <div className={`${classes.stepperItem} `}>
                    <div className={`
                    ${classes.stepCounter} 
                    ${step > 1 ? classes.stepCounterDone :
                        step == 1 ? classes.stepCounterActive : classes.stepCounterNotDone}`}>
                        {step > 1 ? <img width="32" height="32" src="https://img.icons8.com/color/48/checked--v1.png" alt="checked--v1"/> : 2}
                    </div>
                    <div className="step-name">General-Info</div>
                </div>
                <div className={`${classes.stepperItem} `}>
                    <div className={`
                        ${classes.stepCounter} 
                        ${step > 2 ? classes.stepCounterDone : 
                            step == 2 ? classes.stepCounterActive : classes.stepCounterNotDone}`}>
                            {step > 2 ? <img width="32" height="32" src="https://img.icons8.com/color/48/checked--v1.png" alt="checked--v1"/> : 3}
                    </div>
                    <div className="step-name">Catalog-Info</div>
                </div>
                <div className={`${classes.stepperItem} `}>
                    <div className={`
                        ${classes.stepCounter} 
                        ${step > 3 ? classes.stepCounterDone : 
                            step == 3 ? classes.stepCounterActive : classes.stepCounterNotDone}`}>
                            {step > 3 ? <img width="32" height="32" src="https://img.icons8.com/color/48/checked--v1.png" alt="checked--v1"/> : 4}
                    </div>
                    <div className="step-name">Additional-Info</div>
                </div>
                <div className={`${classes.stepperItem} `}>
                    <div className={`
                        ${classes.stepCounter} 
                        ${step > 4 ? classes.stepCounterDone : 
                            step == 4 ? classes.stepCounterActive : classes.stepCounterNotDone}`}>
                            {step > 4 ? <img width="32" height="32" src="https://img.icons8.com/color/48/checked--v1.png" alt="checked--v1"/> : 5}
                    </div>
                    <div className="step-name">Media-Info</div>
                </div>
            </div>
        </>
    )
}

export default ProgressBar
