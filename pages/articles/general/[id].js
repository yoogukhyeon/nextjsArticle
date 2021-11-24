import { SWRConfig } from "swr";
import ArticleView from "../../../components/articles/ArticleView";
import Layout from "../../../components/Layout";
import { fetcher } from "../../../hooks/useFetch";
import isbot from "isbot";
export default function ViewPage({id , fallback}){
    console.log(fallback)
    return <SWRConfig value={{fallback}}> 
        <Layout>
            <ArticleView id={id} />
        </Layout>
    </SWRConfig>
}


export const getServerSideProps = async ({ req ,params}) => {
    const id = params.id
    const url = `${process.env.API_HOST}/articles/${id}`
  
  
    const article = isbot( req.headers['user-agent']) ?  await fetcher(url) : null;
  
    return {
        props : {
            id,
            fallback : {
                [url] : article
            }
        }
    }
}