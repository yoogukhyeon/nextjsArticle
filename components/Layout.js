import { useAtom } from 'jotai'
import Link from 'next/link'
import authAtom from '../store/authAtom'

export default function Layout({children}){
    const [auth , setAuth ] = useAtom(authAtom);

    return(
        <div className="flex flex-col">
            <header className="container flex flex-row justify-between py-2 -mx-2">
                <Link href="/">
                    <a className="btn btn-link -ml-4">Codelab Community</a>
                </Link>
                <div className="flex flex-row -mr-4">
                    <Link href="#">
                        <a className="btn btn-link">홈</a>                    
                    </Link>
                    <Link href="/articles/general/GeneralArticles">
                        <a className="btn btn-link">일반 게시판</a>                    
                    </Link>
                    <Link href="/articles/ask/AskArticles">
                        <a className="btn btn-link">질문 게시판</a>                    
                    </Link>
                    {!auth.loaded ? (
                        <>로딩중...</>
                    ) : (
                        <>
                                { auth.loaded && auth.user ? (
                                    <Link href="/me">
                                    <a className="btn btn-link">내 정보</a>                    
                                    </Link>
                                ) : (
                                    <Link href="/auth/sign-in">
                                        <a className="btn btn-link">로그인</a>                    
                                    </Link>
                                )}
                        </>
                    ) }
                

                  

                </div>
            </header>
            <main className="flex-1">
                {children}
            </main>
        </div>
    )
}