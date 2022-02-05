import './login.css'
import { Typography, Button } from '../../components';

export const Login = () => {
    return <div className="login-layout">
        <Typography>LogIn</Typography>
        <div className='login-grid'>
            <div>
                <Button color='green' href='/admin'>Login para admin</Button>
            </div>
            <div>
                <Button color='yellow' href='/bisnes'>Login para empresas</Button>
            </div>
        </div>
    </div>;
};
