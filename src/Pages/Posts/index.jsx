import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { QueryData } from '../../Api'
import stylles from './Posts.module.scss'

export const Posts = () => {
    const pag = [0, 1, 2, 3, 4, 5]
    const [searcheParams, setSearcheParams] = useSearchParams()
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const GetQuery = async () => {
            try {
                const response = await QueryData.get(`/posts?limit=10&skip=${searcheParams.get('page')}0`)
                setPosts(response.data.posts)
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    console.log(error.response?.data.errText, 'error');
                } else if (error instanceof Error) {
                    console.log(error.message);
                }
            }  
        }
        GetQuery()
    }, [searcheParams])

    return (
        <div className={stylles.page}>
            <div className="container">
                <div className={stylles.wrapper__page}>
                    <nav className={stylles.nav}>
                        <ul>
                            {pag.map((pageSkip, index) => (
                                <li onClick={() => setSearcheParams({ page: pageSkip })}
                                    key={index} className={stylles.page__link} >
                                    {pageSkip}
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className={stylles.posts}>
                        {posts.map((post) => (
                            <div className={stylles.post} key={post.id}>
                                <h3>POST {post.id}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
