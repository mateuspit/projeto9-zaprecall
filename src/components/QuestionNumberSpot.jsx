import React from "react"
import Play from "../assets/seta_play.png"
import Wrong from "../assets/icone_erro.png"
import styled from "styled-components";
import cards from "../cards"
import TurnArrowIcon from "../assets/seta_virar.png"




export default function QuestionNumberSpot(props) {

    // const [showQuestion, setShowQuestion] = React.useState(["none"]);

    // function showQuestionFunction(i) {
    //     alert("dentro: ",i)
    //     if(i === 0){
    //         alert("dentro: ",i)
    // 		return "flex";
    // 	}
    //     return "none";
    // }
    function funcao(arrayCards, i) {
        // if(props.wrongAnsweredQuestions.includes(i) && props.answeredQuestions.includes(i) && props.showedQuestions.includes(i)){
        //     return(
        //             <QuestionSpot key={i}>
        //                 <PlayAnswer>
        //                     Pergunta {i + 1}
        //                 </PlayAnswer>
        //                 <ForgotButton
        //                     src={Wrong}
        //                     alt={"WrongIcon"} />
        //             </QuestionSpot>                
        //     );
        // }
        // else 
        if (props.answeredQuestions.includes(i) && props.showedQuestions.includes(i)) {
            return (
                <ContainerAnswerSpot key={i}>
                    <AnswerText>
                        {arrayCards.answer}
                    </AnswerText>
                    <ForgotButton >
                        Não lembrei
                    </ForgotButton>
                    <AlmostButton >
                        Quase não lembrei
                    </AlmostButton>
                    <RightButton >
                        Zap!
                    </RightButton>
                </ContainerAnswerSpot>
            );
        }
        else if (props.showedQuestions.includes(i)) {
            return (
                <ContainerQuestionSpot key={i}>
                    <QuestionText>
                        {arrayCards.question}
                    </QuestionText>
                    <ShowAnswerButton
                        onClick={() => props.showAnswerFunction(i)}
                        src={TurnArrowIcon}
                        alt={"Botão de virar"} />
                </ContainerQuestionSpot>
            );
        }
        else {
            return (
                <QuestionSpot key={i}>
                    <PlayAnswer>
                        Pergunta {i + 1}
                    </PlayAnswer>
                    <IconButton
                        onClick={() => props.showQuestionFunction(i)}
                        src={Play}
                        alt={`Pergunta ${i + 1}`} />
                </QuestionSpot>
            );
        }
    }

    // <>
    //                 <QuestionSpot key={i}>
    //                     <PlayAnswer>
    //                         Pergunta {i + 1}
    //                     </PlayAnswer>
    //                     <IconButton
    //                         onClick={() => props.showQuestionFunction(i)}
    //                         src={Play}
    //                         alt={"WrongIcon"} />
    //                 </QuestionSpot>

    //                 <ContainerQuestionSpot showQuestion={} key={arrayCards.question}>
    //                     <QuestionText>
    //                         {arrayCards.question}
    //                     </QuestionText>
    //                     <ShowAnswerButton src={TurnArrowIcon} alt={"Botão de virar"} />
    //                 </ContainerQuestionSpot>

    //                 <ContainerAnswerSpot key={arrayCards.answer}>
    //                     <AnswerText>
    //                         {arrayCards.answer}
    //                     </AnswerText>
    //                     <ForgotButton>
    //                         Não lembrei
    //                     </ForgotButton>
    //                     <AlmostButton>
    //                         Quase não lembrei
    //                     </AlmostButton>
    //                     <RightButton>
    //                         Zap!
    //                     </RightButton>
    //                 </ContainerAnswerSpot>
    //             </>


    return (
        <ContainerQuestion>

            {cards.map((arrayCards, i) =>
                funcao(arrayCards, i)
            )}
        </ContainerQuestion>
    );
}

const ContainerQuestionSpot = styled.div`
    display: flex;
    width: 299px;
    min-height: 131px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-top: 25px;
    position: relative;
`;

const QuestionSpot = styled.div`
    display: flex;
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

const ContainerAnswerSpot = styled.div`
    display: flex;
    width: 299px;
    min-height: 131px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-top: 25px;
    position: relative;
`;

const AnswerText = styled.p`
    padding-top: 18px;
    margin-left: 15px;
    margin-bottom: 60px;
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
    position: absolute;
    bottom: 10px;
    left: 15px;
    color: white;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
`;

const AlmostButton = styled.button`
    width: 85.17px;
    height: 37.17px;
    background: #FF922E;
    border-radius: 5px;
    position: absolute;
    bottom: 10px;
    left: 110px;
    color: white;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
`;

const RightButton = styled.button`
    width: 85.17px;
    height: 37.17px;
    background: #2FBE34;
    border-radius: 5px;
    position: absolute;
    bottom: 10px;
    left: 203px;
    color: white;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
`;

const QuestionText = styled.p`
    padding-top: 18px;
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

const ContainerQuestion = styled.div`
    /* margin-bottom: 180px; */
`;

const IconButton = styled.img`
    width: 23px;
    margin-right: 15px;
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