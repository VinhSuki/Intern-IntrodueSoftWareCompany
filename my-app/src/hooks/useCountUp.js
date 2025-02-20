import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const useCountUp = (start = 0, end = 1000, duration = 2, threshold = 0.5) => {
  const counterRef = useRef(null);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false); // Biến kiểm soát

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true; // Đánh dấu đã chạy animation

          gsap.fromTo(
            counterRef.current,
            { innerText: start },
            {
              innerText: end,
              duration: duration,
              snap: { innerText: 1 },
              ease: 'power1.out',
            }
          );

          observer.disconnect(); // Ngắt kết nối để không chạy lại
        }
      },
      { threshold }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [start, end, duration, threshold]);

  return { counterRef, sectionRef };
};

export default useCountUp;
