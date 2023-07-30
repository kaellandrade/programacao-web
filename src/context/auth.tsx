import React, { createContext, useState } from 'react';
const AuthContext = createContext<Context>({} as Context);
export const INITIAL_STATE = {
	token: '',
	exp: null,
	signed: false,
	user: null
} as Auth;

export interface Auth {
	signed?: boolean;
	token: string;
	exp: number | null;
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
		sessionStorage.clear();
	};

	const handdleAuth = async (dadoLogin: Auth) => {
		const logado = {
			signed: true,
			token: dadoLogin.token,
			exp: dadoLogin.exp,
		};
		try {
			setLogin(logado);
			if (!sessionStorage.getItem('state')) {
				await sessionStorage.setItem(
					'state',
					JSON.stringify({ ...logado})
				);
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
