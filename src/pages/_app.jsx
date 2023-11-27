import '@/styles/App.sass'

import Layout from '@/components/layouts/Layout'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
