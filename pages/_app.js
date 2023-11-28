import '../styles/globals.css';
import Layout from "../components/Layout";
import Transition from "../components/Transition";
import {useRouter} from "next/router";
import {AnimatePresence, motion} from "framer-motion";
import {DevSupport} from "@react-buddy/ide-toolbox-next";
import {ComponentPreviews, useInitial} from "../dev";

function MyApp({Component, pageProps}) {
    const router = useRouter()
    return (
        <Layout>
            <AnimatePresence mode="wait">
                <motion.div key={router.route} className='h-full'>
                    <Transition />
                    <DevSupport ComponentPreviews={ComponentPreviews}
                                useInitialHook={useInitial}>
                        <Component {...pageProps} />
                    </DevSupport>
                </motion.div>
            </AnimatePresence>
        </Layout>
    );
}

export default MyApp;
