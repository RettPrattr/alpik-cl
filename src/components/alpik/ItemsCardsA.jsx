import React, {useState, useEffect} from 'react';
import Link from "next/link";
import useWindowDimensions from '@/components/hooks/useWindowDimensions'
// import Button from './atoms/Button.jsx';
import axios from 'axios';
import Image from 'next/image'
import findImageUrl from '@/components/utils/findImageUrl'
import findValue from '@/components/utils/findValue'

const ItemsCardsA = (props) => {

    const [content, setContent] = useState("")

    const { title, type, cardsDataPath } = props

    const getData = async () => {
        await axios.get(`${process.env.API_LINK}/api/${cardsDataPath}/?populate=deep`)
        .then((response) => {
            console.log(response, "ITEMSSSSSS")
            const news = response.data
            setContent(news)
        })
    }


    useEffect(() => {
        getData()
    }, [])



    const [width] = useWindowDimensions()


    if (type === 1) {
        return (
            <section className="ItemCardsA ItemCardsA-3">
                <div className="container flex flex-col">
                    <div className={"cd12 cm4 title w-full " + (width > 800 ? ' mbs' : ' mbs')}>
                        <h2>{title}</h2>
                    </div>
                    <div className={"cards flex" + (width > 800 ? ' flex-row' : ' flex-col')}>
                        {content.data?.map((m, i) => {
                            let Block = null
                            m.href ? Block = Link : Block = 'div'
                            return  <Block href={m.href ? ('/news/' + m.href) : ''} className={'flex cd4 cm4 flex-col mbm'} key={i}>
                            <div className='image-wrapper mbs'>
                                <Image 
                                    src={findImageUrl(m.photo, 'url')} 
                                    width={800} 
                                    height={800} 
                                    quality={100} 
                                    alt={''}
                                    className='photo'
                                    >
                                </Image>
                            </div>
                            
                            <h3 className='mbs'>{m.title}</h3>
                            
                            <p className=''>{m.description}</p>
                        </Block>
                        })}
                    </div>
                </div>
            </section>
        )
    }

    if (type === 2 && content) {
        return (
            <section className="ItemCardsA ItemCardsA-3">
                <div className="container flex flex-col">
                    <div className={"cd12 cm4 title w-full " + (width > 800 ? ' mbs' : ' mbs')}>
                        <h2>{title}</h2>
                    </div>
                    <div className={"cards flex" + (width > 800 ? ' flex-row' : ' flex-col')}>
                        {content?.data?.map((m, i) => {
                            let Block = null
                            m.attributes.slug ? Block = Link : Block = 'div'
                            return  <Block href={m.attributes.slug ? ('/news/' + m.attributes.slug) : ''} className={'flex cd4 cm4 flex-col mbm'} key={i}>
                            <div className='image-wrapper mbs'>
                                <Image 
                                    src={findImageUrl(m.attributes.mainPhoto, 'url')} 
                                    width={800} 
                                    height={800} 
                                    quality={100} 
                                    alt={''}
                                    className='photo'
                                    >
                                </Image>
                            </div>
                            
                            <h3 className='mbs'>{m.attributes.mainTitle}</h3>
                            
                            <p className=''>{m.attributes.mainDescription}</p>
                        </Block>
                        })}
                    </div>
                </div>
            </section>
        )
    }
}

export default ItemsCardsA
