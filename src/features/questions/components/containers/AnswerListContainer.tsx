import React, { useEffect, useState } from 'react';
import AnswerListView from '../presentation/AnswerListView';
import { fetchQuestionDetails, sendAnswer } from '../../services/answerService';

interface Answer {
    id: number;
    respuesta: string;
    cantidad_votos: number;
}

interface AnswerListContainerProps {
    id_pregunta: number;
    id_usuario: number;
}

const AnswerListContainer: React.FC<AnswerListContainerProps> = ({ id_pregunta, id_usuario }) => {
    const [answers, setAnswers] = useState<Answer[]>([]);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        console.log(id_usuario)
        const getAnswers = async () => {
            try {
                const data = await fetchQuestionDetails(id_pregunta);
                setAnswers(data);
                setLoading(false);
            } catch (err: any) {
                setError(err.message || 'Error al obtener las respuestas.');
                setLoading(false);
            }
        };

        getAnswers();
    }, [id_pregunta]);

    const handleVote = async () => {
        if (selectedAnswer === null) {
            alert('Por favor selecciona una respuesta antes de confirmar.');
            return;
        }
        console.log(id_usuario);
        try {
            await sendAnswer(id_usuario, id_pregunta, selectedAnswer);
            alert('Voto registrado con éxito.');
            window.location.reload();
        } catch (error) {
            console.error('Error al enviar el voto:', error);
            alert('Hubo un problema al registrar tu voto.');
        }
    };

    if (loading) {
        return <p>Cargando respuestas...</p>;
    }

    if (error) {
        return <p style={{ color: 'red' }}>{error}</p>;
    }

    return (
        <AnswerListView
            answers={answers}
            selectedAnswer={selectedAnswer}
            setSelectedAnswer={setSelectedAnswer}
            onVote={handleVote}
        />
    );
};

export default AnswerListContainer;
