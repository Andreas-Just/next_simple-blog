import React from 'react';
import FormAddComment from '../FormAddComment/FormAddComment';
import { Article, TextPost, HR, HeadingComments, TextComment } from './PostDetailStyle';
import { H2, H3 } from '../../pages';

interface Props {
  post: Post;
}

const PostDetail = ({ post }: Props): JSX.Element => {
  const { id, title, body, comments } = post;

  return (
    <Article>
      <H2>Edit Post or Add Comment</H2>
      <H3>{title}</H3>
      {body && (<TextPost>{body}</TextPost>)}
      <HR />
      {comments && comments.length > 0 && (
        <>
          <HeadingComments>Comments:</HeadingComments>
          <ul>
            {comments.map(({ id, body}) => (
              <li key={id}>
                <TextComment>💬 {body}</TextComment>
              </li>
            ))}
          </ul>
        </>
      )}
      <br/>
      <FormAddComment postId={id} />
    </Article>
  )
}

export default PostDetail;
