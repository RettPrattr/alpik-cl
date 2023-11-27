import React from 'react';
import useWindowDimensions from '@/components/hooks/useWindowDimensions'


function TextA(props) {

    // Fetch кладется внутрь тела компонента и вызывается универсально для любого типа
    // После фетчей подключаем все в переменные ниже

    const type = props.type // : number
    


    // console.log("TEXT")

    // TYPE 1
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

export default TextA