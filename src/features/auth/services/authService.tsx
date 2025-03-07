const BASE_URL = 'http://127.0.0.1:5000';

export const login = async (username: string) => {
    const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
    });

    if (!response.ok) {
        throw new Error('Usuario no encontrado.');
    }

    return await response.json();
};

export const register = async (username: string, email: string) => {
    const response = await fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email }),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'No se pudo registrar el usuario.');
    }

    return await response.json();
};


export const logout = async () => {
    const response = await fetch(`${BASE_URL}/logout`, {
        method: 'POST',
        credentials: 'include',
    });

    if (!response.ok) {
        throw new Error('Error al cerrar sesión.');
    }

    return await response.json();
};
