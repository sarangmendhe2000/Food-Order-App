import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    palette:{
        primary:{
            main: '#f6ba75ff',
        }, 

        warning:{
            main:'#81e7edff' , 
        },

        customGreen:{
            main:'#40a60aff',
            contrastText: '#ffffff',
        },
    },
}); 

export default theme ;