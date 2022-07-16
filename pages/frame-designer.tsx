import type { NextPage } from "next";
import Head from "next/head";
import { HexGrid, Layout, Hexagon, Text, GridGenerator, HexUtils } from 'react-hexgrid';

const config = {
  "width": 800,
  "height": 800,
  "layout": { "width": 6, "height": 6, "flat": false, "spacing": 1 },
  "origin": { "x": 0, "y": 0 },
  "map": "hexagon",
  "mapProps": [ 3 ]
}

const FrameDesigner: NextPage = () => {
  const generator = GridGenerator.getGenerator(config.map);
  const hexagons = generator.apply(this, config.mapProps);

  const onClick = (e: any, h: any) => {
    const { q, r, s } = h.props
    console.log(`${q} ${r} ${s}`)
  }

  const layout = config.layout;
  const size = { x: layout.width, y: layout.height };
  return (
    <div className="frame-designer">
      <HexGrid width={config.width} height={config.height}>
        <Layout size={size} flat={layout.flat} spacing={layout.spacing} origin={config.origin}>
          {
            hexagons.map((hex: any, i: any) => (
              <Hexagon key={config.mapProps + i} q={hex.q} r={hex.r} s={hex.s} onClick={onClick}>
                <Text>{HexUtils.getID(hex)}</Text>
              </Hexagon>
            ))
          }
        </Layout>
      </HexGrid>
    </div>
  );
};

export default FrameDesigner;
