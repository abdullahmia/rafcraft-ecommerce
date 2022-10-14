import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLoggedIn } from '../features/auth/authSlice';

const useAuthCheck = () => {
    const [authChecked, setAuthChecked] = useState(false);
    const dispatch = useDispatch();


    useEffect(() => {
        const localAuth = localStorage?.getItem('auth');
        if (localAuth) {
            const auth = JSON.parse(localAuth);
            if (auth?.token && auth?.user) {
                dispatch(userLoggedIn({
                    user: auth?.user,
                    token: auth?.token
                }))
            }
        }

        setAuthChecked(true);

    }, [dispatch]);

    return authChecked;
}

export default useAuthCheck;