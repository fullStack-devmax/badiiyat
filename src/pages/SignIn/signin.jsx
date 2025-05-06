import signin_style from './signin.module.scss';

import signin from '../../assets/img/signinbg.png';

import { Link } from 'react-router-dom';

import { Container } from '../../components/Container';


export const SignIn = () => {
    return (
        <section className={signin_style.signup}>
        <Container>
            <div style={{display: 'flex', alignItems: 'center', height: '100vh', width: '100%', overflow: 'hidden'}}>
                <div className={signin_style.signup_leftSide}>
                    <img src={signin} alt="authentication panel 2" width={500} height={500} />
                </div>
                <div className={signin_style.signup_rightSide}>
                    <h1>Sign in</h1>
                    <p>
                        Do not you have an account?
                        <Link to='/signup'>Sign up</Link>
                    </p>
                    <form>
                        <input type="email" name="email" id="email" placeholder='Email' />
                        <input type="password" name="password" id="password" placeholder='Password' />
                        <button type="submit">Next step</button>
                    </form>
                </div>
            </div>
        </Container>
    </section>
    )
}