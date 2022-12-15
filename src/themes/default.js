export const getTheme = (theme) => {
    if(theme){
        return {
            background:"#62D9FF",
            primary:"green",
            label:"#00FFD1",
            marginTop: '2rem',
            secondary:"",
            validate:"",
            error:""
        }
    }
    return {
        background:"#62D9FF",
        primary:"cyan",
        label:"#00FFD1",
        marginTop: '5rem',
        secondary:"",
        validate:"",
        error:"",
        container:{
            primary:"",
            secondary:"",
            validate:"",
            error:"",
        },
        on: {
            primary:"",
            secondary:"",
            validate:"",
            error:"",
            container:{
                primary:"",
                secondary:"",
                validate:"",
                error:"",
            }    
        }
        
    }
}