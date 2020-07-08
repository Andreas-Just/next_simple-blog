import Router from 'next/router';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as api from '../../helpers/api';
import { setPosts } from '../../store/posts';
import FormButton from '../FormButton';
import FormInput from '../FormInput';
import FormTextarea from '../FormTextarea';
import { FormPost } from './FormAddPostStyle';

const FormAddPost = (): JSX.Element => {
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!postTitle.trim() && !postBody.trim()) {
      return;
    }

    api.sendPost(postTitle, postBody)
      .then(() => api.fetchPosts())
      .then((posts: Post[]) => dispatch(setPosts(posts)))
      .catch(err => console.error(err))
      .then(() => {
        setPostTitle('');
        setPostBody('');
      })
      .finally(() => Router.push('/posts'));
  }

  return (
    <FormPost onSubmit={handleSubmit}>
      <FormInput
        type="text"
        name="title"
        id="postTitle"
        placeholder="Post Title"
        value={postTitle}
        onChange={setPostTitle}
      />
      <FormTextarea
        name="body"
        id="postBody"
        placeholder="Your Post"
        value={postBody}
        onChange={setPostBody}
      />
      <FormButton
        type="submit"
        name="Send post"
        id="send-post"
        disabled={!postTitle && !postBody}
        onClick={handleSubmit}
      />
    </FormPost>
  );
}

export default FormAddPost;
