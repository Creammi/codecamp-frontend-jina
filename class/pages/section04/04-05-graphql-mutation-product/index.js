import { gql, useMutation } from "@apollo/client"

const CREATE_PRODUCT = gql`
        mutation createProduct($seller: String ,  $createProductInput: CreateProductInput!) {   #변수의 타입 적는 곳
             createProduct(seller: $seller , createProductInput: $createProductInput){ 
            _id
            number
            message
            }
        }
`
export default function GraphqlMutationPage() {


    const [createProduct] = useMutation(CREATE_PRODUCT)
    const onClickSubmit = async () => {
        const result = await createProduct({
            variables: {                       //variables 이게 $ 역할을 함. 
                seller: "훈이",
                createProductInput: {
                    name: "마우스",
                    detail: "비싼 마우스",
                    price: 3000
                }
            }
        })
        console.log (result)
    }
    return (
        <div>
                <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
        </div>
    )
}