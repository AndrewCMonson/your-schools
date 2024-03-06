import { useState } from 'react'
import SignUpForm from '../components/SignUpForm';
import SignInForm from '../components/SignInForm';

const LoginSignup = () => {
  const [screenSelected, setScreenSelected] = useState('signin')

  return (
		<>
      <section className="flex justify-center items-center h-full">
			{screenSelected === 'signin' ? (
        <SignInForm setScreenSelected={setScreenSelected} />
      ) : (
        <SignUpForm setScreenSelected={setScreenSelected} screenSelected={screenSelected} />
      )}
      </section>
		</>
	);
}
export default LoginSignup