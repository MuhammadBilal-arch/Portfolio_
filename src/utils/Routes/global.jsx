

import { Layout } from '../../components/Layout'

export const GlobalRoute= ({component: RouteComponent}) => {
    return (
        <Layout>
            <RouteComponent />
        </Layout>
    )
}
