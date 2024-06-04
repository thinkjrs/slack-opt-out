import { MouseEvent } from "react";
import { sendGTMEvent } from "@next/third-parties/google";

export const tincreAdOnClick = async (
  e: MouseEvent<HTMLAnchorElement>,
  props: { pid?: string; adtext?: string }
) => {
  sendGTMEvent({
    event: "newsAdClicked",
    pid: props?.pid,
    adTarget: e?.currentTarget.href,
    adTitle: props?.adtext,
  });
};
