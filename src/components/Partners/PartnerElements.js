import styled from 'styled-components'

export const PartnerContainer = styled.div`
    background: #fff;
    height: 300px;
    width: 100%
`

export const PartnerContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px 0;
`
export const PartnerWrapper = styled.div`
    height: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin: 10px 20px;
    padding-top: 20px;
`

export const ImgWrap = styled.div`
  max-width: 200px;
  height: 100%;
  padding: 5px;
`

export const PartnerH1 = styled.h1`

text-align: center;
font-size: 16px;
color: #010606;
margin-bottom: 64px;
@media screen and (max-width: 768px){
  font-size: 14px;
}
@media screen and (max-width: 400px){
  font-size: 1.5rem;
}
`
export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0; 
`