import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';

const RegisterPage: React.FC = () => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleRegister = async (username: string, email: string) => {
        try {
            const response = await fetch('http://127.0.0.1:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nombre_usuario: username, correo_electronico: email }),
            });

            if (response.ok) {
                alert('Registro exitoso.');
                navigate('/login');
            } else if (response.status === 400) {
                const errorData = await response.json();
                setErrorMessage(errorData.error || 'Faltan datos obligatorios.');
            } else if (response.status === 409) {
                const errorData = await response.json();
                setErrorMessage(errorData.error || 'El usuario ya está registrado.');
            } else {
                setErrorMessage('Ocurrió un error inesperado. Por favor, intenta nuevamente.');
            }
        } catch (error) {
            console.error('Error en el registro:', error);
            setErrorMessage('Hubo un problema con la solicitud. Intenta más tarde.');
        }
    };

    return (
        <div>
            <RegisterForm onRegister={handleRegister} />
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
    );
};

export default RegisterPage;
