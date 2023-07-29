import React from 'react'
import './Content.css'
import shivam from '../assests/shivam.png'
import Logic from "./Logic"
export default function Content() {
    return (

        <div className='main-content'>
            <div className='inner-content'>
                <div class="image">
                    <img src={shivam} alt="" srcset="" />
                </div>
                <h2 className='title'>
                    Remove Image <br></br>Background
                </h2>
            </div>

            <div>
                <div className='q-box'>
                    <Logic />
                </div>
            </div>

        </div>
    );
}
