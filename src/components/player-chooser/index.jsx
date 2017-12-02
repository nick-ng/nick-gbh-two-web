import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';

const styles = {
  playerScroller: {
    overflowY: 'scroll',
    flex: '1 0 140px',
    height: '100%',
  },
  playerChooser: {
    display: 'flex',
    flexDirection: 'column',
  },
  playerList: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  guildHeading: {
    flex: '1 1 100%',
    padding: '0',
    margin: '1vh 0 0',
    fontSize: '3vh',
  },
  button: {
    fontSize: '3vmin',
    margin: '0.2vh',
    padding: '1vh',
    color: 'black',
    backgroundColor: 'lightGrey',
    borderStyle: 'outset',
  },
  pressedButton: {
    color: 'white',
    backgroundColor: 'dimgrey',
    borderStyle: 'inset',
  },
};

const PlayerChooser = ({ currentPlayerName, changeCard, allPlayers, allGuilds }) => (
  <div style={styles.playerScroller}>
    <div style={styles.playerChooser}>
      {allGuilds && allPlayers && allGuilds.toList().map((guild) => {
        const players = allPlayers.filter((player) => player.get('guilds').includes(guild.get('name')));
        if (players && players.size > 0) {
          return (
            <div style={styles.playerList} key={guild.get('name')}>
              <h3 style={styles.guildHeading}>{guild.get('displayName')}</h3>
              {players.toList().map((player) => {
                const style = player.get('name') === currentPlayerName ? Object.assign({}, styles.button, styles.pressedButton) : styles.button;
                return (
                  <button
                    style={style}
                    onClick={() => changeCard(player.get('name'))}
                    key={player.get('name')}
                  >
                    {player.get('shortName')}
                  </button>
                );
              })}
            </div>);
        }
        return null;
      })}
    </div>
  </div>
);

PlayerChooser.propTypes = {
  currentPlayerName: PropTypes.string.isRequired,
  changeCard: PropTypes.func.isRequired,
  allPlayers: ImmutablePropTypes.map,
  allGuilds: ImmutablePropTypes.map,
};

PlayerChooser.defaultProps = {
  allPlayers: null,
  allGuilds: null,
};

export default PlayerChooser;
