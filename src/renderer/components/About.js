import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <p className="headline about">
        Once upon a time there was a little prick who wanted to create
        <br />a basic application using ElectronJS, React and Webpack.
        <br />
        After struggling for hours in search of a decent boilerplate
        <br />
        he couldn't find any good results to begin with...
        <br />
        <br />
        His morale was down, with a sad face he decided to go to bed...
        <br />
        But then on next morning, he got up and planned to waste
        <br />
        another day of his life just to write the boilerplate code himself.
        <br />
        <br />
        After investing plenty of hours, the result was heart-warming
        <br />
        "Keep your hopes higher than morale!"
      </p>
      <div className="switch">
        <Link to="/">Go back</Link>
      </div>
    </div>
  );
};

export default About;
