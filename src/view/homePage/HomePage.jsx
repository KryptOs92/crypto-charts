
import React from "react";
import RGL, { WidthProvider } from "react-grid-layout";

const ReactGridLayout = WidthProvider(RGL);
const layout = [
    {i: "home", x: 0, y: 0, w: 1, h: 3,static: false}
  ]

export default function HomePage() {


    return (

        <ReactGridLayout
        layout={layout}
        rowHeight={100}
      >
        <div key={"home"}>
          <span className="text">{"home"}</span>
        </div>
      </ReactGridLayout>

    )
}
