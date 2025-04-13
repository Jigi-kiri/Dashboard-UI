'use client'

import React from 'react'
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    ChartOptions,
} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip)

const options: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '80%',
    rotation: -90, // Start from top (12 o'clock position)
    circumference: 180, // Half circle (180 degrees)
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            enabled: false,
        },
    },
}

const data = {
    labels: ['Others', 'New Delhi', 'Mumbai', 'West Bengal'],
    datasets: [
        {
            data: [26, 36, 12, 24],
            backgroundColor: [
                '#6C4FED',    // New Delhi
                '#EA6153',    // Mumbai
                '#F7C245',    // West Bengal
                '#D9D9D9',    // Others
            ],
            borderWidth: 0,
        },
    ],
}

export default function PieChart() {
    return (
        <div className="relative" style={{ width: '193px', height: '104.5px' }}>
            <div className="absolute top-0 left-0 w-full h-full">
                <Doughnut options={options} data={data} />
            </div>
        </div>
    )
}