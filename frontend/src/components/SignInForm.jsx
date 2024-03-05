import {
	Card,
	Input,
	Button,
	Typography,
} from '@material-tailwind/react';

const SignInForm = ({setScreenSelected}) => {
	return (
		<Card>
            <form className="flex flex-col items-center">
                <Typography color="indigo" size="xl">Sign In</Typography>
                <Input
                    className="border border-gray-400 rounded-lg p-1 m-1"
                    name="username"
                    type="text"
                    placeholder="Your username"
                />
                <Input
                    className="border border-gray-400 rounded-lg p-1 m-1"
                    name="password"
                    type="password"
                    placeholder="Your password"
                />
                <Button
                    color="indigo"
                    buttonType="filled"
                    size="regular"
                    rounded={false}
                    block={false}
                    iconOnly={false}
                    ripple="light"
                >
                    Sign In
                </Button>
                <Button
                    color="indigo"
                    buttonType="link"
                    size="regular"
                    rounded={false}
                    block={false}
                    iconOnly={false}
                    ripple="light"
                    onClick={() => setScreenSelected('signup')}
                >
                    Sign Up
                </Button>
            </form>
        </Card>
	);
};

export default SignInForm;
