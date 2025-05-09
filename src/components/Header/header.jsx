import header_style from './header.module.scss';

import { Container } from '../Container'
import { Carousel } from '../Carousel';


export const Header = () => {
    return(
        <header>
            <Container>
                <div className={header_style.hero}>
                    <Carousel/>
                    <div className={header_style.hero_search}>
                        <h2>QIDIRISH</h2>
                        <form>
                            <input type='search' placeholder='Adiblar, kitoblar, audiolar, maqolalar...'/>
                            <button type="submit" className={header_style.hero_btn}>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.9766 18.2214C12.8226 18.2214 14.5196 17.5864 15.8736 16.5334L20.2696 20.9294L21.6836 19.5154L17.2876 15.1194C18.3416 13.7644 18.9766 12.0674 18.9766 10.2214C18.9766 5.81044 15.3876 2.22144 10.9766 2.22144C6.56556 2.22144 2.97656 5.81044 2.97656 10.2214C2.97656 14.6324 6.56556 18.2214 10.9766 18.2214ZM10.9766 4.22144C14.2856 4.22144 16.9766 6.91244 16.9766 10.2214C16.9766 13.5304 14.2856 16.2214 10.9766 16.2214C7.66756 16.2214 4.97656 13.5304 4.97656 10.2214C4.97656 6.91244 7.66756 4.22144 10.9766 4.22144Z" fill="#3C2710"/>
                                <path d="M12.3886 8.80743C12.7676 9.18743 12.9766 9.68943 12.9766 10.2214H14.9766C14.9766 9.15643 14.5606 8.15243 13.8026 7.39343C12.2886 5.88143 9.66357 5.88143 8.15057 7.39343L9.56257 8.80943C10.3226 8.05143 11.6326 8.05343 12.3886 8.80743Z" fill="#3C2710"/>
                            </svg>
                            <p>Izlash</p>
                            </button>
                        </form>
                    </div>
                </div>
            </Container>
        </header>
    )
}