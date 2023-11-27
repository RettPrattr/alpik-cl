import React from 'react';
import SideBarPage from '@/components/SideBarPage'
import SEO from '@/components/layouts/SEO'
import Menu from '@/components/Menu'
import FixedButton from '@/components/atoms/FixedButton'
import useWindowDimensions from '@/components/hooks/useWindowDimensions'

function Case() {
  const [width] = useWindowDimensions()
  return (
    <>
      {/* <SEO/> */}
      {width < 800 && <Menu inCase={true} /> }
      {width < 800 && <div className="pyl"></div> }
      <FixedButton type={1}/>
      <SideBarPage type={1} />
    </>
  );
}

export default Case;