//모든 page 에서 하는공통 설정들 여기서 진행

import { ApolloClient ,InMemoryCache , ApolloProvider} from "@apollo/client"

//import '../styles/globals.css'
export default function App({ Component }) {

      //GraphQL Setting 
      const client = new ApolloClient({
        uri: "http://backend-example.codebootcamp.co.kr/graphql",
      //   uri: "http://backend-practice.codebootcamp.co.kr/graphql",   //portfolio 용
        cache: new InMemoryCache() //컴퓨터의 메모리에다가 backend에서 받아온 데이터 임시로 저장해 놓기 => 나중에 더 자세히 알아보기
      })


      return (
        <div>
                <div>==== 여기는 _app.js 컴포넌트 시작부분 입니다. =====</div>
                <ApolloProvider client={client}>
                      {/* <Component  {...pageProps} />  */}
                      <Component  /> 
                </ApolloProvider>
                <div>==== 여기는 _app.js 컴포넌트 마지막부분 입니다. =====</div>
         </div>
      )
}
