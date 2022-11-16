import React from 'react';
import axios from 'axios';
import {Bar} from 'react-chartjs-2';
import { registerables, Chart } from "chart.js";

const LeftPage = () => {
    Chart.register(...registerables);
    
    const state = {
      labels: ['January', 'February', 'March',
               'April', 'May'],
      datasets: [
        {
          label: 'Water Level',
          backgroundColor: 'rgb(14,165,233)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [65, 59, 80, 81, 56]
        }
      ]
    }

    const url_info = "http://localhost8080/get_logs";
    const fetchData = () => {
      return axios.get(url_info)
          .then((response) => {
              console.log(response.data);
          });
    }

    return (
      <div className='w-full h-full centered'>
          <Bar
          data={state}
          options={{
              title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
              },
              legend:{
              display:true,
              position:'right'
              }
          }}
          className='mx-10'
          />
      </div>
    );
  }

export default LeftPage;