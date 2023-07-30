import { useContext, useEffect, useRef, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';
import { Password } from 'primereact/password';
import Logo from '../../../../imgs/Logo.svg';
import LoginImg from '../../../../imgs/login-img.jpg';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { realizarLogin } from '../../../api/data';
import AuthContext, { Auth } from '../../../context/auth';

interface IFormInput {
	email: string;
	pass: string;
}

export default function Login() {
	const context = useContext(AuthContext);
	const [loading, setLoading] = useState(false);
	const [formIsvalid, setFormIsvalid] = useState(false);
	const navigate = useNavigate();
	const toast = useRef(null);
	const {
		register,
		formState: { errors },
		control,
		handleSubmit,
		getValues,
		watch
	} = useForm<IFormInput>();

	useEffect(() => {
		const subscription = watch((value) => {
			return validadeForm(value);
		}
		)
		return () => subscription.unsubscribe()
	}, [watch])

	const validadeForm = (value: IFormInput) => {
		if (value.email && value.pass) {
			setFormIsvalid(true);
		} else {
			setFormIsvalid(false);
		}
	}

	const onSubmit: SubmitHandler<IFormInput> = async (data) => {
		try {
			setLoading(true);
			const dadosAutenticacao: Auth = await realizarLogin(data);
			context.login(dadosAutenticacao);
			navigate('/painel');
		} catch (error) {
			show('error', error);
		} finally {
			setLoading(false);
		}

	};
	const show = (tipoMensagem: string, mensagem: string) => {
		toast.current.show({
			severity: tipoMensagem,
			summary: mensagem,
			detail: getValues('value')
		});
	};

	return (
		<div className="container-login flex justify-content-center">
			<div className="grid flex align-items-center justify-content-center">
				<div className="col-12 md:col-5">
					<div className="text-center">
						<img className="mb-5" src={Logo} alt="Dinheiro em circulação" />
						<h2 className="titulo mb-5">Entrar</h2>
					</div>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Toast ref={toast} />
						<Controller
							name="email"
							control={control}
							render={({ field, fieldState }) => (
								<div className="input-div">
									<span className="p-float-label">
										<InputText
											{...register('email', { required: true })}
											id={field.name}
											value={field.value}
											className={classNames({ 'p-invalid': fieldState.error })}
											onChange={(e) => field.onChange(e.target.value)}
										/>
										<label htmlFor={field.name}>Email</label>
									</span>
									{errors.email?.type === 'required' && (
										<p className="msg-form" role="alert">
											Digite o email
										</p>
									)}
								</div>
							)}
						/>
						<Controller
							name="pass"
							control={control}
							render={({ field, fieldState }) => (
								<div className="input-div">
									<span className="p-float-label">
										<Password
											{...register('pass', { required: true })}
											id={field.name}
											value={field.value}
											className={classNames({ 'p-invalid': fieldState.error })}
											onChange={(e) => field.onChange(e.target.value)}
											placeholder="Senha"
											required
											toggleMask
										/>
										<label htmlFor={field.name}>Senha</label>
									</span>
									{errors.pass?.type === 'required' && (
										<p className="msg-form" role="alert">
											Digite a senha
										</p>
									)}
								</div>
							)}
						/>
						<Button className="btn btn-enviar" type="submit" label={loading ? "" : 'Entrar'} loading={loading} disabled={!formIsvalid} />
						<Link to={'/publica/cadastro'}>
							<Button
								className="btn btn-cadastro"
								type="button"
								label="Realizar cadastro"
							/>
						</Link>
					</form>
				</div>
				<div className="col-12 md:col-7 hidden md:block sm:hidden">
					<img className="img-login" src={LoginImg} alt="Image" width="100%" />
				</div>
			</div>
		</div>
	);
}
