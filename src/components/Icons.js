import Proptypes from 'prop-types'
//NEXT Optimizied Image
import Img from 'react-optimized-image';
//Icons
import facebook from '../../public/images/icons/facebook.svg'
import google from '../../public/images/icons/google.svg'
import twitter from '../../public/images/icons/twitter.svg'

const Icons = ({type, className}) =>
{
 


const FacebookIcon = (
    <Img 
        src = {facebook}
        alt = {"facebook"}
        sizes = {[1200]}
        loading = "eager"
        original
        className={`${className} cursor-pointer hover:animate-wiggle`}
    />)

const TwitterIcon = (
    <Img 
        src = {twitter}
        alt = {"twitter"}
        sizes = {[1200]}
        loading = "eager"
        original
        className={`${className} cursor-pointer hover:animate-wiggle`}
    />)

const GoogleIcon = (
    <Img 
        src = {google}
        alt = {"google"}
        sizes = {[1200]}
        loading = "eager"
        original
        className={`${className} cursor-pointer hover:animate-wiggle`}
    />)


    
switch (type) {
    case "google":
        return GoogleIcon;

    case "facebook":
        return FacebookIcon;

    case "twitter":
        return TwitterIcon;
        
    default:
        break;
}
};


Icons.propTypes = 
{
    type:Proptypes.string.isRequired,
    className:Proptypes.string
}

export default Icons;