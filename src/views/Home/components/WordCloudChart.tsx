import type { WordCloudConfig } from '@ant-design/charts';
import { WordCloud } from '@ant-design/charts';
import { memo } from 'react';
import { useChartsConfig } from '@/hooks/web/antCharts/useChartsConfig';

let data = [
  { name: 'Vue', value: 0 },
  { name: 'React', value: 0 },
  { name: 'Angular', value: 0 },
  { name: 'ECharts', value: 0 },
  { name: 'Wechat', value: 0 },
  { name: 'Element', value: 0 },
  { name: 'Vite', value: 0 },
  { name: 'Node', value: 0 },
  { name: 'Router', value: 0 },
  { name: 'I18n', value: 0 },
  { name: 'VitePress', value: 0 },
  { name: 'Umi', value: 0 },
  { name: 'And Design', value: 0 },
];

const WordCloudChart = memo(() => {
  const { theme } = useChartsConfig();

  data = data.map((i) => {
    i.value = Math.random() * 30 + 8;
    return i;
  });
  const config: WordCloudConfig = {
    data,
    theme,
    wordField: 'name',
    weightField: 'value',
    height: 450,
    color: ['#e3e3e3', '#e3e3e3', '#e3e3e3'],
    wordStyle: {
      fontFamily: 'Verdana',
      fontSize: [18, 26],
    },
    // 设置交互类型
    interactions: [
      {
        type: 'element-active',
      },
    ],
    state: {
      active: {
        // 这里可以设置 active 时的样式
        style: {
          lineWidth: 3,
        },
      },
    },
  };

  return <WordCloud {...config} />;
});

export default WordCloudChart;
