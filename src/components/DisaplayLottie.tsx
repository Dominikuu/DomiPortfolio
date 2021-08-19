import React, { Suspense } from "react";
import { FunctionComponent } from "react";
import Lottie from "react-lottie";
import Loading from "./Loading";

const GreetingLottie: FunctionComponent<{ animationData: any }> = ({
  animationData,
}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <Suspense fallback={<Loading />}>
      {/* To override default onClick pause by Lottie */}
      <div onClick={() => null}>
        <Lottie options={defaultOptions} />
      </div>
    </Suspense>
  );
};

export default GreetingLottie;
