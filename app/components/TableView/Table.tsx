import React from 'react'
import { ChevronDown, ChartLine, BoxSelectIcon, Check } from 'lucide-react'
import { TableData } from './type';


const tableData: TableData[] = [
  {
    skuName: "Protein Bar 100g",
    availability: {
      sales: {
        current: "₹93,132.12"
      },
      outOfStock: {
        current: "1.68%"
      },
      totalInventory: {
        current: "931.9"
      }
    },
    visibility: {
      averageRank: {
        current: "3.2",
      },
      estTraffic: {
        current: "12,303",
      },
      estImpressions: {
        current: "25,005",
      },
      ctr: {
        current: "1.90%",
      }
    }
  },
  {
    skuName: "Choco Bar 100g",
    availability: {
      sales: {
        current: "₹8,526.32",
        previous: "₹7,012.72",
        change: -2.4
      },
      outOfStock: {
        current: "6.79%",
        previous: "3.28%",
        change: -2.4
      },
      totalInventory: {
        current: "679",
        previous: "328",
        previousTwo: "-"
      }
    },
    visibility: {
      averageRank: {
        current: "7",
        previous: "4",
        change: -2.4
      },
      estTraffic: {
        current: "3,005",
        previous: "2,960",
        change: -2.4
      },
      estImpressions: {
        current: "4,231",
        previous: "3,657",
        change: -2.4
      },
      ctr: {
        current: "10",
        previous: "45",
        change: 4.2
      }
    }
  },
  {
    skuName: "SKU 3",
    availability: {
      sales: {
        current: "₹9313",
      },
      outOfStock: {
        current: "1.68%",
      },
      totalInventory: {
        current: "931.9"
      }
    },
    visibility: {
      averageRank: {
        current: "11",
      },
      estTraffic: {
        current: "1931.9"
      },
      estImpressions: {
        current: "₹931.9"
      },
      ctr: {
        current: "1.9"
      }
    }
  },
  {
    skuName: "SKU 4",
    availability: {
      sales: {
        current: "₹0",
      },
      outOfStock: {
        current: "0%",
      },
      totalInventory: {
        current: "0"
      }
    },
    visibility: {
      averageRank: {
        current: "0",
      },
      estTraffic: {
        current: "0"
      },
      estImpressions: {
        current: "₹0"
      },
      ctr: {
        current: "0"
      }
    }
  },
];

const ChangeIndicator = ({ change }: { change: any }) => {
  if (change === undefined || change === null) {
    return null;
  }
  const isPositive = change > 0;
  return (
    <div className="flex items-center gap-[3px]">
      <div className={`${isPositive ? 'text-[#F31D1D]' : 'text-[#1D874F]'}`}>
        {isPositive ? '↑' : '↓'}
      </div>
      <span className={`text-[14px] ${isPositive ? 'text-[#F31D1D]' : 'text-[#1D874F]'}`}>
        {Math.abs(change)}%
      </span>
    </div>
  );
};

