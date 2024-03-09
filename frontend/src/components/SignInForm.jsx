import {
    Card,
    Input,
    Button
} from '@material-tailwind/react';
import { LOGIN_USER } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import { useState } from 'react';
import Auth from '../utils/auth';


const SignInForm = ({setScreenSelected}) => {
    const [userFormData, setUserFormData] = useState({ username: '', password: '' });
    const [login] = useMutation(LOGIN_USER);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await login({
                variables: { ...userFormData },
            });

            Auth.login(data.login.token);
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
		<Card color="transparent" shadow={false}>
			<div  className='text-2xl'>
				Sign In
			</div>
			<form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
				<div className="mb-1 flex flex-col gap-6">
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
					sign in
				</Button>
				<div className="mt-4 text-center font-normal">
					Don&apos;t have an account?{' '}
					<a onClick={setScreenSelected} className="cursor-pointer">
						Sign Up
					</a>
				</div>
			</form>
		</Card>
	);
};

export default SignInForm;
