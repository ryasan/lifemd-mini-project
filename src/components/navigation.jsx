import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BASE_URL } from '../constants';

export default function Navigation() {
	const location = useLocation();

	return (
		<nav className="w-full bg-white border-b border-gray-200 py-4 px-6">
			<div className="max-w-6xl mx-auto flex items-center justify-center gap-6">
				<Link
					to={BASE_URL}
					className={`text-sm font-semibold transition-colors ${
						location.pathname === BASE_URL || location.pathname === `${BASE_URL}/`
							? 'text-[#0F5C78] underline'
							: 'text-gray-600 hover:text-[#0F5C78]'
					}`}
				>
					Testimonials
				</Link>
				<Link
					to={`${BASE_URL}/statistics`}
					className={`text-sm font-semibold transition-colors ${
						location.pathname === `${BASE_URL}/statistics`
							? 'text-[#0F5C78] underline'
							: 'text-gray-600 hover:text-[#0F5C78]'
					}`}
				>
					Statistics
				</Link>
			</div>
		</nav>
	);
}

