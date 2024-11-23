import React from 'react';
import styled from 'styled-components';
const Button = ({ content, isClicked }) => {
  return <Buttons>{content}</Buttons>;
};

export default Button;

const Buttons = styled.button`
  display: flex;
  width: 100%;
  height: 5.6rem;
  padding: 1.8rem;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.color.gray4};
  ${(props) => props.theme.font.body1};
`;
