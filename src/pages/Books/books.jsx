import book_style from './books.module.scss';

import { useState, useEffect } from 'react';

import { Header } from "../../components/Header"
import { Container } from '../../components/Container';
import { Book } from '../../components/Book';


export const Books = () => {
    const [data, setData] = useState([]);


    useEffect(() => {
        fetch('https://library-production-e837.up.railway.app/get_books/')
          .then(response => response.json())
          .then(responseData => {
            console.log('Fetched data:', responseData);
            if (Array.isArray(responseData)) {
              setData(responseData);
            } else if (Array.isArray(responseData.data)) {
              setData(responseData.data);
            } else {
              console.error('Unexpected data format:', responseData);
              setData([]);
            }
          })
          .catch(error => console.error(error));
      }, []);
      

    return (
        <>
            <Header/>
            <section className={book_style.bookCategories}>
                <Container style={{backgroundColor: 'white'}}>
                    <h2>Asosiy kategoriyalar</h2>
                    <ul>
                        <li>Temuriylar davri</li>
                        <li>Jadid adabiyoti</li>
                        <li>Sovet davri</li>
                        <li>Mustaqillik davri</li>
                    </ul>
                    <div className={book_style.bookCategories_books}>
                      {Array.isArray(data) && data.length > 0 ? (
                        data.map((item, index) => (
                          <Book
                            key={item._id} 
                            id={item._id} 
                            fullName={item.fullName} 
                            birthDate={item.dateOfDeath} 
                          />                          
                        ))
                      ) : (
                        <p>Yuklanmoqda yoki muammo yuz berdi...</p>
                      )}
                    </div>
                </Container>
            </section>
        </>
    )
}