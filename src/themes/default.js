export const getTheme = (theme) => {
    switch(theme){
        case 'signup':
            return {
                background:"#62D9FF",
                primary:"green",
                label:"#00FFD1",
                marginTop: '2rem',
                secondary:"",
                validate:"",
                error:""
            }
        case 'login':
            return {
                background:"#62D9FF",
                primary:"cyan",
                label:"#00FFD1",
                marginTop: '5rem',
                secondary:"",
                validate:"",
                error:""
            }
        case 'profil':
            return {
                background:"#62D9FF",
                primary:"cyan",
                label:"#00FFD1",
                marginTop: '3rem',
                secondary:"",
                validate:"",
                error:""
            }
        }
        
}