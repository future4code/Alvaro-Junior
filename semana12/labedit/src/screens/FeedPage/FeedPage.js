import React from 'react'
import { useHistory } from 'react-router-dom'
import { useRequestData } from '../../hooks/useRequestData'
import {base_url} from '../../constants/apiConstants'
import PostCard from '../../components/PostCard'

const FeedPage = () => {
  const history = useHistory()

  const posts = useRequestData(`${base_url}/posts`, {}).posts

  return(
  <div>
    {posts && posts.map(post => {
      return <PostCard 
        key={post.id}
        username={post.username}
        title={post.title}
        text={post.text}
        commentsCount={post.commentsCount}
        votesCount={post.votesCount}
      />
    })}
  </div>
  )
}

export default FeedPage