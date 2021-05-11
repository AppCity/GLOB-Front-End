//NEXT Optimizied Image
import Img from 'react-optimized-image';
import Proptypes from 'prop-types'

/**
 * Logo component
 * @returns Logo
 */

//Images
import logo_text from '../../public/images/logo_text.svg'
import logo_underscore from '../../public/images/logo_underscore.svg'

const Logo = ({customCss}) =>
{


    return(
        <div className={`flex relative ${customCss} h-20 w-full`}>
            <Img 
                src = {logo_text}
                alt = {"logo_text"}
                sizes = {[1200]}
                loading = "eager"
                original
                className="flex absolute justify-center w-full top-0 left-0"
            />

            <Img 
                src = {logo_underscore}
                alt = {"logo_underscore"}
                sizes = {[1200]}
                original
                loading = "eager"
                className=" flex absolute justify-center w-full top-0 left-0 animate-blink"
            />
        </div>
    )
};

Logo.propTypes = 
{
    customCss: Proptypes.string
}

export default Logo;