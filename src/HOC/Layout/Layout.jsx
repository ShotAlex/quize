import React from 'react'
import classes from './Layout.module.css'

class Layout extends  React.Component{
    render() {
        return (
            <div className={classes.layout}>

                <main>
                    <h1>Hello world!</h1>
                </main>
            </div>
        )
    }
}

export default Layout