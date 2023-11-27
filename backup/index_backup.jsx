import React from 'react';
import Story from '@/components/Story'
import About from '@/components/About'
import ItemsCards from '@/components/ItemsCards'
import BigText from '@/components/BigText'
import SEO from '@/components/layouts/SEO'
import Menu from '@/components/Menu';
import FixedButton from '@/components/atoms/FixedButton'
import BrandFooter from '@/components/BrandFooter'
import Video from '@/components/Video'

function App() {

  return (
    <>
      {/* <SEO/> */}
      <Menu/>
      <BigText type={1}/>
      <Video />
      {/* <video classname='video' loop autoPlay playsInline muted width="100%" height="auto" src="/videos/showreel.mp4" /> */}
      <Story type={6}/>
      <About type={5}/>
      <ItemsCards type={1} />
      <About type={4}/>
      <BrandFooter type={3}/>
      <FixedButton type={1}/>
    </>
  );
}

export default App;
