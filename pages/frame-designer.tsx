import type { NextPage } from "next";
import Head from "next/head";

import FrameGrid, { FrameGridContent, FrameGridCoordinates } from "../lib/FrameGrid";

const cellGenerator = (props: FrameGridCoordinates): FrameGridContent => {
  const { q, r, s } = props;

  if (q == 0 && r == 0 && s == 0) {
    return ({
      className: "reactor",
      text: "reactor"
    })
  }
  return ({
    className: "",
    text: "WF!"
  })
}

const FrameDesigner: NextPage = () => {
  const onClick = (props: FrameGridCoordinates) => {
    alert(JSON.stringify(props))
  }

  return (
    <FrameGrid
      width={800}
      height={800}
      radius={4}
      layoutWidth={6}
      layoutHeight={6}
      flat={false}
      spacing={1}
      cellGenerator={cellGenerator}
      onClick={onClick}
    />
  );
};

export default FrameDesigner;
