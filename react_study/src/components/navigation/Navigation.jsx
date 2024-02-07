import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import InsideImage from "../../assets/images/navigation/Inside.svg";
import OutsideImage from "../../assets/images/navigation/Outside.svg";
import MyRecipeImage from "../../assets/images/navigation/Myrecipe.svg";
import ProfileImage from "../../assets/images/navigation/Profile.svg";

const Wrapper = styled.div`
  position: fixed;
  margin: 0 auto;
  width: 100%;
  bottom: 0;
  max-height: 80px;
  min-height: 1vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
`;

const NavigationBar = styled.div`
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  max-width: 390px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 30px 30px 0 0;
  display: grid;
  grid-template-columns: repeat(
    4,
    1fr
  ); /* 4개의 요소를 각각 같은 너비로 설정 */
`;
const BtnBox = styled.div`
  margin: auto;
  width: 60%;
  height: 80%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* 내부 글자 속성 */
  color: #000;
  text-align: center;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.5px;

  /* 포인터 */
  cursor: pointer;
`;

const InSideBtn = styled.div`
  width: 30px;
  height: 30px;
  background: url(${InsideImage});
  background-repeat: no-repeat;
`;
const OutSideBtn = styled.div`
  width: 30px;
  height: 30px;
  background: url(${OutsideImage});
  background-repeat: no-repeat;
`;
const BoardBtn = styled.div`
  width: 30px;
  height: 30px;
  background: url(${MyRecipeImage});
  background-repeat: no-repeat;
`;
const ProfileBtn = styled.div`
  width: 30px;
  height: 30px;
  background: url(${ProfileImage});
  background-repeat: no-repeat;
`;

export default function Navigation() {
    const navigate = useNavigate();
  
    const handleNavigate = () => {
      navigate("/home");
    };
  
    return (
      <Wrapper>
        <NavigationBar>
          <BtnBox>
            <OutSideBtn onClick={() => { navigate('/outside'); }}/>
            outside
          </BtnBox>
          <BtnBox>
            <InSideBtn onClick={() => { navigate('/inside'); }}/>
            inside
          </BtnBox>
          <BtnBox>
            <BoardBtn onClick={() => { navigate('/board'); }}/>
            board
          </BtnBox>
          <BtnBox>
            <ProfileBtn onClick={() => { navigate('/profile'); }}/>
            profile
          </BtnBox>
        </NavigationBar>
      </Wrapper>
    );
  }