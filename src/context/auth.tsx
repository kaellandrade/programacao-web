import React, { createContext, useState } from 'react';
const AuthContext = createContext<Context>({} as Context);

export interface Auth {
	signed?: boolean;
	loginError?: string;
	token?: string;
	access_token: string;
	expires_in: number | null;
	refresh_token: string;
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
	login: (code: string) => void;
	setLogin: (estado: Auth) => void;
	logout: () => void;
}

const INITIAL_STATE = {
	access_token: '',
	expires_in: null,
	refresh_token: '',
	signed: false,
	user: null
} as Auth;

type RoterProps = {
	children: React.ReactNode;
};

export function AuthProvider({ children }: RoterProps) {
	const [state, setState] = useState<Auth>(INITIAL_STATE);

	const setLogin = (estado: Auth) => {
		setState(estado);
	};

	const login = (code: string) => {
		handdleAuth(code);
	};
	const logout = () => {
		setState(INITIAL_STATE);
		sessionStorage.clear();
	};

	const handdleAuth = async (code: string) => {
		try {
			setLogin({
				signed: true,
				access_token: '',
				expires_in: null,
				refresh_token: ''
			});
		} catch (error) {
			setLogin({ ...state, signed: false });
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
