import * as React from 'react';
import { useState } from 'react';
import { Form } from 'pragmate-ui/form';
import { Button } from 'pragmate-ui/components';
import { LoadingPage } from '@bg/docs/loading-page';
import { useTexts, useBinder } from '@jadmin/ui/hooks';
import { module } from 'beyond_context';
import { texts } from '../types';
import config from '@bg/docs/config';
import { routing } from '@beyond-js/kernel/routing';
import { InputCode } from '@bgroup/ui/code-verification';
import { Image } from 'pragmate-ui/image';
import { session } from '@bg/auth-api/wrapper.ts';

export function View(specs: { uri: { vars: Map<string, string> }; store: any }): JSX.Element {
	const token = specs.uri.vars.get('token');
	const [ready, texts] = useTexts<texts>(module.specifier);
	const [code, setCode] = useState<String | Boolean>(false);
	const [error, setError] = useState<string>('');
	const [loading, setIsLoading] = React.useState(false);
	const [reset, setReset] = React.useState<number>(0);
	const [upd, setUpdate] = React.useState({});
	useBinder(
		[specs.store],
		() => {
			setReset(specs.store.count);
			setError('');
		},
		'hide'
	);
	if (!ready) return <LoadingPage />;

	async function resend() {
		setIsLoading(true);
		await session.resendCode({
			appToken: config.params.application.token,
			token,
		});
		setIsLoading(false);
	}

	async function validate() {
		setIsLoading(true);
		try {
			const response = await session.validateCode({ code, token, appToken: config.params.application.token });
			if (response.error) throw new Error(response.error);
			specs.store.count = specs.store.count + 1;
			routing.pushState(`/auth/set-forgotten-password/${token}`);
		} catch (error) {
			if (error.message === 'INVALID_CODE') setError(texts.invalidCode);
		} finally {
			setIsLoading(false);
		}
	}

	const handleOnCodeFull = (code: String): void => setCode(code ?? false);
	const disabled: { disabled?: boolean } = {};
	if (loading) disabled.disabled = true;
	return (
		<div className="page__container">
			<div className="content-auth">
				<Image src={`${globalThis.baseDir}assets/logo.png`} alt="logo" className="logo-header" />
				<Form onSubmit={validate}>
					<h1 className="title-login">{texts.title}</h1>
					<span className="texts-subtitle texts-subtitle__code">
						{texts.subtitle}
						<strong className="break">{session.email}</strong>
					</span>
					<strong className="info">{texts.info}</strong>
					<InputCode reset={reset} onlyNumber length={6} onCodeFull={handleOnCodeFull} />
					<span className="code-error"> {error}</span>

					<div className="form__actions two-actions-code">
						<Button onClick={resend} variant="secondary" loading={loading} disabled={loading}>
							{texts.resend}
						</Button>
						<Button type="submit" variant="primary" loading={loading} {...disabled}>
							{texts.verify}
						</Button>
					</div>
				</Form>
			</div>
		</div>
	);
}
