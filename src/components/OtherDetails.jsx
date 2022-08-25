import {React, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../index.css'
import Chevron from 'react-chevron'

export default function OtherDetails(props){
    const [toggle, setState] = useState(false)
    return(
        <div style={{width: '100%'}}>
            <div className="border border-light border-opacity-25 rounded-2"
            onClick={() => setState(!toggle)}>
                <h4 className="float-right border-2 p-1">
                    Other Details
                    {toggle ? 
                    <Chevron direction={'up'} className="float-end"/>
                    : <Chevron direction={'down'} className="float-end"/>
                    }                 
                </h4>
                {toggle ? 
                <div className="p-1">
                    <h5>Country</h5>
                    <p>{props.country}</p>
                    <hr/>
                    <h5>Languages</h5>
                    <p>{props.languages}</p>
                    <hr />
                    <h5>Original Release</h5>
                    <p>{props.released}</p>
                    <hr />
                    <h5>Awards</h5>
                    <p>{props.awards}</p>
                    <hr />
                    <h5>Box Office</h5>
                    <p>{props.boxOffice}</p>
                    <hr />
                    <h5>Type</h5>
                    <p>{props.type}</p>
                </div>
                : null}
            </div>
        </div>
    )
}