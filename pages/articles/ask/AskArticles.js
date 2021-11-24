import ArticleList from "../../../components/articles/articlesList";
import Layout from "../../../components/Layout";
import { fetcher } from "../../../hooks/useFetch";
import { SWRConfig } from "swr";


export default function AskArticles({fallback}){
    return(
        <SWRConfig value={{fallback}}>
            <Layout>
                <ArticleList title="Q&A 게시판" category="ask" back="AskArticles" />
            </Layout>
        </SWRConfig>
    )   
}


export const getServerSideProps = async () => {
    const url = `${process.env.API_HOST}/articles?category=ask`;
    const data = await fetcher(url)
    return {
        props : {
            fallback : {
                [url] : data
            }
        }
        
    }

}