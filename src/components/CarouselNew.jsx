import React, { useRef, useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import PropTypes from "prop-types";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const CarouselNew = ({ children, highlightCenter = false, gap = "gap-4" }) => {
  const scrollContainerRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(0);

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  useEffect(() => {
    if (!highlightCenter) return;
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const containerWidth = container.clientWidth;
      const cardWidth = 270 + 16;
      const center = scrollLeft + containerWidth / 2;
      const newIndex = Math.round(center / cardWidth - 0.5);
      setCenterIndex(newIndex);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [highlightCenter]);

  const handlers = useSwipeable({
    onSwipedLeft: scrollRight,
    onSwipedRight: scrollLeft,
    trackMouse: true,
  });

  return (
    <div className="relative w-full" {...handlers}>
      {/* Left Icon Button */}
      <button
        onClick={scrollLeft}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-7xl text-[#7F5AF0] hover:scale-110 transition-transform"
        aria-label="Scroll Left"
      >
        <FiChevronLeft />
      </button>

      {/* Right Icon Button */}
      <button
        onClick={scrollRight}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-7xl text-[#7F5AF0] hover:scale-110 transition-transform"
        aria-label="Scroll Right"
      >
        <FiChevronRight />
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className={`flex overflow-x-auto scroll-smooth whitespace-nowrap ${gap} px-[10vw] no-scrollbar`}
      >
        {React.Children.map(children, (child, idx) => (
          <div
            key={idx}
            className="transition-transform duration-300 ease-out"
            style={{
              transform: highlightCenter
                ? `scale(${idx === centerIndex ? 1 : 0.9})`
                : "scale(1)",
              transformOrigin: "center",
            }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

CarouselNew.propTypes = {
  children: PropTypes.node.isRequired,
  highlightCenter: PropTypes.bool,
  gap: PropTypes.string,
};

export default CarouselNew;
