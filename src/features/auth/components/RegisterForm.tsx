import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import { RegisterContainer, Form, Title, Input, Button, LinkText } from '../styles/RegisterFormStyles';
interface RegisterFormProps {
    onRegister: (username: string, email: string) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onRegister }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (!username || !email) {
            alert('Por favor, completa todos los campos.');
            return;
        }


        onRegister(username, email);
    };

    return (
        <RegisterContainer>
            <Form onSubmit={handleSubmit}>
                <Title>Registro</Title>
                <Input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Nombre de usuario"
                />
                <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Correo electrónico"
                />
                <Button type="submit">Registrarse</Button>
                <p>
                    ¿Ya tienes cuenta?{' '}
                    <LinkText onClick={() => navigate('/login')}>Inicia sesión aquí</LinkText>
                </p>
            </Form>
        </RegisterContainer>
    );
};

export default RegisterForm;
