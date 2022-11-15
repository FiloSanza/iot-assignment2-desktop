import React from "react";

const DisplayInfo = () => {

    const data = [{
        state: 'Normal',
        water: '100',
        angle: '10'
    }]

    const columns = [{
        Header: 'State',
        accessor: 'state'
    }, {
        Header: 'Water Level',
        accessor: 'water'
    }, {
        Header: 'Valve Angle',
        accessor: 'angle'
    }];

    return (
        <div> 
            <h1 className='centered'>System Info</h1>
            <table className='shadow-lg bg-white'>
                <thead>
                    <tr>
                        <th scope='col' className='bg-blue-100 border text-left px-8 py-4'>State</th>
                        <th scope='col' className='bg-blue-100 border text-left px-8 py-4'>Water Level</th>
                        <th scope='col' className='bg-blue-100 border text-left px-8 py-4'>Valve Angle</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((value, key) => {
                            return (
                                <tr key={key}>
                                    <td className='border px-8 py-4'>{value.state}</td>
                                    <td className='border px-8 py-4'>{value.water}</td>
                                    <td className='border px-8 py-4'>{value.angle}</td>
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