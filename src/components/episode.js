import React from 'react';
import parse from 'html-react-parser';
import { Route } from 'react-router-dom';

export default function Episode(props) {
  return (
      <div className="episodes">
          <div className="episode" key={props.content.id} data-testid='ep'>
            {props.content.image && (
              <img className="episode-image" src={props.content.image.medium} alt={props.content.name} />
            )}
            <div className="episode-info">
              <p className="episode-number">
                Season {props.content.season}, Episode {props.content.number}
              </p>
              <h3>{props.content.name}</h3>
              {props.content.summary && parse(props.content.summary)}
              <div className="flex-spacer" />
              <p className="episode-runtime">{props.content.runtime} minutes</p>
            </div>
          </div>
      </div>
  );
}