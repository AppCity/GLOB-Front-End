import { useEffect } from "react";

//Components
import Logo from "../../components/Logo";

//Store
import { useDispatch } from "react-redux";
import { setSplashLoading } from "../../store/actions/actions";

const SplashScreen = () => {
  const dispatch = useDispatch();

  //Hide Splash
  useEffect(() => {
    setTimeout(() => dispatch(setSplashLoading(false)), 2000);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen w-full bg-white z-10">
      <Logo imageCss="h-20 smd:h-28 md:h-28" />
    </div>
  );
};

export default SplashScreen;
