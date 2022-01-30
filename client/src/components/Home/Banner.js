import React from 'react';
import "./style";


const Banner = () => {
  
    return (
        <div style={{display:"flex", height:"100vh",backgroundColor:"gray",width:'1200px',justifyContent:"space-between"}}>
            <div style={{width:"700px",backgroundColor:"lightblue"}}>
                Header text come here
            </div>
            
            <div>
                image come here
            </div>
        </div>
    )
}

export default Banner
