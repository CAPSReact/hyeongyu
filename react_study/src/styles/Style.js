import styled from "styled-components";

export const Wrapper = styled.div`
position: relative;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    min-height: 99vh;
    display: flex;
    flex-direction: column;
    max-width: 390px;
    background-color: #f9faff;
    align-items: center;
    text-align: center;
`
/**
 align-items: 수평 정렬
 justidy-contents : 수직 정렬
 text-align: 글자만 정렬
 */

export const Title = styled.span`
font-size: 25px;
color: ${({theme}) => theme.colors.darkGray};
margin-top: 132px;
`

export const Introduce = styled.span`
font-size: 15px;
color: ${({theme}) => theme.colors.darkGray};
margin-top: 10px;
`

// display: inline, block
export const InputBox = styled.div`
margin-top: ${(props) => props.top};
text-align: left;
width: 80%;
`

export const Label = styled.label`
font-size: 14px;
color: ${({theme}) => theme.colors.darkGray};
margin-left: 8px;
`

export const Input = styled.input`
width: 100%;
height: 46px;
font-size: 15px;
border: 1px solid;
border-radius: 8px;
color: ${({theme}) => theme.colors.darkGray};
`

export const Button = styled.button`
width: 50%;
padding: 15px;
font-size:13px;
background-color: ${({theme}) => theme.colors.marin};
color: ${({theme}) => theme.colors.white};
margin-top: 161px;
border-radius: 15px;
`
export const Select = styled.select`
	margin: 0;
	display: block;
	width: 100%;
  height: 46px;
	font-size: 15px;
	border: 1px solid;
	border-radius: 8px;
  color: ${({theme}) => theme.colors.black};
`;

export const Box = styled.div`
  margin-top: 200px;
  width: 100%;
  max-width: 390px;
  height: 100vh;
`;

/* 3d pages */
export const InGameButtonStyle = styled.div`
  position: absolute;
  width: 50%;
  text-align: center;
  padding: 10px 0;
  background-color: ${({ theme }) => theme.colors.marin};
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  border-radius: 10px;
  bottom: 140px;
  left: 0;
  right: 0;
  margin: 0 auto;
  cursor: pointer;
`;