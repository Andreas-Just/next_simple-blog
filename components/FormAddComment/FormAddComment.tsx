import Router from 'next/router';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as api from '../../helpers/api';
import * as store from '../../store/posts';
import FormButton from '../FormButton';
import FormTextarea from '../FormTextarea';
import { FormComment } from './FormAddCommentStyle'

interface Props {
  postId: number;
}

const FormAddComment = ({ postId }: Props): JSX.Element => {
  const [commentBody, setCommentBody] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!commentBody.trim()) {
      return;
    }

    api.sendComment(postId, commentBody)
      .then(() => api.fetchPosts())
      .then((posts: Post[]) => dispatch(store.setPosts(posts)))
      .catch(err => console.error(err))
      .finally(() => {
        setCommentBody('');
        Router.push(`/posts/${postId}`)
      });
  }

  return (
    <FormComment onSubmit={handleSubmit}>
      <FormTextarea
        name="body"
        id="commentBody"
        placeholder="Comment it there..."
        value={commentBody}
        onChange={setCommentBody}
      />
      <FormButton
        type="submit"
        name="Send comment"
        id="send-comment"
        disabled={!commentBody}
        onClick={handleSubmit}
      />
    </FormComment>
  );
}

export default FormAddComment;
