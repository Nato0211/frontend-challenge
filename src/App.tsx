import React from 'react';
import AppRouter from './router/Router';
import { AuthProvider } from './features/auth/hooks/useAuth';

const App: React.FC = () => {
    return (
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    );
};

export default App;
