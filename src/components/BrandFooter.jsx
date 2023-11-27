
import useWindowDimensions from './hooks/useWindowDimensions'
import Button from './atoms/Button.jsx';
import SocialIcons from './atoms/SocialIcons.jsx';
import React from 'react';
import Link from "next/link";
import Image from 'next/image'

import delve from 'dlv';
import findImageUrl from './utils/findImageUrl';

export default function BrandFooter(props){
    const [width] = useWindowDimensions()
    // console.log("BRAND", props)

    const { title, subtitle, phone, address, info, image, middletext, labeltext, type} = props.data

    const footerLinks = props.footerLinks

    console.log(footerLinks)

    // const {text, address, phone, info, policy} = props
    // const address = 'Мы на связи 24/7'
    // const phone = 'dmitrii@kapustin.team'
    // const subtitle = 'Ваш надежный партнёр в области разработки'
    // const footerLinks = ['Work', 'About Us', 'Engagements', 'Career', 'Privacy Policy', 'Terms of Service', 'Customer Terms', 'Designer Terms']

    function currentYear() {
        return new Date().getFullYear();
    }

    if (type === 1) {
        return(
            <footer className="brand-footer brand-footer-1"> 
            {/* bc-fill убрал временно*/}
                <div className="container">
                    <div className={"footer-top justify-between flex w-full " + (width > 800 ? ' flex-row' : ' flex-col')}>
                        <div className={"left-side cd6 cm4 flex items-start" + (width > 800 ? ' flex-row justify-between' : ' flex-col-reverse justify-center') }>
                            <h3 className={width > 800 ? 'w-half' : 'w-full text-center'}>{subtitle}</h3>
                            <div className={(width > 800 ? ' ' : 'flex justify-center w-full mbs')}>
                                <Image quality={100} width={1000} className='logo' height={1000} src='/images/logo.svg'></Image>
                            </div>
                        </div>
                        <div className={"right-side cd6 cm4 flex items-start" + (width > 800 ? ' flex-row justify-between' : ' flex-col justify-center')}>
                            <p>{address}</p>
                            <p>{phone}</p>
                        </div>
                    </div>
                    <div className="footer-bottom mtm justify-between flex flex-row w-full">
                        <div className={"w-full flex justify-between items-end" + (width > 800 ? ' flex-row' : ' flex-col')}>
                            <p className='cd3 cm4'>{info}</p>
                            <div className='cd-s-1'></div>
                            {/* <p className={'cd4 cm4' + (width > 800 ? ' text-center' : ' text-start')}>какая то зунйя</p>  НЕАКТУАЛЬНОЕ */}
                            {/* <div className='cd-s-2'></div>
                            <p className={'cd3 cm4' + (width > 800 ? ' text-right' : ' text-start')}>{currentYear()}, команда Капустина ©</p> */}
                            <p className={'cd4 cm4' + (width > 800 ? ' text-center' : ' text-start')}>{middletext}</p>
                            <div className='cd-s-2'></div>
                            <p className={'cd2 cm4' + (width > 800 ? ' text-right' : ' text-start')}>{currentYear()} {labeltext}</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
    if (type === 2) {
        return(
            <footer className="brand-footer brand-footer-2">
                <div className="container flex flex-col">
                    <div className={"flex justify-between mbm" + (width > 800 ? '  flex-row' : ' flex-col')}>
                        <div className="flex flex-col cd6 cm4 h-auto">
                            <h2>{title}</h2>
                            <Button 
                                type={1}
                                className='mb'
                                text="Link to"
                            />
                        </div>
                        <div className="flex flex-col cd5 cm4 flex-wrap footerLinks justify-end">
                            {footerLinks?.map((f, i) => {
                                return <Link href="/" className='mb' key={i}>{f.link}</Link>
                            })}
                        </div>
                    </div>
                    <div className={"flex items-center" + (width > 800 ? ' flex-row justify-between' : ' flex-col-reverse')}>
                        <div className={"flex cd6 cm4 items-center" + (width > 800 ? ' flex-row' : ' flex-col-reverse mt')}>
                            <Image quality={100} width={1000} className={'logo mr ' + (width > 800 ? ' ' : ' mt') } height={1000} src='/images/image.webp' alt={''}></Image>
                            <p className=''>© {currentYear()} {labeltext}</p>
                        </div>
                        <div className={"flex flex-row cd4 cm4" + (width > 800 ? ' ' : ' justify-center mbs')}>
                            <SocialIcons 
                            />
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
    if (type === 3) {
        return(
            <footer className="brand-footer brand-footer-3"> 
            {/* bc-fill убрал временно*/}
                <div className="container">
                    <div className={"footer-top justify-between flex w-full " + (width > 800 ? ' flex-row' : ' flex-col')}>
                        <div className={"left-side cd4 cm4 flex items-start" + (width > 800 ? ' flex-row justify-between' : ' flex-col-reverse justify-center') }>
                            <h3>{title}</h3>
                        </div>
                        <div className={('cd4 cm4 flex justify-center w-full my')}>
                            <Image quality={100} width={1000} className='logo' height={1000} src={findImageUrl(image, "url")}></Image>
                        </div>
                        <div className={"right-side cd4 cm4 flex items-center " + (width > 800 ? ' flex-row justify-end' : ' flex-col justify-center')}>
                            <Button 
                                type={1}
                                text={phone}
                                href={`mailto:${phone}`}
                                className={'mr0 mt0'}
                            />
                        </div>
                    </div>
                    <div className="footer-bottom op mtm justify-between flex flex-row w-full">
                        <div className={"w-full flex justify-between items-end" + (width > 800 ? ' flex-row' : ' flex-col')}>
                            <p className='cd3 cm4'>{info}</p>
                            <div className='cd-s-1'></div>
                            {/* <p className={'cd4 cm4' + (width > 800 ? ' text-center' : ' text-start')}>какая то зунйя</p> */}
                            <div className='cd-s-2'></div>
                            <p className={'cd3 cm4' + (width > 800 ? ' text-right' : ' text-start')}>{currentYear()}{labeltext}</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}