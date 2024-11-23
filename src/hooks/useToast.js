import { useState } from 'react';

const useToast = () => {
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [isToastRunning, setIsToastRunning] = useState(false);

  const showToast = () => {
    if (isToastRunning) return; // 이미 실행 중이면 return

    setIsToastRunning(true);
    setIsToastVisible(true);
    setTimeout(() => {
      setIsToastVisible(false); // 2초 후에 토스트 숨기기
      setIsToastRunning(false); // 실행 상태 리셋
    }, 2000);
  };

  return { showToast, isToastVisible };
};

export default useToast;
