import styled from "styled-components";
import Item from "../../components/board/Item";
import { useSelector } from "react-redux";

export default function Board() {
  const items = useSelector((state) => state.list.value);
  return (
  <Wrapper>
    <BoardBox>
    <Title>빵 보관함</Title>
    <BreadList>
    {items.map((item) => (
        <Item key={item.id} date={item.date} />
      ))}
      </BreadList>
    </BoardBox>
  </Wrapper>
  )
}

const Wrapper = styled.div`
position: relative;
margin: 0 auto;
width: 100vw;
height: 90vh;
min-height: 90vh;
display: flex;
flex-direction: column;
max-width: 390px;
align-items: center;
justify-content: center;
text-align: center;
background-color: ${({ theme }) => theme.colors.marin};
`

const Title = styled.div`
margin-top: 30px;
font-size: 24px;
font-weight: 300;
color: ${({ theme }) => theme.colors.marin};
`

const BoardBox = styled.div`
width: 80%;
max-height: 80%;
background-color: ${({ theme }) => theme.colors.white};
border: 1px solid  ${({ theme }) => theme.colors.black};;
border-radius: 15px;
`

const BreadList = styled.div`
padding: 30px;
width: 80%;
height: 70%;
display: grid;
grid-template-columns: repeat(1, 1fr); // 1열로 내용을 배치
grid-gap: 10px; // 항목 간의 간격 설정
overflow-y: auto; // 내용이 초과할 경우 세로 스크롤 활성화
`