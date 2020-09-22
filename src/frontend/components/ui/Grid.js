import React from 'react';

import '../../styles/root.scss';
import './Grid.scss';

const Grid = (props) => {
  const animationDelays = (i) => {
    const ans = 100 + (50 * i);
    return ans.toString();
  }

  let content = props.tiles.map((tile, i) => {
    return (
      <div id={tile.id} data-aos="fade-up" data-aos-delay={animationDelays(i)}>
      <a href={tile.href}>
      <img src={tile.src} alt={tile.alt}></img>
      <h2>{tile.title}</h2>
      </a>
      </div>
    )
  });

  return (
    <section className={"grid-container " + props.class}>
    {content}
    </section>
  )
};

export default Grid;
