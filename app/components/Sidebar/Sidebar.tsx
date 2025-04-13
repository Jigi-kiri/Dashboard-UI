'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'
import AddApp from "../../../public/Icons/addApp.png"
import Creative from "../../../public/Icons/creative.svg"
import Dashboard from "../../../public/Icons/dashboard.svg"
import Help from "../../../public/Icons/help.svg"
import MamaEarth from "../../../public/Icons/mamaEarth.png"
import Perfora from "../../../public/Icons/perfora.png"
import Perfomance from "../../../public/Icons/performance.svg"
import RedIcon from "../../../public/Icons/redFrame.png"
import SettingsIcon from "../../../public/Icons/settings.svg"
import User from "../../../public/Icons/users.png"


import { ChevronDown, ChevronsLeft, ChevronsUpDown } from 'lucide-react'

const AppList = [MamaEarth, RedIcon, AddApp];

const menu = [
  {
    label: 'Overview',
    icon: Dashboard,
    href: '/overview',
  },
  {
    label: 'Channels',
    icon: Perfomance,
    children: [
      { label: 'Meta Ads', href: '/channels/meta-ads', active: false },
      { label: 'Google Ads', href: '/channels/google-ads', active: false },
      { label: 'Quick Commerce', href: '/channels/quick-commerce', active: true },
    ],
  },
  {
    label: 'Creatives',
    icon: Creative,
    href: '/creatives',
  },
]

const bottomMenu = [
  {
    label: 'Help',
    icon: Help,
    href: '/help',
  },
  {
    label: 'Settings',
    icon: SettingsIcon,
    href: '/settings',
  },
]

export default function Sidebar() {
  const [channelsExpanded, setChannelsExpanded] = useState(true);

  return (
    <div className="flex w-[288px] h-[831px] flex-col">
      <div className='flex items-center content-center justify-between w-[288px] h-[80px] gap-4 pt-5 pr-3.5px pb-5 pl-1.25 border-b"'>
        <Image
          alt='performa logo'
          className='w-[40px] h-[40px] rounded-xl color-[#E8E7E7]'
          src={Perfora}
        />
        <div className='flex items-center border-2 border-[#0000001F] color-[#FDFDFD] w-[180.875px] h-[36px] justify-between rounded-[12px] border p-[6px]'>
          <div className='flex gap-[8px] items-center w-[106px] h-[24px]'>
            <div className='w-6 h-6 gap-[10px] rounded-[7px] p-[5px] bg-[#309E96] text-[#FFFFFF]'>
              <span className="text-white">SS</span>
            </div>
            <span className='text-[14px] font-semibold text-[#031B15] leading-[1.255]'>Test_brand</span>
          </div>
          <ChevronsUpDown color='#031B15' size="16.63px" />
        </div>
        <div>
          <ChevronsLeft color='#309E96' size="16.63px" />
        </div>
      </div>
      <div className='flex w-[51px] h-[730px]'>
        <div className='flex flex-col justify-between gap-2.5 px-6 py-5'>
          <div className='flex flex-col  gap-2.5 border-r-[1px] border-[#FFFFFF]'>
            {AppList.map((item, index) => (
              <div key={index} className='rounded-xl flex items-center justify-center gap-[10px] pt-[6px] pr-[14px] pb-[6px] cursor-pointer'>
                <Image
                  src={item}
                  alt={`App ${index + 1}`}
                  className='w-[40px] h-[40px] '
                />
              </div>
            ))}
          </div>
          <div className='flex flex-col items-center gap-[18px]'>
            <Image
              src={User}
              alt="user"
            />
            <div className='w-6 h-6 gap-[10px] rounded-[32px] p-[6px] bg-[#9106FF] text-[#FFFFFF]'>
              <span className='text-white'>SS</span>
            </div>
          </div>
        </div>
        <div className="w-[237px] h-[755px] justify-between pt-[24px] pr-[16px] pb-[24px] pl-[16px] bg-[#F8F8F8]">
          <div className='w-[205px] h-[703px]  flex flex-col justify-between gap-[10px]'>
            <div className='flex flex-col gap-[10px]'>
              {menu.map((item, idx) => (
                <div key={idx}>
                  {item.children ? (
                    <div className="flex flex-col gap-[4px]">
                      <div
                        onClick={() => setChannelsExpanded(!channelsExpanded)}
                        className="w-full flex items-center justify-between px-3 py-2 hover:bg-white rounded-md"
                      >
                        <div className="flex items-center gap-[12px]">
                          <Image
                            src={item.icon}
                            alt={item.label}
                            width={16}
                            height={16}
                            className="[&_path]:stroke-[#7E8986]"
                          />
                          <span className="text-[14px] text-[#031B15] font-mulish font-medium leading-5">
                            {item.label}
                          </span>
                        </div>
                        <ChevronDown
                          color='#031B15'
                          size="16.63px"
                          className={clsx(
                            "transition-transform",
                            channelsExpanded && "transform rotate-180"
                          )} />
                      </div>
                      {channelsExpanded && (
                        <div className="flex flex-col gap-[4px] pl-[16px]">
                          {item.children.map((child, childIdx) => (
                            <div
                              key={childIdx}
                              className={clsx(
                                'gap-[12px] text-[14px] rounded-[10px] pt-[6px] pr-[16px] pb-[6px] pl-[16px]',
                                child.active
                                  ? 'bg-[#DFEAE8] text-[#027056] font-semibold'
                                  : 'text-[rgba(3,27,21,0.8)] hover:bg-[rgba(46,183,111,0.23)]'
                              )}
                            >
                              {child.label}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div
                      className="flex items-center gap-[12px] px-3 py-2 text-[#031B15] hover:bg-white rounded-md"
                    >
                      <Image
                        src={item.icon}
                        alt={item.label}
                        width={16}
                        height={16}
                        className="[&_path]:stroke-[#7E8986]"
                      />
                      <span className="text-[14px] leading-5">
                        {item.label}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className='flex flex-col gap-[10px]'>
              {bottomMenu.map((item, idx) => (
                <div key={idx} className="flex items-center gap-[12px] px-3 py-2 text-[#031B15] rounded-md">
                  <Image
                    src={item.icon}
                    alt={item.label}
                    width={16}
                    height={16}
                    className="[&_path]:stroke-[#031B15]"
                  />
                  <span className="text-[14px] leading-5">
                    {item.label}
                  </span>
                </div>
              ))}
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
