"use client";
import Headline from "./Headline";
import Subheading from "./Subheading";
import GetStarted from "./GetStarted";
import DemoButton from "./DemoButton";

export default function HeroSection() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <Headline />
        <div className="flex flex-col gap-10">
          <Subheading />
          <div className="flex justify-center items-center gap-4">
            <GetStarted />
            <DemoButton />
          </div>
        </div>
      </div>
    </>
  );
}
