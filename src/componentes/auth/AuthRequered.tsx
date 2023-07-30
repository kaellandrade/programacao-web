import { redirect } from "react-router-dom";
import { Auth, INITIAL_STATE } from "../../context/auth";

export async function AuthRequered(authRequered: boolean) {
	const session: Auth = JSON.parse(sessionStorage.getItem('state')) || INITIAL_STATE;
	const { signed } = session
	if (!signed && authRequered) {
		throw redirect('/publica/entrar');
	}
	if (signed && !authRequered) {
		throw redirect('/painel');
	}
}
