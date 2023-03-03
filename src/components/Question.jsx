import Wrong from "../assets/icone_erro.png"
import Right from "../assets/icone_certo.png"
import Almost from "../assets/icone_quase.png"
import Play from "../assets/seta_play.png"
import styled from "styled-components";



export default function Question() {
    return (
        <ContainerQuestion>
            <QuestionSpot>
                <WrongAnswer>
                    Pergunta 1
                </WrongAnswer>
                <IconButton src={Wrong} alt={"WrongIcon"} />
            </QuestionSpot>
            <QuestionSpot>
                <RightAnswer>
                    Pergunta 2
                </RightAnswer>
                <IconButton src={Right} alt={"AlmostIcon"} />
            </QuestionSpot>
            <QuestionSpot>
                <PlayAnswer>
                    Pergunta 3
                </PlayAnswer>
                <IconButton src={Play} alt={"PlayIcon"} />
            </QuestionSpot>
            <QuestionSpot>
                <AlmostAnswer>
                    Pergunta 4
                </AlmostAnswer>
                <IconButton src={Almost} alt={"RightIcon"} />
            </QuestionSpot>
            <QuestionSpot>
                <AlmostAnswer>
                    Pergunta 5
                </AlmostAnswer>
                <IconButton src={Almost} alt={"RightIcon"} />
            </QuestionSpot>
            <QuestionSpot>
                <AlmostAnswer>
                    Pergunta 6
                </AlmostAnswer>
                <IconButton src={Almost} alt={"RightIcon"} />
            </QuestionSpot>
            <QuestionSpot>
                <AlmostAnswer>
                    Pergunta 7
                </AlmostAnswer>
                <IconButton src={Almost} alt={"RightIcon"} />
            </QuestionSpot>
        </ContainerQuestion>
    );
}

const ContainerQuestion = styled.div`
    margin-bottom: 180px;
`;

const IconButton = styled.img`
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