import { useState } from 'react';


interface Question {
    id: number;
    pregunta: string;
}

export const useQuestions = () => {
    // Define el estado con un tipo explícito
    const [questions, setQuestions] = useState<Question[]>([]);

    const addQuestion = (newQuestion: Question) => {
        setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
    };

    return { questions, addQuestion };
};
