import { Wrapper, Title, Introduce, InputBox, Label, Input, Button } from "../../styles/Style"
import { useState } from "react";

export default function Signin() {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    
    const handleIdChange = (event) => {
        setId(event.target.value);
        console.log(id);
    } 
    const handlePwChange = (event) => {
        setPw(event.target.value);
        console.log(pw);
    } 

  return (
    <Wrapper>
        <Title>로그인</Title>
        <Introduce>로그인 후 00일동안 저장됩니다.</Introduce>
        <InputBox top="67px">
        <Label>ID</Label>
        <Input type="text" placeholder="id" onChange={handleIdChange}/>
        </InputBox>
        <InputBox top="25px">
        <Label>PW</Label>
        <Input type="text" placeholder="pw" onChange={handlePwChange}/>
        </InputBox>
        <Button>로그인</Button>
    </Wrapper>
  )
}
