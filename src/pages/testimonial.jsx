import React from 'react';
import '../styles/testimonial.css';

export default function TestimonialPage () {
	return (
		<div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 font-sans overflow-hidden">
			<div className="w-full max-w-lg text-center">

				{/* Hero Header */}
				<h1 className="staggered-intro-1 text-[26px] leading-[1.1] font-bold text-[#0F5C78] mb-3">
					LifeMD sets the standard for remarkable weight loss success.
				</h1>

				<p className="staggered-intro-2 mb-10 text-[16px] text-[#1b3d50] font-semibold leading-snug">
					Over 1 million pounds and counting lost by patients on LifeMD's top-rated GLP-1 weight management program.
				</p>

				{/* Main Content Card */}
				<div className="staggered-intro-3 rounded-3xl bg-[#E0F2F3] p-6 pb-10 mb-8 shadow-sm border border-[#cdeced]">

					<div className="font-extrabold text-[#0F5C78] text-[16px] tracking-[0.2em] mb-8 uppercase">
						Real Patients. <span className="opacity-50">Amazing Results.</span>
					</div>

					{/* Scrolling Track */}
					<div className="relative overflow-hidden mb-10 py-2 group">
						<div className="marquee-content flex w-max relative z-0">
							{[...Array(3)].map((_, i) => (
								<img key={i} className="w-[4930px]" src="https://res.cloudinary.com/conversion-labs-inc/image/upload/v1753137606/stardust/lifemd/testimonial_carousel_l3_cqcudp.webp" alt={`Testimonial ${ i + 1 }`} />
							))}
						</div>

						{/* Fade Gradients */}
						<div className="absolute inset-y-0 left-0 w-12 z-20 pointer-events-none" style={{ background: 'linear-gradient(to right, #E0F2F3 0%, rgba(224, 242, 243, 0.95) 30%, rgba(224, 242, 243, 0.6) 60%, transparent 100%)' }} />
						<div className="absolute inset-y-0 right-0 w-12 z-20 pointer-events-none" style={{ background: 'linear-gradient(to left, #E0F2F3 0%, rgba(224, 242, 243, 0.95) 30%, rgba(224, 242, 243, 0.6) 60%, transparent 100%)' }} />
					</div>

					{/* Rating Summary */}
					<div className="flex flex-col items-center">
						<div className="flex items-center justify-center gap-5">
							<span className="font-bold text-[52px] text-[#0F5C78] leading-none tracking-tighter">4.9</span>
							<div className="flex flex-col items-start gap-1.5">
								<div className="flex gap-[3px]">
									{[...Array(5)].map((_, i) => (
										<div key={i} className="bg-[#0F5C78] w-4 h-4 flex items-center justify-center rounded-[1px]">
											<svg width="10" height="10" viewBox="0 0 17 17" fill="white">
												<path d="M8.5 1L10.5 6.5H16L11.5 10L13.5 15.5L8.5 12L3.5 15.5L5.5 10L1 6.5H6.5L8.5 1Z" />
											</svg>
										</div>
									))}
								</div>
								<div className="text-[13px] font-black text-[#0F5C78] tracking-tighter">7,900 REVIEWS</div>
							</div>
						</div>

						<div className="text-[11px] text-[#0F5C78] font-bold opacity-60 mt-5 uppercase tracking-wide">
							On Apple App Store and Google Play
						</div>
					</div>
				</div>

				{/* Special Offer */}
				<div className="staggered-intro-4 text-[14px] text-[#808080] font-medium tracking-tight">
					Special Offer: <span className="font-bold text-[#0F5C78]">Save 50% Off Today</span>
				</div>
			</div>
		</div>
	);
}
