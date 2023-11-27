import React from 'react';
import useWindowDimensions from '@/components/hooks/useWindowDimensions'


function Text(props) {

    // Fetch кладется внутрь тела компонента и вызывается универсально для любого типа
    // После фетчей подключаем все в переменные ниже

    const [width] = useWindowDimensions()

    const { type, title, descriptionRich, subtitle, text1, text2 } = props 
    
    // const title = 'Увеличиваем прибыль вашего бизнеса'
    // const subtitle = 'Подзаголовок'
    // const text1 = 'Делаем это быстро и надежно'
    // const text2 = 'Какой то длинный текст'

    // console.log("TEXT")

    // TYPE 1
    if ( type === 1 ) {
        return (
            <section className={'text text-1 flex flex-col'}>
                <div className="container text justify-between">
                    <div className="cd8 cm4 mbs">
                        <h4>{subtitle}</h4>
                        <h2>{title}</h2>
                    </div>
                    <div className="cd6 cm4 flex-col">
                        <div 
                            className=""
                            dangerouslySetInnerHTML={{ __html: text1 }}>
                        </div>
                    </div>
                    <div className="cd6 cm4 flex-col">
                        <div 
                            className=""
                            dangerouslySetInnerHTML={{ __html: text2 }}>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    if ( type === 2 ) {
        return (
            <section className={'text text-1 flex flex-col' + (width > 800 ? '' : ' pb0')}>
                <div className="container text justify-between">
                    <div className="cd12 cm4">
                        <h1>{title}</h1>
                    </div>
                </div>
            </section>
        )
    }
    if ( type === 3 ) {
        return (
            <section className={'textA textA-1 flex flex-col container'}>
                <div 
                    className="descriptionRich cd6 cm4"
                    dangerouslySetInnerHTML={{ __html: descriptionRich }}>
                </div>
            </section>
        )
    }
}

export default Text