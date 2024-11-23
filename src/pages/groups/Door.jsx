import React from 'react';
import styled from 'styled-components';

const Door = () => {
  return (
    <Wrapper>
      <Up>
        <UpTitle>
          너도 <span>번따</span> 할래?
        </UpTitle>
        <UpDetail>
          우리 모임의 사람들 중<br />
          랜덤으로 매칭 받고 친해지자!
        </UpDetail>
      </Up>

      <div></div>

      <p>
        네가 관심 있던 <span>그 사람</span>과 매칭 될지도 몰라!
      </p>
    </Wrapper>
  );
};

export default Door;

const Wrapper = styled.div`
  padding: 0 2.4rem;
`;

const Up = styled.div`
  display: flex;
  /* width: 196px; */
  flex-direction: column;
  /* align-items: flex-start; */
  margin-top: 9rem;
  gap: 1.5rem;
`;

const UpTitle = styled.p`
  ${({ theme }) => theme.font.heading1};

  & span {
    color: ${({ theme }) => theme.color.primary};
  }
`;

const UpDetail = styled.p`
  ${({ theme }) => theme.font.heading5};
`;
