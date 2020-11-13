import styled from 'styled-components'

export const ProfileContainer = styled.div`
height: calc(100vh - 195px);
margin: 20px;
border-radius: 10px;
position: relative;
overflow: hidden;
`
export const MatchContainer = styled.div`
margin: 15px;
display: flex;
justify-content: space-around;
`
export const ProfileImage = styled.img`
max-width: 100%;
max-height: 100%;
position: absolute;
object-fit: scale-down;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`
export const BackgroundImgage = styled.img`
width: 100%;
height: 100%;
position: absolute;
filter: blur(15px);
`
export const ProfileDetails = styled.div`
position: absolute;
right: 0;
bottom: 10px;
border-radius: 20px 0 0 20px;
background: white;
opacity: 0.85;
width: 80%;
padding: 0 20px;
`