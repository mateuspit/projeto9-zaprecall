import styled from "styled-components";
import React from "react";
import Logo from "../assets/logo.png"
import QuestionNumberSpot from "./QuestionNumberSpot";
import Wrong from "../assets/icone_erro.png"
import Right from "../assets/icone_certo.png"
import Almost from "../assets/icone_quase.png"

export default function QuestionSpot() {
    return (
        <ContainerQuestionSpot></ContainerQuestionSpot>
    );
}



const ContainerQuestionSpot = styled.div`
    width: 299px;
    height: 131px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-top: 25px;
`;