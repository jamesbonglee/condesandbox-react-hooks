import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    // 존재하지 않거나 함수가 아니면 리턴
    return;
  }
  if (onCancel && typeof onCancel !== "function") {
    // 존재하는데 함수가아니면 리턴
    return;
  }
  const confrimAction = () => {
    // window.confirm 이 alret창과 동일한것으로 보이고
    // 버튼클릭으로 창이떳을때, 확인을하면 true로 받으니간
    // 조건문에 충족하게되어 콜백을 실행하게 된다
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confrimAction;
};
