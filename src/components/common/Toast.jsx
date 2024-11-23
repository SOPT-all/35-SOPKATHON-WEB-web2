import styled, { keyframes } from 'styled-components';

const Toast = ({ children, toastBottom, isVisible }) => {
  return (
    <>
      <ToastWrapper isVisible={isVisible} toastBottom={toastBottom}>
        <ToastTextStyle>{children}</ToastTextStyle>
      </ToastWrapper>
    </>
  );
};

export default Toast;

const ToastWrapper = styled.div`
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  gap: 6rem;
  padding: 1.2rem 1.7rem;

  position: fixed;
  bottom: ${({ toastBottom }) => (toastBottom ? `${toastBottom}rem` : '10rem')};
  left: 50%;
  transform: translateX(-50%);

  width: 33rem;
  background-color: ${({ theme }) => theme.color.gray5};
  border-radius: 10px;
  z-index: 10;
`;

const ToastTextStyle = styled.span`
  ${({ theme }) => theme.font.body3};
  color: ${({ theme }) => theme.color.gray1};
`;
