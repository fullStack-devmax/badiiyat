import navbarSL from './navbar.module.scss';

import { Link, NavLink } from 'react-router-dom';

import badiiyat from '../../assets/svg/Badiiyat.svg'

import {Container} from '../Container'


export const Navbar = () => {
    return(
        <nav className={navbarSL.main_navbar}>
            <Container>
                <div className={navbarSL.main_navbar_flexbox}>
                    <div>
                        <img src={badiiyat} alt="" />
                    </div>
                    <div className={navbarSL.main_navbar_flexbox__menu}>
                        <NavLink
                          to="/"
                          className={({ isActive }) => 
                            isActive 
                              ? `${navbarSL.main_navbar_flexbox__menu_item} active` 
                              : navbarSL.main_navbar_flexbox__menu_item
                          }
                        >Bosh sahifa</NavLink>
                        <NavLink
                          to="/books"
                          className={({ isActive }) => 
                            isActive 
                              ? `${navbarSL.main_navbar_flexbox__menu_item} active` 
                              : navbarSL.main_navbar_flexbox__menu_item
                          }
                        >Kitoblar</NavLink>
                        <NavLink
                          to="/"
                          className={({ isActive }) => 
                            isActive 
                              ? `${navbarSL.main_navbar_flexbox__menu_item} active` 
                              : navbarSL.main_navbar_flexbox__menu_item
                          }
                        >Nasr</NavLink>
                        <NavLink
                          to="/"
                          className={({ isActive }) => 
                            isActive 
                              ? `${navbarSL.main_navbar_flexbox__menu_item} active` 
                              : navbarSL.main_navbar_flexbox__menu_item
                          }
                        >Nazm</NavLink>
                        <NavLink
                          to="/"
                          className={({ isActive }) => 
                            isActive 
                              ? `${navbarSL.main_navbar_flexbox__menu_item} active` 
                              : navbarSL.main_navbar_flexbox__menu_item
                          }
                        >Maqolalar</NavLink>
                        <NavLink
                          to="/"
                          className={({ isActive }) => 
                            isActive 
                              ? `${navbarSL.main_navbar_flexbox__menu_item} active` 
                              : navbarSL.main_navbar_flexbox__menu_item
                          }
                        >Forum</NavLink>
                    </div>
                    <div className={navbarSL.main_navbar_flexbox__privside}>
                        <Link className={navbarSL.main_navbar_flexbox__privside_btn} to='/'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.1601 10.1006H8.12598" stroke="rgb(60, 39, 16)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M15.7212 7.67059L18.1612 10.1006L15.7212 12.5306" stroke="rgb(60, 39, 16)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M13.6342 6.35823C13.3592 3.3749 12.2425 2.29156 7.80082 2.29156C1.88332 2.29156 1.88332 4.21656 1.88332 9.9999C1.88332 15.7832 1.88332 17.7082 7.80082 17.7082C12.2425 17.7082 13.3592 16.6249 13.6342 13.6416" stroke="rgb(60, 39, 16)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p>Login</p>
                        </Link>
                    </div>
                </div>
            </Container>
        </nav>
    )
}