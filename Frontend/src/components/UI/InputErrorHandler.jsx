import React from 'react'
import { ErrorMessage } from '@hookform/error-message'
import classes from './InputErrorHandler.module.css'

function InputErrorHandler({ errors, inputName , type, message}) {
    return (
        <>
            

                {/* <ErrorMessage
                    errors={errors}
                    name="name"
                    render={({ messages }) => {
                        
                        return messages
                            ? Object.entries(messages).map(([type, message]) => (
                                // <div className={`${classes.errorContainer}`}>

                                    <span className={`${classes.error}`} key={type}>{message}</span>
                                // </div>

                            ))
                            : null;
                    }}
                /> */}
                <div className={`${classes.errorContainer}`}>

                    <span className={`${classes.error}`}>{message}</span>
                </div>
            
        </>
    )
}

export default InputErrorHandler
