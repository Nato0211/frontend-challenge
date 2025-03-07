import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import LogoutButton from '../../auth/components/LogoutButton';
import CrearEncuestaContainer from '../../questions/components/containers/CrearEncuestaContainer'; // Contenedor para crear encuestas
import {
    HomePageContainer,
    Title,
    Button,
    ErrorMessage,
} from '../styles/HomePageStyles'
import QuestionListContainer from "../components/containers/QuestionListContainer";

const HomePage: React.FC = () => {
    const location = useLocation();
    const { id_usuario, username } = location.state || {};
    const [showForm, setShowForm] = useState(false);

    if (!id_usuario) {
        return <p>Error: Usuario no autenticado.</p>;
    }

    return (
        <HomePageContainer>
            <Title>Bienvenido, {username}</Title>
            <LogoutButton />
            <Button onClick={() => setShowForm(!showForm)}>
                {showForm ? 'Ocultar Formulario' : 'Crear Nueva Encuesta'}
            </Button>
            {showForm && <CrearEncuestaContainer id_usuario={id_usuario} />}

            <QuestionListContainer id_usuario={id_usuario} />
        </HomePageContainer>
    );
};

export default HomePage;
