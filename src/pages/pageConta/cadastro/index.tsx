import { useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { classNames } from 'primereact/utils';
import { Password } from 'primereact/password';
import Logo from '../../../../imgs/Logo.svg';
import LoginImg from '../../../../imgs/login-img.jpg';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import '../index.css';
import { Link } from 'react-router-dom';

interface IFormInput {
	nome: string;
	email: string;
	senha: string;
	confirmarSenha: string;
}

export default function Login() {
	const toast = useRef(null);
	const {
		register,
		formState: { errors },
		control,
		handleSubmit,
		getValues
	} = useForm<IFormInput>();

	const onSubmit: SubmitHandler<IFormInput> = (data) => {
		console.log(data);
		show();
	};
	const show = () => {
		toast.current.show({
			severity: 'success',
			summary: 'Fomulário enviado',
			detail: getValues('value')
		});
	};

	return (
		<div className="container-login flex justify-content-center">
			<div className="grid flex align-items-center justify-content-center">
				<div className="col-12 md:col-5">
					<div className="text-center">
						<img className="mb-5" src={Logo} alt="Dinheiro em circulação" />
						<h2 className="titulo mb-5">Cadastre sua conta</h2>
						<p className="text-left">
							Explore o dinheiro em circulação no Brasil gratuitamente!
						</p>
					</div>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Toast ref={toast} />
						<Controller
							name="nome"
							control={control}
							render={({ field, fieldState }) => (
								<div className="input-div">
									<span className="p-float-label">
										<InputText
											{...register('nome', { required: true })}
											id={field.name}
											value={field.value}
											className={classNames({ 'p-invalid': fieldState.error })}
											onChange={(e) => field.onChange(e.target.value)}
										/>
										<label htmlFor={field.name}>Nome</label>
									</span>
									{errors.nome?.type === 'required' && (
										<p className="msg-form" role="alert">
											Digite o nome
										</p>
									)}
								</div>
							)}
						/>
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
							name="senha"
							control={control}
							render={({ field, fieldState }) => (
								<div className="input-div">
									<span className="p-float-label">
										<Password
											{...register('senha', { required: true })}
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
									{errors.senha?.type === 'required' && (
										<p className="msg-form" role="alert">
											Digite a senha
										</p>
									)}
								</div>
							)}
						/>
						<Controller
							name="confirmarSenha"
							control={control}
							render={({ field, fieldState }) => (
								<div className="input-div">
									<span className="p-float-label">
										<Password
											{...register('confirmarSenha', { required: true })}
											id={field.name}
											value={field.value}
											className={classNames({ 'p-invalid': fieldState.error })}
											onChange={(e) => field.onChange(e.target.value)}
											placeholder="confirmarSenha"
											required
											toggleMask
										/>
										<label htmlFor={field.name}>Confirme sua senha</label>
									</span>
									{errors.confirmarSenha?.type === 'required' && (
										<p className="msg-form" role="alert">
											Digite a senha novamente
										</p>
									)}
								</div>
							)}
						/>
						<Button className="btn btn-enviar" type="submit" label="Entrar" />
						<Link to={'/entrar'}>
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
