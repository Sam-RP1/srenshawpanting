import React from 'react';

import '../../styles/root.scss';
import './Grid.scss';

const Grid = (props) => {
  const numTiles = props.tiles.length;

  const animationDelays = (i) => {
    const ans = 100 + (50 * i);
    return ans.toString();
  }

  // TODO: Move if block into function, divider = return value
  let content = props.tiles.map((tile, i) => {
    let val = i + 1;
    let divider = undefined;

    if (props.divide === true && val > 1 && val % 4 === 0 && val !== numTiles) {
      divider = <span key={i} className="divider-2-4" data-aos="fade-up" data-aos-delay={animationDelays(i)}></span>;;
    } else if (props.divide === true && val > 1 && val % 3 === 0 && val !== numTiles) {
      if (val % 2 === 0) {
        divider = <span key={i} className="divider-2-3" data-aos="fade-up" data-aos-delay={animationDelays(i)}></span>;
      } else {
        divider = <span key={i} className="divider-3" data-aos="fade-up" data-aos-delay={animationDelays(i)}></span>;;
      }
    } else if (props.divide === true && val > 1 && val % 2 === 0 && val !== numTiles) {
      divider = <span key={i} className="divider-2" data-aos="fade-up" data-aos-delay={animationDelays(i)}></span>;;
    }

    return (
      <>
      <div key={tile.id} id={tile.id} data-aos="fade-up" data-aos-delay={animationDelays(i)}>
      <a href={tile.href}>
      <img src={tile.src} alt={tile.alt}></img>
      <h2>{tile.title}</h2>
      </a>
      </div>
      {divider}
      </>
    )
  });

  return (
    <section key={"grid-container-" + 1} className={"grid-container " + props.class + (props.divide === true ? " divide" : "")}>
    {content}
    </section>
  )
};

export default Grid;
