import Layout from "../components/Layout";
import NotFound from "../components/NotFound";

export default function Settings() {
    return (
        <Layout path={'settings'}>
            <NotFound buttonText="Back" messageText="Not yet implemented" route="pantry"/>
        </Layout>
    )
}