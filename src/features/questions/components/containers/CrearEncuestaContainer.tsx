import React from 'react';
import CrearEncuestaView from '../presentation/CrearEncuestaView';
import { createQuestion } from '../../services/questionService';

const CrearEncuestaContainer: React.FC<{ id_usuario: number }> = ({ id_usuario }) => {
    const handleCrearEncuesta = async (pregunta: string, id_tema: number, respuestas: string[]) => {

        console.log(respuestas);
        if (!pregunta || !id_tema || respuestas.length === 0) {
            alert('Por favor, completa todos los campos antes de enviar.');
            return;
        }

        try {
            const response = await createQuestion(pregunta, id_tema, id_usuario, respuestas);
            if (response) {
                window.location.reload();
            }
        } catch (error: any) {
            console.error('Error al crear la encuesta:', error);

            // Mostrar el error en el alert
            alert(`Hubo un problema al crear la encuesta. Detalles del error: ${error.message || error}`);
        }
    };

    return <CrearEncuestaView onCrearEncuesta={handleCrearEncuesta} />;
};

export default CrearEncuestaContainer;
