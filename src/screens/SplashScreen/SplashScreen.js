import {useEffect} from 'react'

//Components
import Logo from '../../components/Logo';
//Hooks
import useWindowSize from '../../hooks/windowResize';

//Store
import {useDispatch} from 'react-redux';
import {setSplashLoading} from '../../store/actions/actions'

const SplashScreen = () =>
{

    const dispatch = useDispatch()
    const {height} = useWindowSize()

    //Hide Splash
    useEffect(() => {setTimeout(() => dispatch(setSplashLoading(false)), 3000);}, [])

    return(
        <div className="flex items-center justify-center" style={{height}} >
           <Logo imageCss="h-20 smd:h-28 md:h-28"/>
        </div>
    )
};

export default SplashScreen;