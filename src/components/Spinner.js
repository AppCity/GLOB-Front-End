import { memo } from "react";
import Image from "next/image";

const Spinner = (props) => {
  return (
    <div className="flex justify-center items-center w-full h-full fixed z-50  bg-black bg-opacity-50">
      <div className="flex fixed justify-center items-center w-52 h-52 dark:bg-white dark:bg-opacity-10 bg-black bg-opacity-20 rounded-full animate-fullPing" />
      <div className="flex w-40 h-40 object-contain animate-pulse">
        <Image
          src="/images/brand.svg"
          layout="intrinsic"
          objectFit="contain"
          placeholder="empty"
          alt="Spinner"
          priority={true}
          width={200}
          height={200}
          loading={"eager"}
        />
      </div>
    </div>
  );
};

export default memo(Spinner);
