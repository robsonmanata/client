import React, { useState, useEffect }from 'react';
import useStyles from './Styles';
import { TextField,Button, Typography, Paper , Grid, Accordion, AccordionSummary, AccordionDetails, Avatar } from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import { CommentPost } from '../../actions/posts';
import { useDispatch} from 'react-redux';


export default function SimpleAccordion({setCurrentId ,post}) {
  const user = JSON.parse(localStorage.getItem('profile'));
  const [postData, setPostData] = useState({ title: '', message: '', tags: '', selectedFile: '',profilepic:'',Comments:{comment: '',commenterpic:''} });
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
   setCurrentId(0);
    setPostData({ title: '', message: '', tags: '', selectedFile: '',profilepic:'',Comments:{comment:'',commenterpic:''} });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(CommentPost(post._id, { ...postData}));
   clear();
  };
  
  
 
  const comments = post.Comments
  const reversedcomments = comments?.map(comment => comment).reverse();
 

  return (
    <div className={classes.root}>
      <Accordion  elevation={0}>
        <AccordionSummary 
        className={classes.comments2 }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{reversedcomments?.length} comments</Typography>
          {reversedcomments?.filter((reversedcomment, index) => index < 3).map((reversedcomment) => ( 
          <AvatarGroup  max={4}>
          <Avatar className={classes.commentIcon} alt="A" src={reversedcomment.commenterpic} />
        </AvatarGroup>
         ))}
         <Avatar className={classes.commentIcon}>{reversedcomments?.length >3 ? '+' + (reversedcomments.length -3) : ''}</Avatar>
        </AccordionSummary>
        {user ? 
        <AccordionDetails className={classes.comments2} >
        <div className={classes.comments1}></div>
          <Typography className={classes.comments}>
          <div className={classes.root}>
          <form autoComplete="off" noValidate  onSubmit={handleSubmit}>
          <TextField className={classes.input} name="comment" variant="outlined" label="comment" value={postData.Comments?.comment} fullWidth  onChange={(e) => setPostData({ ...postData, Comments:{comment:e.target.value,commenterpic:user.result.profilepic ||user?.result.imageUrl}  })} />
          <Button className= {classes.sendComment}  type="submit">comment</Button>
          </form>
          {/* !comments.length ? <CircularProgress /> : ( */}
          {reversedcomments?.map((reversedcomment) => (  
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={1}>
          <Grid item>
          <Avatar className={classes.commentIcon} alt="Cindy Baker" src={reversedcomment.commenterpic} />
          </Grid>
          <Grid item xs>
            <Typography className={classes.text}>{reversedcomment.comment} </Typography>
          </Grid>
        </Grid>
      </Paper>
      
          ))}
      </div>
          </Typography>
        </AccordionDetails>
        :''
        }
      </Accordion>
      
    </div>
  );
}

