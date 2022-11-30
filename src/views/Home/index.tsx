import { useState } from 'react';
import reactLogo from '@/assets/react.svg';
import './index.less';
import { useLocale } from '@/locales';

const Home = () => {
  const [count, setCount] = useState(0);

  const intl = useLocale();

  const render = () => {
    return (
      <div className="home">
        <div className="content">
          <div>
            <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
              <img src="/vite.svg" className="logo" alt="Vite logo" />
            </a>
            <a href="https://reactjs.org" target="_blank" rel="noreferrer">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <div>{intl.formatMessage({ id: 'app.text' })}</div>
          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
        </div>
      </div>
    );
  };

  return render();
};

export default Home;
