'use client'
import React from 'react'
import TopNav from '../TopNav/TopNav'
import ChartView from '../Charts/ChartView'
import TableView from '../TableView/TableView'

export default function Dashboard() {
    return (
        <React.Fragment>
            <TopNav />
            <div className="w-[1064.38px] p-[12] gap-[48px]">
                <ChartView />
            </div>
            <div className="w-[1064.38px] h-[958px] p-[12] gap-[48px]">
                <TableView />
            </div>
        </React.Fragment>
    )
}
