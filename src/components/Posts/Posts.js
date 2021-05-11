import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({currentId, setCurrentId ,setFormVisibility}) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

const reversedposts = posts.map(post => post).reverse();

  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={2} >
        {reversedposts.map((post) => (
          <Grid key={post._id} item xs={12} sm={4} md={3}>
            <Post  post={post} setCurrentId={setCurrentId}  setFormVisibility={setFormVisibility}/>
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;