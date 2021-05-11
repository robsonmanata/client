import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography,Avatar } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import { useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import SimpleAccordion from '../../Comments/Comments';


import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId, setFormVisibility }) => {
  
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  const posts = useSelector((state) => state.posts);
  console.log(post)
  const upload = () => {
    setFormVisibility((prevformVisibility) => !prevformVisibility);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
     let profilepic;
  
  if(user?.result.googleId && user?.result.googleId === post.creator){
     profilepic = user?.result.imageUrl;
  }
   posts.map((post) => (post._id === user?.result._id ? post?.profilepic : user?.profilepic))
   
  const Likes = () => {
    
    if (post.likes) {
      
      return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
        ? (
          <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
  };
    
   
  
  return (
    <Card className={classes.card}>
     <div className={classes.overlay}>
     <Avatar className={classes.purple} alt={post?.name} src={post?.profilepic || profilepic}></Avatar>
        <Typography className={classes.name}  variant="h6">{post.name}</Typography>
        
      </div>
      {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
        
      <div className={classes.overlay2}>
      
        <Button onClick={() => {setCurrentId(post._id);upload();scrollToTop()}} style={{ color: 'default' }} size="small">
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      )}
      <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
     
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
      <CardContent  className={classes.message}>
        <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
        <SimpleAccordion setCurrentId={setCurrentId} post={post}></SimpleAccordion>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" disabled={!user?.result} onClick={() => dispatch(likePost(post._id))}>
          <Likes />
        </Button>
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator)  && (
        <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize="small" /> Delete
        </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;