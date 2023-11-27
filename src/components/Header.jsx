import useWindowDimensions from './hooks/useWindowDimensions'
import { React, useState, useEffect } from 'react'
import Image from 'next/image'
import Button from '../components/atoms/Button'
import findImageUrl from './utils/findImageUrl'
import MenuItem from './MenuItem';
import { motion, useViewportScroll, useTransform } from "framer-motion";

import Link from 'next/link'


export default function Header (props) {

    const { logo, text, navItems, button } = props

    const [width] = useWindowDimensions()
  
    const { scrollY } = useViewportScroll();
    const top = useTransform(scrollY, [0, 100], [0, -30]);
    const [hidden, setHidden] = useState(false);
  
    function update() {
      if (scrollY?.current < scrollY?.prev) {
        setHidden(false);
      } else if (scrollY?.current > 600 && scrollY?.current > scrollY?.prev) {
        setHidden(true);
      }
    }

    console.log(props, 'Header props')

    useEffect(() => {
      return scrollY.onChange(() => update());
    });
  
    
      const variants = {
        visible: { y: 0 },
        hidden: { y: -70 }
      };
      const variantsMobile = {
        visible: { y: 0 },
        hidden: { y: -43 }
      };
    
    // const menuLinks = ['About', 'Services', 'Contact Us', 'Career']
    
 
    if (width) {
        if (width > 800) {
          return (
            <motion.section 
              className={'header'}
              variants={variants}
              animate={hidden ? "hidden" : "visible"}
              style={{ top }}
            >
              <div className='name flex space-between justify-center'>
                <p>{text}</p>
              </div>
              <div className='flex justify-between items-center'>
                <Link href={'/'} className='flex items-center logo cd2'>
                  <Image quality={100} width={100} className='mrs' height={100} src={findImageUrl(logo, 'url')}></Image>
                  <p>Team</p>
                </Link>
                <div className='flex justify-center cb-mid'>
                    {navItems.map((n, i) => {
                        return <Link key={i} className='nav-item' href={n.href}>{n.text}</Link>
                    })}
                  {/* <Link className='nav-item' href='/#we' >Кто мы</Link>
                  <Link className='nav-item' href='/#cases' >Кейсы</Link>
                  <Link className='nav-item' href='/#services' >Услуги</Link> */}
                </div>
                {button && (<div className='cd2 flex justify-end'>
                  <Link href={button.href} className='nav-item cb-mid'>{button.text}</Link>
                </div>)}
              </div>
            </motion.section>
          );
      } else {
        return (
          <motion.section 
            className={'header'}
            variants={variantsMobile}
            animate={hidden ? "hidden" : "visible"}
            style={{ top }}
          >
            <div className='name flex space-between justify-center'>
              <p>айти команда Капустина ©</p>
            </div>
            <div className='flex justify-between items-center'>
              <Link href={'/'} className='flex items-center logo'>
                <Image quality={100} width={100} className='mrs' height={100} src={findImageUrl(logo, "url")}></Image>
                <p>Team</p>
              </Link>
              <div className='flex justify-center cb-mid'>
                    {navItems.map((n, i) => {
                        return <Link key={i} className='nav-item' href={n.href}>{n.text}</Link>
                    })}
                  {/* <Link className='nav-item' href='/#we' >Кто мы</Link>
                  <Link className='nav-item' href='/#cases' >Кейсы</Link>
                  <Link className='nav-item' href='/#services' >Услуги</Link> */}
                </div>
              
            </div>
          </motion.section>
        );
      }}
}