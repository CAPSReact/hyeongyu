import { Canvas, useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { InHouse } from "../../components/3d/InHouse";
import { Wrapper, Box, InGameButtonStyle } from "../../styles/Style";
import Loading from "../../components/Loading";

import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../items/itemsSlice";
import {addItem} from "../../items/listSlice";


export default function InSide() {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch(); // dispatch를 선언한다.
  const showOrigin = useSelector(state => state.bread.value);

  const handleOrigin = () => {
    setLoading(true);

    setTimeout(() => {
      // dispatch로 store의 상태를 변경한다.
      dispatch(toggle());
      dispatch(addItem());
      setLoading(false);
    }, 2000); // 2초 후에 실행
  };

  

  return (
    <>
      <Wrapper>
      {loading && <Loading loadingText={"빵을 생성하고 있습니다..."}/>}
        <Box>
          <Canvas camera={{ position: [10, 200, -400] }}>
            <OrbitControls />
            <axesHelper args={[200, 200, 200]} />
            <ambientLight intensity={3} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <group rotation-y={-Math.PI / 2}>
              <InHouse showOrigin={showOrigin}/>
            </group>
          </Canvas>
          <InGameButtonStyle onClick={handleOrigin}>식빵 제작하기</InGameButtonStyle>
        </Box>
      </Wrapper>
    </>
  );
}