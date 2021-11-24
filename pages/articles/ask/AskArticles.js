import ArticleList from "../../../components/articles/articlesList";
import Layout from "../../../components/Layout";
import { fetcher } from "../../../hooks/useFetch";
import { SWRConfig } from "swr";


export default function AskArticles({page , fallback}){
    return(
        <SWRConfig value={{fallback}}>
            <Layout>
                <ArticleList title="Q&A 게시판" category="ask" back="AskArticles" page={page} />
            </Layout>
        </SWRConfig>
    )   
}


export const getServerSideProps = async ({query}) => {
    const page = query.page || 1
    const url = `${process.env.API_HOST}/articles?category=ask&page=${page}`;
    const data = await fetcher(url)
    return {
        props : {
            page,
            fallback : {
                [url] : data
            }
        }
        
    }

}