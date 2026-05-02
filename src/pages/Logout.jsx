import { useDispatch } from 'react-redux';
import { logout } from '../store/reducers/authReducer';

const Logout = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <button onClick={handleLogout} className="btn btn-danger">
            Đăng xuất
        </button>
    );
};

export default Logout;
