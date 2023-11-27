import React, { useState } from 'react';
import Button from '@/components/atoms/Button'
import useWindowDimensions from '@/components/hooks/useWindowDimensions'


function BigText(props) {

    // const {title, phoneNumber, email, city, address} = props?.data

    const [width] = useWindowDimensions()


    const type = props.type // : number

    const imageWidth = 100
    const imageHeight = 100

    // const text = '<p class="text-left">Помогаем бизнесу развиваться с&nbsp;помощью <strong>дизайна</strong> и&nbsp;<strong>сайтов</strong></p>'
    // // const buttonLink = '#'

    // const title = "Контакты"
    // const phoneNumber = "+7 (495) 228-13-80"
    // const email = "ck-3@mail.ru"
    // const city = "Москва,"
    // const address = "Дмитровское ш., д.100, стр.3"
    
    // console.log("BIG TEXT")

    function mapScrollTo() {
        document.getElementById(`map`).scrollIntoView({ behavior: 'smooth', block: 'start' });
        width > 800 ? window.scrollBy(0, -60) : window.scrollBy(0, 0);
        console.log("IOOOOOO")
     }

    // TYPE 1
    if ( props.data?.type === 1) {
        return (
            <section className={'bigText bigText-' + type + ' flex flex-row'}>
                <div className="container justify-start">
                    <div 
                        className="flex flex-row cm4 cd12" 
                        dangerouslySetInnerHTML={{ __html: text }}>
                    </div>
                </div>
            </section>
        )}

    // TYPE 2
    if ( props.data?.type === 2 ) {
        return (
            <section id='contacts' className={'bigText bc-fill bigText-2 flex flex-row'}>
                <div className="container flex flex-col">
                    <div className={'flex heading cd12 cm4 ' + (width > 800 ? ' mbs' : ' mb')}>
                        <h2 className=''>{props?.data?.title}</h2>
                    </div>
                    <div className="flex-row flex space-between mx0 mb0 mys p0">
                        <div className="flex flex-col cd6 cm4">
                            <a className="mb" href={"tel:" + props?.data?.phoneNumber}>{props?.data?.phoneNumber}</a>
                            <a className="m0" href={"mailto:" + props?.data?.email}>{props?.data?.email}</a>
                        </div>
                        <div className="flex flex-col cd6 cm4">
                            <p className="mb">{props?.data?.town}</p>
                            <p className="m0">{props?.data?.address}</p>
                        </div>
                    </div>
                </div>
            </section>
        )}
}

export default BigText