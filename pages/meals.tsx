import Layout from "../components/Layout"
import Head from "next/head"
import NotFound from "../components/NotFound"


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