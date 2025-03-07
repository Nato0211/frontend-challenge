import { useState, createContext, useContext } from 'react';
import { login, register, logout } from '../services/authService';

interface AuthContextType {
    username: string | null;
    login: (username: string) => Promise<void>;
    register: (username: string, email: string) => Promise<void>;
    logout: () => Promise<void>;
}


const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [username, setUsername] = useState<string | null>(null);

    const handleLogin = async (username: string) => {
        const data = await login(username);
        setUsername(data.username);
    };

    const handleRegister = async (username: string, email: string) => {
        await register(username, email);
    };


    const handleLogout = async () => {
        await logout();
        setUsername(null);
    };

    return (
        <AuthContext.Provider value={{ username, login: handleLogin, register: handleRegister, logout: handleLogout }}>
    {children}
    </AuthContext.Provider>
);
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth debe ser usado dentro de un AuthProvider');
    }
    return context;
};
