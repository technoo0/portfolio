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
    x: width * (787 / 1920),
    y: height * (773 / 1080),
    w: width * (58 / 1920),
    h: height * (23 / 1080),
  };
};

const UseObjectFit = () => {
  const InitalRes = { width: 3840, height: 2160 };
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
    height: window.innerHeight,
  };
  const [BottonPos, setBottonPos] = useState(
    CompareRatio(WindowInital, InitalRes)
  );
  useEffect(() => {
    const UpdatePos = (e) => {
      const WindowCurrent = {
        width: e.target.innerWidth,
        height: e.target.innerHeight,
      };
      setBottonPos(CompareRatio(WindowCurrent, InitalRes));
    };
    window.addEventListener("resize", UpdatePos);
    return () => {
      window.removeEventListener("resize", UpdatePos);
    };
  }, []);
  return BottonPos;
};

export default UseObjectFit;

// x: 819/1920
// y: 778/1080
