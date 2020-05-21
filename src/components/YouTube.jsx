import React from 'react'
import './YouTube.css';

 const YouTube = (props) =>{
     
        return (
            <div className="youtube-wrapper">
                <div className="img-thumb">
                    <img src="https://i.ytimg.com/vi/SZz0qKbwNoU/maxresdefault.jpg" alt=""/>
                    <p className="time">{props.time}</p>
                </div>
                <p className="title">{props.title}</p>
                <p className="desc">desc here</p>
            </div>
        )
        
     
    
}

YouTube.defaultProps =  {
        time : "0.0",
        title : "Belum di atur"
}


export default YouTube;