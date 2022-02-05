import { Button, Typography } from "../../components";
import './business.css'

export const Business = () => {
    return <div className="business-layout">
        <div>
            <Typography>Welcome to your bisnes</Typography>
        </div>
        <div className="p-3">
            <Button color='yellow' borderColor='green' href="/load">Cargar Producto</Button>
        </div>
        <div className="p-3">
            <Button color='red' borderColor='yellow' size='big'>Ver stock</Button>
        </div>
        <div className="p-3">
            <Button color='red' borderColor='yellow' size='big'>Ver reportes</Button>
        </div>
    </div>;
};
