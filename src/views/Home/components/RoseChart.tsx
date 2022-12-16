import { memo } from 'react';
import type { PieConfig } from '@ant-design/charts';
import { Pie } from '@ant-design/charts';
import { useChartsConfig } from '@/hooks/web/antCharts/useChartsConfig';

const data = [
  {
    type: 'Vue',
    value: 70,
  },
  {
    type: 'React',
    value: 20,
  },
  {
    type: 'Angular',
    value: 10,
  },
];

const RoseChart = memo(() => {
  const { theme } = useChartsConfig();

  // 分组玫瑰图
  const config: PieConfig = {
    appendPadding: 10,
    data,
    theme,
    height: 362,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.64,
    meta: {
      value: {
        formatter: (v: Number) => `${v}`,
      },
    },
    legend: {
      layout: 'horizontal',
      position: 'bottom',
    },
    label: {
      type: 'inner',
      offset: '-50%',
      style: {
        textAlign: 'center',
      },
      autoRotate: false,
      content: '{value}',
    },
    statistic: {
      title: {
        customHtml: (_container, _view, datum, _data) => {
          if (datum) {
            return datum.type;
          }
          return '卷';
        },
      },
      // content: {
      //   offsetY: 4,
      //   style: {
      //     fontSize: '32px',
      //   },
      //   customHtml: (container, view, datum, data) => {
      //     return '123123';
      //   },
      // },
    },
    // 添加 中心统计文本 交互
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
      {
        type: 'pie-statistic-active',
      },
    ],
  };

  return <Pie {...config} />;
});

export default RoseChart;
