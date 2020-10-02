import React from 'react';

import '../../styles/root.scss';
import './Section.scss';

const Section = (props) => {
  return (
    <section className={"section-default h-auto padding-6016 " + props.class}>
    <div className="container column">
    {props.children}
    </div>
    </section>
  )
};

export default Section;
