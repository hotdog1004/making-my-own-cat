import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from 'App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <div className="flex relative z-[1] overflow-y-auto mx-auto my-0 max-w-sm min-h-[667px] h-full">
      <div className="sm:max-w-xl w-full ">
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </div>
    </div>
    <p className="text-sm text-center text-slate-600 my-6">
      Copyright 2024. Gyeol all rights reserved.
    </p>
  </React.StrictMode>,
);
