import Proptypes from 'prop-types'

/**
 * Logo component
 * @param customCss - Css for Image Container
 * @param imageCss - Css for Images
 * @returns Logo
 */

//Images
import logo_text from '../../public/images/logo_text.svg'
import logo_underscore from '../../public/images/logo_underscore.svg'

const Logo = ({customCss="", imageCss=""}) =>
{

    return(
        <div className={`flex flex-row ${customCss}`}>
            <img 
                src = {logo_text}
                alt = {"logo_text"}
                className={`${imageCss} transition-all`}
            />

            <img 
                src = {logo_underscore}
                alt = {"logo_underscore"}
                className={`${imageCss} transition-all animate-blink`}
            />
        </div>
    )
};

Logo.propTypes = 
{
    customCss: Proptypes.string,
    imageCss: Proptypes.string
}

export default Logo;