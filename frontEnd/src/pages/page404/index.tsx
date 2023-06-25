import { useRouteError,isRouteErrorResponse } from 'react-router-dom';

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
      <h1>Pagina não encontrada 404.</h1>
      <p>Desculpe, mas a página não foi encontrada.</p>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  );
}