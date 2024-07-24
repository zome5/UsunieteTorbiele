import React from "react";
import "./tile.css";
import Tag from "../Tag/Tag";

const Tile = () => {
  return (
    <>
      <section>
        <div id="nick">JakiśSigma2137</div>
        <div id="date">24.07.2024 17:17</div>
        <div id="tileText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          odio vero rerum culpa iusto similique voluptatibus a minima sed
          perspiciatis ad, fuga autem maxime, nihil quod minus, at sit maiores?
          Dolorum, cumque magnam exercitationem dicta sunt quos pariatur
          distinctio nihil harum repellat, voluptatum at officia maxime iusto
          quas possimus, illo quam odit eaque soluta nobis? Quisquam, repellat!
          Porro, quaerat. Aliquam.
        </div>
        <div id="tagi">
          <Tag type={"perm"}></Tag>
          <Tag type={"acc2024"}></Tag>
          <Tag type={"sub"}></Tag>
        </div>
      </section>
    </>
  );
};

export default Tile;
