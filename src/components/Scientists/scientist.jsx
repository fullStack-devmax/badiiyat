import scientist_style from './scientist.module.scss';

import avloniy from '../../assets/img/avloniy.png'


export const Scientist = () => {
    return (
        <div className={scientist_style.scientistComp}>
          <img className={scientist_style.scientistComp_img} src={avloniy} alt="avloniy" />
          <div className={scientist_style.scientistComp_info}>
            <h3>Abdulla Avloniy</h3>
            <p>1878-1934</p>
            <div className={scientist_style.scientistComp_info__stats}>
              <div>
                <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.700684 3.85913V6.85913V12.8591V15.8591V17.8591C0.700684 20.0601 2.49468 20.8591 3.70068 20.8591H18.7007V18.8591H3.71268C3.25068 18.8471 2.70068 18.6651 2.70068 17.8591C2.70068 17.0531 3.25068 16.8711 3.71268 16.8591H16.7007H17.7007H18.7007V15.8591V13.8591V2.85913C18.7007 1.75613 17.8037 0.859131 16.7007 0.859131H3.70068C2.49468 0.859131 0.700684 1.65813 0.700684 3.85913Z" fill="white"/>
                </svg>
                34
              </div>
              <div>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.7007 12.8591V11.1521C20.7007 6.71013 17.2217 2.99113 12.9457 2.86213C10.7417 2.81113 8.69468 3.59813 7.12968 5.11813C5.56268 6.63813 4.70068 8.67713 4.70068 10.8591V12.8591C3.59768 12.8591 2.70068 13.7561 2.70068 14.8591V18.8591C2.70068 19.9621 3.59768 20.8591 4.70068 20.8591H6.70068V10.8591C6.70068 9.22213 7.34668 7.69313 8.52168 6.55313C9.69568 5.41313 11.2567 4.81413 12.8847 4.86213C16.0927 4.95813 18.7007 7.78013 18.7007 11.1521V20.8591H20.7007C21.8037 20.8591 22.7007 19.9621 22.7007 18.8591V14.8591C22.7007 13.7561 21.8037 12.8591 20.7007 12.8591Z" fill="white"/>
                    <path d="M7.70068 12.8591H9.70068V20.8591H7.70068V12.8591ZM15.7007 12.8591H17.7007V20.8591H15.7007V12.8591Z" fill="white"/>
                </svg>
                13
              </div>
            </div>
          </div>
        </div>
    )
}