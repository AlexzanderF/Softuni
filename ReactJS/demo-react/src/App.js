import './App.css';
import Header from './components/Header';
import WorkoutsList from './components/WorkoutsList';
import { useAuth0 } from '@auth0/auth0-react';

const headingsList = ['Push #A', 'Pull #A', 'Legs', 'Full body', 'Arms + Shoulders'];

function App() {
    const { isLoading, error } = useAuth0();

    if (isLoading) {
        return (
            <h1 style={{ textAlign: 'center' }}>Logging in...</h1>
        )
    }

    if (error) {
        return (
            <h2>{error}</h2>
        );
    }

    return (
        <>
            <Header />
            <WorkoutsList headings={headingsList} />
        </>
    );
}

export default App;
