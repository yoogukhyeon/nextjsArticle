import Layout from "../../../components/Layout";
import ArticleList from "../../../components/articles/articlesList";
import { fetcher } from "../../../hooks/useFetch";
import { SWRConfig } from "swr";
export default function GeneralArticles({page , fallback}){
        return(
             <SWRConfig value={{page , fallback}}>
                <Layout>
                   <div className="container">
                        <ArticleList title="일반게시판" category="general" back="GeneralArticles" page={page} />
                   </div>  
                </Layout>
             </SWRConfig> 
        )
}

export const getServerSideProps = async ({query}) => {
        const page = query.page || 1
        const url = `${process.env.API_HOST}/articles?category=general&page=${page}`;
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