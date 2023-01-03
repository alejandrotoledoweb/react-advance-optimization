import React, { useEffect, useState } from 'react';

import './styles.css';

export const GraphPoint = React.memo((props) => {
  const { setGraphPointOn } = props;
  const [on, setOn] = useState(false);

  useEffect(
    function didMount() {
      setOn(setGraphPointOn());
    },
    [setGraphPointOn]
  );

  return <div className={`e3-graph-point ${on ? 'e3-graph-point-on' : ''}`} />;
});
