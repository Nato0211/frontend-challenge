import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContainer, Form, Title, Input, Button, LinkText } from '../styles/LoginFormStyles';
interface LoginFormProps {
    onLogin: (username: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent) => {
        console.log(username)
        event.preventDefault();
        if (!username) {
            alert('Por favor, ingresa tu nombre de usuario.');
            return;
        }
        onLogin(username);
    };

    return (
        <LoginContainer>
            <Form onSubmit={handleSubmit}>
                <Title>Iniciar Sesión</Title>
                <Input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Nombre de usuario"
                />
                <Button type="submit">Iniciar Sesión</Button>
                <p>
                    ¿No tienes cuenta?{' '}
                    <LinkText onClick={() => navigate('/register')}>Regístrate aquí</LinkText>
                </p>
            </Form>
        </LoginContainer>
    );

};

export default LoginForm;
