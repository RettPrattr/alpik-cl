import useWindowDimensions from '@/components/hooks/useWindowDimensions'
import React from 'react';
import Link from "next/link";
import Image from 'next/image'

import findImageUrl from '@/components/utils/findImageUrl';


export default function BrandFooterA (props) {

    const [width] = useWindowDimensions()


    function scrollTo() {
        document.getElementById(`contacts`).scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.scrollBy(0, -120);
        console.log("IOOOOOO")
     }

    // console.log("PROPS BRAND", props)


    // const contactsLinks = [
    //     {
    //         text: '',
    //         link: ''
    //     }
    // ]


    return (
        <footer className="BrandFooterA BrandFooterA-3"> 
        {/* bc-fill убрал временно*/}
            <div className="container">
                <div className={"footer-top justify-between flex w-full " + (width > 800 ? ' flex-row' : ' flex-col')}>
                    <div className={"logo cd3 cm4 mb"}>
                        <Link href="/">
                            <Image quality={100} width={1000} className={'logo ' + (width > 800 ? ' ' : ' ') } height={1000} src='/images/logo-footer.svg' alt={''}></Image>
                        </Link>
                    </div>
                    <div className={"left-links cd3 cm4 col flex flex-col" + (width > 800 ? '' : ' mt')}>
                        {props?.data?.footerLinks?.map((f, i) => {
                            return f.text === "Контакты" ? <p onClick={() => scrollTo()} className={width > 800 ? ' mb' : ' '} key={i} href={''}>{f.text}</p> : <Link className={width > 800 ? ' mb' : ' '} key={i} href={`${f.link}`}>{f.text}</Link>
                        })}
                    </div>
                    <div className={(width > 800 ? "" : " mtm") + " middle-links cd3 cm4 col flex flex-col" }>
                        <a className={width > 800 ? 'mb' : ''} href={"tel:" + props?.data?.firstPhone}>{props?.data?.firstPhone}</a>
                        <a className={width > 800 ? 'mb' : ''} href={"tel:" + props?.data?.secondPhone}>{props?.data?.secondPhone}</a>
                        <a className={width > 800 ? 'mb' : ''} href={"mailto:" + props?.data?.email}>{props?.data?.email}</a>
                    </div>
                    <div className={(width > 800 ? "" : " mtm") + " right-links cd3 cm4 col flex flex-col"}>
                        <p className={width > 800 ? 'mb' : ''}>{props?.data?.town}</p>
                        <p className={width > 800 ? 'mb' : ''}>{props?.data?.street}</p>
                        <p className={width > 800 ? 'mb' : ''}>{props?.data?.schedule}</p>
                    </div>
                </div>
                <div className={"footer-bottom flex justify-between mtm cd12 cm4" + (width > 800 ? ' flex-row' : ' flex-col')}>
                    <Link href="/" className="policy w-half">
                        {props?.data?.policy}
                    </Link>
                    <Link href='https://kapustin.team' target='_blank' className={"label" + (width > 800 ? ' ' : ' mtm mbs')}>
                        <img src={findImageUrl(props?.data?.label, "url")} alt="" />
                    </Link>
                </div>
            </div>
        </footer>
    )
}