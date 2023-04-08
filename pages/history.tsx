import Head from "next/head";
import Layout from "../components/Layout";
import NotFound from "../components/NotFound";

export default function History() {
    return (
        <Layout path={'history'}>
            <Head>
                <title>Foodmies - Historico de precios</title>
            </Head>
            <NotFound messageText={"Oh vaya...me temo que esta página no está lista"} buttonText={"Regresar a mi despensa"} route={"pantry"}/>
        </Layout>
    );
}