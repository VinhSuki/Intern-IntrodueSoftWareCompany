import { useEffect, useRef, useState } from 'react';

// eslint-disable-next-line react/prop-types
const ProgressCircle = ({ icon: Icon, strokeWidth = 2, percentage = 80 }) => {
  const circleRef = useRef(null);
  const containerRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  // Kích hoạt animation khi cuộn đến
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * ((100 - percentage) / 100);

  return (
    <div ref={containerRef} className="relative flex items-center justify-center xl:w-40 xl:h-40 lg:w-36 lg:h-36 md:w-40 md:h-40 sm:w-36 sm:h-36 w-32 h-32">
      {/* Icon */}
      {Icon && <Icon className="text-white xl:text-2xl lg:text-xl md:text-2xl sm:text-xl text-lg absolute z-10" />}

      {/* Vòng tròn nền */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r={radius} stroke="white" strokeWidth={strokeWidth} fill="transparent" opacity="0.3" />
      </svg>

      {/* Vòng tròn hiệu ứng */}
      <svg className="absolute inset-0 w-full h-full rotate-[-90deg]" viewBox="0 0 100 100">
        <circle
          ref={circleRef}
          cx="50"
          cy="50"
          r={radius}
          stroke="white"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={animate ? offset : circumference}
          className={animate ? `transition-all duration-1000 ease-out` : ''}
        />
      </svg>
    </div>
  );
};

export default ProgressCircle;
