import book_style from './book.module.scss';

import book from '../../assets/img/book.png'

export const Book = () => {
    return (
        <div className={book_style.book}>
            <img className={book_style.book_img} src={book} alt="book" />
            <div className={book_style.book_info}>
                <h3>Dunyoning ishlari</h3>
                <h4>O'tkir Hoshimov</h4>
                <div className={book_style.book_info__stats}>
                    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.9683 4.63084C11.8909 4.40404 11.6863 4.24383 11.4475 4.22523L8.02676 3.95342L6.54651 0.676715C6.4499 0.461308 6.2357 0.323303 5.99989 0.323303C5.76408 0.323303 5.54988 0.461308 5.45327 0.676115L3.97302 3.95342L0.552312 4.22523C0.317705 4.24383 0.115498 4.39804 0.0356955 4.61944C-0.0441071 4.84085 0.0122948 5.08866 0.1809 5.25306L2.70878 7.71734L1.81475 11.5887C1.75955 11.8281 1.85616 12.0771 2.05836 12.2169C2.16157 12.2877 2.28037 12.3237 2.39977 12.3237C2.51558 12.3237 2.63198 12.2901 2.73278 12.2229L5.99989 10.0448L9.267 12.2229C9.4758 12.3621 9.75001 12.3567 9.95402 12.2085C10.1568 12.0603 10.2462 11.8005 10.1772 11.5593L9.07979 7.71914L11.8015 5.26987C11.9797 5.10906 12.0451 4.85825 11.9683 4.63084Z" fill="white"/>
                    </svg>
                    <p>4.1 • 3400 ta fikrlar</p>
                </div>
            </div>
        </div>
    )
}