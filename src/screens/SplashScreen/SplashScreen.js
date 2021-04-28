import Proptypes from 'prop-types'

//Css
import classes from './SplashScreen.module.css'

//NEXT Optimizied Image
import Img from 'react-optimized-image';
//Images
import logo_text from '../../../public/images/logo_text.svg'
import logo_underscore from '../../../public/images/logo_underscore.svg'

const SplashScreen = (props) =>
{

  

    return(
        <div className = {classes.Root} >

            <div className = {classes.ImageContainer}>
             
                <div className = {classes.Image}>
                    <Img 
                        src = {logo_text}
                        alt = {"background"}
                        sizes = {[600, 800, 1200]}
                        loading = "eager"
                    />
                </div>

                <div className = {classes.Image}>
                    <Img 
                        src = {logo_underscore}
                        alt = {"background"}
                        sizes = {[600, 800, 1200]}
                        loading = "eager"
                        className = {classes.Cursor}
                    />
                </div>
             
            </div>
            
             
        </div>
    )
};


SplashScreen.propTypes = 
{

}

export default SplashScreen;