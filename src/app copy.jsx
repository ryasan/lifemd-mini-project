import { useState } from 'react';
import clsx from 'clsx';
import './styles/app.css';

function App () {
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const togglePause = () => setIsPaused((prev) => !prev);

  return (
    <main className="px-5 text-center font-greycliff text-primary pt-14">
      <div className="max-w-[512px] mx-auto">
        {/* Hero Section */}
        <header>
          <h1 className="text-[26px] leading-[29.9px] font-bold text-primary-700">
            LifeMD sets the standard for remarkable weight loss success.
          </h1>
          <p className="my-[15px] text-[16px] text-[#1b3d50] font-semibold">
            Over 1 million pounds and counting lost by patients on LifeMD's top-rated GLP-1 weight
            management program.
          </p>
        </header>

        {/* Social Proof & Testimonials */}
        <section
          className="rounded-lg bg-[#E0F2F3] py-4 mb-8 animate-slide-in-up"
          aria-labelledby="testimonials-heading"
        >
          <h2 id="testimonials-heading" className="font-semibold text-primary uppercase">
            <strong>Real Patients.</strong> Amazing Results.
          </h2>

          <div className="relative overflow-hidden marquee-container my-4">
            {/* Interactive Marquee */}
            <button
              type="button"
              className={clsx(
                'animate-scroll flex w-[7860px] transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-700 rounded-md',
                (isHovered || isPaused) && 'animate-pause'
              )}
              aria-label={isPaused ? "Resume scrolling testimonials" : "Pause scrolling testimonials"}
              aria-pressed={isPaused}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={togglePause}
            >
              {/* Main testimonial content */}
              <img
                src="https://res.cloudinary.com/conversion-labs-inc/image/upload/v1753137606/stardust/lifemd/testimonial_carousel_l3_cqcudp.webp"
                className="w-[4930px] block"
                alt="Testimonial grid showing patient success stories and weight loss results"
              />
              {/* Decorative clone for infinite loop animation; hidden from screen readers to avoid repetition */}
              <img
                src="https://res.cloudinary.com/conversion-labs-inc/image/upload/v1753137606/stardust/lifemd/testimonial_carousel_l3_cqcudp.webp"
                className="w-[4930px] block"
                alt=""
                aria-hidden="true"
              />
            </button>

            {/* Status announcement for screen readers when animation state changes */}
            <div className="sr-only" aria-live="polite">
              {isPaused ? 'Testimonials paused.' : 'Testimonials playing.'}
            </div>
          </div>

          {/* Aggregate Ratings */}
          <div className="flex items-center justify-center gap-4" role="group" aria-label="Rating Summary">
            <div className="font-semibold text-[47px]">
              <span className="sr-only">Rating: </span>4.9
            </div>

            <div className="flex flex-col items-center gap-1">
              <svg width="88" height="17" viewBox="0 0 88 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="16" height="17" fill="#0F5C78" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.41545 7.23291H14L10.2923 9.84401L11.7035 14.0769L7.99582 11.4577L4.2881 14.0769L5.70772 9.84401L2 7.2248L6.58455 7.23291L8.00418 3L9.41545 7.23291ZM10.2917 9.84419L10.609 10.8011L8.00361 11.4579L10.2917 9.84419Z"
                  fill="white"
                />
                <rect x="18" width="16" height="17" fill="#0F5C78" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M27.4154 7.23291H32L28.2923 9.84401L29.7035 14.0769L25.9958 11.4577L22.2881 14.0769L23.7077 9.84401L20 7.2248L24.5846 7.23291L26.0042 3L27.4154 7.23291ZM28.2917 9.84419L28.609 10.8011L26.0036 11.4579L28.2917 9.84419Z"
                  fill="white"
                />
                <rect x="36" width="16" height="17" fill="#0F5C78" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M45.4154 7.23291H50L46.2923 9.84401L47.7035 14.0769L43.9958 11.4577L40.2881 14.0769L41.7077 9.84401L38 7.2248L42.5846 7.23291L44.0042 3L45.4154 7.23291ZM46.2917 9.84419L46.609 10.8011L44.0036 11.4579L46.2917 9.84419Z"
                  fill="white"
                />
                <rect x="54" width="16" height="17" fill="#0F5C78" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M63.4154 7.23291H68L64.2923 9.84401L65.7035 14.0769L61.9958 11.4577L58.2881 14.0769L59.7077 9.84401L56 7.2248L60.5846 7.23291L62.0042 3L63.4154 7.23291ZM64.2917 9.84419L64.609 10.8011L62.0036 11.4579L64.2917 9.84419Z"
                  fill="white"
                />
                <rect x="72" width="16" height="17" fill="#0F5C78" fill-opacity="0.78" />
                <rect x="72" width="15" height="17" fill="#0F5C78" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M81.4154 7.23291H86L82.2923 9.84401L83.7035 14.0769L79.9958 11.4577L76.2881 14.0769L77.7077 9.84401L74 7.2248L78.5846 7.23291L80.0042 3L81.4154 7.23291ZM82.2917 9.84419L82.609 10.8011L80.0036 11.4579L82.2917 9.84419Z"
                  fill="white"
                />
              </svg>
              <span className="text-[13px] font-bold">7,900 REVIEWS</span>
            </div>
          </div>

          <p className="text-[10px] mt-2 text-primary-600">
            Available on Apple App Store and Google Play
          </p>
        </section>

        {/* Promotional Callout */}
        <aside className="text-[14px] text-[#808080] font-thin mb-8">
          Special Offer: <strong className="font-semibold text-primary-700">Save 50% Off Today</strong>
        </aside>
      </div>
    </main>
  );
}

export default App;
