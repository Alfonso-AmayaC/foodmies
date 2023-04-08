import Layout from "../components/layout"
import Head from "next/head"
import NotFound from "../components/notFound"


export default function Meals() {
    return (
        <Layout path={'meals'}>
            <Head>
                <title>Foodmies - Comidas planeadas</title>
            </Head>
            <NotFound messageText="Upss...todavía no la tenemos" buttonText="Regresar a mi despensa" route="pantry"/>
        </Layout>
    )
}