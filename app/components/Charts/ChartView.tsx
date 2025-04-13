'use client'

import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import LineChart from './LineChart'
import PieChart from './PieChart'
import { ArrowDown, ArrowUp } from 'lucide-react'

type CityData = {
  name: string
  amount: string
  percentage: string
  change: {
    value: string
    type: 'up' | 'down'
  }
  color: string
}

const cities: CityData[] = [
  {
    name: 'New Delhi',
    amount: '₹26.5L',
    percentage: '35%',
    change: { value: '1.2%', type: 'up' },
    color: '#6C4FED'
  },
  {
    name: 'Mumbai',
    amount: '₹36.4L',
    percentage: '23%',
    change: { value: '3.3%', type: 'down' },
    color: '#EA6153'
  },
  {
    name: 'West Bengal',
    amount: '₹12.2L',
    percentage: '21%',
    change: { value: '2.3%', type: 'down' },
    color: '#F7C245'
  },
  {
    name: 'Others',
    amount: '₹24.3L',
    percentage: '9%',
    change: { value: '1.09%', type: 'up' },
    color: '#D9D9D9'
  }
]

export default function ChartView() {
  return (
    <div className="flex flex-col gap-6 ">
      {/* Line chart sections */}
      <div className="flex items-center gap-[8px]">
        {/* Sales Chart */}
        <div className="w-[349px] bg-[#FFFFFF] border border-[#F1F1F1] rounded-[12px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.12)]">
          <div className="flex justify-between items-center p-[12px] border-b border-[#F1F1F1]">
            <span className="text-[14px] font-semibold text-[#515153] leading-[1.429] tracking-[-1.86%] font-mulish">
              Sales (MRP)
            </span>
            <Image
              src="/Icons/help.svg"
              alt="Help"
              width={16}
              height={16}
              className="[&_path]:stroke-[#031B15]"
            />
          </div>
          <div className="p-[12px] flex flex-col gap-[12px]">
            <div className="flex justify-between items-center">
              <span className="text-[24px] font-bold text-[#031B15] leading-[1.333] tracking-[-1.08%] font-mulish">
                125.49
              </span>
              <div className="flex flex-col items-end gap-1">
                <div className="flex items-center gap-1">
                  <ArrowUp color='#027056' size={16} />
                  <span className="text-[15px] font-bold text-[#1D874F] leading-[1.067] tracking-[-1.73%] font-mulish">
                    2.4%
                  </span>
                </div>
                <span className="text-[13px] font-normal text-[rgba(3,27,21,0.6)] leading-[1.231] tracking-[-2%] font-mulish">
                  vs 119.69 last month
                </span>
              </div>
            </div>
            <LineChart />
          </div>
          <div className="flex items-center gap-[10px] p-[12px] border-t border-[#F1F1F1]">
            <div className="flex items-center gap-[6px]">
              <div className="w-[6px] h-[6px] rounded-[10px] bg-[#1D874F]" />
              <span className="text-[13px] text-[#7D7D7E] leading-[1.231] tracking-[-2%] font-mulish">
                This Month
              </span>
            </div>
            <div className="flex items-center gap-[6px]">
              <div className="w-[6px] h-[6px] rounded-[10px] bg-[#E25D33]" />
              <span className="text-[13px] text-[#7D7D7E] leading-[1.231] tracking-[-2%] font-mulish">
                Last Month
              </span>
            </div>
          </div>
        </div>

        {/* Quantity Chart */}
        <div className="w-[349px] bg-[#FFFFFF] border border-[#F1F1F1] rounded-[12px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.12)]">
          <div className="flex justify-between items-center p-[12px] border-b border-[#F1F1F1]">
            <span className="text-[14px] font-semibold text-[#515153] leading-[1.429] tracking-[-1.86%] font-mulish">
              Total Quantity Sold
            </span>
            <Image
              src="/Icons/help.svg"
              alt="Help"
              width={16}
              height={16}
              className="[&_path]:stroke-[#031B15]"
            />
          </div>
          <div className="p-[12px] flex flex-col gap-[12px]">
            <div className="flex justify-between items-center">
              <span className="text-[24px] font-bold text-[#031B15] leading-[1.333] tracking-[-1.08%] font-mulish">
                125.49
              </span>
              <div className="flex flex-col items-end gap-1">
                <div className="flex items-center gap-1">
                  <ArrowUp color='#027056' size={16} />
                  <span className="text-[15px] font-bold text-[#1D874F] leading-[1.067] tracking-[-1.73%] font-mulish">
                    2.4%
                  </span>
                </div>
                <span className="text-[13px] font-normal text-[rgba(3,27,21,0.6)] leading-[1.231] tracking-[-2%] font-mulish">
                  vs 119.69 last month
                </span>
              </div>
            </div>
            <LineChart />
          </div>
          <div className="flex items-center gap-[10px] p-[12px] border-t border-[#F1F1F1]">
            <div className="flex items-center gap-[6px]">
              <div className="w-[6px] h-[6px] rounded-[10px] bg-[#1D874F]" />
              <span className="text-[13px] text-[#7D7D7E] leading-[1.231] tracking-[-2%] font-mulish">
                This Month
              </span>
            </div>
            <div className="flex items-center gap-[6px]">
              <div className="w-[6px] h-[6px] rounded-[10px] bg-[#E25D33]" />
              <span className="text-[13px] text-[#7D7D7E] leading-[1.231] tracking-[-2%] font-mulish">
                Last Month
              </span>
            </div>
          </div>
        </div>

        {/* Top Cities */}
        <div className="flex-1 bg-[#FFFFFF] border border-[#F1F1F1] rounded-[12px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.12)]">
          <div className="flex justify-between items-center p-[12px] border-b border-[#F1F1F1]">
            <span className="text-[14px] font-semibold text-[#515153] leading-[1.429] tracking-[-1.86%] font-mulish">
              Top Cities
            </span>
            <Image
              src="/Icons/help.svg"
              alt="Help"
              width={16}
              height={16}
              className="[&_path]:stroke-[#031B15]"
            />
          </div>
          <div className="pt-[6px] pr-[8px] pb-[6px] pl-[8px] flex flex-col">
            <div className="relative w-32 h-32 mx-auto">
              <div className="absolute top-[35px] left-[66px] inset-0 flex items-center justify-center flex-col gap-[4px">
                <span className="text-[13px] text-[#7D7D7E] leading-[1.231] tracking-[-2%] font-mulish">
                  Total
                </span>
                <span className="text-[18px] font-bold text-black leading-[1.111] tracking-[-1.44%] font-mulish">
                  ₹68.2L
                </span>
                <div className="flex items-center gap-1">
                  <ArrowUp color='#1D874F' size={16} />
                  <span className="text-[13px] font-medium text-[#1D874F] leading-[1.231] tracking-[-2%] font-mulish">
                    2.2%
                  </span>
                </div>
              </div>
              <PieChart />
            </div>
            <div className="flex flex-col gap-[10px] mt-[10px] p-[12px]">
              {cities.map((city, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <div className="flex items-center gap-[6px]">
                    <div className="w-[6px] h-[6px] rounded-[10px]" style={{ backgroundColor: city.color }} />
                    <span className="text-[13px] text-[#7D7D7E] leading-[1.231] tracking-[-2%] font-mulish">
                      {city.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <span className="text-[13px] font-bold text-black leading-[1.231] tracking-[-2%] font-mulish">
                      {city.amount}
                    </span>
                    <div className="px-1 py-0.5 bg-[#F7F7F7] rounded">
                      <span className="text-[13px] text-[#7D7D7E] leading-[1.231] tracking-[-2%] font-mulish">
                        {city.percentage}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      {city.change.type === 'up' ? (
                        <ArrowUp
                          color='#1D874F'
                          size={16} />
                      ) : (
                        <ArrowDown
                          color='#F31D1D'
                          size={16}
                        />
                      )}
                      <span className={clsx(
                        'text-[13px] font-medium leading-[1.231] tracking-[-2%] font-mulish',
                        city.change.type === 'up' ? 'text-[#1D874F]' : 'text-[#F31D1D]'
                      )}>
                        {city.change.value}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
