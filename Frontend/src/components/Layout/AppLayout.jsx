import React from 'react'
import classes from './AppLayout.module.css'
import ProgressBar from '../UI/ProgressBar.jsx'

function AppLayout({ children }) {
    return (
        <>
            <div className={classes.container}>
                <ProgressBar />
                <div>
                    {children}
                </div>
            </div>
        </>
    )
}

export default AppLayout
