import { useRef, useState } from 'react';

const useSwiperNavigation = () => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

  const handleSwiperUpdate = () => {
    if (swiperRef.current) {
      setIsBeginning(swiperRef.current.isBeginning);
      setIsEnd(swiperRef.current.isEnd);
    }
  };

  return { swiperRef, isBeginning, isEnd, handleSwiperUpdate };
};

export default useSwiperNavigation; // Ensure you have this line
