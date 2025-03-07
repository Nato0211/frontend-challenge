import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 350px;
  margin-left: 20px;
  margin-top: 20px;
  transition: all 0.3s ease-in-out;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

export const Input = styled.input`
  padding: 12px;
  margin: 8px 0;
  border: 1px solid #ddd;
  border-radius: 6px;
  width: 100%;
  font-size: 14px;
  background: #f8f9fa;
  transition: all 0.3s ease-in-out;

  &:focus {
    border-color: #007bff;
    background: #fff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
    outline: none;
  }

  &:hover {
    border-color: #0056b3;
  }
`;

export const Select = styled.select`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #bbb;
  border-radius: 8px;
  width: 100%;
  font-size: 15px;
  color: #444;
  background: #f9fafb;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    border-color: #007bff;
    background: #ffffff;
  }

  &:focus {
    border-color: #0056b3;
    box-shadow: 0 0 6px rgba(0, 123, 255, 0.4);
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 12px 20px;
  color: white;
  background: linear-gradient(135deg, #007bff, #0056b3);
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 12px;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(135deg, #0056b3, #003f7f);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const Title = styled.h3`
  margin-bottom: 20px;
  font-size: 20px;
  color: #333;
`;
