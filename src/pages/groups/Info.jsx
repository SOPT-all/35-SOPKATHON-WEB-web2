import React from 'react';
import SvgBtnLetterInformation from '../../assets/svg/BtnLetterInformation';
import styled from 'styled-components';

const Info = () => {
  return (
    <InfoLayout>
      <InfoBackground>
        <SvgBtnLetterInformation />
      </InfoBackground>

      <InfoContent>
        <InfoTitle>
          <span>당신의 운명입니다</span>
          <span>지금 당장 연락해보세요</span>
        </InfoTitle>

        <InfoContentDiv>
          <div>
            <InfoLabel>힌트</InfoLabel>
            <InfoText>건대미남</InfoText>
          </div>

          <div>
            <InfoLabel>전화번호</InfoLabel>
            <InfoText>010-0000-0000</InfoText>
          </div>

          <div>
            <InfoLabel>미션</InfoLabel>
            <InfoText>모각공하기</InfoText>
          </div>
        </InfoContentDiv>

        <InfoButton>연락하러가기</InfoButton>
      </InfoContent>
    </InfoLayout>
  );
};

export default Info;

const InfoLayout = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.color.primary_light1};
`;
const InfoBackground = styled.div`
  padding: 8.8rem 2.4rem;
`;

const InfoContent = styled.div`
  padding: 0rem 4.8rem;
  position: absolute;
  top: 15rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 3rem;
`;

const InfoTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.color.primary};
  ${({ theme }) => theme.font.body1};
`;

const InfoContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
`;

const InfoLabel = styled.span`
  ${({ theme }) => theme.font.body3};
  color: ${({ theme }) => theme.color.primary_light1};
`;

const InfoText = styled.div`
  ${({ theme }) => theme.font.body1};
  padding: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.primary_light2};

  border: 1px solid ${({ theme }) => theme.color.primary_light1};
  border-radius: 5px;
`;

const InfoButton = styled.button`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  height: 5.4rem;
  border-radius: 10px;
  width: 100%;
  ${({ theme }) => theme.font.body1};
`;
