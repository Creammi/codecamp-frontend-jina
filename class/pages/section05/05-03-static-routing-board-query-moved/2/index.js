
import { gql, useQuery } from '@apollo/client'

const FETCH_BOARD = gql`
    query{
            fetchBoard(number:20996){
            number
            writer
            title
            contents
        }
    }
`
export default function StaticRoutingMovedPage() {
    const { data } = useQuery(FETCH_BOARD)

    console.log(data)
    return (
        <div>
                <div> 2번 게시글 이동이  완료 되었습니다.</div>
                {/* optional chaining */}
                <div> 작성자:   {data && data.fetchBoard.writer }</div> 
                <div> 제목:     {data?.fetchBoard.title }</div>
                <div> 내용:     {data ? data.fetchBoard.contents :"로딩중 입니다!!!" }</div>
        </div>
    )
} 