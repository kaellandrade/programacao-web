import React, { createContext, useState } from 'react';
import APIBrowser from '../util/APIBrowser';
import CHAVES_COOKIES from '../util/keysConst';
import CookieData from '../@types/keysCookie';
const AuthContext = createContext<Context>({} as Context);
export const INITIAL_STATE = {
	token: '',
	exp: '',
	signed: false,
	user: null
} as Auth;

export interface Auth {
	signed?: boolean;
	token: string;
	exp: string;
	user?: User | null;
}

export interface User {
	username?: string;
	avatar?: string;
	id?: string;
	discriminator?: string;
}

export interface Context {
	state: Auth;
	login: (code: Auth) => void;
	setLogin: (dadosLogin: Auth) => void;
	logout: () => void;
}


type RoterProps = {
	children: React.ReactNode;
};

export function AuthProvider({ children }: RoterProps) {
	const [state, setState] = useState<Auth>(INITIAL_STATE);

	const setLogin = (dadosLogin: Auth) => {
		setState(dadosLogin);
	};

	const login = (dadoLogin: Auth) => {
		handdleAuth(dadoLogin);
	};

	const logout = () => {
		setState(INITIAL_STATE);
		const cookieSessao = { chaveCookie: CHAVES_COOKIES.LOGIN, pathCookie: '/' } as CookieData;
		APIBrowser.removerCookie(cookieSessao);
	};

const handdleAuth = async (dadoLogin: Auth) => {
	const logado = {
		signed: true,
		token: dadoLogin.token,
		exp: dadoLogin.exp,
	};
	try {
		setLogin(logado);
		if (!APIBrowser.getCookie(CHAVES_COOKIES.LOGIN)) {
			const cookieSessao = {
				chaveCookie: CHAVES_COOKIES.LOGIN,
				valorCookie: JSON.stringify({ ...logado }),
				dataExpiracao: new Date(dadoLogin.exp),
				pathCookie: '/'
			} as CookieData;
			APIBrowser.setCookie(cookieSessao);
		}

	} catch (error) {
		setLogin(INITIAL_STATE);
		console.log('Error!');
	}
};

return (
	<AuthContext.Provider
		value={{
			state,
			login,
			setLogin,
			logout
		}}
	>
		{children}
	</AuthContext.Provider>
);
}

export default AuthContext;
