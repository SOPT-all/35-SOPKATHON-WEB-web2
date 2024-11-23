import React, { useState } from 'react';
import styled from 'styled-components';
import BoardCard from '../../components/board/BoardCard';
import { CARD_DATA } from '../../constants/mocks/boardCardData';

const Board = () => {
  

  return (
    <>
      <BoardLayout>
        <BoardHeader>
          <BoardHeaderTitle>모임명</BoardHeaderTitle>
          <BoardHeaderText>p.s 우연을 운명으로 만들어볼래 ?</BoardHeaderText>
        </BoardHeader>

        <BoardList>
          {CARD_DATA.map((data) => {
            return <BoardCard key={data.id}>{data.hint}</BoardCard>;
          })}
        </BoardList>
      </BoardLayout>
    </>
  );
};

export default Board;

const BoardLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.primary_light2};

  padding: 6.5rem 2.4rem;
`;

const BoardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const BoardHeaderTitle = styled.h1`
  color: ${({ theme }) => theme.color.primary};
  ${({ theme }) => theme.font.heading1}
`;

const BoardHeaderText = styled.span`
  color: ${({ theme }) => theme.color.gray9};
  ${({ theme }) => theme.font.body6}
`;

const BoardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
`;
