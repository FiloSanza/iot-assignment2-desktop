import React from "react";
import DisplayInfo from "./DisplayInfo";
import ManualControl from "./ManualControl";

const RightPage = () => {
    return (
        <div className='w-screen h-screen grid grid-rows-2 text-black divide-y-[3px]'>
            <div className='w-full h-full centered'>
                <DisplayInfo />        
            </div>

            <div className='w-full h-full centered'>
                <ManualControl />
            </div>
        </div> 
    )
}

export default RightPage;