import { Navigate, Outlet, redirect } from "react-router-dom";

export async function AuthRequered() {

	const isLogged = false;
	if (!isLogged) {
		throw redirect('/entrar');
	}
	
	// const isLogged = false;
	// if (!isLogged) {
	// 	return <Navigate to="/entrar" />
	// }
	// return <Outlet />
}
