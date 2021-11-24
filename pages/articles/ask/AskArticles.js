import ArticleList from "../../../components/articles/articlesList";
import Layout from "../../../components/Layout";


export default function AskArticles(){
    return(
        <Layout>
            <ArticleList title="Q&A 게시판" category="ask" back="AskArticles" />
        </Layout>
    )
}