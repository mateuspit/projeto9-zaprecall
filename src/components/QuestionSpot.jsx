import styled from "styled-components";
import React from "react";
import Logo from "../assets/logo.png"
import QuestionNumberSpot from "./QuestionNumberSpot";
import Wrong from "../assets/icone_erro.png"
import Right from "../assets/icone_certo.png"
import Almost from "../assets/icone_quase.png"
import TurnArrowIcon from "../assets/seta_virar.png"

export default function QuestionSpot() {
    return (
        <ContainerQuestionSpot>
            <QuestionText>
            O que é JSX?aO queque é JSX?aO que é JSX?aO que é JSX?a
            </QuestionText>
            <ShowAnswerButton src={TurnArrowIcon} alt={"Botão de virar"}/>

        </ContainerQuestionSpot>
    );
}



const ContainerQuestionSpot = styled.div`
    width: 299px;
    min-height: 131px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-top: 25px;
    position: relative;
`;

const QuestionText = styled.p`
    margin-top: 18px;
    margin-left: 15px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
`;

const ShowAnswerButton = styled.img`
    width: 30px;
    position: absolute;
    bottom: 6px;
    right: 15px;
`;