import BoardWrite from "../../../src/components/units/board/07-write/BoardWrite.container"

export default function GraphqlMutationPage(props) {
    // 한줄 일때는 괄호가 필요 없음
    return  (
        <div>
            <div>######################여기는 페이지 입니다 ####################</div>
            <BoardWrite qqq="철수"/>
            <div>######################여기는 페이지 입니다 ####################</div>
        </div>

    )

}