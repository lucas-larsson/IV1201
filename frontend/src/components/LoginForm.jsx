import React from 'react';
import Input from './Input';

/**
 * Form for collecting login data
 * 
 * @param {*} handleSubmitLogin Submits the login request
 * @param {*} username the username
 * @param {*} setUsername sets the username
 * @param {*} setPassword sets the password
 * @returns the component
 */
const LoginForm = ({
	handleSubmitLogin,
	username,
	setUsername,
	password,
	setPassword,
}) => {
	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				handleSubmitLogin(e);
			}}
			className='sign-in-html'
		>
			<Input
				label={'Username'}
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<Input
				label='Password'
				dataType='password'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<div id='group' className='mt-8'>
				<input
					type='submit'
					className='border-2 border-accent py-3 px-16'
					value='Sign In'
				/>
			</div>
		</form>
	);
};

export default LoginForm;
