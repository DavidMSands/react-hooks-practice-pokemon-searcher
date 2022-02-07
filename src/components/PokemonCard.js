import React from "react";
import { useState } from "react/cjs/react.development";
import { Card } from "semantic-ui-react";

function PokemonCard({ name, hp, front, back }) {
const [spritesOrientation, setSpritesOrientation] = useState(true)

function handleSpritesorientation() {
  setSpritesOrientation(spritesOrientation => !spritesOrientation)
}

  return (
    <Card>
      <div onClick={handleSpritesorientation}>
        <div className="image">
          {spritesOrientation ? <img src={front} alt={name} /> : <img src={back} alt={name} />}
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
