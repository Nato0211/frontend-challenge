import React from 'react';
import { QuestionCard, QuestionText, Button } from '../../styles/QuestionViewList';
import AnswerListContainer from "../containers/AnswerListContainer";
interface Question {
    id: number;
    pregunta: string;
}

interface QuestionListViewProps {
    questions: Question[];
    onViewQuestion: (id: number) => void;
    expandedQuestionId: number | null;
    id_del_usuario: number;
}

const QuestionListView: React.FC<QuestionListViewProps> = ({ questions, onViewQuestion,expandedQuestionId, id_del_usuario }) => {
    return (
        <div>
            <h2>Listado de Preguntas</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {questions.map((question) => (
                    <li key={question.id}>
                        <QuestionCard>
                            <QuestionText>{question.pregunta}</QuestionText>
                            <Button onClick={() => onViewQuestion(question.id)}>
                                {expandedQuestionId === question.id ? 'Ocultar Encuesta' : 'Ver Encuesta'}
                            </Button>
                        </QuestionCard>

                        {expandedQuestionId === question.id && (
                            <AnswerListContainer id_pregunta={question.id} id_usuario={id_del_usuario} />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QuestionListView;
