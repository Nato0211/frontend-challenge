import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    margin: 20px auto;
`;

export const QuestionTitle = styled.h3`
    margin: 0 0 20px 0;
    text-align: center;
    color: #333;
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    width: 100%;
`;

export const AnswerItem = styled.li<{ selected: boolean }>`
    padding: 10px 20px;
    margin: 5px 0;
    cursor: pointer;
    border: 1px solid #ddd;
    border-radius: 4px;
    transition: all 0.3s ease;
    user-select: none; 
    background-color: ${(props) => (props.selected ? '#4CAF50' : '#fff')};
    color: ${(props) => (props.selected ? 'white' : 'black')};
`;

export const SubmitButton = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    color: white;
    background-color: #4CAF50;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 20px;
    transition: all 0.3s ease;

    &:hover {
        background-color: #45a049;
    }
`;
