import React, { useState } from 'react';
import '../styles/testimonial.css';

export default function TestimonialPage() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedStory, setSelectedStory] = useState(null);

	// Mock interaction
	const handleOpenStory = () => {
		setSelectedStory({
			name: "Sarah M.",
			loss: "45 lbs lost",
			quote: "LifeMD didn't just help me lose weight; they helped me find my confidence again. The clinical support made all the difference.",
			duration: "6 months on program"
		});
		setIsModalOpen(true);
	};


	return (
		<div className="min-h-screen bg-[#F0F5F7] flex flex-col items-center justify-center p-4 font-sans selection:bg-cyan-100">
			<div className="w-full max-w-lg text-center">
				{/* Trust Badge */}
				<div className="animate-fade-in flex justify-center mb-4">
					<span className="bg-cyan-100 text-cyan-800 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest border border-cyan-200">
						Verified Clinical Program
					</span>
				</div>

				{/* Hero Header */}
				<h1 className="animate-fade-in delay-1 text-[28px] md:text-[32px] leading-[1.1] font-extrabold text-[#0F5C78] mb-4 tracking-tight">
					Setting the standard for <span className="text-cyan-600">weight loss success.</span>
				</h1>

				<p className="animate-fade-in delay-2 mb-8 text-[16px] text-[#426a81] font-medium leading-relaxed px-4">
					Over 1 million pounds lost by patients on LifeMD's top-rated GLP-1 weight management program.
				</p>

				{/* Main Content Card */}
				<div className="animate-fade-in delay-3 rounded-[32px] bg-white p-6 pb-8 mb-6 shadow-xl shadow-cyan-900/5 border border-slate-100 relative overflow-hidden group/card">
					{/* Subtle Background Accent */}
					<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20" />

					<div className="font-extrabold text-[#0F5C78] text-[13px] tracking-[0.25em] mb-8 uppercase flex items-center justify-center gap-2">
						Real Patients <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-50" /> <span className="opacity-50">Amazing Results</span>
					</div>

					{/* Scrolling Track */}
					<div className="marquee-container relative overflow-hidden mb-10 py-2 rounded-xl cursor-pointer" onClick={handleOpenStory}>
						<div className="marquee-content flex w-max relative z-0">
							{[...Array(3)].map((_, i) => (
								<div key={i} className="flex gap-4 px-2">
									<img
										className="h-[120px] md:h-[140px] rounded-2xl object-cover shadow-sm transition-transform duration-500 group-hover/card:scale-[1.02]"
										src="https://res.cloudinary.com/conversion-labs-inc/image/upload/v1753137606/stardust/lifemd/testimonial_carousel_l3_cqcudp.webp"
										alt={`Testimonial ${ i + 1 }`}
									/>
								</div>
							))}
						</div>

						{/* Fade Gradients */}
						<div className="absolute inset-y-0 left-0 w-16 z-20 pointer-events-none bg-gradient-to-r from-white via-white/40 to-transparent" />
						<div className="absolute inset-y-0 right-0 w-16 z-20 pointer-events-none bg-gradient-to-l from-white via-white/40 to-transparent" />

						{/* Click to Expand Prompt */}
						<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity bg-white/10 backdrop-blur-[1px] z-30">
							<span className="bg-[#0F5C78] text-white text-[12px] px-4 py-2 rounded-full font-bold shadow-lg">View Stories</span>
						</div>
					</div>

					{/* Rating Summary */}
					<div className="flex flex-col items-center">
						<div className="flex items-center justify-center gap-6">
							<span className="font-black text-[56px] text-[#0F5C78] leading-none tracking-tighter">4.9</span>
							<div className="flex flex-col items-start gap-1">
								<div className="flex gap-[4px]">
									{[...Array(5)].map((_, i) => (
										<div key={i} className="bg-[#0F5C78] w-[18px] h-[18px] flex items-center justify-center rounded-[3px] shadow-sm transform hover:scale-110 transition-transform">
											<svg width="12" height="12" viewBox="0 0 17 17" fill="white">
												<path d="M8.5 1L10.5 6.5H16L11.5 10L13.5 15.5L8.5 12L3.5 15.5L5.5 10L1 6.5H6.5L8.5 1Z" />
											</svg>
										</div>
									))}
								</div>
								<div className="text-[14px] font-extrabold text-[#0F5C78] tracking-tight">7,900 VERIFIED REVIEWS</div>
							</div>
						</div>

						<div className="text-[11px] text-[#4a7d94] font-bold mt-6 flex items-center gap-2">
							<img src="https://www.google.com/favicon.ico" className="w-3 h-3 grayscale opacity-70" alt="" />
							AS SEEN ON APP STORE & GOOGLE PLAY
						</div>
					</div>
				</div>

				{/* Primary Action Button */}
				<div className="animate-fade-in delay-4 space-y-4">
					<button className="w-full bg-[#0F5C78] text-white font-bold py-5 rounded-2xl shadow-xl shadow-cyan-900/20 active:scale-[0.98] transition-all hover:bg-[#0c4a61] text-[18px]">
						Check Eligibility — Save 50%
					</button>
					<p className="text-[13px] text-slate-400 font-medium">
						Join 100k+ members on their journey.
					</p>
				</div>
			</div>

			{/* Detail Modal */}
			{isModalOpen && (
				<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F5C78]/90 backdrop-blur-sm animate-in fade-in duration-300">
					<div className="bg-white rounded-[32px] p-8 max-w-sm w-full relative shadow-2xl">
						<button
							onClick={() => setIsModalOpen(false)}
							className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 font-bold"
						>
							✕
						</button>
						<div className="text-cyan-600 font-bold text-sm mb-2 uppercase tracking-widest">{selectedStory.loss}</div>
						<h2 className="text-2xl font-bold text-[#0F5C78] mb-4">{selectedStory.name}</h2>
						<p className="italic text-slate-600 leading-relaxed mb-6 text-lg">"{selectedStory.quote}"</p>
						<div className="text-xs text-slate-400 font-bold">{selectedStory.duration}</div>
						<button
							onClick={() => setIsModalOpen(false)}
							className="mt-8 w-full border-2 border-[#0F5C78] text-[#0F5C78] font-bold py-3 rounded-xl"
						>
							Back to Stories
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
