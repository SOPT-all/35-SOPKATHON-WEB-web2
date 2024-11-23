import React from 'react';
import Toast from '../../components/common/Toast';
import useToast from '../../hooks/useToast';

const Home = () => {
  const { showToast, isToastVisible } = useToast(); // 훅 사용

  return (
    <div>
      <button onClick={showToast}>Show Toast</button> {/* 버튼 클릭 시 showToast 호출 */}
      <Toast isVisible={isToastVisible}>토스트 입니다!</Toast>
    </div>
  );
};

export default Home;
