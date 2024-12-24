import React from 'react';
import { ConfigProvider } from 'antd';
import FoodAppPage from './components/FoodAppPage';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import '~antd/dist/antd.css';

  body {
    cursor: default;
  }

  .ant-btn-animate {
    transition: transform 0.3s ease;
  }

  .ant-btn-animate:hover {
    transform: scale(1.05);
  }

  .ant-card {
    transition: box-shadow 0.3s ease, transform 0.3s ease;
  }

  .ant-card:hover {
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    transform: translateY(-5px);
  }
`;

const App = () => {
  return (
    <ConfigProvider>
      <GlobalStyle />
      <FoodAppPage />
    </ConfigProvider>
  );
};

export default App;

