import {React, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../index.css'
import Chevron from 'react-chevron'

export default function CrewAndCast(props){
    const [toggle, setState] = useState(false)
    return(
        <div style={{width: '100%'}}>
            <div className="text-light border border-light border-opacity-25 rounded-2"
            onClick={() => setState(!toggle)}>
                <h4 className="float-right border-2 p-1">
                    Crew and Cast
                    {toggle ? 
                    <Chevron direction={'up'} className="float-end"/>
                    : <Chevron direction={'down'} className="float-end"/>
                    }                 
                </h4>
                {toggle ? 
                <div className="p-1">
                    <h5>Director:</h5>
                    <p>{props.director}</p>
                    <hr />
                    <h5>Writer:</h5>
                    <p>{props.writer}</p>
                    <hr/>
                    <h5>Stars:</h5>
                    <p>{props.actors}</p>
                </div>
                : null}
            </div>
        </div>
    )
}