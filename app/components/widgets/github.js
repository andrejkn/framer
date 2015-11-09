import React from 'react';

const githubWidget = () => {
  const styles = {
    width: 360,
    height: 200
  };

  return (
    <a
      target="_blank"
      href="https://github.com/andrejkn/framer">
      <img
        style={ styles }
        alt="Click me"
        src="https://assets-cdn.github.com/images/modules/open_graph/github-octocat.png"
      />
    </a>
  );
};

export default githubWidget;
