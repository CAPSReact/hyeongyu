import { useState } from "react"
import { Wrapper, Title, Introduce, InputBox, Label, Input, Button, Select } from "../../styles/Style"

export default function Signup() {
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

    return <Wrapper>
       <Title>회원가입</Title>
       <Introduce>반갑습니다.</Introduce>
       <InputBox top="67px">
       <Label>ID</Label>
        <Input type="text" placeholder="id" value={id} onChange={handleIdChange}/>
       </InputBox>
       <InputBox top="25px">
        <Label>PW</Label>
        <Input type="text" placeholder="password" value={pw} onChange={handlePwChange}/>
        </InputBox>
        <InputBox top="25px">
        <Label>회원유형</Label>
        <Select>
            <option>회장</option>
            <option>부회장</option>
            <option>집행부</option>
            <option>부원</option>
        </Select>
        </InputBox>
        <Button>가입(Signup)</Button>
    </Wrapper>
        
}

