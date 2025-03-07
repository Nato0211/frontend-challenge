import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchQuestionDetails } from '../services/answerService';


const QuestionPage: React.FC = () => {
    const { id_pregunta } = useParams<{ id_pregunta: string }>();
    const [questionDetails, setQuestionDetails] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadQuestionDetails = async () => {
            try {
                setLoading(true);
                const data = await fetchQuestionDetails(Number(id_pregunta));
                setQuestionDetails(data);
                setLoading(false);
            } catch (err) {
                console.error('Error al cargar los detalles de la pregunta:', err);
                setError('No se pudieron cargar los detalles de la pregunta.');
                setLoading(false);
            }
        };

        loadQuestionDetails();
    }, [id_pregunta]);

    if (loading) {
        return <p className="loading">Cargando los detalles de la pregunta...</p>;
    }

    if (error) {
        return <p className="error">{error}</p>;
    }

    if (!questionDetails) {
        return <p>No se encontraron detalles para esta pregunta.</p>;
    }

    return (
        <div className="question-page">
            <h1>{questionDetails.pregunta}</h1>
            <p><strong>Publicada el:</strong> {questionDetails.fecha_publicacion}</p>
        </div>
    );
};

export default QuestionPage;
