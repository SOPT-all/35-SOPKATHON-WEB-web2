import React from 'react';
import styled from 'styled-components';
const TextFiled = () => {
  return (
    <InputContainer>
      <Label htmlFor="search">모임명</Label>
      <Input id="search" type="text" name="search" placeholder="모임 이름을 검색해보세요"></Input>
    </InputContainer>
  );
};

export default TextFiled;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const Label = styled.label`
  ${(props) => props.theme.font.body3};
  color: ${(props) => props.theme.gray8};
`;

const Input = styled.input`
  display: flex;
  width: 100%;
  height: 5rem;
  padding: 1.5rem 1.3rem;
  border-radius: 1rem;
  border: 1px solid ${(props) => props.theme.color.gray6};

  &::placeholder {
    ${(props) => props.theme.font.body2};
    color: ${(props) => props.theme.gray4};
  }
`;
