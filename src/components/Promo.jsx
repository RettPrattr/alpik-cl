import React from 'react';
import Image from 'next/image'
import Button from '../components/atoms/Button'
import useWindowDimensions from './hooks/useWindowDimensions'

export default function Promo (props) {

    // const {title, description} = props?.data

    // console.log(props, "PROMO")

    const [width, height] = useWindowDimensions();

    // const title = 'Рассрочка'
    // const description = 'С действующей программой гибкой рассрочки от застройщика вы можете купить новую квартиру, не дожидаясь продажи старой. А остаток погасить, например, через целый год. Это отличное решение для тех, кому не подходит ипотека, а для полной оплаты возможности нет.'

    if ( props.data?.type === 1 ) {
        return (
            <section className='Promo Promo-1 flex flex-col bc-fill'>
                <div className="container flex flex-col">
                    <div className="top cd12 cm4">
                        <h2>{title}</h2>
                    </div>
                    <div className={"bottom flex cm4" + (width > 800 ? ' justify-between w-full flex-row ' : ' flex-col')}>
                        <div className={width > 800 ? ' cd6' : ' '}>
                            <p>{description}</p>
                        </div>
                        <div className={"flex" + (width > 800 ? ' justify-end' : ' justify-start')}>
                        <Button 
                            type={2}
                            text="Кнопка"
                        />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    if ( props.data?.type === 2 ) {
        return (
            <section className='Promo Promo-2 flex flex-col'>
                <div className="container">
                    <div className="cd4 cm4">
                    </div>
                    <div className="cd8 cm4 flex-col">
                    </div>
                </div>
            </section>
        )
    }
    if ( props.data?.type === 3 ) {
        return (
            <section className='Promo Promo-3 flex flex-col cd12 cm4'>
                <div className="container flex flex-col justify-start cm4">
                    <div className=''>
                        <h2 className={"title cm4" + (width > 800 ? ' mbm' : ' mbs')}>{props.data?.title}</h2>
                        <p className={"description cm4 " + (width > 800 ? 'w-half' : 'w-full')}>{props.data?.description}</p>
                        <Button 
                            type={1}
                            className='cm4 px'
                            text={props.data?.title}
                        />
                    </div>
                </div>
            </section>
        )
    }
}

