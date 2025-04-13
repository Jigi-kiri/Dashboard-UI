'use client'

import Image from 'next/image'
import { useState } from 'react'
import clsx from 'clsx'
import { CalendarDays, ChartLine, ChevronDown } from 'lucide-react'
import ToggleBtn from "../../../public/Icons/bi_toggle-on.png"

const quickCommerceApps = [
  { name: 'Blinkit', logo: '/Icons/blinkit.png', active: true },
  { name: 'Zepto', logo: '/Icons/zepto.png', active: false },
  { name: 'Instamart', logo: '/Icons/instamart.png', active: false }
]

export default function TopNav() {
  const [dateRange] = useState('Aug 01, 024 - Aug 03, 2024')


  return (
    <div className="w-[1112.38px] h-32 left-[-0.49px] bg-[#FFFFFF]">
      {/* Top section */}
      <div className="flex justify-between items-center pt-[12px] pr-[24px] pb-[12px] pl-[24px] bg-white border-b border-[#EBEBEB]">
        <div className="flex items-center gap-1">
          <span className="text-[14px] font-medium text-[#031B15] leading-[1.286] tracking-[-3%]">
            Quick Commerce
          </span>
        </div>
        <div className="flex justify-end items-center gap-[8px] bg-[#FFFFFF]">
          {/* Charts toggle button */}
          <div className="flex justify-center items-center gap-[8px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] border border-[#D9D9D9] rounded-[10px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)]">
            <ChartLine color='#031B15' size="20px" />
            <Image
              src={ToggleBtn}
              alt="Toggle state"
              width={16}
              height={16}
              className="[&_path]:stroke-[#027056]"
            />
          </div>

          {/* Date selector */}
          <div className="flex justify-center items-center gap-[8px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] border border-[#D9D9D9] rounded-[10px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04)]">
            <CalendarDays color='#000000' size="15px" />
            <span className="text-[14px] font-medium text-[#031B15] leading-[1.429] capitalize font-mulish">
              {dateRange}
            </span>
            <ChevronDown color='#031B15' size="13.63px" />
          </div>
        </div>
      </div>

      {/* Quick commerce tabs */}
      <div className="flex items-center gap-6 pt-[12px] pr-[16px] pb-[12px] pl-[16px] border-b border-[#EBEBEB]">
        {/* <div className="flex items-center gap-4 p-1 border-[0.5px] border-[rgba(3,27,21,0.1)] rounded-xl"> */}
        <div className='flex gap-[16px] rounded-[12px] border border-[#031B151A] border-[0.5px] p-[4px] bg-white'>
          {quickCommerceApps.map((app, idx) => (
            <button
              key={idx}
              className={clsx(
                'flex items-center gap-[6px] rounded-[10px] px-[14px] py-[6px] border-[#031B151A]',
                app.active
                  ? 'bg-[#DFEAE8]'
                  : 'opacity-30 hover:opacity-100'
              )}
            >
              <Image
                src={app.logo}
                alt={app.name}
                width={16}
                height={16}
                className="object-contain"
              />
              <span
                className={clsx(
                  'text-[14px] font-medium leading-[1.429] tracking-[-0.36%] font-mulish',
                  app.active ? 'text-[#027056]' : 'text-[rgba(3,27,21,0.7)]'
                )}
              >
                {app.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
