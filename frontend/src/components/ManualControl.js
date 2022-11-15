import React from "react";
import { useState } from 'react';
import ReactSlider from 'react-slider'

const ManualControl = () => {

    const [angle, setValveAngle] = useState(0);

    return (
        <React.Fragment>
            <section>
            <div>
                <label>Valve Angle</label>
                <ReactSlider
                    step={1}
                    min={0}
                    max={180}
                    className="w-full h-3 pr-2 my-4 bg-gray-200 rounded-md cursor-grab"
                    thumbClassName="absolute w-5 h-5 cursor-grab bg-indigo-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 -top-2px"
                    value={angle}
                    onChange={(values) => {
                        setValveAngle(values)
                    }}
                    />
                    <span>{angle}deg</span>
                </div>
            </section>
        </React.Fragment>
    )
}

export default ManualControl;