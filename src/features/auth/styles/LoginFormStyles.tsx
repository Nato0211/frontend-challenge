import styled from 'styled-components';

export const LoginContainer = styled.div`
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
    padding: 20px;
    border-radius: 8px;
    background-color: #f8f9fa;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    margin-bottom: 20px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
`;

export const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3;
    }
`;

export const LinkText = styled.span`
    color: #007bff;
    cursor: pointer;
    text-decoration: underline;

    &:hover {
        text-decoration: none;
    }
`;
