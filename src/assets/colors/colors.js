

const lightMode = {
    bg: '#FDFCFD',
    yellow: '#FFE600',
    orange: '#FF7B48',
    fucsia: '#FF0F91',
    grey:'##4F4F4F'
}

const darkMode = {
    bg: '#1F252B',
    yellow: '#FFE600',
    orange: '#FF7B48',
    fucsia: '#FF0F91',
    grey:'##4F4F4F'

}

const colors = (mode) =>
{

    

    

    if(mode === 'lightMode')
    {
        return lightMode;
    }
    else
    {
        return darkMode;
    }
}


export default colors;