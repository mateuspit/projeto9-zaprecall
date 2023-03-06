import styled from "styled-components";
import React from "react";
import Wrong from "../assets/icone_erro.png"
import Right from "../assets/icone_certo.png"
import Almost from "../assets/icone_quase.png"


function functionPlotIcon(status) {
    switch (status) {
        case "wrong":
            return (<Icon data-test="no-icon" src={Wrong} alt={"WrongIcon"} />);

        case "almost":
            return (<Icon data-test="partial-icon" src={Almost} alt={"RightIcon"} />);

        case "right":
            return (<Icon data-test="zap-icon" src={Right} alt={"AlmostIcon"} />);
    }
}


export default function QuestionPageFooter(props) {
    return (
        <ContainerQuestionPageFooter>
            <FinalMessage data-test="finish-text" showFinalMessage={props.finalMessage.enableFinalMessage}>
                <FinalTitle>
                    {props.finalMessage.finalTitle}
                </FinalTitle>
                <FinalText>
                    {props.finalMessage.finalText}
                </FinalText>
            </FinalMessage>
            <DoneItensStatus data-test="footer">
                {props.counterQuestions}/{props.cards.length} CONCLUÍDOS
            </DoneItensStatus>
            <DoneIconsStatus>
                {props.positionOfAnsweredQuestions.map(status => functionPlotIcon(status))}
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
    display: ${props => props.showFinalMessage};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
`;