import React from 'react';
import config from '@bg/docs/config';
import { Input } from '@bg/docs/input';
import { Form } from 'pragmate-ui/form';
import { useForm, useTexts, useBinder } from '@jadmin/ui/hooks';
import { LoadingPage } from '@bg/docs/loading-page';
import { IForm, init, texts } from '../types';
import { module } from 'beyond_context';
import { Image } from 'pragmate-ui/image';
import { routing } from '@beyond-js/kernel/routing';
import { Button } from 'pragmate-ui/components';
import { StoreManager } from '../store';
const init: init = { email: '' };

export /*bundle*/
function View({ store }: { store: StoreManager }): JSX.Element {
	const [ready, texts] = useTexts<texts>(module.specifier);
	const [loading, setIsLoading] = React.useState(false);
	const { getInput, fields, error, setError, dispatch } = useForm({ init });
	const [upd, setUpdate] = React.useState({});
	useBinder([store], () => {
		setIsLoading(store.fetching);
		if (store.error) setError({ error: true, message: 'Usuario no registrado' });
		else if (store.success)
			setError({
				error: false,
				message: 'Se ha envíado un email a su correo electrónico con los pasos para recuperar su contraseña',
			});
	});
	const hide = () => {
		dispatch({ type: 'reset' });
		setError({});
	};
	useBinder([store], hide, 'hide');
	const formDisabled: IForm = {};
	const { email } = fields;

	if (!ready) return <LoadingPage />;
	if (!email || loading) formDisabled.disabled = true;

	const params = {
		email,
		appToken: config.params.application.token,
	};

	const handleSubmit = async (): Promise<void> => await store.send(params, hide);
	const mode: string = error?.error ? 'error' : 'success';

	const navigate = () => {
		routing.pushState('/auth/login');
	};
	return (
		<div className="page__container">
			<div className="content-auth">
				<Image src={`${globalThis.baseDir}assets/logo.png`} alt="logo" className="logo-header" />
				<Form onSubmit={handleSubmit}>
					<h1 className="title-login title-form">forgotten password</h1>
					<span className="texts-subtitle">
						Enter your email to retrieve your password. You will receive an email with instructions.
					</span>
					<div className="content-inputs">
						<Input
							type="email"
							placeholder="Insert email..."
							hasError={!!error.message}
							errorMessage={error?.message}
							{...getInput('email', 'Email', 'email', loading)}
						/>
					</div>

					<div className="form__actions">
						<Button type="reset" variant="secondary" onClick={navigate}>
							Volver
						</Button>

						<Button type="submit" variant="primary" loading={loading} {...formDisabled}>
							Verify
						</Button>
					</div>
				</Form>
			</div>
		</div>
	);
}
