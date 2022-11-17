import React from 'react';
import axios from 'axios';
import {Line} from 'react-chartjs-2';
import { useEffect, useState } from 'react'; 
import { registerables, Chart } from "chart.js";

const LeftPage = () => {

    Chart.register(...registerables);

    const [state, setState] = useState({
      labels: [],
      datasets: [
        {
          label: 'Water Level',
          backgroundColor: 'rgb(14,165,233)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: []
        }
      ]
    });

    const url_info = "http://localhost:5000/get_logs";
    useEffect(() => {
      var new_state = {...state};
      const fetchData = async () =>{
          try {
              await axios.get(url_info)
                .then((response) => {
                  for (const data of response.data) {
                    if (data.tag === 0) {
                      new_state.datasets[0].data.push(parseInt(data.data));
                      new_state.labels.push('');
                    } 
                  } 
                }).catch((e) => console.log(e));
          }  catch(error) {
              console.log(error.response.data);
          }
      }
      fetchData().then( () => {
        console.log(); // Fix bug
        setState(new_state)
      });
  }, []);

    return (
      <div className='w-full h-full centered'>
          <Line
          data={state}
          options={{
              legend:{
              display:true,
              position:'right'
              },
              responsive: true,
              scales: {
                xAxes: {
                  display: false,
                  ticks: {
                    display: false,
                  },
                },
              }
          }}
          className='mx-10'
          />
      </div>
    );
  }

export default LeftPage;