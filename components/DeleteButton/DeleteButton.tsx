import Router from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Delete, TrashImg } from './DeleteButtonStyle';
import * as api from '../../helpers/api';
import * as store from '../../store/posts';

interface Props {
  postId: number;
  path: string;
  redirectUrl?: string;
}

const DeleteButton = ({ postId, path }: Props): JSX.Element => {
  const dispatch = useDispatch();
  const deletePost = (postId: number) => {
    api.removePost(postId)
      .then(() => api.fetchPosts())
      .then((posts: Post[]) => dispatch(store.setPosts(posts)))
      .then(() => Router.push('/posts'))
      .catch(err => console.error(err))
  }

  return (
    <Delete onClick={() => deletePost(postId)}>
      <TrashImg src={path} alt="delete" />
    </Delete>
  )
}

export default DeleteButton;
