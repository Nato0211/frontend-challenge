const BASE_URL = 'http://127.0.0.1:5000';

export const createQuestion = async (pregunta: string, id_tema: number, id_usuario: number, respuestas: string[]) => {
    const response = await fetch(`${BASE_URL}/add_pregunta`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pregunta, id_tema, id_usuario, respuestas }),
    });

    if (!response.ok) {
        throw new Error('Error al crear la pregunta');
    }

    return await response.json();
};

export const fetchQuestions = async (id_usuario: number) => {
    const response = await fetch(`${BASE_URL}/preguntas?user_id=${id_usuario}`);
    if (!response.ok) {
        throw new Error('Error al obtener las preguntas');
    }
    return await response.json();
};
