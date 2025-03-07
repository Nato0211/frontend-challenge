import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const LogoutButton: React.FC = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        navigate('/login', { replace: true });

    };

    return (
        <button onClick={handleLogout} style={{ backgroundColor: 'red', color: 'white', padding: '10px', borderRadius: '5px' }}>
            Cerrar Sesión
        </button>
    );
};

export default LogoutButton;
