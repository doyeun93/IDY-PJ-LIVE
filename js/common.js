
import myFn from "./function.js";

  /**************************** 마우스 효과 ****************************/

  export default function loadFn() {
    // 1. 대상선정 :
    // 1-1. 이벤트 대상 : 전체화면
    const wrap = document.querySelector(".wrap");
    const moving = document.querySelector(".pointer");

    wrap.onmousemove = (e) => {
      moving.style.top = e.pageY + "px";
      moving.style.left = e.pageX + "px";
    };

    // 이벤트 대상 구역에 들어올 때 보이기 , 나가면 숨기기
    wrap.onmouseenter = () => {
      moving.style.opacity = 1;
    };

    wrap.onmouseleave = () => {
      moving.style.opacity = 0;
    };
  } ///////////// loadFn 함수 ////////////


  loadFn(); /// 호출을 해줌으로써 sub1에서도 문제없도록 함