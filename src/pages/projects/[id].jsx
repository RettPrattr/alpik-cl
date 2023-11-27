import { useRouter } from 'next/router'
import { useEffect } from 'react';
import findImageUrl from '@/components/utils/findImageUrl'
import findValue from '@/components/utils/findValue'
import { casesUrl } from '@/components/utils/varUrls'
import useWindowDimensions from '@/components/hooks/useWindowDimensions'
import TabsFilter from '@/components/TabsFilter';
import PromoCover from '@/components/PromoCover';
import SliderBlock from '@/components/alpik/SliderBlock';
import TextCards from '@/components/TextCards';
import Text from '@/components/Text';
import StoryA from '@/components/alpik/StoryA';
import Form from '@/components/atoms/Form';

export async function getServerSideProps (context) {
    const projectsRes = await fetch(`${process.env.API_LINK}/api/projects/?populate=deep`)

    return {
        props: {
            // casesData: await casesRes.json(), 
            projectsData: await projectsRes.json(), 
        }
    }
}

const Project = (props) => {


    const [width] = useWindowDimensions()

    // console.log(props, "DATA PROPS")


    let projectId;
    let projectIdReal = null;
    // findValue(props, 'url')
    const router = useRouter();
    const data = router.query;



    const projectsData = props.projectsData
    var index = -1;
    const slug = data.id
    var filteredObj = projectsData.data?.find(function(item, i){
        // console.log(item)
        console.log(slug, item.attributes.slug, "SLUG")
      if(item.attributes.slug === slug){
        projectIdReal = item.id
        projectId = i
        return item
      }
    });

    console.log(filteredObj, "OBJ")

    console.log(projectsData?.data[0].attributes, "DATA PROPS")


    if (width) {
        return (
            <>
                <Text 
                    type={2}
                    {...filteredObj.attributes}
                />
                <SliderBlock 
                    {...filteredObj.attributes.images}
                />
                <TextCards 
                    type={2}
                    {...filteredObj.attributes}
                />
                <StoryA 
                    type={3}
                    {...filteredObj.attributes}
                />
                {/* <Form 
                    title={'Оставить заявку'}
                /> */}
            </>
        )
    }
}
export default Project;