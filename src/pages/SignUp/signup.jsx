import signup_style from './signup.module.scss';

import signup from '../../assets/img/Twofactorauthenticationpana1.png'

import { Container } from '../../components/Container';
import { Link } from 'react-router-dom';


export const SignUp = () => {
    return (
        <section className={signup_style.signup}>
            <Container>
                <div style={{display: 'flex', alignItems: 'center', height: '100vh', width: '100%', overflow: 'hidden'}}>
                    <div className={signup_style.signup_leftSide}>
                        <img src={signup} alt="authentication panel" width={500} height={500} />
                    </div>
                    <div className={signup_style.signup_rightSide}>
                        <h1>Sign up</h1>
                        <p>
                            Already have an account?
                            <Link to='/signin'>Sign in</Link>
                        </p>
                        <form>
                            <input type="text" name="firstName" id="firstName" placeholder='First name' />
                            <input type="text" name="lastName" id="lastName" placeholder='Last name' />
                            <input type="tel" name="telNumber" id="telNumber" placeholder='Phone' />
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