import React, { useEffect, useRef, useState } from 'react'
import styles from './Home.module.css'
import pic1 from '../../assets/car1.png'
import pic2 from '../../assets/car2.png'
import pic3 from '../../assets/car3.png'
import since from '../../assets/since.png'
import trust from '../../assets/trust.png'
import quality from '../../assets/quality.png'
import camera from '../../assets/Camera.jpg'
import carCharger from '../../assets/CarCharger.jpg'
import seatCover from '../../assets/SeatCover.jpg'
import dustRemoverSpray from '../../assets/DustRemoveSpray.jpg'
import rightArrow from '../../assets/arrow-right-solid.svg'
import home from '../../assets/home.png'
import homeRed from '../../assets/home_red.png'
import products from '../../assets/best-product.png'
import PopUp from '../PopUp/PopUp'

//images import
import AshokLeyland from '../Summa/AshokLeyland.png'
import Citroen from '../Summa/Citroen.png'
import Fiat from '../Summa/Fiat.png'
import Force from '../Summa/Force.png'
import Ford from '../Summa/Ford.png'
import Chevrolet from '../Summa/Chevrolet.png'
import Honda from '../Summa/Honda.png'
import Hyundai from '../Summa/Hyundai.png'
import Isuzu from '../Summa/Isuzu.png'
import Jeep from '../Summa/Jeep.png'
import Kia from '../Summa/Kia.png'
import Mahindra from '../Summa/Mahindra.png'
import MarutiSuzuki from '../Summa/MarutiSuzuki.png'
import MG from '../Summa/MG.png'
import Nissan from '../Summa/Nissan.png'
import Renault from '../Summa/Renault.png'
import Skoda from '../Summa/Skoda.png'
import TataMotors from '../Summa/TataMotors.png'
import Toyota from '../Summa/Toyota.png'
import Volkswagen from '../Summa/Volkswagen.png'
import axios from 'axios'
import Product from '../Product/Product'
import ProductsDisplay from '../ProductsDisplay/ProductsDisplay'

function Home() {

  const imgContainerRef = useRef(null);
  const popupRef = useRef(null);

  const [type, setType] = useState(1);

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

  const [data,setData] = useState([]);

  const [carBrand,setCarBrand] = useState('');
  const [carModel,setCarModel] = useState('');
  const [carSubModel,setCarSubModel] = useState('');

  useEffect(() => {
    async function fetchData(){
      const response = await axios.get('http://localhost:8080/getCarBrands');
      setData(response.data);
    }
    fetchData();
  }, [])

  function handlearrowclick(e){
    e.stopPropagation();
    popupRef.current.style.bottom =  "0vh";
    document.body.classList.add('no-scroll');
    setType(1);
  }

  function brandClick(e,item){
    e.stopPropagation();
    popupRef.current.style.bottom =  "0vh";
    document.body.classList.add('no-scroll');
    setType(2);
    setCarBrand(item);
  }

  const productDisplayRef = useRef(null);


  const productRef1 = useRef(null);
  const productRef2 = useRef(null);

  const [productData,setProductData] = useState([]);

  function openProductsDisplay(e,bool){
    if(bool === true)
      e.stopPropagation();
    //changing circle to rectangle
    
    productDisplayRef.current.style.bottom = "-90vh";
    productDisplayRef.current.style.height = "90vh";
    productDisplayRef.current.style.borderRadius = "0";
    productDisplayRef.current.style.left = "0";
    productDisplayRef.current.style.width = "100%";
    productDisplayRef.current.style.backgroundColor = "white";

    productDisplayRef.current.style.bottom = "0vh"
    document.body.classList.add('no-scroll');

    productRef1.current.classList.remove(styles.display);
    productRef2.current.classList.add(styles.display);

    async function fetchData(){
      const response = await axios.get(`http://localhost:8080/getProductByCarBrandCarModelCarSubModel?carBrand=${carBrand}&carModel=${carModel}&carSubModel=${carSubModel}`);
      setProductData(response.data);
      console.log(response.data);
    }
    fetchData();
  }

  function takeToHome(){
    productDisplayRef.current.style.bottom = "5vh";
    productDisplayRef.current.style.height = "50px";
    productDisplayRef.current.style.borderRadius = "50%";
    productDisplayRef.current.style.left = "20px";
    productDisplayRef.current.style.width = "50px";
    productDisplayRef.current.style.backgroundColor = "rgba(0, 0, 0, 0.627)";

    document.body.classList.remove('no-scroll');

    productRef2.current.classList.remove(styles.display);
    productRef1.current.classList.add(styles.display);
  }

  const imageMap = {
    'Ashok Leyland' : AshokLeyland,
    'Citroen' : Citroen,
    'Fiat' : Fiat,
    'Force' : Force,
    'Ford' : Ford,
    'Chevrolet' : Chevrolet,
    'Honda' : Honda,
    'Hyundai' : Hyundai,
    'Isuzu' : Isuzu,
    'Jeep' : Jeep,
    'Kia' : Kia,
    'Mahindra' : Mahindra,
    'Maruti Suzuki' : MarutiSuzuki,
    'Mg' : MG,
    'Nissan' : Nissan,
    'Renault' : Renault,
    'Skoda' : Skoda,
    'Tata Motors' : TataMotors,
    'Toyota' : Toyota,
    'Volkswagen' : Volkswagen,
  };

  return (
    <div className={styles.home}>
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

        </div>
      </div>

      {/* shop by brand name*/}
      <div className={styles.shopByContainer}>
        <div className={styles.shopBox}>
          <p>Shop Accessories <span>By Brand</span></p>
          <img src={rightArrow} className={styles.arrow} onClick={handlearrowclick}></img>
        </div>

        <div className={styles.brandNames}>

          {
            data.map((item) => {
              return  <div className={styles.brand} key={item} onClick={(e)=>brandClick(e,item)}>
                        <div className={styles.brandImgContainer}>
                          <img src={imageMap[item]} className={styles.brandImg}></img>
                        </div>
                        <div className={styles.brandText}>
                          <span>{item.split(" ")}</span>
                        </div>
                      </div>
            })
          }
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
        <PopUp popupRef={popupRef} type={type} setType={setType} imageMap={imageMap} openProductsDisplay={openProductsDisplay}
        carBrand={carBrand} setCarBrand={setCarBrand} 
        carModel={carModel} setCarModel={setCarModel}
        carSubModel={carSubModel} setCarSubModel={setCarSubModel}
        />
      </div>

      <ProductsDisplay/>
    </div>
  )
}

export default Home

