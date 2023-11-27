import delve from "dlv";
import { useRouter } from 'next/router'
import BlockManager from "@/components/shared/BlockManager";
import getDataDependencies from "@/components/utils/api";
import { redirectToHomepage, getData } from "@/components/utils/index";

const Universals = ({ pageData }) => {
    // const router = useRouter();
    // const index = router.query;
    console.log(pageData, "PAGGEE")
  const blocks = delve(pageData, "blocks");
  // console.log("BLOCKS", blocks)
  return <BlockManager blocks={blocks} />;
};


// function getCurrentURL () {

//     // if (window) {
//     //     const {
//     //         host, hostname, href, origin, pathname, port, protocol, search
//     //       } = window.location
//     //     console.log(host, hostname, href, origin, pathname, port, protocol, search)
//     // }
//   return window.location.href
// }

// Example


export async function getServerSideProps(context) {

//   const slug  = delve(context.query, "slug")

  // /main-page
  try {

    const res = await fetch(`${process.env.API_LINK}/api/news/${context.query.id}/?populate=deep`);
    const json = await res.json();
    // console.log(json, "NEWS RESP");
    console.log(context.query)
    // console.log('json', json.data[0].attributes.blocks.images)

    // if (!json.length) {
    //   return redirectToHomepage();
    // }

    const pageData = await getDataDependencies(delve(json.data, 'attributes'));
    // console.log('pageData', pageData);
    return {
      props: { pageData },
    };
  } catch (error) {
      // return error;
    // console.log(error)
    // return null\
    // console.log(error)
    return {
      props: { error }
    };
  }
}

export default Universals;