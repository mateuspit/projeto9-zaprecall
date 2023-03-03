import styled from "styled-components";
import React from "react";
import Logo from "../assets/logo.png"
import Question from "./Question";
import Wrong from "../assets/icone_erro.png"
import Right from "../assets/icone_certo.png"
import Almost from "../assets/icone_quase.png"

export default function QuestionsPage() {
    return (
        <ContainerQuestionsPage>
            <Header>
                <LogoHome src={Logo} alt="Logo" />
                <TitleHome>ZapRecall</TitleHome>
            </Header>

            <Question />



            <Stats>
                <FinalMessage>
                    <FinalTitle>
                        🥳 Parabéns!
                    </FinalTitle>
                    <FinalText>
                        Você não esqueceu de nenhum flashcard!
                    </FinalText>
                </FinalMessage>
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

const FinalText = styled.p`
    width: 222px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #333333;
`;

const FinalTitle = styled.p`
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    margin-bottom: 14px;
`;

const FinalMessage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
`;



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



const Icon = styled.img`
    width: 23px;
    margin-right: 5px;
`;