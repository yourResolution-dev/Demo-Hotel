import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HotelDemoPage } from './HotelDemoPage';
import { RoomDetailPage } from './components/RoomDetailPage';
import './styles/hotel.css';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Hotel Demo Routes */}
        <Route path="/" element={<HotelDemoPage />} />
        <Route path="/demos/hotel" element={<HotelDemoPage />} />

        {/* Room Detail Subroutes */}
        <Route path="/demos/hotel/rooms/:slug" element={<RoomDetailPage />} />
        <Route path="/rooms/:slug" element={<RoomDetailPage />} />

        {/* Fallback to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
