import React, { useState, useMemo, useEffect } from 'react'
// import Project from '../pages/projects/Project'
import axios from 'axios';
import { values } from 'lodash'
import Image from 'next/image';



const TabsAbout = ({dataAboutImg}) => {

	const tab = dataAboutImg.data.attributes.Tabs
	const tabs = []


	const [actualContent, setActualContent] = useState(tab)
	const [activeTabId, setActiveTab] = useState(dataAboutImg.data.attributes.Tabs[0].CategoryName);

	dataAboutImg.data.attributes.Tabs.map((t) => {
		tabs.push(t.CategoryName)
		return tabs
	})

	console.log(tab, tabs)

	const handleClick = (el) => {
		setActiveTab(el)
		let tempFilter = tab.filter(f => f.CategoryName === el)
		setActualContent(tempFilter)
	}

  return (
    <div className='flex flex-col tabs'>
		<div className='flex-row flex tabs-nav '>
			{tabs?.map((item) => (
                <li key={item} className='tabs-item' >
                    <a className={`font-1-bold tabs-button ${activeTabId !== null && (activeTabId === item) ? 'active' : ''}`} onClick={() => handleClick(item)}>
                        {item}
                    </a>
                </li>
            ))}
		</div>
		<div className={"flex flex-row-" + (activeTabId !== dataAboutImg.data.attributes.Tabs[0].CategoryName ? 'reverse tabs-content-reverse' : ' tabs-content')}>
			<div className="photo50">
				<Image
					src={'http://localhost:1337' + actualContent[0].Photos.data[0].attributes.formats.medium.url}
					width={700}
					height={400}
					quality={100}
					alt={actualContent[0].CategoryName}>
				</Image>
			</div>
			<div className="text50 flex">
				<p className='font-1'>{actualContent[0].TextOfTab}</p>
			</div>
		</div>

    </div>
  )
}

export default TabsAbout


