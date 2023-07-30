import { useRouteError,isRouteErrorResponse } from 'react-router-dom';
import './index.css';
import { Button } from 'primereact/button';
import { NavLink } from 'react-router-dom';


export default function Pagina404() {
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.error?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
      errorMessage = 'Unknown error';
      console.error(error);
  }

  return (
    <div id="error-page">
      <NavLink to={'/'}>
        <div id='erro-logo'>
          <img id='img-erro-logo-name' src="imgs\logo_name_1.png" alt="Real Track Brasil" />
          <img id='img-erro-logo' src="imgs\logo.svg" alt="logo" />
        </div>
      </NavLink>
      <img id='img-erro-404' src="imgs\error404.png" alt="erro 404" />
      <h1>Ops! Não encontramos essa página</h1>
      <p>Verifique se digitou corretamente o link da página!</p>
      <p>
        <i>{errorMessage}</i>
      </p>
      <NavLink to={'/'}>
        <Button id='button-page-error' label="Voltar ao início" rounded />
			</NavLink>
    </div>
  );
}