const BASE_URL = 'http://127.0.0.1:5000';

export const fetchQuestionDetails = async (id_pregunta: number) => {
    const response = await fetch(`${BASE_URL}/respuestas/${id_pregunta}`);
    if (!response.ok) {
        throw new Error('Error al obtener los detalles de la pregunta');
    }
    return await response.json();
};

export const sendAnswer = async (id_usuario: number, id_pregunta: number, id_respuesta: number) => {
    const response = await fetch(`${BASE_URL}/add_voto`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id_usuario,
            id_pregunta,
            id_respuesta,
        }),
    });

    if (!response.ok) {
        throw new Error('Error al enviar la respuesta');
    }

    return await response.json();
};
