import { useEffect, useState } from "react";

function gcd(u, v) {
  if (u === v) return u;
  if (u === 0) return v;
  if (v === 0) return u;

  if (~u & 1)
    if (v & 1) return gcd(u >> 1, v);
    else return gcd(u >> 1, v >> 1) << 1;

  if (~v & 1) return gcd(u, v >> 1);

  if (u > v) return gcd((u - v) >> 1, v);

  return gcd((v - u) >> 1, u);
}

/* returns an array with the ratio */
function ratio(w, h) {
  var d = gcd(w, h);
  return [w / d, h / d];
}

const GetPostion = (width, height) => {
  return {
    x: width * (784 / 1920),
    y: height * (768 / 1080),
    w: width * (56 / 1920),
    h: height * (24 / 1080),
  };
};

const UseObjectFit = (video) => {
  const [videoHight, setVideoHight] = useState()
  useEffect(() => {
    if (video.current) {
      setVideoHight(video.current.offsetHeight)
    }
  }, [])
  const InitalRes = { width: 1920, height: 1080 };
  const InitalRatio = [16, 9];
  const CompareRatio = (Win, Vid) => {
    if (Win.width / Win.height < Vid.width / Vid.height) {
      const newWid = Win.height * (16 / 9);
      let ButtonPos = GetPostion(newWid, Win.height);
      ButtonPos.x = ButtonPos.x - (newWid - Win.width) / 2;
      //   console.log("crop width", ButtonPos);
      return ButtonPos;
    } else {
      const newHieg = Win.width * (9 / 16);
      let ButtonPos = GetPostion(Win.width, newHieg);
      ButtonPos.y = ButtonPos.y - (newHieg - Win.height) / 2;
      //   console.log("crop hight", ButtonPos);
      return ButtonPos;
    }
  };
  const WindowInital = {
    width: window.innerWidth,
    height: videoHight ? videoHight : window.innerHeight,
  };
  const [BottonPos, setBottonPos] = useState(
    CompareRatio(WindowInital, InitalRes)
  );
  useEffect(() => {
    const UpdatePos = (e) => {
      console.log(e)
      const WindowCurrent = {
        width: e.target.offsetWidth,
        height: e.target.offsetHeight,
      };
      setBottonPos(CompareRatio(WindowCurrent, InitalRes));
    };
    video.current.addEventListener("resize", UpdatePos);
    return () => {
      video.current.removeEventListener("resize", UpdatePos);
    };
  }, []);
  return BottonPos;
};

export default UseObjectFit;

// x: 819/1920
// y: 778/1080
