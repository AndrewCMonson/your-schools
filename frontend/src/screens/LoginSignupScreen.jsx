import { useState } from 'react'
import SignUpForm from '../components/SignUpForm';
import SignInForm from '../components/SignInForm';

const LoginSignup = () => {
  const [screenSelected, setScreenSelected] = useState('login')

  return (
		<>
      <section className="flex justify-center items-center h-full">
			{screenSelected === 'login' ? (
        <SignInForm setScreenSelected={setScreenSelected} />
      ) : (
        <SignUpForm setScreenSelected={setScreenSelected} screenSelected={screenSelected} />
      )}
      </section>
		</>
	);
}
export default LoginSignup