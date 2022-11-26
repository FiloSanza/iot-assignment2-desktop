import React from "react";
import axios from 'axios';
import { useEffect, useState } from "react";

const DisplayInfo = () => {

    const bridge_states = {
        '0': 'BEGIN',
        '1': 'NORMAL',
        '2': 'PREALARM',
        '3': 'ALARM',
    };
    
    const [state, setState] = useState('');

    const url_info = "http://localhost:5000/get_logs";

    useEffect(() => {
        var new_state = state;
        const fetchData = async () =>{
            try {
                await axios.get(url_info)
                  .then((response) => {
                    for (const res of response.data) {
                        if (res.desc === "new state") {
                            new_state = bridge_states[res.data]; 
                            console.log(new_state);
                        }
                    } 
                  })
                  .catch((e) => console.log(e));
            } catch(error) {
                console.log(error.response.data);
            }
        }
        fetchData()
            .then(() => {
                setState(new_state);
            })
            .catch((e) => console.log(e));
    }, []);

    return (
        <div className='mx-10 w-full'> 
            <h1 className='w-full h-full centered mb-4 font-bold'>{state}</h1>
        </div>       
    )
}

export default DisplayInfo;