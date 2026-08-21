
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router';

const ProtectedRoute = ({children}) => {
    let user = useSelector((state)=> state.userAuth.user);

    if(!user){
        return <Navigate to="/login" replace/>
    }
  return children;
}

export default ProtectedRoute