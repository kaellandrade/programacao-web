import { redirect } from "react-router-dom";
import { Auth, INITIAL_STATE } from "../../context/auth";

export async function AuthRequered(routeName?: string) {
	const session: Auth = JSON.parse(sessionStorage.getItem('state')) || INITIAL_STATE;
	console.log(routeName);
	const { signed } = session
	if (!signed && !['cadastro', 'entrar'].includes(routeName)) {
		throw redirect('/entrar');
	}
	if(signed && ['cadastro', 'entrar'].includes(routeName)){
		throw redirect('/painel');
	}
}
