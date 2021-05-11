import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({

    root: {
      flexGrow: 1,
      overflow: 'hidden',
      padding: theme.spacing(0, 3, 0, 0),
      
    
      
    },
    sendComment: {
        padding:'3px',
        marginLeft:'120Px',
        fontSize:'5px',
        border:'none'
    },
    input: {
        // border: '1px solid #c5a880',
        borderRadius:'5px',
      },
    paper: {
      maxWidth: 600,
      margin: `${theme.spacing(1)}px auto`,
      padding: theme.spacing(2),
      
    },
    text: {
      fontSize: theme.typography.pxToRem(10),
      lineHeight:'1',
    },
    ///////
    // root: {
    //   width: '100%',
    // },
    heading: {
      fontSize: theme.typography.pxToRem(10),
      fontWeight: theme.typography.fontWeightRegular,
      padding:'0 16px 0 0',
    },
    comments: {
  overflowY:'scroll',
  height: '100px',
  fontSize: theme.typography.pxToRem(8),
  position: 'absolute',
    },
    comments1:{
  backgroundColor:'white',
  position: 'relative',
      left: '84%',
  height:'100px',
  width:'30%',
  zIndex:'1',
    },
    comments2:{
        padding:'0',
        width:'240px',
    },
    commentIcon:{ 
    width:'15px',
    height:'15px',
    backgroundColor:'white',
    color:'black',
    fontSize:'10px',
    },
  }));

  