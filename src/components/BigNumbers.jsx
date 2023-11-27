import React from 'react'
import useWindowDimensions from './hooks/useWindowDimensions'


const BigNumbers = (props) => {

    const {firstDescription, firstValue, secondDescription, secondValue, thirdDescription, thirdValue} = props

    const [width, height] = useWindowDimensions();



    const params = [
        {
            title: '111',
            description: 'Lorem ipsum lorem Lorem ipsum lorem ipsum'
        },
        {
            title: '222',
            description: 'Lorem ipsum lorem Lorem ipsum lorem ipsum'
        },
        {
            title: '333',
            description: 'Lorem ipsum lorem Lorem ipsum lorem ipsum'
        }
    ]

  return (
	<div className={'BigNumbers flex justify-between items-center w-full h-full' + (width > 800 ? ' flex-row' : ' flex-col')}>
		{/* <img src="images/PC_Green.jpg" alt="" /> */}
		{/* {params?.map((item, i) => {
			return ( */}
        <div className={"stat cd4 cm4 stat-0 flex flex-col relative" + (width > 800 ? '' : ' mb')}>
            <h2 className='w-half mb0'>{firstValue}</h2>
            <p className={(width > 800 ? 'w-half' : 'w-full')}>{firstDescription}</p>
        </div>
        <div className={"stat cd4 cm4 stat-1 flex flex-col relative" + (width > 800 ? '' : ' mb')}>
            <h2 className='w-half mb0'>{secondValue}</h2>
            <p className={(width > 800 ? 'w-half' : 'w-full')}>{secondDescription}</p>
        </div>
        <div className={"stat cd4 cm4 stat-2 flex flex-col relative" + (width > 800 ? '' : ' mb')}>
            <h2 className='w-half mb0'>{thirdValue}</h2>
            <p className={(width > 800 ? 'w-half' : 'w-full')}>{thirdDescription}</p>
        </div>
			{/* )
		})} */}
	</div>
  )
}

export default BigNumbers