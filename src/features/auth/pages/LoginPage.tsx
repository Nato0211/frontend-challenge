import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const LoginPage: React.FC = () => {
    const navigate = useNavigate();

    const handleLogin = async (username: string) => {
        try {
            const response = await fetch('http://127.0.0.1:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nombre_usuario: username }),
            });
            console.log(username);
            if (response.ok) {
                const data = await response.json();
                const { id_usuario } = data;
                console.log(id_usuario)
                navigate('/home', { state: { id_usuario,username } });
            } else {
                alert('Error: Usuario no encontrado.');
            }
        } catch (error) {
            console.error('Error en el inicio de sesión:', error);
            alert('Hubo un problema al iniciar sesión.');
        }
    };

    return (
        <div>
            <LoginForm onLogin={handleLogin} />
        </div>
    );
};

export default LoginPage;
