import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import BoardCard from '../../components/board/BoardCard';
import { data } from '../../constants/mocks/boardCardData';

const Board = () => {

  const [renderData, setRenderData] = useState([]);
  const [isAbleClick, setIsAbleClick] = useState(false);
  const [selectData, setSelectData] = useState([]);

  useEffect(() => {
    // 최소모임인원이 넘었을 때

    if (data.myCard) {
      // 1번 열어봤을 때
      setSelectData(Object.values(data.myCard));
      // console.log(Object.values(data.myCard));
      const newRenderData = [{ id: data.myCard.id, hint: data.myCard.hint }, ...data.cards];
      setRenderData(newRenderData);
      setIsAbleClick(true);
    } else {
      // 1번 열어보지 않았을 때
      const newRenderData = [...data.cards];
      setRenderData(newRenderData);
      if (data.isAbleToChoose) {
        // 최소모임인원이 충족
        setIsAbleClick(true);
      } else {
        // 최소모임인원 충족x
        setIsAbleClick(false);
      }
    }
  }, []);

  return (
    <>
      <BoardLayout>
        <BoardHeader>
          <BoardHeaderTitle>모임명</BoardHeaderTitle>
          <BoardHeaderText>p.s 우연을 운명으로 만들어볼래 ?</BoardHeaderText>
        </BoardHeader>

        <BoardList>
          {renderData.map((data) => {
            return (
              <BoardCard key={data.id} cardId={data.id} isAbleClick={isAbleClick} selectData={selectData}>
                {data.hint}
              </BoardCard>
            );
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