export default function Table({tableData}: {tableData: TableData[]}) {
  return (
    <div className="w-full">
      <div className="flex">
        {/* SKU Name Column */}
        <div className="flex-[0.2] border-r border-[#F1F1F1]">
          <div className="flex items-center gap-[8px] pt-[32px] pr-[12px] pb-[32px] pl-[12px] bg-[#FFFFFF]">
            <ChartLine className="text-[#031B15]" size={20} />
            <span className="text-[15px] font-semibold text-[#013025]">SKU Name</span>
          </div>
          {tableData.map((row, index) => (
            <div
              key={index}
              className={`flex items-center gap-[8px] ${index===1 ? 'pt-[32px] pr-[12px] pb-[32px] pl-[12px]' : 'p-[12px]'
                } ${index<2 ? 'bg-[#F7F7F7]' : 'bg-[#FFFFFF]'}`}
            >
              <div className={`flex items-center w-[18px] h-[18px] rounded-[3px] border-[1px] border-[#CDD1D0] ${index < 2 ? 'bg-[#027056]': 'bg-[#FFFFFF]'}`} >
                <Check className="text-[#FFFFFF] w-[12px] h-[12px] m-auto" />
              </div>
              <span className="text-[14px] text-[#0A090B]">{row.skuName}</span>
            </div>
          ))}
          <div className="p-[12px] bg-[#FCFCFC] border-t border-[#F1F1F1] font-bold">
            <span className="text-[15px] font-bold text-[#0A090B]">Total</span>
          </div>
        </div>

        {/* Availability Section */}
        <div className="flex-[0.4] border-r border-[#F1F1F1]">
          <div className="flex justify-center border-b border-[#F1F1F1] p-[16px] bg-[#FFFFFF]">
            <span className="text-[15px] font-bold text-[#013025]">Availability</span>
          </div>
          <div className="flex">
            {/* Sales Column */}
            <div className="flex-1 border-r border-[#F1F1F1]">
              <div className="flex items-center justify-center p-[16px] gap-[8px] bg-[#FFFFFF]">
                <span className="text-[13px] font-semibold text-[#013025]">Sales</span>
                <ChevronDown className="text-[#031B15]" size={10} />
              </div>
              {tableData.map((row, index) => (
                <div
                  key={index}
                  className={`p-[12px] ${index < 2 ? 'bg-[#F7F7F7]' : 'bg-[#FFFFFF]'}`}
                >
                  <div className="flex flex-col items-center">
                    <span className="text-[14px] text-[#4E5E5A]">{row.availability.sales.current}</span>
                    <span className="text-[14px] text-[#4E5E5A]">{row.availability.sales.previous}</span>
                    <ChangeIndicator change={row.availability.sales.change} />
                  </div>
                </div>
              ))}
              <div className="p-[12px] bg-[#FCFCFC] border-t border-[#F1F1F1]">
                <span className="text-[15px] font-bold text-[#0A090B]">₹2,93,132.12</span>
              </div>
            </div>

            {/* Out of Stock Column */}
            <div className="flex-1 border-r border-[#F1F1F1]">
              <div className="flex items-center justify-between p-[16px] bg-[#FFFFFF]">
                <span className="text-[13px] font-semibold text-[#013025]">Out of Stock</span>
                <ChevronDown className="text-[#031B15]" size={10} />
              </div>
              {tableData.map((row, index) => (
                <div
                  key={index}
                  className={`p-[12px] ${index < 2 ? 'bg-[#F7F7F7]' : 'bg-[#FFFFFF]'}`}
                >
                  <div className="flex flex-col items-center">
                    <span className="text-[14px] text-[#4E5E5A]">{row.availability.outOfStock.current}</span>
                    <span className="text-[14px] text-[#4E5E5A]">{row.availability.outOfStock.previous}</span>
                    <ChangeIndicator change={row.availability.outOfStock.change} />
                  </div>
                </div>
              ))}
              <div className="p-[12px] bg-[#FCFCFC] border-t border-[#F1F1F1]">
                <span className="text-[15px] font-bold text-[#0A090B]">16%</span>
              </div>
            </div>

            {/* Total Inventory Column */}
            <div className="flex-1 border-r border-[#F1F1F1]">
              <div className="flex items-center justify-between p-[16px] bg-[#FFFFFF]">
                <span className="text-[13px] font-semibold text-[#013025]">Total Inventory</span>
                <ChevronDown className="text-[#031B15]" size={10} />
              </div>
              {tableData.map((row, index) => (
                <div
                  key={index}
                  className={`p-[12px] ${index < 2 ? 'bg-[#F7F7F7]' : 'bg-[#FFFFFF]'}`}
                >
                  <div className="flex flex-col items-center">
                    <span className="text-[14px] text-[#4E5E5A]">{row.availability.totalInventory.current}</span>
                    <span className="text-[14px] text-[#4E5E5A]">{row.availability.totalInventory.previous}</span>
                    <span className="text-[14px] text-[#4E5E5A]">{row.availability.totalInventory.previousTwo}</span>
                  </div>
                </div>
              ))}
              <div className="p-[12px] bg-[#FCFCFC] border-t border-[#F1F1F1]">
                <span className="text-[15px] font-bold text-[#0A090B]">2931</span>
              </div>
            </div>
          </div>
        </div>

        {/* Visibility Section */}
        <div className="flex-[0.4]">
          <div className="flex justify-center border-b border-[#F1F1F1] p-[16px] bg-[#FFFFFF]">
            <span className="text-[15px] font-bold text-[#013025]">Visibility</span>
          </div>
          <div className="flex">
            {/* Average Rank Column */}
            <div className="flex-1 border-r border-[#F1F1F1]">
              <div className="flex items-center justify-between p-[16px] bg-[#FFFFFF]">
                <span className="text-[13px] font-semibold text-[#013025]">Average Rank</span>
                <ChevronDown className="text-[#031B15]" size={10} />
              </div>
              {tableData.map((row, index) => (
                <div
                  key={index}
                  className={`p-[12px] ${index < 2 ? 'bg-[#F7F7F7]' : 'bg-[#FFFFFF]'}`}
                >
                  <div className="flex flex-col items-center">
                    <span className="text-[14px] text-[#4E5E5A]">{row.visibility.averageRank.current}</span>
                    <span className="text-[14px] text-[#4E5E5A]">{row.visibility.averageRank.previous}</span>
                    <ChangeIndicator change={row.visibility.averageRank.change} />
                  </div>
                </div>
              ))}
              <div className="p-[12px] bg-[#FCFCFC] border-t border-[#F1F1F1]">
                <span className="text-[15px] font-bold text-[#0A090B]">8.3</span>
              </div>
            </div>

            {/* Est. Traffic Column */}
            <div className="flex-1 border-r border-[#F1F1F1]">
              <div className="flex items-center justify-between p-[16px] bg-[#FFFFFF]">
                <span className="text-[13px] font-semibold text-[#013025]">Est. Traffic</span>
                <ChevronDown className="text-[#031B15]" size={10} />
              </div>
              {tableData.map((row, index) => (
                <div
                  key={index}
                  className={`p-[12px] ${index < 2 ? 'bg-[#F7F7F7]' : 'bg-[#FFFFFF]'}`}
                >
                  <div className="flex flex-col items-center">
                    <span className="text-[14px] text-[#4E5E5A]">{row.visibility.estTraffic.current}</span>
                    <span className="text-[14px] text-[#4E5E5A]">{row.visibility.estTraffic.previous}</span>
                    <ChangeIndicator change={row.visibility.estTraffic.change} />
                  </div>
                </div>
              ))}
              <div className="p-[12px] bg-[#FCFCFC] border-t border-[#F1F1F1]">
                <span className="text-[15px] font-bold text-[#0A090B]">61,985</span>
              </div>
            </div>

            {/* Est. Impressions Column */}
            <div className="flex-1 border-r border-[#F1F1F1]">
              <div className="flex items-center justify-between p-[16px] bg-[#FFFFFF]">
                <span className="text-[13px] font-semibold text-[#013025]">Est. Impressions</span>
                <ChevronDown className="text-[#031B15]" size={10} />
              </div>
              {tableData.map((row, index) => (
                <div
                  key={index}
                  className={`p-[12px] ${index < 2 ? 'bg-[#F7F7F7]' : 'bg-[#FFFFFF]'}`}
                >
                  <div className="flex flex-col items-center">
                    <span className="text-[14px] text-[#4E5E5A]">{row.visibility.estImpressions.current}</span>
                    <span className="text-[14px] text-[#4E5E5A]">{row.visibility.estImpressions.previous}</span>
                    <ChangeIndicator change={row.visibility.estImpressions.change} />
                  </div>
                </div>
              ))}
              <div className="p-[12px] bg-[#FCFCFC] border-t border-[#F1F1F1]">
                <span className="text-[13px] font-bold text-[#0A090B]">2,61,768</span>
              </div>
            </div>

            {/* CTR Column */}
            <div className="flex-1 border-r border-[#F1F1F1]">
              <div className="flex items-center justify-between p-[16px] bg-[#FFFFFF] rounded-tr-lg">
                <span className="text-[13px] font-semibold text-[#013025]">CTR</span>
                <ChevronDown className="text-[#031B15]" size={10} />
              </div>
              {tableData.map((row, index) => (
                <div
                  key={index}
                  className={`p-[12px] ${index < 2 ? 'bg-[#F7F7F7]' : 'bg-[#FFFFFF]'}`}
                >
                  <div className="flex flex-col items-center">
                    <span className="text-[14px] text-[#0F5AFF]">{row.visibility.ctr.current}</span>
                    <span className="text-[14px] text-[#3E7AFD]">{row.visibility.ctr.previous}</span>
                    <ChangeIndicator change={row.visibility.ctr.change} />
                  </div>
                </div>
              ))}
              <div className="p-[12px] bg-[#FCFCFC] border-t border-[#F1F1F1] rounded-br-lg">
                <span className="text-[15px] font-bold text-[#0A090B]">1.90%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
