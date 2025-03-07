import React, { useEffect, useState } from 'react';
import QuestionListView from '../presentation/QuestionListView';
import { fetchQuestions } from '../../services/questionService';
import AnswerListContainer from './AnswerListContainer';
interface Question {
    id: number;
    pregunta: string;
}

const QuestionListContainer: React.FC<{ id_usuario: number }> = ({ id_usuario }) => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);
    const [expandedQuestionId, setExpandedQuestionId] = useState<number | null>(null);
    useEffect(() => {
        console.log(id_usuario)
        const getQuestions = async () => {
            try {
                const data = await fetchQuestions(id_usuario);
                setQuestions(data);
                setLoading(false);
            } catch (err: any) {
                setError(err.message || 'Ocurrió un error al obtener las preguntas.');
                setLoading(false);
            }
        };

        getQuestions();
    }, [id_usuario]);
    const handleToggleExpand = (id: number) => {
        setExpandedQuestionId((prevId) => (prevId === id ? null : id));
    };
    if (loading) {
        return <p>Cargando preguntas...</p>;
    }

    if (error) {
        return <p style={{ color: 'red' }}>{error}</p>;
    }

    return selectedQuestion ? (
        <AnswerListContainer id_pregunta={selectedQuestion} id_usuario={id_usuario} />
    ) : (
        <QuestionListView
            questions={questions}
            onViewQuestion={handleToggleExpand}
            expandedQuestionId={expandedQuestionId}
            id_del_usuario={id_usuario}
        />
    );
};

export default QuestionListContainer;
