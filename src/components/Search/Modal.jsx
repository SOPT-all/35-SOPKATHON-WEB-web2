import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Button from './Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Modal = ({ groupId, closeModal }) => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    // 모달에서 처리할 작업
    console.log(`Group ID: ${groupId}`);
    closeModal(); // 모달 닫기
  };

  const handleButtonClick = () => {
    if (inputValue.trim() !== '') {
      handleSubmit();
      navigate(`/groups/${groupId}/board`);
    }
  };

  return ReactDOM.createPortal(
    <Overlay>
      <ModalContainer>
        <Title>입장 비밀번호가 뭐야?</Title>
        <Input
          id="room_pwd"
          type="text"
          name="room_pwd"
          value={inputValue}
          onChange={handleInputChange}
          selected={inputValue.trim() !== ''}
          placeholder="비밀번호 입력창"></Input>

        <Button selected={inputValue.trim() !== ''} content={'참여할래'} onClick={handleButtonClick} />
      </ModalContainer>
    </Overlay>,
    document.getElementById('modal-root'),
  );
};

export default Modal;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.color.grap10_80};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  width: 32.6rem;
  background-color: ${(props) => props.theme.color.white};
  padding: 2.6rem 2.5rem;
  border-radius: 1rem;
  display: flex;
  gap: 2.2rem;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  ${(props) => props.theme.font.heading1};
`;

const Input = styled.input`
  background-color: ${(props) => props.theme.color.gray2};
  width: 27.4rem;
  height: 5rem;
  padding: 0rem 1.3rem;
  border-radius: 1rem;
  border: none;
  border: 1px solid ${({ selected, theme }) => (selected ? theme.color.primary : theme.color.gray2)};

  &::placeholder {
    ${(props) => props.theme.font.body2};
    color: ${(props) => props.theme.color.gray4};
  }
`;
