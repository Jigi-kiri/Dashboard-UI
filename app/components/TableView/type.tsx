export interface TableData {
    skuName: string;
    availability: {
      sales: {
        current?: string;
        previous?: string;
        change?: number;
      };
      outOfStock: {
        current?: string;
        previous?: string;
        change?: number;
      };
      totalInventory: {
        current?: string;
        previous?: string;
        previousTwo?: string;
      };
    };
    visibility: {
      averageRank: {
        current?: string;
        previous?: string;
        change?: number;
      };
      estTraffic: {
        current?: string;
        previous?: string;
        change?: number;
      };
      estImpressions: {
        current?: string;
        previous?: string;
        change?: number;
      };
      ctr: {
        current?: string;
        previous?: string;
        change?: number;
      };
    };
  }