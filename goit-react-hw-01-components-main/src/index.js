import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from "./App";
import 'modern-normalize/modern-normalize.css'
import './index.css';

import user from './data/social-profile.json';
import statistics from './data/statistics.json';
import friends from './data/friend-list.json';
import transactions from './data/transaction-history.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App data={{ user, statistics, friends, transactions }} />
  </React.StrictMode>
);