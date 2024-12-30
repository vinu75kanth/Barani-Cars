import React, { useEffect } from 'react'
import styles from './PopUp.module.css'
import { use } from 'react';
import Container from '../Container/Container';

function PopUp(props) {

    const popupRef = props.popupRef;

    function handleClose(){
        popupRef.current.style.bottom = "-70vh";
        document.body.classList.remove('no-scroll');
    }

    useEffect(() => {

        // let firstTime = false;

        const handleClickOutside = (e) => {
            if (e.target !== popupRef.current && !popupRef.current.contains(e.target)) {
                popupRef.current.style.bottom = "-60vh"; // Hide popup
                document.body.classList.remove('no-scroll'); // Enable scrolling
                console.log('clicked outside');
            }
        };
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

  return (
    <div>
        <div className={styles.header}>
            <p className={styles.headerText}>Shop Accessories</p>
            <p className={styles.closebtn} onClick={handleClose}>❌</p>
        </div>

        <div className={styles.containerBox}>
            <Container/>
            <Container/>
            <Container/>
            <Container/>
        </div>
    </div>
  )
}

export default PopUp