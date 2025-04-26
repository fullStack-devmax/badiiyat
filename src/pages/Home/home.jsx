import home_style from './home.module.scss';

import { Header } from "../../components/Header"
import { Container } from '../../components/Container';
import { Scientist } from '../../components/Scientists/scientist';


export const Home = () => {
    return (
        <>
            <Header/>
            <section className={home_style.homeCategories}>
                <Container style={{backgroundColor: 'white'}}>
                    <h2>Asosiy kategoriyalar</h2>
                    <ul>
                        <li>Temuriylar davri</li>
                        <li>Jadid adabiyoti</li>
                        <li>Sovet davri</li>
                        <li>Mustaqillik davri</li>
                    </ul>
                    <div className={home_style.homeCategories_scientists}>
                        <Scientist/>
                        <Scientist/>
                        <Scientist/>
                        <Scientist/>
                        <Scientist/>
                        <Scientist/>
                        <Scientist/>
                        <Scientist/>
                        <Scientist/>
                        <Scientist/>
                        <Scientist/>
                        <Scientist/>
                    </div>
                </Container>
            </section>
        </>
    )
}