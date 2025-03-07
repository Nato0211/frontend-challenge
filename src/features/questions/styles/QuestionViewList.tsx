import styled from 'styled-components';

export const QuestionCard = styled.div`
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 20px;
    margin: 10px 0;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    max-width: 400px;
`;

export const QuestionText = styled.p`
    font-size: 16px;
    color: #333;
`;

export const Button = styled.button`
    background-color: #007BFF;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: #0056b3;
    }
`;
