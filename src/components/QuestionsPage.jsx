import styled from "styled-components";
import React from "react";
import Logo from "../assets/logo.png"
import QuestionNumberSpot from "./QuestionNumberSpot";
import QuestionSpot from "./QuestionSpot";
import QuestionPageFooter from "./QuestionPageFooter";
import Answer from "./Answer";
import cards from "../cards"

export default function QuestionsPage(props) {
    return (
        <ContainerQuestionsPage showQuestionPage={props.questionPageUp}>
            <Header>
                <LogoHome src={Logo} alt="Logo" />
                <TitleHome>ZapRecall</TitleHome>
            </Header>

            <QuestionNumberSpot
                cards={props.cards}
                wrongAnsweredQuestions={props.wrongAnsweredQuestions}
                almostAnsweredQuestions={props.almostAnsweredQuestions}
                rightAnsweredQuestions={props.rightAnsweredQuestions}
                forgotButtonFunction={props.forgotButtonFunction}
                almostButtonFunction={props.almostButtonFunction}
                rightButtonFunction={props.rightButtonFunction}
                answeredQuestions={props.answeredQuestions}
                showAnswerFunction={props.showAnswerFunction}
                showedQuestions={props.showedQuestions}
                showQuestion={props.showQuestion}
                showQuestionFunction={props.showQuestionFunction}
            />

            <QuestionPageFooter cards={cards} counterQuestions={props.counterQuestions}/>

        </ContainerQuestionsPage>
    );
}

const ContainerQuestionsPage = styled.div`
    display: ${props => props.showQuestionPage};
    flex-direction: column;
    align-items: center;
    margin-bottom: 180px;
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