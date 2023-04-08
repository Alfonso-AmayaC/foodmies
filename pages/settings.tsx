import Layout from "../components/layout";
import NotFound from "../components/notFound";

export default function Settings() {
    return (
        <Layout path={'settings'}>
            <NotFound buttonText="Back" messageText="Not yet implemented" route="pantry"/>
        </Layout>
    )
}