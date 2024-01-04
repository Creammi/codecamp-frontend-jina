import { gql, useMutation } from "@apollo/client"
import { useState } from 'react'
const 나의그래프큐엘셋팅 = gql`
        mutation createProduct($seller: String ,  $createProductInput: $CreateProductInput!) {   #변수의 타입 적는 곳
             createProduct(seller: $seller , createProductInput: $createProductInput){ 
            _id
            number
            message
            }
        }
`
export default function GraphqlMutationPage() {
    const [writer ,setWriter] = useState()
    const [title ,setTitle] = useState()
    const [contents ,setContents] = useState()

    const [나의함수] = useMutation(나의그래프큐엘셋팅)
    const onClickSubmit = async () => {
        const result = await 나의함수({
            variables: {                       //variables 이게 $ 역할을 함. 
                writer: writer,
                title: title,
                contents: contents
            }
        })
        console.log (result)
    }
    const onChangeWriter = (event) => {
        setWriter(event.target.value)
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value)        
    }

    const onChangeContents = (event) => {
        setContents(event.target.value)        
    }

    return (
        <div>
                작성자: <input type="text" onChange={onChangeWriter} />
                제목: <input type="text" onChange={onChangeTitle} />
                내용: <input type="text" onChange={onChangeContents} />
                <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
        </div>
    )
}