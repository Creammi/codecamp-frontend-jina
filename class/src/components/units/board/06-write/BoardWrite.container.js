import { useMutation } from "@apollo/client"
import { useState } from 'react'
import BoardWriteUI from "./BoardWrite.presenter"  //중괄호가 없는경우는 한개 밖에 없고 export default 로 내보내는 경우 
import {나의그래프큐엘셋팅} from './BoardWrite.queries' //export는 골라서 가져오기 가능


// import * as S from './BoardWrite.styles'   //export 한방에 다 가져오기
// S.BlueButton     //export 한방에 다 가져오기
// S.RedInput         //export 한방에 다 가져오기


export default function BoardWrite(){
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

        return(
          <div>

          <div>########### 여기는 컨테이너 입니다. #########</div>
          <BoardWriteUI aaa={onClickSubmit} 
                        bbb={onChangeWriter}
                        ccc={onChangeTitle}
                        ddd={onChangeContents}
          />
          <div>########### 여기는 컨테이너 입니다. #########</div>
          </div>

        )
}