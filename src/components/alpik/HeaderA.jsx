import React, {useState, useEffect, useRef} from 'react'
import Button from '../atoms/Button'
import Link from "next/link";
import Image from 'next/image'
import useWindowDimensions from '@/components/hooks/useWindowDimensions'
import useScrollDirection from '@/components/hooks/useScrollDirection'
import { motion, useViewportScroll, useTransform } from "framer-motion";




const HeaderA = (props) => {

    const [width] = useWindowDimensions()

    function scrollToContacts() {
        document.getElementById(`contacts`).scrollIntoView({ behavior: 'smooth', block: 'start' });
        width > 800 ? window.scrollBy(0, -60) : window.scrollBy(0, 0);
        // window.scrollTo({top: contacts, behavior: 'smooth'});
     }

     function mapScrollTo() {
        document.getElementById(`map`).scrollIntoView({ behavior: 'smooth', block: 'start' });
        width > 800 ? window.scrollBy(0, -60) : window.scrollBy(0, 0);

     }

    // const { buttonText, town, firstPhone, secondPhone, headerLinks} = props

    const scrollDirection = useScrollDirection();
	const [toggleBurger, setToggleBurger] = useState(false)

    const contactsHandler = () => {
        scrollTo()

    }

     
    if (width && width > 800) {
            return (
            <motion.section 
                className={"header w-full " + (scrollDirection === "down" ? " down" : '' ) + (toggleBurger === true ? 'active' : '') + " flex flex-col"}
                // variants={variants}
                // animate={hidden ? "hidden" : "visible"}
            >
                <div className='flex flex-row header-top justify-between items-center pxm pb'>
                    <div className="logo">
                        <Link onClick={() => setToggleBurger(false)} href="/">
                            <Image quality={100} width={1000} className={'logo-svg mr ' + (width > 800 ? ' ' : ' mt') } height={1000} src='/images/logo-black.svg' alt={''}></Image>
                        </Link>
                    </div>
                    <div className={"info " + (toggleBurger === true ? 'active' : '') + " flex flex-row items-center justify-between"}>
                        {props?.data?.buttonText ? 
                        <Button
                            type={1}
                            text={props?.data?.buttonText}
                            href={props?.data?.buttonLink}
                            className={"m0 form-button"}
                        /> : '' }
                            <a onClick={() => {mapScrollTo()}} className='msk'>{props?.data?.town}</a>
                            <a href={"tel:" + props?.data?.firstPhone}>{props?.data?.firstPhone}</a>
                            <a href={"tel:" + props?.data?.secondPhone}>{props?.data?.secondPhone}</a>
                    </div>    
                </div>
                <div className={"header-bottom pxm" + (toggleBurger === true ? 'active' : '')  + " flex flex-row cont-padding-l-r bc-fill justify-end p w-full h-auto"}>
                    {/* <Link href={`/about`}>                				<a>Компания</a>
                    </Link> */}
                    {props?.data?.headerLinks?.map((l, i) => {
                        return l.text === "Контакты" ? <p onClick={() => scrollToContacts()} className='mlm' key={i} href={''}>{l.text}</p> : <Link className='mlm' key={i} href={`${l.link}`}>{l.text}</Link>
                    })}
                </div>
            </motion.section>
        );
    } else if (width && width <= 800) {
        return (
            <motion.section 
                className={"header w-full " + (scrollDirection === "down" ? " down" : '' ) + (toggleBurger === true ? 'active h-full' : '') + " flex flex-col justify-between"}
                // variants={variantsMobile}
                // animate={hidden ? "hidden" : "visible"}
            >
                <div className='flex flex-row header-top cont-padding-l-r justify-between px pb'>
                    <div className="logo">
                    <Link onClick={() => setToggleBurger(false)} href="/">
                        <Image quality={100} width={1000} className={'logo-svg-mob mr ' + (width > 800 ? ' ' : ' ') } height={1000} src='/images/logo-mob.svg' alt={''}></Image>
                    </Link>    
                    </div>
                    <div className={'burger ' + (toggleBurger === true ? 'active' : '')} onClick={() => setToggleBurger(!toggleBurger)}>
                        <span className='bar'></span>
                        <span className='bar'></span>
                        <span className='bar'></span>
                    </div>
                </div>
                <div className={"header-bottom " + (toggleBurger === true ? 'active' : '')  + " flex cont-padding-l-r bc-fill justify-start p w-full h-auto"}>
                    {/* <Link href={`/about`}>                				<a>Компания</a>
                    </Link> */}
                        {props?.data?.headerLinks?.map((l, i) => {
                            return l.text === "Контакты" ? <p onClick={() => {scrollTo(); setToggleBurger(false)}} className='ml0' key={i} href={''}>{l.text}</p> : <Link onClick={() => setToggleBurger(false)} className={(width > 800 ? "mll" : 'ml0 m-mob')} key={i} href={`${l.link}`}>{l.text}</Link>
                        })}
                </div>
                <div className={"info " + (toggleBurger === true ? 'active' : '') + " flex flex-col items-center justify-between mb"}>
                    {/* <Button
                        type={1}
                        text={props?.data?.buttonText}
                        className={"mx0 mt0 mbs"}
                    /> */}
                            <a onClick={() => {mapScrollTo(); setToggleBurger(false)}} className='msk'>{props?.data?.town}</a>
                            <a href={"tel:" + props?.data?.firstPhone}>{props?.data?.firstPhone}</a>
                            <a href={"tel:" + props?.data?.secondPhone}>{props?.data?.secondPhone}</a>
                </div>  
            </motion.section>
        );
    }
}

export default HeaderA
