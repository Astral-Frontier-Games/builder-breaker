import type { NextPage } from "next";
import Head from "next/head";

import FrameGrid, { FrameGridContent, FrameGridCoordinates } from "../lib/FrameGrid";

const cellType = (props: FrameGridCoordinates): string => {
  const { q, r, s } = props;

  if (q == 0 && r == 0 && s == 0) {
    return "reactor";
  }

  if (q == 0) {
    return (r < 0) ? "protection" : "movement";
  }

  if (r == 0) {
    return (q < 0) ? "control" : "utility";
  }

  if (s == 0) {
    return (r < 0) ? "destruction" : "spectacle"
  }

  return "free"
}

const cellGenerator = (props: FrameGridCoordinates): FrameGridContent => {
  const { q, r, s } = props;

  const className = cellType(props)
  return ({
    className: className,
    text: className.substring(0, 4)
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
