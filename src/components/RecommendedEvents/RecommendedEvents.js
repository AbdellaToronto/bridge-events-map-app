import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import EventImage from '../EventImage/EventImage';


export default function RecommendedEvents(props) {
  return (
    <div>
      <h2>You might be interested in...</h2>
      <div style={styles.root}>
        <GridList style={styles.gridList} cols={2.2}>
        {props.events.map((event, index) => (
          <GridTile
            key={index}
            title={event.title}
            cols={5}
            style={styles.imageStyle}
            titleStyle={styles.titleStyle}
            titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          >
            <EventImage src={event.image.perspectivecrop290by250.url} />
          </GridTile>
          ))}
        </GridList>
      </div>
    </div>
  );
}

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    overflowY: 'hidden',
  },
  titleStyle: {
    color: '#fff',
  },
  imageStyle: {
    border: '1px solid #eee',
  },
  pStyle: {
    marginRight: '20px',
  },
};

// http://api.eventful.com/json/categories/list?app_key=3RXRMbCtSm89nDRV

RecommendedEvents.propTypes = {
  events: React.PropTypes.array,
  event: React.PropTypes.shape({
    image: React.PropTypes.shape({
      perspectivecrop290by250: React.PropTypes.shape({
        url: React.PropTypes.string,
      }),
    }),
  }),
};
