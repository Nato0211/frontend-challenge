import styled from 'styled-components';

export const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f9fafb;
    min-height: 100vh;
`;

export const Title = styled.h1`
    font-size: 28px;
    color: #333;
    margin-bottom: 20px;
`;

export const Button = styled.button`
    background-color: #007BFF;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    margin: 15px 0;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }

    &:active {
        transform: scale(0.95);
    }
`;

export const ErrorMessage = styled.p`
    color: red;
    font-size: 18px;
    margin: 20px 0;
`;
