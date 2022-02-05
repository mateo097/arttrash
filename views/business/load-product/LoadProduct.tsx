import { Button } from "../../../components";
export const LoadProduct = () => {
  return <div>
      <input type="text" placeholder="Nombre del producto"/>
      <input type="text" placeholder="Precio"/>
      <Button color="yellow" borderColor="green">Cargar</Button>
  </div>;
};
