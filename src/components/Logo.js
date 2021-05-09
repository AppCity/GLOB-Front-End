//NEXT Optimizied Image
import Img from 'react-optimized-image';

/**
 * Logo component
 * @returns Logo
 */

//Images
import logo_text from '../../public/images/logo_text.svg'
import logo_underscore from '../../public/images/logo_underscore.svg'

const Logo = () =>
{


    return(
        <div className="flex relative h-28 w-full">
            <div className="flex absolute justify-center w-full top-0 left-0">
                <Img 
                    src = {logo_text}
                    alt = {"logo_text"}
                    sizes = {[1200]}
                    loading = "eager"
                    original
                    className="h-28"
                />
            </div>

            <div className="flex absolute justify-center w-full top-0 left-0">
                <Img 
                    src = {logo_underscore}
                    alt = {"logo_underscore"}
                    sizes = {[1200]}
                    original
                    loading = "eager"
                    className="h-28 animate-blink"
                />
            </div>
        </div>
    )
};

export default Logo;