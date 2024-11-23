import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  const navigate = useNavigate();

  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  return (
    <Wrapper>
      <Logo src="public/logo.png" />

      <Main>
        <PhoneNumber>
          <Text>전화번호</Text>
          <InputNumber
            type="text"
            name="phoneNumber"
            placeholder="010-0000-0000"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </PhoneNumber>

        <Password>
          <Text>비밀번호</Text>
          <InputPassword
            type="text"
            name="password"
            placeholder="비밀번호 6자리를 입력해주세요"
            value={password}
            onChange={handlePasswordChange}
          />
        </Password>
      </Main>

      <SubmitButton
        type="submit"
        onClick={phoneNumber.trim() !== '' && password.trim() !== '' ? () => navigate('/door') : undefined}
        disabled={phoneNumber.trim() === '' || password.trim() === ''}>
        번호 따러 갈래?
      </SubmitButton>
    </Wrapper>
  );
};

export default Home;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2.4rem;
`;

export const Logo = styled.img`
  height: 15.9rem;
  margin-top: 9.5rem;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 4rem;
`;

export const PhoneNumber = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3.8rem;
  gap: 0.8rem;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.color.gray8};
  ${({ theme }) => theme.font.body3};
`;

export const InputNumber = styled.input`
  height: 5rem;
  padding: 1.5rem 1.3rem;
  align-items: center;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.color.gray6};
  ${({ theme }) => theme.font.body2};

  &::placeholder {
    ${({ theme }) => theme.font.body2};
    color: ${({ theme }) => theme.color.gray4};
  }
`;

export const Password = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const InputPassword = styled.input`
  height: 5rem;
  padding: 1.5rem 1.3rem;
  align-items: center;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.color.gray6};
  ${({ theme }) => theme.font.body2};

  &::placeholder {
    ${({ theme }) => theme.font.body2};
    color: ${({ theme }) => theme.color.gray4};
  }
`;

export const SubmitButton = styled.button`
  /* position: absolute; */
  width: 100%;
  height: 5.6rem;
  margin-top: 6.3rem;
  /* margin-bottom: 4.4rem; */
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  ${({ theme }) => theme.font.body1};

  &:disabled {
    background-color: ${({ theme }) => theme.color.gray4};
    color: ${({ theme }) => theme.color.gray9};
  }
`;
