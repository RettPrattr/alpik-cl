import React from 'react';
import Image from 'next/image'
import useWindowDimensions from './hooks/useWindowDimensions'
import findImageUrl from './utils/findImageUrl'
import AutoSlider from './atoms/AutoSlider.jsx';


function Story(props) {

    const [width, height] = useWindowDimensions();

    const {typeOfBlock, title, subtitle, text, description, paragraph, reverse, fullSize} = props

    // console.log("STORY", props)

    // Fetch кладется внутрь тела компонента и вызывается универсально для любого типа
    // После фетчей подключаем все в переменные ниже

    const type = props.type // : number
    const fullSizeVS = props.fullsize // : boolean
    const reverseVS = props.reverse // : boolean
    
    const imageWidth = 2000
    const imageHeight = 2000
    
    // const title = 'Персональная гарантия качества'
    // const subtitle = 'Основатель, Дмитрий Капустин'
    // const text = 'Для нас главный приоритет — это качественный результат в срок. Персональная связь нашей команды лично со мной является гарантом надежности и качества наших услуг. Мы — не очередное безликое агентство и нацелены на плотное и долгосрочное сотрудничество.'
    const photo = 'LINK'
    const paragraphVS = ['By harnessing the power of smart meters, big data, and machine learning, we raise the IQ of your energy assets and allow you to buy or sell electricity from the palm of your hand. Join us today as we illuminate a path to an affordable, clean, energy future.']
    /// ВМЕСТО br rich text

    const images = props.storyImages?.data

    findImageUrl(images, 'url')

    // TYPE 1
    if ( type === 1 ) {
        return (
            // <section className={'story story-1 flex flex-col ' + (reverse && ' reverse ')}>
            <section className={'story story-1 flex flex-col ' + (reverseVS && ' reverse ')}>
                <div className="container text justify-between">
                    <div className="cd3 cm4">
                        <div className="subtitle">
                            <h4>{subtitleVS}</h4>
                        </div>
                    </div>
                    <div className="cd8 cm4 flex-col">
                        <h2>{titleVS}</h2>
                        <p>{textVS}</p>
                        {props.children}
                    </div>
                </div>
                {
                    photo 
                    && 
                    <div className={'photoWrapper ' + (fullSizeVS === false && ' container')}>    
                        <Image quality={100} width={imageWidth} height={imageHeight} className={'photo cd12 cm4'} src='/images/image.webp' alt={titleVS}></Image>
                    </div>
                }
            </section>
        )
    }

    if ( type === 2 ) { 
        return (
            <section className={'story story-2 flex '+ (width > 800 ? ' flex-row' : ' flex-col')}>
                <div className={"cd6 cm4 left-side" + (width > 800 ? ' mb' : ' ')}>
                    <Image className="two-angles-border" quality={100} width={imageWidth} height={imageHeight} src='/images/image.webp' alt={titleVS}></Image>
                </div>
                <div className="container">
                    <div className="cd6 cm4 right-side flex flex-col">
                        <h2 className={'my' + (width > 800 ? ' my' : ' mb mt')}>{titleVS}</h2>
                        <div className="flex">
                            <div className="cd-s-3 cm-s-0"></div>
                            <p className='cd6 cm4'>{paragraphVS}</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    // TYPE 4
    if ( type === 4 ) {
        return (
            <section className={'story story-4 flex flex-col ' + (reverseVS && ' reverse')}>
                
                <div className={"items-center " + (fullSizeVS !== true && ' container')}>
                    <div className="cd-s-1"></div>
                    <Image quality={100} width={imageWidth} height={imageHeight} className={'photo ' + (fullSizeVS !== true && 'cd10 cm4')} src='/images/image.webp' alt={titleVS}></Image>
                </div>
                <div className="container items-center">
                    <div className="cd-s-3"></div>
                    <div className="cd6 cm4 flex-col h-fit text">
                        <div className="subtitle">
                            <h4>{subtitleVS}</h4>
                        </div>
                            <h2>{titleVS}</h2>
                            <p>{textVS}</p>
                            {props.children}
                    </div>
                </div>  
            </section>
        )
    }

    // TYPE 5
    if ( type === 5 ) {
        return (
            <section className={'story story-5 flex flex-col ' + (reverseVS && ' reverse')}>
                <div className="container items-center">
                    <div className="cd6 cm4 flex-col h-fit text">
                        <div className="subtitle">
                            <h4>{subtitleVS}</h4>
                        </div>
                        <h2>{titleVS}</h2>
                        <p>{textVS}</p>
                        {props.children}
                    </div>
                    <Image quality={100} width={imageWidth} height={imageHeight} className={'photo cd6 cm4'} src='/images/image.webp' alt={titleVS}></Image>
                </div>  
            </section>
        )
    }

    if ( typeOfBlock === 6 ) {
        return (
            <section className={'story story-5 flex flex-col ' + (reverse && ' reverse')}>
                <div className="container items-center">
                    <div className="cd6 cm4 flex-col h-fit text">
                        <div className="subtitle">
                            <h4>{subtitle}</h4>
                        </div>
                        <h2>{title}</h2>
                        <p>{text}</p>
                        {props.children}
                    </div>
                    <AutoSlider images={images}/>
                    {/* <Image quality={100} width={imageWidth} height={imageHeight} className={'photo cd6 cm4'} src='/images/image.webp' alt={title}></Image> */}
                </div>  
            </section>
        )
    }

     // TYPE 6
     if ( type === 6 ) {
        return (
            <section id='we' className={'story story-6 flex flex-col justify-between' + (reverse && ' reverse')}>
                <div className="container items-center">
                    <div className='cd5 cm3 mym'>
                        <Image quality={100} width={imageWidth} height={imageHeight} className={'photo'} src='/images/footer-logo.png' alt={title}></Image>
                    </div>
                    <div className="cd-s-1"></div>
                    <div className="cd6 cm4 flex-col h-fit text">
                        <h2>{title}</h2>
                        <div 
                            className="" 
                            dangerouslySetInnerHTML={{ __html: text }}>
                        </div>
                        {/* <p><br/>— Дмитрий Капустин, основатель</p> */}
                        {props.children}
                    </div>
                </div>
            </section>
        )
    }
}

export default Story