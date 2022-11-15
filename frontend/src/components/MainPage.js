import React from "react";
import LeftPage from "./LeftPage";
import RightPage from "./RightPage";

const MainPage = () => {
    return (
        <React.Fragment>
            <section>
                <div className='w-screen h-screen grid grid-cols-2 text-black divide-x-[3px]'>
                    <div className='w-full h-full centered'>
                        <LeftPage />
                    </div>

                    <div className='w-full h-full centered'>
                        <RightPage />
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default MainPage;