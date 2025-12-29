import React from 'react';
import '../styles/statistics.css';

const stats = [
	{
		percentage: "94%",
		highlight: "more confident",
		text: "of LifeMD patients report feeling {highlight} after losing weight.",
		delay: "400ms"
	},
	{
		percentage: "93%",
		highlight: "overall mood has improved",
		text: "say their {highlight} significantly.",
		delay: "600ms"
	},
	{
		percentage: "95%",
		highlight: "simple and straightforward",
		text: "found beginning their weight loss journey with LifeMD {highlight}.",
		delay: "800ms"
	}
];

export default function StatisticsPage () {
	return (
		<div className="relative min-h-screen flex items-center justify-center overflow-hidden font-sans py-20">

			{/* Background Image & Overlay */}
			<div className="absolute inset-0 z-0" aria-hidden="true">
				<img
					src="https://res.cloudinary.com/conversion-labs-inc/image/upload/v1753128449/stardust/lifemd/background/f_pench1_yngwg3.webp"
					alt=""
					className="h-full w-full object-cover"
					role="presentation"
				/>
				<div className="absolute inset-0 bg-[#083d51] opacity-90 backdrop-blur-md"></div>
			</div>

			{/* Main Content */}
			<main className="relative z-10 w-full max-w-3xl px-6 flex flex-col items-center">
				<h1 className="sr-only">LifeMD Patient Statistics</h1>

				{/* Checkmark Icon */}
				<div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0ms' }} role="img" aria-label="Success indicator">
					<div className="w-20 h-20 bg-[#7dc9c7]/20 rounded-full flex items-center justify-center border border-[#7dc9c7]/30 animate-bounce-slow">
						<svg
							className="w-10 h-10 text-[#7dc9c7]"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={3}
							aria-hidden="true"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M5 13l4 4L19 7"
								className="animate-draw-check"
								style={{
									strokeDasharray: 30,
									strokeDashoffset: 30
								}}
							/>
						</svg>
					</div>
				</div>

				<h2 className="text-3xl md:text-4xl font-bold text-center tracking-tight text-[#7dc9c7] mb-12 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
					Discover why so many trust LifeMD<br className="hidden md:block" /> to help transform their lives.
				</h2>

				{/* Card Stack */}
				<section className="w-full flex flex-col gap-6" aria-label="Patient statistics">
					{stats.map((stat, index) => (
						<article
							key={index}
							className="bg-white rounded-2xl p-6 md:p-8 shadow-xl flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center md:text-left animate-fade-in-up"
							style={{
								animationDelay: stat.delay
							}}
						>
							<div className="flex-shrink-0 text-5xl font-black text-[#2c6788] tabular-nums" aria-label={`${stat.percentage} of patients`}>
								{stat.percentage}
							</div>

							<div className="hidden md:block h-12 w-px bg-[#2c6788]/10" aria-hidden="true" />

							<p className="text-xl font-medium text-[#2c6788] leading-tight">
								{stat.text.split("{highlight}").map((part, i, arr) => (
									<React.Fragment key={i}>
										{part}
										{i < arr.length - 1 && <strong className="font-bold text-[#083d51]">{stat.highlight}</strong>}
									</React.Fragment>
								))}
							</p>
						</article>
					))}
				</section>

				{/* Continue Button */}
				<div className="mt-16 w-full flex justify-center animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
					<button
						type="button"
						className="w-full md:w-auto px-12 py-4 bg-[#7dc9c7] text-[#083d51] font-bold rounded-full flex items-center justify-center gap-3 shadow-2xl hover:scale-105 hover:bg-white transition-all active:scale-95 group"
						aria-label="Continue to next section"
					>
						<span className="uppercase text-sm tracking-widest">Continue</span>
						<svg className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
						</svg>
					</button>
				</div>
			</main>
		</div>
	);
}
