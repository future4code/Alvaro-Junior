import React from 'react'
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons'
import { PostCardContainer, PostContainer, UserContainer, UserName, VotesContainer, VotesCounter } from './styles'

const PostCard = (props) => {
  return (
    <PostCardContainer>
      <VotesContainer>
        <ArrowDropUp />
        <VotesCounter>{props.votesCount}</VotesCounter>
        <ArrowDropDown />
      </VotesContainer>
      <div>
        <UserContainer>
          <UserName>{props.username}</UserName>
        </UserContainer>
        <PostContainer>
          <h3>{props.title}</h3>
          <p>{props.text}</p>
        </PostContainer>
      </div>
    </PostCardContainer>
  )
}

export default PostCard