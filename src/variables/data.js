import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function Example() {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://maas.aminer.cn/tracking/statistics/selectDataIndicators?startTime=2022-11-05&endTime=2022-11-05',
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    data.map(item=>(item.dayInvokeNumber))
  );

}