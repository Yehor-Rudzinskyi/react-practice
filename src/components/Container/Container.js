import React from 'react';
import './Container.modul.css'

const Container = ({children}) => {
    return (<div className = 'container'> 
       {children} 
    </div>

    )
}

export default Container;