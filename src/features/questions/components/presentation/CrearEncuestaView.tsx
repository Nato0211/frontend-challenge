import React, { useEffect, useState } from 'react';
import {
    FormContainer,
    Input,
    Select,
    Button,
    Title,
} from '../../styles/CrearEncuestaStyles';
interface CrearEncuestaViewProps {
    onCrearEncuesta: (pregunta: string, id_tema: number, respuestas: string[]) => void;
}
interface Usuario {
    id_usuario: number;
    nombre_usuario: string;
}

interface Tema {
    id_tema: number;
    tema: string;
}

const CrearEncuestaView: React.FC<CrearEncuestaViewProps> = ({ onCrearEncuesta }) => {
    const [pregunta, setPregunta] = useState('');
    const [id_tema, setIdTema] = useState(0);
    const [respuestas, setRespuestas] = useState<string[]>(['', '','','']);
    const [temas, setTemas] = useState<Tema[]>([]);
    const [selectedTema, setSelectedTema] = useState('');
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    const handleSubmit = (e: React.FormEvent) => {
        console.log(id_tema);
        e.preventDefault();
        onCrearEncuesta(pregunta, id_tema, respuestas.filter((resp) => resp.trim() !== ''));
    };
    useEffect(() => {
        // Fetch temas
        const fetchTemas = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/temas');
                const data = await response.json();
                setTemas(data);
            } catch (error) {
                console.error('Error al obtener los temas:', error);
            }
        };

        // Fetch usuarios
        const fetchUsuarios = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/usuarios');
                const data = await response.json();
                setUsuarios(data);
            } catch (error) {
                console.error('Error al obtener los usuarios:', error);
            }
        };

        fetchTemas();
        fetchUsuarios();
    }, []);

    const handleAddRespuesta = () => {
        setRespuestas([...respuestas, '']);
    };

    const handleRespuestaChange = (index: number, value: string) => {
        const nuevasRespuestas = [...respuestas];
        nuevasRespuestas[index] = value;
        setRespuestas(nuevasRespuestas);
    };

    return (
        <FormContainer onSubmit={handleSubmit}>
            <Title>Crear una Encuesta</Title>
            <Input
                type="text"
                value={pregunta}
                onChange={(e) => setPregunta(e.target.value)}
                placeholder="Escribe tu pregunta"
            />
            <Select
                value={selectedTema}
                onChange={(e) => {
                    setSelectedTema(e.target.value);
                    const temaId = Number(e.target.value);
                    setIdTema(temaId);
                }}
            >
                <option value="">Selecciona un tema</option>
                {temas.map((tema) => (
                    <option key={tema.id_tema} value={tema.id_tema}>
                        {tema.tema}
                    </option>
                ))}
            </Select>
            {respuestas.map((respuesta, index) => (
                <Input
                    key={index}
                    type="text"
                    value={respuesta}
                    onChange={(e) => handleRespuestaChange(index, e.target.value)}
                    placeholder={`Respuesta ${index + 1}`}
                />
            ))}
            <Button type="submit">Crear Encuesta</Button>
        </FormContainer>
    );
};

export default CrearEncuestaView;
