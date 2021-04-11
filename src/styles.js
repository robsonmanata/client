import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(()=>({

    appBar: {
        borderRadius: 15,
        margin: '20px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
         backgroundColor:'#f4f9f9',
        

      },
      heading: {
        color: 'black',
        fontstyle: 'italic',
        fontSize: '20px'
      },
      image: {
        marginLeft: '15px',
      },
}));