import styled from "styled-components";
import React from "react";
import Logo from "../assets/logo.png"
import QuestionNumberSpot from "./QuestionNumberSpot";
import Wrong from "../assets/icone_erro.png"
import Right from "../assets/icone_certo.png"
import Almost from "../assets/icone_quase.png"
import TurnArrowIcon from "../assets/seta_virar.png"

export default function Answer() {
    return (
        <ContainerAnswerSpot>
            <AnswerText>
                JSX é uma sintaxe para
                escrever HTML dentro do JS
            </AnswerText>
            {/* <ShowAnswerButton src={TurnArrowIcon} alt={"Botão de virar"} /> */}

        </ContainerAnswerSpot>
    );
}

const ContainerAnswerSpot = styled.div`
    width: 299px;
    min-height: 131px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-top: 25px;
    position: relative;
`;

const AnswerText = styled.p`
    margin-top: 18px;
    margin-left: 15px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
`;

const ForgotButton = styled.button`
    width: 85.17px;
    height: 37.17px;
    background: #FF3030;
    border-radius: 5px;    
`;