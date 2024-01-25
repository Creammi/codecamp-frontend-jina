
import { gql, useQuery } from '@apollo/client'
import {useRouter} from 'next/router'

const FETCH_BOARD = gql`
    query fetchBoard($number: Int) {
            fetchBoard(number:$number){
            number
            writer
            title
            contents
        }
    }
`
export default function StaticRoutingMovedPage() {
    const router = useRouter()
    console.log(router)

    const { data } = useQuery(FETCH_BOARD, {
        // variables: {number: 21035}
        variables: {number: Number(router.query.number)}
    })

    console.log(data)
    return (
        <div>
                <div>{router.query.number}번 게시글 이동이  완료 되었습니다.</div>
                {/* optional chaining */}
                <div> 작성자:   {data && data.fetchBoard?.writer }</div> 
                <div> 제목:     {data?.fetchBoard?.title }</div>
                <div> 내용:     {data ? data.fetchBoard?.contents :"로딩중 입니다!!!" }</div>
        </div>
    )
} 