import { gql } from "@apollo/client"

export const 나의그래프큐엘셋팅 = gql`
        mutation createBoard($write: String ,  $title: String, $contents: String) {   #변수의 타입 적는 곳
                createBoard(write: $write , title: $title, contents: $contents){ 
            _id
            number
            message
            }
        }
`
