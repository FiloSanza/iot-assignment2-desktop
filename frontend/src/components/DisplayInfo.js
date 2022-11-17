import React from "react";
import axios from 'axios';
import { httpHelper } from './httpHelper'
import { useEffect, useState } from "react";

const DisplayInfo = () => {

    const columns = [{
        src: 'Src',
        data: 'Data',
        desc: 'Description',
        // angle: 'Smart Light'
    }];
    
    const [data, setData] = useState([]);

    const url_info = "http://localhost:5000/get_logs";

    useEffect(() => {
        var new_data = []
        const fetchData = async () =>{
            try {
                await axios.get(url_info)
                  .then((response) => {
                    for (const r of response.data) {
                        new_data.push({
                            src: r.src,
                            data: r.data,
                            desc: r.desc
                        });
                    } 
                  }).catch((e) => console.log(e));
            } catch(error) {
                console.log(error.response.data);
            }
        }
        fetchData()
            .then(() => {
                setData(new_data);
            })
            .catch((e) => console.log(e));
    }, []);

    return (
        <div className='mx-10 w-full'> 
            <h1 className='w-full h-full centered mb-4 font-bold'>System Info</h1>
            <table className='w-full h-full bg-white shadow-lg'>
                <thead>
                    {
                        columns.map((value, key) => {
                            return (
                                <tr key={key}>
                                    <th scope='col' className='bg-sky-500 border text-left px-8 py-4'>
                                        {value.src}
                                    </th>
                                    <th scope='col' className='bg-sky-500 border text-left px-8 py-4'>
                                        {value.data}
                                    </th>
                                    <th scope='col' className='bg-sky-500 border text-left px-8 py-4'>
                                        {value.desc}
                                    </th>
                                </tr> 
                            )
                        })
                    }
                </thead>
                <tbody>
                    {
                        data.map((value, key) => {
                            return (key < data.length-5)
                            ? null
                            : (
                                <tr key={key}>
                                    <td className='border px-8 py-4'>
                                        {value.src}
                                    </td>
                                    <td className='border px-8 py-4'>
                                        {value.data}
                                    </td>
                                    <td className='border px-8 py-4'>
                                        {value.desc}
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