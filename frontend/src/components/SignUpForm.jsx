
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const SignUpForm = () => {
    const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });

    const [addUser] = useMutation(ADD_USER);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
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
            <form className="flex flex-col items-center" onSubmit={handleFormSubmit}>
                <h2>Sign Up</h2>
                <input
                    className="border border-gray-400 rounded-lg p-1 m-1"
                    name="username"
                    type="text"
                    value={userFormData.username}
                    onChange={handleInputChange}
                    placeholder="Your username"
                />
                <input
                    className="border border-gray-400 rounded-lg p-1 m-1"
                    name="email"
                    type="email"
                    value={userFormData.email}
                    onChange={handleInputChange}
                    placeholder="Your email"
                />
                <input
                    className="border border-gray-400 rounded-lg p-1 m-1"
                    name="password"
                    type="password"
                    value={userFormData.password}
                    onChange={handleInputChange}
                    placeholder="Your password"
                />
                <button type="submit">Submit</button>
            </form>
        </>
	);
}

export default SignUpForm;