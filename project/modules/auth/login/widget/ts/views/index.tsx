import React, { useState } from 'react';
import { routing } from '@beyond-js/kernel/routing';
import { useForm, useTexts, useBinder } from '@jadmin/ui/hooks';
import { LoadingPage } from '@bg/docs/loading-page';
import { module } from 'beyond_context';
import { IForm, init, texts } from '../types';
import { Model } from '../model';
import { Input } from '@bg/docs/input';
import { Image } from 'pragmate-ui/image';
import { Form, Checkbox } from 'pragmate-ui/form';
import { Button } from 'pragmate-ui/components';

export /*bundle*/ function Page({ store }: { store: Model }): JSX.Element {
	const [ready, texts] = useTexts<texts>(module.specifier);
	const init: init = { email: '', password: '', isRemember: false };
	const { getInput, fields, error, setError, dispatch, getCheckbox } = useForm({
		init,
	});
	const [fetching, setFetching] = useState<boolean>(false);
	useBinder([store], () => {
		if (store.error) setError({ error: 'Usuario o clave incorrectos' });
		else setError({ error: '' });
		setFetching(store.fetching);
	});
	const formDisabled: IForm = {};
	const { email, password } = fields;
	if (!ready) return <LoadingPage />;
	if (!email || !password || fetching) formDisabled.disabled = true;

	const handleSubmit = async (): Promise<void> => {
		await store.login(fields);
		routing.pushState('/');
	};

	return (
		<div className='auth-page__container'>
			<div className='content-auth'>
				<Image src={`${globalThis.baseDir}assets/logo.png`} alt='logo' className='logo-header' />
				<Form onSubmit={handleSubmit}>
					<h1 className='title-login'>{texts.login}</h1>
					<div className='content-inputs'>
						<Input
							disabled={fetching}
							type='email'
							loading={fetching}
							hasError={!!error.error}
							errorMessage={error?.error}
							{...getInput('email', texts.email, 'email', fetching)}
						/>
						<Input
							disabled={fetching}
							type='password'
							password={true}
							loading={fetching}
							hasError={!!error.error}
							errorMessage={error?.error}
							{...getInput('password', texts.password, 'password', fetching)}
						/>
					</div>

					<div className='form__actions'>
						<Button type='submit' className='btn btn-primary' loading={fetching} {...formDisabled}>
							{texts.init}
						</Button>
					</div>
				</Form>
			</div>
		</div>
	);
}
