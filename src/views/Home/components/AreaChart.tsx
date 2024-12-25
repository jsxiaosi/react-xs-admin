import { useChartsConfig } from '@/hooks/web/antCharts/useChartsConfig';
import { Area } from '@ant-design/charts';
import { memo } from 'react';
import type { AreaConfig } from '@ant-design/charts';

const data = [
  {
    week: '星期天',
    value: 150,
    category: '目标任务',
  },
  {
    week: '星期一',
    value: 154,
    category: '目标任务',
  },
  {
    week: '星期二',
    value: 201,
    category: '目标任务',
  },
  {
    week: '星期三',
    value: 299,
    category: '目标任务',
  },
  {
    week: '星期四',
    value: 190,
    category: '目标任务',
  },
  {
    week: '星期五',
    value: 330,
    category: '目标任务',
  },
  {
    week: '星期六',
    value: 410,
    category: '目标任务',
  },
  {
    week: '星期天',
    value: 220,
    category: '事项',
  },
  {
    week: '星期一',
    value: 182,
    category: '事项',
  },
  {
    week: '星期二',
    value: 191,
    category: '事项',
  },
  {
    week: '星期三',
    value: 234,
    category: '事项',
  },
  {
    week: '星期四',
    value: 290,
    category: '事项',
  },
  {
    week: '星期五',
    value: 330,
    category: '事项',
  },
  {
    week: '星期六',
    value: 310,
    category: '事项',
  },
  {
    week: '星期天',
    value: 50,
    category: '任务',
  },
  {
    week: '星期一',
    value: 124,
    category: '任务',
  },
  {
    week: '星期二',
    value: 191,
    category: '任务',
  },
  {
    week: '星期三',
    value: 280,
    category: '任务',
  },
  {
    week: '星期四',
    value: 90,
    category: '任务',
  },
  {
    week: '星期五',
    value: 30,
    category: '任务',
  },
  {
    week: '星期六',
    value: 10,
    category: '任务',
  },
];

const AreaChart = memo(() => {
  const { theme } = useChartsConfig();
  const config: AreaConfig = {
    data,
    theme,
    height: 362,
    xField: 'week',
    yField: 'value',
    seriesField: 'category',
    smooth: true,
    legend: false,
    xAxis: {
      range: [0, 1],
      nice: true,
      grid: {
        alignTick: true,
        line: {
          style: {
            stroke: '#ddd',
            opacity: 0.5,
          },
        },
      },
    },
    yAxis: {
      nice: true,
      tickCount: 7,
      min: 0,
      max: 1000,
      grid: {
        alignTick: true,
        line: {
          style: {
            stroke: '#ddd',
            opacity: 0.5,
          },
        },
      },
    },
  };

  return <Area {...config} />;
});

export default AreaChart;
