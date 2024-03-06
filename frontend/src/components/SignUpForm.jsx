import { Card, Input, Button } from '@material-tailwind/react';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const SignUpForm = () => {
	const [userFormData, setUserFormData] = useState({
		username: '',
		email: '',
		password: '',
	});

	const [addUser] = useMutation(ADD_USER);

	const handleInputChange = event => {
		const { name, value } = event.target;
		setUserFormData({ ...userFormData, [name]: value });
	};

	const handleFormSubmit = async event => {
		event.preventDefault();

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

	return (
		<>
			<Card color="transparent" shadow={false}>
				<div className='text-2xl'>
                    Sign Up
                </div>
				<form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
					<div className="mb-1 flex flex-col gap-6">
						<div className="-mb-3">
							Your Username
						</div>
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
						<div className="-mb-3">
							Your Email
						</div>
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
						<div className="-mb-3">
							Password
						</div>
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
					<Button className="mt-6" onClick={handleFormSubmit} fullWidth>
						sign up
					</Button>
					<div className="mt-4 text-center font-normal">
						Don&apos;t have an account?{' '}
						<a href="/login" className="font-medium text-gray-900">
							Sign Up
						</a>
					</div>
				</form>
			</Card>
		</>
	);
};

export default SignUpForm;
