import React, { useEffect, useRef } from 'react'
import styles from './Home.module.css'
import pic1 from '../../assets/car1.png'
import pic2 from '../../assets/car2.png'
import pic3 from '../../assets/car3.png'
import since from '../../assets/since.png'
import trust from '../../assets/trust.png'
import quality from '../../assets/quality.png'
import mahindra from '../../assets/Mahindra.png'
import suzuki from '../../assets/Suzuki.png'
import kia from '../../assets/Kia.png'
import camera from '../../assets/Camera.jpg'
import carCharger from '../../assets/CarCharger.jpg'
import seatCover from '../../assets/SeatCover.jpg'
import dustRemoverSpray from '../../assets/DustRemoveSpray.jpg'
import rightArrow from '../../assets/arrow-right-solid.svg'
import PopUp from '../PopUp/PopUp'

function Home() {

  const imgContainerRef = useRef(null);
  const popupRef = useRef(null);

  useEffect(() => {

    const length = imgContainerRef.current.querySelectorAll(`.${styles.pic}`).length;
    const container = imgContainerRef.current;
    
    let index = 1;
    
    container.style.gridTemplateColumns = `repeat(${length}, 100%)`;
    
    let intervalID = setInterval(() => {
      if(index === length)
      {
        index = 0;
      }
      container.style.transform = `translateX(-${index * 100}%)`;
      index++;
    }, 3000);

    return ()=>
    {
      clearInterval(intervalID);
    }
    
  }, [])

  function handlearrowclick(e){
    e.stopPropagation();
    popupRef.current.style.bottom =  "0vh";
    document.body.classList.add('no-scroll');
  }

  return (
    <div>
      {/* images */}
      <div className={styles.container}>
        <div ref={imgContainerRef} className={styles.imgContainer}>
          <img src={pic1} className={styles.pic} alt="pic1"></img>
          <img src={pic2} className={styles.pic} alt="pic2"></img>
          <img src={pic3} className={styles.pic} alt="pic3"></img>
        </div>
      </div>

      {/* ratings */}
      <div className={styles.ratingContainer}>
        <div className={styles.rating}> {/* lineone */}
          
          {/* quality */}
          <div className={styles.gmaps}>
            <img src={quality} className={styles.since}></img>
            <div className={styles.trustedText}>
              <p className={styles.Text}>Quality Products</p>
              <p className={styles.Text}>& Service</p>
            </div>
          </div>

          {/* since */}
          <div className={styles.sinceContainer}>
            <img src={since} className={styles.since}></img>
            <p>2019</p>
          </div>

          {/* trusted */}
          <div className={styles.sinceContainer}>
            <img src={trust} className={styles.since}></img>
            <div className={styles.trustedText}>
              <p className={styles.Text}>Trusted by</p>
              <p className={styles.Text}>5000+ customers</p>
            </div>
          </div>

        </div>

        <div className={styles.rating}> {/* linetwo */}

          {/* maps rating */}
          <div className={styles.gmaps}>
            <p className={styles.star}>★★★★<span className={styles.laststar}>★</span> <span className={styles.Text}>(4.8/5)</span></p>
            <p className={styles.ratingText}>G-Maps Rating</p>
          </div>

          {/* dummy
          <div className={styles.sinceContainer}>
            <img src={trust} className={styles.since}></img>
            <div className={styles.trustedText}>
              <p className={styles.Text}>Trusted by</p>
              <p className={styles.Text}>5000+ customers</p>
            </div>
          </div> */}

        </div>
      </div>

      {/* shop by brand name*/}
      <div className={styles.shopByContainer}>
        <div className={styles.shopBox}>
          <p>Shop Accessories <span>By Brand</span></p>
          <img src={rightArrow} className={styles.arrow} onClick={handlearrowclick}></img>
        </div>

        <div className={styles.brandNames}>

          <div className={styles.brand}>
            <div className={styles.brandImgContainer}>
              <img src={mahindra} className={styles.brandImg}></img>
            </div>
            <div className={styles.brandText}>
              <p>Mahindra</p>
            </div>
          </div>

          <div className={styles.brand}>
            <div className={styles.brandImgContainer}>
              <img src={suzuki} className={styles.brandImg}></img>
            </div>
            <div className={styles.brandText}>
              <p>Suzuki</p>
            </div>
          </div>

          <div className={styles.brand}>
            <div className={styles.brandImgContainer}>
              <img src={kia} className={styles.brandImg}></img>
            </div>
            <div className={styles.brandText}>
              <p>Kia</p>
            </div>
          </div>

          <div className={styles.brand}>
            <div className={styles.brandImgContainer}>
              <img src={suzuki} className={styles.brandImg}></img>
            </div>
            <div className={styles.brandText}>
              <p>Suzuki</p>
            </div>
          </div>

          <div className={styles.brand}>
            <div className={styles.brandImgContainer}>
              <img src={mahindra} className={styles.brandImg}></img>
            </div>
            <div className={styles.brandText}>
              <p>Mahindra</p>
            </div>
          </div>

        </div>
      </div>


      <div className={styles.shopByContainer}>
        <p>Shop Accessories <span>By Type</span></p>
      </div>

      <div className={styles.bestSellingContainer}>
        <div className={styles.outercontainer}>
          <p className={styles.bestSellingtext}>Best Selling</p>
          <div className={styles.innerContainer}></div>
          <div className={styles.bestSellingItems}>
            <div className={styles.bestSellingItem}>
              <img src={camera} className={styles.bestSellingpic}></img>
              <p className={styles.bestSellingProductName}>Camera</p>
            </div>
            <div className={styles.bestSellingItem}>
              <img src={carCharger} className={styles.bestSellingpic}></img>
              <p className={styles.bestSellingProductName}>Car Charger</p>
            </div>
            <div className={styles.bestSellingItem}>
              <img src={dustRemoverSpray} className={styles.bestSellingpic}></img>
              <p className={styles.bestSellingProductName}>Dust Remover</p>
            </div>
            <div className={styles.bestSellingItem}>
              <img src={seatCover} className={styles.bestSellingpic}></img>
              <p className={styles.bestSellingProductName}>Seat Cover</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.aboutUsContainer}>
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur, 
          adipisicing elit. Quam optio rerum fugiat itaque repellendus eos 
          officia nam quasi aliquam, voluptatibus reiciendis in fuga facere error beatae necessitatibus. 
          Quisquam accusantium animi veritatis ad quam sed, mollitia incidunt ratione possimus illum quo, 
          sint saepe assumenda quas, qui dignissimos nulla? Odit, dicta aliquam?</p>
      </div>



      <div className={styles.popup} ref={popupRef}>
        <PopUp popupRef={popupRef}/>
      </div>
    </div>
  )
}

export default Home