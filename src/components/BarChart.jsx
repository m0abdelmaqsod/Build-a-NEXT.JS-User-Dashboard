import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJs, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import styles from '../styles/components/barChart.module.css'



ChartJs.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);



const BarChart = () => {

    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ['Mon', 'Tues', 'wed', 'Thurs', 'Fri', 'set', 'sun'],
            datasets: [
                {
                    label: 'Sales $',
                    data: [18127, 22201, 19490, 17938, 24182, 17482, 22475],
                    borderColor: 'rgb(53,126,235)',
                    backgroundColor: 'rgb(53,162,235,0.4)',
                },
            ]
        })

        setChartOptions({
            plugins: {
                length: {
                    position: 'top',
                }, title: {
                    display: true,
                    text: 'Daily Revenue'
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })

    },[])




    return (
        <>
            <div className={styles.bar}>
                <Bar data={chartData} options={chartOptions} />
            </div>
        </>
    );
}

export default BarChart;