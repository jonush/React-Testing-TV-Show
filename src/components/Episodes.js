import React from 'react';
import parse from 'html-react-parser';
import { Route, Link } from 'react-router-dom';
import Episode from './episode';

export default function Episodes(props) {
  return (
    <div className="titles">
      {props.episodes.map(e => (
      <>
        <Link to={`/episodes/${e.id}`}>
          <h2>{e.name}</h2>
        </Link>

        <Route path={`/episodes/${e.id}`}>
          <Episode content={e} />
        </Route>
      </>
      ))}
    </div>
  );
}
