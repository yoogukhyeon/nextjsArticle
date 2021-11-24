import Layout from "../../../components/Layout";
import ArticleList from "../../../components/articles/articlesList";
export default function GeneralArticles(){
        return(
                <Layout>
                   <div className="container">
                        <ArticleList title="일반게시판" category="general" back="GeneralArticles" />
                   </div>  
                </Layout>
        )
}