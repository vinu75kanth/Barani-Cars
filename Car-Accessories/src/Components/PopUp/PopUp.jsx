import React, { useEffect, useState } from 'react'
import styles from './PopUp.module.css'
import Container from '../Container/Container';
import axios from 'axios';

function PopUp(props) {

    const popupRef = props.popupRef;

    const [data,setData] = useState([]);
    const [carbrand,setCarBrand] = useState('');
    const [carModel,setCarModel] = useState('');
    const [carSubModel,setCarSubModel] = useState('');

    function handleClose(){
        popupRef.current.style.bottom = "-70vh";
        document.body.classList.remove('no-scroll');
    }

    useEffect(() => {


        const handleClickOutside = (e) => {
            if (e.target !== popupRef.current && !popupRef.current.contains(e.target)) {
                popupRef.current.style.bottom = "-60vh"; // Hide popup
                document.body.classList.remove('no-scroll'); // Enable scrolling
            }
        };
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        // console.log(props.type);
        if(props.type === 1){
            async function fetchData(){
                const response = await axios.get('http://localhost:8080/getCarBrands');
                setData(response.data);
                // console.log(response.data);
            }
            fetchData();
        }
        else if(props.type === 2){
            async function fetchData(){
                const response = await axios.get(`http://localhost:8080/getCarModelByCarBrand?carBrand=${carbrand}`);
                setData(response.data);
                // console.log(response.data);
            }
            fetchData();
        }
        else if(props.type === 3){
            async function fetchData(){
                const response = await axios.get(`http://localhost:8080/getCarSubModelByCarBrandAndCarModel?carBrand=${carbrand}&carModel=${carModel}`);
                setData(response.data);
                // console.log(response.data);
            }
            fetchData();
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
                data.map((item) => {
                    return <Container type={props.type} image={item} key={item} setType = {props.setType}
                            setCarBrand={setCarBrand} setCarModel={setCarModel} setCarSubModel={setCarSubModel}/>
                })
            }
        </div>
    </div>
  )
}

export default PopUp