import styled from "styled-components";
import React from "react";
import Wrong from "../assets/icone_erro.png"
import Right from "../assets/icone_certo.png"
import Almost from "../assets/icone_quase.png"

const finalTitle = ["🥳 Parabéns!","😥 Putz..."];
const finalText = ["Você não esqueceu de nenhum flashcard!","Ainda faltam alguns... Mas não desanime!"]

export default function QuestionPageFooter(props) {
    return (
        <ContainerQuestionPageFooter>
            <FinalMessage>
                <FinalTitle>
                    {finalTitle[0]}
                </FinalTitle>
                <FinalText>
                    {finalText[0]}
                </FinalText>
            </FinalMessage>
            <DoneItensStatus>
                {props.counterQuestions}/{props.cards.length} CONCLUÍDOS
            </DoneItensStatus>
            <DoneIconsStatus>
                <Icon src={Wrong} alt={"WrongIcon"} />
                <Icon src={Right} alt={"AlmostIcon"} />
                <Icon src={Almost} alt={"RightIcon"} />
            </DoneIconsStatus>
        </ContainerQuestionPageFooter >
    );
}

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

const Icon = styled.img`
    width: 23px;
    margin-right: 5px;
`;

const DoneIconsStatus = styled.div`
    display: flex;
    margin-bottom: 10px;
`;

const ContainerQuestionPageFooter = styled.footer`
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
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
`;