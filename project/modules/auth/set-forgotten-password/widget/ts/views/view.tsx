import React, { useState } from 'react';
import { useForm, useTexts, useBinder } from '@jadmin/ui/hooks';
import { LoadingPage } from '@bg/docs/loading-page';
import { module } from 'beyond_context';
import { IForm, init, texts } from '../types';
import { session } from '@bg/auth-api/wrapper.ts';
import { routing } from '@beyond-js/kernel/routing';
import { Input } from '@bg/docs/input';
import { Image } from 'pragmate-ui/image';
import { BeyondAlert } from '@bgroup/ui/alert';
import { ValidatePassword } from './validate-password';
import { Form } from 'pragmate-ui/form';
import { Button } from 'pragmate-ui/components';
import config from '@bg/docs/config';

export /*bundle*/ function View(specs): JSX.Element {
	const [ready, texts] = useTexts<texts>(module.specifier);
	const init: init = { repeatPassword: '', newPassword: '' };
	const { getInput, fields, error, setError, dispatch } = useForm({ init });
	const token = specs.uri.vars.get('token');
	const isForget = !!specs.uri.qs.get('forget');
	const [upd, setUpdate] = React.useState({});
	const [loading, setLoading] = useState<boolean>(false);
	const formDisabled: IForm = {};
	const { repeatPassword, newPassword } = fields;
	const hide = () => {
		dispatch({ type: 'reset' });
		setError({});
	};
	useBinder([specs.store], hide, 'hide');
	if (!ready) return <LoadingPage />;

	if (!repeatPassword || loading) {
		formDisabled.disabled = true;
	}
	const themeStorage = localStorage.getItem('theme');
	const logo: string = themeStorage ? (themeStorage === 'dark' ? 'logo-auth-dark' : 'logo-auth') : 'logo-auth-dark';
	const handleSubmit = async (): Promise<void> => {
		try {
			if (repeatPassword !== newPassword) {
				setError({ password: texts.passwordError });
				return;
			}
			setLoading(true);
			const results = await session.setPassword({
				newPassword,
				token,
				url: config.params.uploadUrl.development,
				isForget,
				email: localStorage.getItem('__temp'),
				appToken: config.params.application.token,
			});
			if (results.error) {
				setLoading(false);
				throw new Error(results.error);
			}
			dispatch({ type: 'reset' });
			routing.pushState('/auth/login');
			setLoading(false);
		} catch (error) {
			setError({ error: texts.error });
			console.error(error);
		}
	};

	return (
		<div className="page__container">
			<div className="content-auth">
				<Image src={`${globalThis.baseDir}assets/logo.png`} alt="logo" className="logo-header" />
				<Form onSubmit={handleSubmit}>
					<h1 className="title-login">{texts.title.edit}</h1>
					<BeyondAlert message={error.error} mode="error" show={!!error.error} isClose={false} />
					<div className="content-inputs">
						<Input
							password={true}
							hasError={!!error?.password}
							errorMessage={error?.password}
							pattern="^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$"
							type="password"
							{...getInput('newPassword', texts.newPassword, 'password')}
							loading={loading}
						/>
						<Input
							type="password"
							hasError={!!error?.password}
							pattern="^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$"
							errorMessage={error?.password}
							password={true}
							loading={loading}
							{...getInput('repeatPassword', texts.repeatPassword, 'currentPassword')}
						/>
					</div>
					<ValidatePassword texts={texts} validate={newPassword} />
					<div className="form__actions">
						<Button type="submit" variant="primary" loading={loading} {...formDisabled}>
							{texts.save}
						</Button>
					</div>
				</Form>
			</div>
		</div>
	);
}
