var _ = require('lodash');
var duckduckGoose = require('./duckDuckGoose');

var players = [
  { name: "Elise", playing: true },
  { name: "MLG", playing: true },
  { name: "D-Rod", playing: false },
  { name: "DT", playing: true },
  { name: "Kevin", playing: false }
];


var playersPlaying = _.filter(players, function(player) { return player.playing });
duckduckGoose.play(playersPlaying);
