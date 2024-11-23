import React, { useState } from 'react';
import styled from 'styled-components';

const NewGroup = () => {
  const [groupName, setGroupName] = useState('');
  const [num, setNum] = useState('');

  const handleChangeName = (e) => {
    setGroupName(e.target.value);
  };

  const handleChangeNum = (e) => {
    setNum(e.target.value);
  };

  return (
    <Wrapper>
      <Title>모임을 개설해줘</Title>
      <SubTitle>p.s 이 모임은 30일 뒤에 저절로 없어질 예정이야</SubTitle>
      <InputLayout>
        <InputContainer>
          <Label>모임명</Label>
          <Input placeholder="모임명을 입력해주세요" onChange={handleChangeName} maxLength={5} />
          <HelperText>*공백포함 5글자 이내</HelperText>
        </InputContainer>

        <InputContainer>
          <Label>최소 인원 수</Label>
          <Input placeholder="최소 인원 수를 입력해주세요" onChange={handleChangeNum} />
        </InputContainer>
      </InputLayout>
      <Button>이대로 개설할래</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 2.4rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Title = styled.p`
  ${({ theme }) => theme.font.heading1}
  margin-top: 10.5rem;
`;

const SubTitle = styled.p`
  ${({ theme }) => theme.font.body6}
  margin-top: 1.5rem;
`;
const InputLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 8.2rem;
  gap: 2.8rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const Label = styled.p`
  ${({ theme }) => theme.font.body3}
`;

const Input = styled.input`
  height: 5rem;
  border: 1px solid ${({ theme }) => theme.color.gray6};
  border-radius: 1rem;
  padding: 1.5rem 1.3rem;
`;

const ErrorText = styled.p``;

const HelperText = styled.p`
  ${({ theme }) => theme.font.caption3};
  color: ${({ theme }) => theme.color.gray8};

  align-self: flex-end;
`;

const Button = styled.button`
  width: 100%;
  height: 5.6rem;
  white-space: nowrap;
  background-color: ${({ theme }) => theme.color.primary};
  ${({ theme }) => theme.font.body1};
  color: #ffffff;
  border-radius: 1rem;
  margin-top: 6.3rem;
`;
export default NewGroup;
