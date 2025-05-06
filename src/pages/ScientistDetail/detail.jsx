import scientist_detail_style from './detail.module.scss';

import { Container } from '../../components/Container';

import avloniy from '../../assets/img/avloniy.png'


export const ScientistDetail = () => {
    return (
        <section className={scientist_detail_style.scientist_detail}>
            <Container>
                <div className={scientist_detail_style.scientist_detail__box}>
                    <img src={avloniy} alt="avloniy" width={582} height={779} style={{borderRadius: '0px 50px 50px 0px'}} />

                </div>
            </Container>
        </section>
    )
}