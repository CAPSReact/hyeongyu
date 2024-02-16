import { Canvas, useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { Wrapper, Box, InGameButtonStyle } from "../../styles/Style";
import { OutHouse } from "../../components/3d/OutHouse";
import { useNavigate } from "react-router-dom";

export default function House() {
  const navigate = useNavigate();
  return (
    <>
      <Wrapper>
        <Box>
          <Canvas camera={{ position: [80, 5, -8] }}>
            <OrbitControls />
            <axesHelper args={[200, 200, 200]} />
            <ambientLight intensity={3} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <group rotation-y={-Math.PI / 2}>
              <OutHouse /> // 3d 컴포넌트
            </group>
          </Canvas>
          <InGameButtonStyle onClick={() => {
            navigate("/inside");
   }}>입장하기</InGameButtonStyle>

        </Box>
      </Wrapper>
    </>
  );
}