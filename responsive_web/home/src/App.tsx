import React from 'react';
import Login from './pages/Login';
import Main from './pages/Main';

import { Routes, Route, Outlet, Link } from 'react-router-dom';

export default function App() {
  return (
    <>
      <div>test</div>
      <Routes>
        <Route index element={<Login />}></Route>
        <Route path="Main" element={<Main />} />
        {/*   <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} /> */}

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
    </>
  );
}
