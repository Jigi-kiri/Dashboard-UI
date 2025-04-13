'use client'

import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  ChartOptions,
  ScriptableContext,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

// Register required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler
)

const labels = ['00', '09', '10', '11', '12', '13', '14', '15']

const options: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    }
  },
  scales: {
    y: {
      type: 'linear' as const,
      min: 1.5,
      max: 6,
      ticks: {
        stepSize: 1.5,
        callback: function(value: number | string): string {
          return typeof value === 'number' ? value.toFixed(1) : value
        },
        font: {
          family: 'Mulish',
          size: 12,
          weight: 500,
        },
        color: '#8C9198',
      },
      grid: {
        color: '#EDEDED',
        drawOnChartArea: true,
      },
      border: {
        display: false,
      }
    },
    x: {
      type: 'category' as const,
      grid: {
        display: false,
      },
      ticks: {
        font: {
          family: 'Mulish',
          size: 12,
          weight: 500,
        },
        color: '#6B7583',
      },
      border: {
        display: false,
      }
    }
  },
}

const data = {
  labels,
  datasets: [
    {
      label: 'This Month',
      data: [1.5, 2.8, 2.8, 4, 2.7, 4.6, 3, 4],
      borderColor: '#1D874F',
      backgroundColor: (context: ScriptableContext<'line'>) => {
        const ctx = context.chart.ctx
        const gradient = ctx.createLinearGradient(0, 0, 0, context.chart.height)
        gradient.addColorStop(0, 'rgba(46, 183, 111, 0.15)')
        gradient.addColorStop(1, 'rgba(46, 183, 111, 0)')
        return gradient
      },
      fill: true,
      tension: 0,
      pointStyle: false as const,
      borderWidth: 1.5,
    },
    {
      label: 'Last Month',
      data: [2.5, 2.2, 1.9, 3.5, 3.2, 4.2, 2.8, 4.8],
      borderColor: '#DB3500',
      borderDash: [2, 2],
      tension: 0,
      pointStyle: false as const,
      borderWidth: 1.5,
    },
  ],
}

export default function LineChart() {
  return (
    <div className="h-[150px] w-full">
      <Line options={options} data={data} />
    </div>
  )
}
