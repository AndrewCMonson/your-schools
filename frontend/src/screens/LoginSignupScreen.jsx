import { Card, Input, Button } from '@material-tailwind/react';
import { LOGIN_USER, ADD_USER } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Auth from '../utils/auth';

const LoginSignup = () => {
	const [screenSelected, setScreenSelected] = useState('login');
	const [userFormData, setUserFormData] = useState({
		username: '',
		email: '',
		password: '',
	});
	const [login] = useMutation(LOGIN_USER);
	const [addUser] = useMutation(ADD_USER);

	const handleInputChange = event => {
		const { name, value } = event.target;
		setUserFormData({ ...userFormData, [name]: value });
	};

	const handleLoginFormSubmit = async event => {
		event.preventDefault();

    if (!userFormData.email || !userFormData.password) {
      toast.error('Please fill out all fields');
      return;
    }

		try {
			const { data } = await login({
				variables: { ...userFormData },
			});

			Auth.login(data.login.token);
		} catch (e) {
			toast.error('Invalid credentials');
		}

		setUserFormData({
			username: '',
			email: '',
			password: '',
		});
	};

	const handleSignupFormSubmit = async event => {
		event.preventDefault();

		if (
			!userFormData.username ||
			!userFormData.email ||
			!userFormData.password
		) {
			toast.error('Please fill out all fields');
			return;
		}

		try {
			const { data } = await addUser({
				variables: { ...userFormData },
			});

			Auth.login(data.addUser.token);
		} catch (e) {
			console.error(e);
		}

		setUserFormData({
			username: '',
			email: '',
			password: '',
		});
	};

	if (screenSelected === 'login') {
		return (
			<>
				<section
					id="loginSignupScreen"
					className="h-full w-full pt-5 flex flex-row justify-center items-center overflow-scroll"
				>
					<Card color="transparent" shadow={false}>
						<div className="text-2xl">Sign In</div>
						<form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
							<div className="mb-1 flex flex-col gap-6">
								<div className="-mb-3">Your Email</div>
								<Input
									size="lg"
									name="email"
									placeholder="name@mail.com"
									onChange={handleInputChange}
									className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
									labelProps={{
										className: 'before:content-none after:content-none',
									}}
								/>
								<div className="-mb-3">Password</div>
								<Input
									type="password"
									size="lg"
									name="password"
									onChange={handleInputChange}
									placeholder="********"
									className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
									labelProps={{
										className: 'before:content-none after:content-none',
									}}
								/>
							</div>
							<Button
								className="mt-6"
								onClick={handleLoginFormSubmit}
								fullWidth
                color='indigo'
							>
								sign in
							</Button>
							<div className="mt-4 text-center font-normal">
								Don&apos;t have an account?{' '}
								<span
									onClick={() => setScreenSelected('signup')}
									className="cursor-pointer hover:underline"
                  
								>
									Sign Up
								</span>
							</div>
						</form>
					</Card>
				</section>
			</>
		);
	}

	if (screenSelected === 'signup') {
		return (
			<>
				<section
					id="loginSignupScreen"
					className="h-full w-full pt-5 flex flex-row justify-center items-center overflow-scroll"
				>
					<Card color="transparent" shadow={false}>
						<div className="text-2xl">Create an account</div>
						<form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
							<div className="mb-1 flex flex-col gap-6">
								<div className="-mb-3">Your Username</div>
								<Input
									size="lg"
									name="username"
									placeholder="username"
									onChange={handleInputChange}
									className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
									labelProps={{
										className: 'before:content-none after:content-none',
									}}
								/>
								<div className="-mb-3">Your Email</div>
								<Input
									size="lg"
									name="email"
									placeholder="name@mail.com"
									onChange={handleInputChange}
									className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
									labelProps={{
										className: 'before:content-none after:content-none',
									}}
								/>
								<div className="-mb-3">Password</div>
								<Input
									type="password"
									size="lg"
									name="password"
									onChange={handleInputChange}
									placeholder="********"
									className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
									labelProps={{
										className: 'before:content-none after:content-none',
									}}
								/>
							</div>
							<Button
								className="mt-6"
								onClick={handleSignupFormSubmit}
								fullWidth
                color='indigo'
							>
								sign up
							</Button>
							<div className="mt-4 text-center font-normal">
								Already have an account?{' '}
								<a
									onClick={() => setScreenSelected('login')}
									className="cursor-pointer hover:underline"
								>
									Sign In
								</a>
							</div>
						</form>
					</Card>
				</section>
			</>
		);
	}
};
export default LoginSignup;
