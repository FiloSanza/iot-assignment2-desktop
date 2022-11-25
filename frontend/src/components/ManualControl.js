import axios from "axios";
import React from "react";
import { useState } from 'react';
import ReactSlider from 'react-slider'

const ManualControl = () => {

    const [angle, setValveAngle] = useState(0);

    const url_angle = "http://localhost:5000/valve_control"

    const changeValveAngle = value =>  {
        setValveAngle(value);
        const post = { angle: angle };
        try {
            const res = axios.post(url_angle, post);
        } catch(e) {
            alert(e);
        }
    }

    return (
        <React.Fragment>
            <section className='w-full h-full centered'>
            <div className='w-full h-full centered'>
                <label className="w-full h-full centered font-bold">Valve Angle</label>
                <ReactSlider
                    step={1}
                    min={0}
                    max={180}
                    className='w-full h-3 pr-2 my-4 bg-gray-200 rounded-md cursor-grab centered'
                    thumbClassName='absolute w-3 h-3 cursor-grab bg-indigo-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 -top-2px centered'
                    value={angle}
                    onChange={(value) => {
                        changeValveAngle(value)
                    }}
                    />
                    <span className='w-full h-full centered'>{angle}deg</span>
                </div>
            </section>
        </React.Fragment>
    )
}

export default ManualControl;