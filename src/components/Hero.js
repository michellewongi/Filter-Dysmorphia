import { useState, useEffect, useRef } from "react";
import * as PIXI from "pixi.js";
import {
  Stage,
  Sprite,
  withFilters,
  Container,
  useTick,
} from "@inlet/react-pixi";
import { useWindowDimensions } from "../hooks/useWindowDimensions";

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

const Filters = withFilters(Container, {
  displacement: PIXI.filters.DisplacementFilter,
});

const config = {
  displacement: {
    x: 1,
    y: 1,
  },
};

const bg = require("../assets/water.jpg");

const Ripples = ({ config }) => {
  const displacementSpriteRef = useRef();
  const [renderFilter, setRenderFilter] = useState(false);
  const { width, height } = useWindowDimensions();
  const [count, setCount] = useState(1);

  useTick(() => {
    setCount(2 + count);
  });

  useEffect(() => {
    displacementSpriteRef.current.texture.baseTexture.wrapMode =
      PIXI.WRAP_MODES.REPEAT;
    setRenderFilter(true);
  }, []);

  return (
    <>
      <Sprite
        image="https://pixijs.io/examples/examples/assets/pixi-filters/displacement_map_repeat.jpg"
        ref={displacementSpriteRef}
        x={count}
        y={count}
      />
      {renderFilter && (
        <Filters
          displacement={{
            construct: [displacementSpriteRef.current],
            scale: { x: 30, y: 30 },
          }}
        >
          <Sprite
            anchor={0.5}
            x={width / 2}
            y={height / 2}
            height={height + 100}
            width={width}
            image={bg}
            tint={0xe6e6e6}
          />
        </Filters>
      )}
    </>
  );
};

export default function Home() {
  const { width, height } = useWindowDimensions();
  const [displacementConfig, setDisplacementConfig] = useState(
    config.displacement
  );

  return (
    <>
      <section className="HeroSection">
        <div className="HeroWrapper">
          <span className="HeroTitle">Dive</span>
          <span className="HeroTitle">Into</span>
          <span className="HeroTitle">Filter</span>
          <span className="HeroTitle">Culture</span>
        </div>
      </section>

      <Stage width={width} height={height + 50}>
        <Ripples config={displacementConfig} />
      </Stage>
    </>
  );
}
