import React from 'react';
import {
    Container,
    QuestionTitle,
    List,
    AnswerItem,
    SubmitButton,
} from '../../styles/AnswerListViewStyles';
interface Answer {
    id: number;
    respuesta: string;
    cantidad_votos: number;
}

interface AnswerListViewProps {
    answers: Answer[];
    selectedAnswer: number | null;
    setSelectedAnswer: (id: number) => void;
    onVote: () => void;
}

const AnswerListView: React.FC<AnswerListViewProps> = ({
                                                           answers,
                                                           selectedAnswer,
                                                           setSelectedAnswer,
                                                           onVote,
                                                       }) => {
    return (
        <Container>
            <QuestionTitle>Respuestas</QuestionTitle>
            <List>
                {answers.map((answer) => (
                    <AnswerItem
                        key={answer.id}
                        selected={selectedAnswer === answer.id}
                        onClick={() => setSelectedAnswer(answer.id)}
                    >
                        {answer.respuesta} -- {answer.cantidad_votos} votos
                    </AnswerItem>
                ))}
            </List>
            <SubmitButton onClick={onVote}>Confirmar Respuesta</SubmitButton>
        </Container>
    );
};

export default AnswerListView;
