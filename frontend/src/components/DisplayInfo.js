import React from "react";
import axios from 'axios';

const DisplayInfo = () => {

    const columns = [{
        state: 'State',
        water: 'Water Level',
        angle: 'Valve Angle'
    }];
    
    const data = [{
        state: 'Normal',
        water: '100',
        angle: '10'
    }];

    const url_info = "http://localhost8080/get_logs";
    const fetchData = () =>{
        return axios.get(url_info)
            .then((response) => console.log(response.data));
    }

    return (
        <div className='mx-10 w-full'> 
            <h1 className='w-full h-full centered mb-4 font-bold'>System Info</h1>
            <table className='w-full h-full shadow-lg bg-white'>
                <thead>
                    {
                        columns.map((value, key) => {
                            return (
                                <tr key={key}>
                                    <th scope='col' className='bg-sky-500 border text-left px-8 py-4'>
                                        {value.state}
                                    </th>
                                    <th scope='col' className='bg-sky-500 border text-left px-8 py-4'>
                                        {value.water}
                                    </th>
                                    <th scope='col' className='bg-sky-500 border text-left px-8 py-4'>
                                        {value.angle}
                                    </th>
                                </tr> 
                            )
                        })
                    }
                </thead>
                <tbody>
                    {
                        data.map((value, key) => {
                            return (
                                <tr key={key}>
                                    <td className='border px-8 py-4'>
                                        {value.state}
                                    </td>
                                    <td className='border px-8 py-4'>
                                        {value.water}
                                    </td>
                                    <td className='border px-8 py-4'>
                                        {value.angle}
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table> 
        </div>       
    )
}

export default DisplayInfo;