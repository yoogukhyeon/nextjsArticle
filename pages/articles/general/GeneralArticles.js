import Layout from "../../../components/Layout";
import ArticleList from "../../../components/articles/articlesList";
import { fetcher } from "../../../hooks/useFetch";
import { SWRConfig } from "swr";
export default function GeneralArticles({fallback}){
        return(
             <SWRConfig value={{fallback}}>
                <Layout>
                   <div className="container">
                        <ArticleList title="일반게시판" category="general" back="GeneralArticles" />
                   </div>  
                </Layout>
             </SWRConfig> 
        )
}

export const getServerSideProps = async () => {
        const url = `${process.env.API_HOST}/articles?category=general`;
        const data = await fetcher(url)
        return {
            props : {
                fallback : {
                    [url] : data
                }
            }
            
        }
    
    }