import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import HeaderA from '@/components/alpik/HeaderA';
import BrandFooterA from '@/components/alpik/BrandFooterA';
import BigText from '@/components/BigText';
import YaMap from '@/components/atoms/YaMap';
import Form from '@/components/atoms/Form';
import Promo from '@/components/Promo';
import { Context } from '../context/Context';





export default function Layout({children}) {

    const [promoData, setPromoData] = useState()
    const [headerData, setHeaderData] = useState()
    const [footerData, setFooterData] = useState()
    const [bigTextData, setBigTextData] = useState()





    useEffect(() => {
            (async () => {
                const { data } = await axios.get(`${process.env.API_LINK}/api/layout?populate=deep`).then(result => result.data)
                // console.log(data, "DATA GET")
                setPromoData(data?.attributes.Promo)
                setHeaderData(data?.attributes.Header)
                setFooterData(data?.attributes.BrandFooter)
                setBigTextData(data?.attributes.BigText)
              })()
    }, [])

    console.log(headerData, promoData)


    return (
        <Context>
            <HeaderA 
                data={headerData}
            />
            <main>
                {children}
            </main>
            <Form 
                title={'Оставить заявку'}
            />
            <BigText 
                data={bigTextData}
                />
            <YaMap />
            <BrandFooterA
                data={footerData}
            />
        </Context>
    )
}