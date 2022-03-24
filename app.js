import { signUp, signIn } from './fetch-utils.js';

const signUpForm = document.querySelector('.sign-up');
const signInForm = document.querySelector('.sign-in');

signUpForm.addEventListener('submit', async (e) =>{

    e.preventDefault();

    const data = new FormData(signUpForm);

    await signUp(data.get('email'), data.get('password'));

   

});