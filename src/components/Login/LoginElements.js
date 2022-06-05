import styled from "styled-components"
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 629px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  ${'' /* background: linear-gradient(
      108deg,
      rgba(1, 147, 86, 1) 0%,
      rgba(10, 201, 122, 1) 100%
  ); */}
  background: #bec7f8;
`

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 400px) {
      height: 80%;
  }
`
export const FormContent = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
      padding: 10px;
  }
`

export const Icon = styled(Link)`
  margin: 10px 5px ;
  padding-left: 20px;
  text-decoration: none;
  color: #010606;
  font-weight: 500;
  font-size: 18px;

  @media screen and (max-width: 480px) {
      margin-left: 16px;
      margin-top: 8px;
      font-size: 16px;
  }
`



export const Form = styled.form`
  background: #fff;
  max-height: 500px;
  height: auto;
  width: 150%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 20px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
      padding: 32px 32px;
  }
`

export const FormH1 = styled.h1`
  margin-top: 20px;
  margin-bottom: 40px;
  color: #010606;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #2643e9;
`

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: 1px solid;
  border-radius: 4px;
`

export const FormButton = styled.button`
  background: #010606;
  padding: 16px 0;
  border: none;
  border-radius: 50px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  width: 50%;
  

  &:hover {
      background: #2643e9;
      transition: 0.2s ease-in-out
  }

  @media screen and (max-width: 480px) {
      font-size: 16px;
  }
`

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: red;
  font-size: 14px;
`

