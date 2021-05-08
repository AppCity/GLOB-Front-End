
//Next Js
import { useRouter } from 'next/router'

//NEXT Optimizied Image
import Img from 'react-optimized-image';

//Images
// import Error404 from '../../../public/images/404.gif'

const ErrorScreen = () => 
{
    const router = useRouter()

    return (
        <div>
            
            <div >
                {/* <Img 
                    src = {Error404}
                    alt = {"Error - 404"}
                    webp = {false}
                    sizes = {[200,400,800,1200]}
                /> */}
            </div>
            

            {/* <Subtitle text = "Looks like the page is not found" /> */}

            {/* <Button 
                title='Go to Home' 
                style={{background: "#39ad31", marginTop:"20px"}} 
                click={() => router.push('/')}
            /> */}
        </div>
    )
}


export default ErrorScreen;