import { useMediaQuery, useTheme } from "@mui/material";

export const QuestionBoxStylesFunct = () =>  {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const QuestionBoxStyles = {
        marginRight: isSmallScreen ? '3px' : '15px', 
        fontSize: isSmallScreen ? '0.9rem' : '1rem', 
        fontFamily: 'Inter, sans-serif', 

    }

    return { QuestionBoxStyles };

}

export const LinkBoxStylesFunct = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const LinkBoxStyles = {
        marginLeft: isSmallScreen ? '3px' : 
        '15px', fontSize: isSmallScreen ? '0.9rem' : '1rem', 
        fontFamily: 'Inter, sans-serif',
    }

    return { LinkBoxStyles };
}

export const RedirectBoxStyles = {
    display:'flex', 
    justifyContent: 'center', 
    fontFamily: 'Inter, sans-serif', 
}

export const TextFieldTypography = { 
    fontFamily: 'Inter, sans-serif', 
    color:'#979899',
    fontSize: '0.9rem',
}

export const UcabLogoStyles = { 
    height: '85px', 
    width: '85px', 
    marginBottom:'16px'
}

export const ImageBoxStyles = { 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center',
    marginTop: '40px',
}

export const CheckBoxStyles = { 
    padding:"0 5px 0 0;"
}


export const FormBottomTypographyStyles = { 
    fontFamily: 'Inter, sans-serif', 
    fontSize: '0.9rem', 
    fontWeight: '500',
}


export const TextFieldStyles = {
    width:'100%', 
    marginBottom: '16px', 
    "& .MuiOutlinedInput-notchedOutline": {
    borderColor: '#979899', 
    //padding: '13px',
    height: '56px',
  },
}

export const ButtonStyles = {
    backgroundColor:'#37B4E3', 
    width:'100%',
    color:'white',
    marginBottom:'22px',
    borderRadius:'8px',
    minHeight:'50px',
    textTransform: 'capitalize',
    fontSize: '0.9rem',
}