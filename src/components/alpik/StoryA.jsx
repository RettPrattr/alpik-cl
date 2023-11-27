import React from 'react'
import Image from 'next/image'
import useWindowDimensions from '@/components/hooks/useWindowDimensions'
import findImageUrl from '@/components/utils/findImageUrl'
import AutoSlider from '@/components/atoms/AutoSlider.jsx';

const StoryA = (props) => {

    console.log(props, "SOTRYYY")

    const [width, height] = useWindowDimensions();

    const {title, usualText, descriptionRich, customText, type, images, image50, image66, image100, planImages } = props



    if (type === 1) {
        return (
            <section className={'storyA storyA-1'}>
                <div className="container flex flex-col">
                    <div className="flex-col h-fit text cd12">
                        <div className="title"><h2 className='ml0'>{title}</h2></div>
                    </div>
                    <div className="image100 cd12">
                        <Image quality={100} width={2000} height={2000} className={'photo cd12 cm4'} src={findImageUrl(image100, 'url')} alt={''}></Image>
                    </div>
                </div>  
            </section>
        )
    } else if (type === 2) {
        return (
            <section className="storyA storyA-2 flex flex-row">
                <div className="container items-center">
                    <div className="cd6 cm4">
                        <Image quality={100} width={2000} height={2000} className={'photo'} src={findImageUrl(image50, 'url')} alt={''}></Image>
                    </div>
                    <div 
                        className="descriptionRich cd6 cm4 mt"
                        dangerouslySetInnerHTML={{ __html: descriptionRich }}>
                    </div>
                </div>
            </section>
        )
    } else if (type === 3) {
        return (
            <section className="storyA storyA-3">
                <div className="container flex flex-col">
                    <div className="cd12 cm4">
                        <h2>Планировка</h2>
                    </div>
                    <div className="container items-center flex flex-row">
                        {planImages?.data?.map((p, i) => {
                            return  <div key={i} className="image50 cd6 cm4 pl0">
                                        <Image quality={100} width={2000} height={2000} className={'photo'} src={findImageUrl(p.attributes, 'url')}    alt={''}></Image>
                                    </div>
                        })}
                    </div>
                </div>
            </section>
        )
    } else if (type === 4) {
        return (
            <section className="storyA storyA-4 flex flex-row">
                <div className="container items-center">
                    <div 
                        className="descriptionRich cd4 cm4 mb"
                        dangerouslySetInnerHTML={{ __html: customText }}>
                    </div>
                    <div className="cd8 cm4">
                        <Image quality={100} width={2000} height={2000} className={'photo cd12 cm4'} src={findImageUrl(image66, 'url')} alt={''}></Image>
                    </div>
                </div>
            </section>
        )
    } else if (type === 5) {
        return (
            <section className={'story story-5 '}>
                <div className="container items-center flex flex-row">
                    <div className="cd6 cm4 flex items-center flex-col h-fit text">
                        <h2>{title}</h2>
                        <p className='mts'>{usualText}</p>
                    </div>
                    <div className="cd6 cm4">
                        <AutoSlider images={image50}/>
                    </div>
                    {/* <Image quality={100} width={imageWidth} height={imageHeight} className={'photo cd6 cm4'} src='/images/image.webp' alt={title}></Image> */}
                </div>  
            </section>
        )
    } else if (type === 6) {
        return (
            <section className={'storyA storyA-6 '}>
                <div className="container flex flex-col">
                    <div className={"top cd12" + (width > 800 ? '' : ' mb0')}>
                        <h2>{title}</h2>
                    </div>
                    <div className={"bottom flex items-center" + (width > 800 ? ' flex-row' : ' flex-col')}>
                        <div className="cd6 cm4">
                            <AutoSlider cl={'carousel relative no-paddingX'} images={images}/>
                        </div>

                        <div 
                            className="cd6 cm4 flex items-center flex-col h-fit text"
                            dangerouslySetInnerHTML={{ __html: descriptionRich }}>
                        </div>
                    </div>
                    {/* <Image quality={100} width={imageWidth} height={imageHeight} className={'photo cd6 cm4'} src='/images/image.webp' alt={title}></Image> */}
                </div>  
            </section>
        )
    } 

}

export default StoryA
