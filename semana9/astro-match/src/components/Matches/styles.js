import styled from 'styled-components'

export const MainContainer = styled.div`
padding: 10px 20px;
height: calc(100vh - 170px);
overflow: auto;
`
export const MatchContainer = styled.div`
height: 80px;
width: 100%;
& :hover{
  background-color: lightgray;
}
`
export const ProfileContainer = styled.div`
display: flex;
align-items: center;
padding: 10px;
`
export const ButtonContainer = styled.div`
text-align: center;
margin: 15px;
`