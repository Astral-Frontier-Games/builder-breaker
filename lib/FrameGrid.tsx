import {
  GridGenerator,
  Hexagon,
  HexGrid,
  HexUtils,
  Layout,
  Text,
} from "react-hexgrid";

export interface FrameGridCoordinates {
  q: number;
  r: number;
  s: number;
}

export interface FrameGridContent {
  className: string;
  text: string;
}

type FrameGridCallback = (args: FrameGridCoordinates) => void;

type FrameGridGenerator = (args: FrameGridCoordinates) => FrameGridContent;

interface FrameGridProps {
  width: number;
  height: number;
  radius: number;
  layoutWidth: number;
  layoutHeight: number;
  flat: boolean;
  spacing: number;
  cellGenerator: FrameGridGenerator;
  onClick: FrameGridCallback;
}

const MAP_TYPE = "hexagon";

const origin = { x: 0, y: 0 };

const FrameGrid = ({
  width,
  height,
  radius,
  layoutWidth,
  layoutHeight,
  flat,
  spacing,
  cellGenerator: cellGenerator,
  onClick,
}: FrameGridProps) => {
  const generator = GridGenerator.getGenerator(MAP_TYPE);
  const hexagons = generator(radius);

  const onClickHandler = (e: any, h: any) => {
    const { q, r, s }: FrameGridCoordinates = h.props;
    onClick({ q, r, s });
  };

  //HexUtils.getID(hex)
  return (
    <div className="frame-designer">
      <HexGrid width={width} height={height}>
        <Layout
          size={{ x: layoutWidth, y: layoutHeight }}
          flat={flat}
          spacing={spacing}
          origin={origin}
        >
          {hexagons.map((hex: any, i: number) => {
            const contents: FrameGridContent = cellGenerator({q: hex.q, r: hex.r, s: hex.s})
            return (
              <Hexagon
                className={contents.className}
                key={radius + i}
                q={hex.q}
                r={hex.r}
                s={hex.s}
                onClick={onClickHandler}
              >
                <Text>{contents.text}</Text>
              </Hexagon>
            );
          })}
        </Layout>
      </HexGrid>
    </div>
  );
};

export default FrameGrid;
