import React, { useEffect, useState } from 'react'
import styles from './PopUp.module.css'
import Container from '../Container/Container';
import axios from 'axios';

function PopUp(props) {

    const popupRef = props.popupRef;

    const [popData,setPopData] = useState([]);
    const [carBrand,setCarBrand] = [props.carBrand,props.setCarBrand];
    const [carModel,setCarModel] = [props.carModel,props.setCarModel];
    const [carSubModel,setCarSubModel] = [props.carSubModel,props.setCarSubModel];

    function handleClose(flag){
        popupRef.current.style.bottom = "-60vh";
        document.body.classList.remove('no-scroll');
        props.setType(1);
        if(flag === false){
            setCarBrand('');
            setCarModel('');
            setCarSubModel('');
        }
    }

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (e.target !== popupRef.current && !popupRef.current.contains(e.target)) {
                handleClose();
            }
        };
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if(props.type === 1){
            async function fetchData(){
                const response = await axios.get('http://localhost:8080/getCarBrands');
                setPopData(response.data);
            }
            fetchData();
        }
        if(props.type === 2){
            async function fetchData(){
                const response = await axios.get(`http://localhost:8080/getCarModelByCarBrand?carBrand=${carBrand}`);
                setPopData(response.data);
            }
            fetchData();
        }
        else if(props.type === 3){
            async function fetchData(){
                const response = await axios.get(`http://localhost:8080/getCarSubModelByCarBrandAndCarModel?carBrand=${carBrand}&carModel=${carModel}`);
                setPopData(response.data);
            }
            fetchData();
        }
        else if(props.type == 4){
            handleClose(true);
            props.openProductsDisplay();
        }
    }, [props.type])
    
  return (
    <div className={styles.popup}>
        <div className={styles.header}>
            <p className={styles.headerText}>Shop Accessories</p>
            <p className={styles.closebtn} onClick={handleClose}>❌</p>
        </div>

        <div className={styles.containerBox}>
            { 
                popData.map((item) => {
                    return <Container type={props.type} image={item} key={item} setType = {props.setType}
                            setCarBrand={setCarBrand} setCarModel={setCarModel} setCarSubModel={setCarSubModel}
                            imageMap={props.imageMap}/>
                })
            }
        </div>
    </div>
  )
}

export default PopUp