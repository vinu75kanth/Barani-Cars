import React from 'react'
import styles from './Container.module.css'
// import AshokLeyland from '../Summa/AshokLeyland.png'
// import Citroen from '../Summa/Citroen.png'
// import Fiat from '../Summa/Fiat.png'
// import Force from '../Summa/Force.png'
// import Ford from '../Summa/Ford.png'
// import Chevrolet from '../Summa/Chevrolet.png'
// import Honda from '../Summa/Honda.png'
// import Hyundai from '../Summa/Hyundai.png'
// import Isuzu from '../Summa/Isuzu.png'
// import Jeep from '../Summa/Jeep.png'
// import Kia from '../Summa/Kia.png'
// import Mahindra from '../Summa/Mahindra.png'
// import MarutiSuzuki from '../Summa/MarutiSuzuki.png'
// import MG from '../Summa/MG.png'
// import Nissan from '../Summa/Nissan.png'
// import Renault from '../Summa/Renault.png'
// import Skoda from '../Summa/Skoda.png'
// import TataMotors from '../Summa/TataMotors.png'
// import Toyota from '../Summa/Toyota.png'
// import Volkswagen from '../Summa/Volkswagen.png'

function Container(props) {
  
  const imageMap = props.imageMap;

  function handleClick(){
    if(props.type === 1){
        props.setCarBrand(props.image);
        props.setType(2);
    }
    else if(props.type === 2){
        props.setCarModel(props.image);
        props.setType(3);
    }
    else if(props.type === 3){
        props.setCarSubModel(props.image);
        props.setType(4);
    }
  }

  
  const imgsrc = imageMap[props.image];
  return (
    <div className={styles.Container} onClick={handleClick}>
        <img src={imgsrc} className={styles.image}></img>
        <p>{props.image}</p>
    </div>
  )
}

export default Container