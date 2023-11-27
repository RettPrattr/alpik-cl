import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import useWindowDimensions from '@/components/hooks/useWindowDimensions'

function Button({type, className, href, text, icon, onClick, target}) {

    let typeClasses = ''
    const imageWidth = 100
    const imageHeight = 100

    const [width] = useWindowDimensions()

    // if (type === 1) { return typeClasses = ' main'}
    // if (type === 2) { return typeClasses = ' white'}
    // if (type === 3) { return typeClasses = ' secondary'}
    // if (type === 4) { return typeClasses = ' secondary white'}

    type === 1 && (typeClasses = ' main ')
    type === 2 && (typeClasses = ' white ')
    type === 3 && (typeClasses = ' secondary ')
    type === 4 && (typeClasses = ' secondary white ')

    if (href) {
        return ( 
            <Link 
                href={href} 
                target={target}
                className={"button mrm my cb-mid " + typeClasses + className} 
            >
                {text}
                { icon && <Image src={icon} width={imageWidth} height={imageHeight} alt={''}/> }
            </Link> 
        )
    }
    if (!href) {
        return ( 
            <div 
                className={"button mrm cb-mid " + typeClasses + className + (width > 800 ? ' mtm ' : ' mt mbs h-fit')} 
                onClick={onClick}
            >
                {text}
                { icon && <Image src={icon} width={imageWidth} height={imageHeight} alt={''}/> }
            </div> 
        )
    } 
}

export default Button