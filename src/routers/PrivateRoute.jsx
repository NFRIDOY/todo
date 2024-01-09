import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function PrivateRoute({ children }) {
    const { user, loading, setLoading } = useAuth()
    // const navigate = useNavigate();

    if (loading) {
        // setLoading(false)
        // return 
        // return <h1>df</h1>
        return <span className="loading loading-dots loading-lg"></span>
    }

    if (user) {
        // setLoading(false)
        return children;
    }

    // return <Navigate to={'/login'}></Navigate>
    return <Navigate state={location.pathname} to={'/Login'}></Navigate>
}
