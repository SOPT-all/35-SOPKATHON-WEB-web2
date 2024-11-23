import styled from 'styled-components';

const Toast = ({ children, toastBottom }) => {
  return (
    <>
      <ToastWrapper>
        <ToastTextStyle>{children}</ToastTextStyle>
      </ToastWrapper>
    </>
  );
};

export default Toast;

const ToastWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6rem;
  padding: 1.2rem 1.7rem;

  position: fixed;
  bottom: ${({ toastBottom }) => toastBottom || '10'}rem;
  
  width: 33rem;
  background-color: ${({ theme }) => theme.color.gray5};
  border-radius: 10px;
  z-index: 10;
`;

const ToastTextStyle = styled.span`
  ${({ theme }) => theme.font.body3};
  color: ${({ theme }) => theme.color.gray1};
`;
