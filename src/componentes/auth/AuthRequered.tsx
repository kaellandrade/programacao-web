import { redirect } from "react-router-dom";
import { Auth, INITIAL_STATE } from "../../context/auth";
import APIBrowser from "../../util/APIBrowser";
import CHAVES_COOKIES from "../../util/keysConst";

export async function AuthRequered(authRequered: boolean) {
	const cookieSessaoJSON = APIBrowser.getCookie(CHAVES_COOKIES.LOGIN) || '{}';
	const session: Auth = await JSON.parse(cookieSessaoJSON) || INITIAL_STATE;
	const { signed } = session
	if (!signed && authRequered) {
		throw redirect('/publica/entrar');
	}
	if (signed && !authRequered) {
		throw redirect('/painel');
	}
}
