import styled from "styled-components";
import React from "react";
import Logo from "../assets/logo.png"
import Wrong from "../assets/icone_erro.png"
import Right from "../assets/icone_certo.png"
import Almost from "../assets/icone_quase.png"
import Play from "../assets/seta_play.png"

export default function QuestionsPage() {
    return (
        <ContainerQuestionsPage>
            <Header>
                <LogoHome src={Logo} alt="Logo" />
                <TitleHome>ZapRecall</TitleHome>
            </Header>
            <QuestionSpot>
                <WrongAnswer>
                    Pergunta 1
                </WrongAnswer>
                <Icon src={Wrong} alt={"WrongIcon"} />
            </QuestionSpot>
            <QuestionSpot>
                <RightAnswer>
                    Pergunta 2
                </RightAnswer>
                <Icon src={Right} alt={"AlmostIcon"} />
            </QuestionSpot>
            <QuestionSpot>
                <PlayAnswer>
                    Pergunta 3
                </PlayAnswer>
                <Icon src={Play} alt={"PlayIcon"} />
            </QuestionSpot>
            <QuestionSpot>
                <AlmostAnswer>
                    Pergunta 4
                </AlmostAnswer>
                <Icon src={Almost} alt={"RightIcon"} />
            </QuestionSpot>
            <Stats>
                <DoneItensStatus>
                    3/4 CONCLUÍDOS
                </DoneItensStatus>
                <DoneIconsStatus>
                    <Icon src={Wrong} alt={"WrongIcon"} />
                    <Icon src={Right} alt={"AlmostIcon"} />
                    <Icon src={Almost} alt={"RightIcon"} />
                </DoneIconsStatus>
            </Stats >

        </ContainerQuestionsPage>
    );
}

const DoneIconsStatus = styled.div`
    display: flex;
    margin-bottom: 10px;
`;

const Stats = styled.footer`
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100vw;
    background: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const DoneItensStatus = styled.p`
    color: #333333;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    margin-top: 10px;
    margin-bottom: 7px;
`;

const ContainerQuestionsPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`;

const LogoHome = styled.img`
    width: 52px;
`;

const TitleHome = styled.h1`
    color: white;
    font-size: 36px;
    font-family: 'Righteous', cursive;
    margin-left: 20px;
`;

const Header = styled.header`
    display: flex;
    margin-top: 42px;
    margin-bottom: 26px;
    justify-content: center;
    align-items: center;
`;

const QuestionSpot = styled.div`
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    width: 300px;
    height: 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 25px;
`;

const WrongAnswer = styled.p`
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-decoration-line: line-through;
    color: #FF3030;
    margin-left: 15px;
`;

const Icon = styled.img`
    width: 23px;
    margin-right: 15px;
`;

const RightAnswer = styled.p`
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-decoration-line: line-through;
    color: #2FBE34;
    margin-left: 15px;
`;

const PlayAnswer = styled.p`
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-decoration-line: line-through;
    color: #333333;
    margin-left: 15px;
`;

const AlmostAnswer = styled.p`
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-decoration-line: line-through;
    color: #FF922E;
    margin-left: 15px;
`;