import { ChevronDown } from 'lucide-react'
import React from 'react'
import Table from './Table'
import { cityTableData, skuTableData } from './StaticData'

export default function TableView() {
    return (
        <div className='flex flex-col rounded-[12px] gap-[24px] shadow-[0px_1px_0px_0px_rgba(0,0,0,0.12)] bg-white p-6'>
            <div className='flex justify-between items-start'>
                <div className='flex flex-col gap-1'>
                    <span className='text-[20px] font-bold text-[#031B15] leading-[1.2]'>SKU level data</span>
                    <span className='text-[14px] font-normal text-[#4F4D55] leading-[1.4]'>Analytics for all your SKUs</span>
                </div>
                <button className='flex gap-2 items-center py-2.5 px-3 border border-[#D9D9D9] bg-[#027056] rounded-[10px] text-[#FFFFFF] hover:bg-[#025c46] transition-colors'>
                    <span className='text-sm font-medium'>Filters(1)</span>
                    <ChevronDown className='w-3.5 h-3.5' />
                </button>
            </div>
            <div className='rounded-lg border border-[#F1F1F1] bg-white overflow-hidden'>
                <Table tableData={skuTableData}/>
            </div>
            <div className='flex justify-between items-start'>
                <div className='flex flex-col gap-1'>
                    <span className='text-[20px] font-bold text-[#031B15] leading-[1.2]'>City level data</span>
                    <span className='text-[14px] font-normal text-[#4F4D55] leading-[1.4]'>Analytics for all your cities</span>
                </div>
                <button className='flex gap-2 items-center py-2.5 px-3 border border-[#D9D9D9] bg-[#027056] rounded-[10px] text-[#FFFFFF] hover:bg-[#025c46] transition-colors'>
                    <span className='text-sm font-medium'>Filters(1)</span>
                    <ChevronDown className='w-3.5 h-3.5' />
                </button>
            </div>
            <div className='rounded-lg border border-[#F1F1F1] bg-white overflow-hidden'>
                <Table tableData={cityTableData}/>
            </div>
        </div>
    )
}

