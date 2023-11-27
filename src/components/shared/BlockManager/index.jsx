import BrandFooter from '@/components/BrandFooter'
import ItemCards from '@/components/ItemsCards'
import Story from '@/components/Story'
import Video from '@/components/Video'
import FixedButton from '@/components/atoms/FixedButton'
import About from '@/components/About'
import BigText from '@/components/BigText'
import Header from '@/components/Header'
import Seo from '@/components/layouts/SEO'
import YaMap from '@/components/atoms/YaMap'
import Form from '@/components/atoms/Form'
import StoryA from '@/components/alpik/StoryA'
import ItemsCardsA from '@/components/alpik/ItemsCardsA'
import Text from '@/components/Text'
import TabsFilter from '@/components/TabsFilter'
import HeaderA from '@/components/alpik/HeaderA'
import BigNumbers from '@/components/BigNumbers'



const getBlockComponent = ({ __component, ...rest }, index) => {
  let Block;


  console.log("component", __component)

  switch (__component) {
    case 'blocks.about': Block = About; break;
    case 'blocks.brand-footer1': Block = BrandFooter; break;
    case 'blocks.items-cards': Block = ItemsCardsA; break;
    case 'blocks.big-text': Block = BigText; break;
    case 'blocks.big-numbers': Block = BigNumbers; break;
    case 'blocks.form': Block = Form; break;
    // case 'blocks.fixed-button': Block = FixedButton; break;
    case 'blocks.story': Block = StoryA; break;
    case 'blocks.map': Block = YaMap; break;
    case 'shared.seo': Block = Seo; break;
    case 'blocks.tabs': Block = TabsFilter; break;
    case 'blocks.text': Block = Text; break;
  }

  return Block ? <Block key={`index-${index}`} {...rest} /> : null;
};

const BlockManager = ({ blocks }) => {
  return <div>{blocks.map(getBlockComponent)}</div>;
};

BlockManager.defaultProps = {
  blocks: [],
};

export default BlockManager;