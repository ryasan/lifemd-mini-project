import { BASE_URL } from './constants';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation';
import React from 'react';
import StatisticsCarousel from './pages/statistics';
import TestimonialCarousel from './pages/testimonial';

export default function App() {
	return (
		<BrowserRouter>
			<Navigation />
			<Routes>
				<Route path={BASE_URL} element={<TestimonialCarousel />} />
				<Route path={`${BASE_URL}/statistics`} element={<StatisticsCarousel />} />
			</Routes>
		</BrowserRouter>
	);
}
