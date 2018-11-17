'use strict';

const applescript = require('applescript');

const VOLUME_UP = "VOLUME UP";
const VOLUME_DOWN = "VOLUME DOWN";
const MUTE_TOGGLE = "MUTE TOGGLE";

const CURSOR_ENTER = "CURSOR ENTER";
const CURSOR_UP = "CURSOR UP";
const CURSOR_DOWN = "CURSOR DOWN";
const CURSOR_LEFT = "CURSOR LEFT";
const CURSOR_RIGHT = "CURSOR RIGHT";

const MENU = "MENU";
const BACK = "BACK";

/*
 * Device Controller
 * Events on that device from the Brain will be forwarded here for handling.
 */

module.exports = class macRemoteBuddy {
  constructor() {}

  static build() {
    return new macRemoteBuddy();
  }

  onButtonPressed(action, deviceId) {
    console.log(`[CONTROLLER] ${action} button pressed for device ${deviceId}`);

    var script = script = "tell application \"Remote Buddy\" to scriptremote button ";
    switch (action) {
      case VOLUME_UP:
        console.log(`Volume up on ${deviceId}`);
        script += "\"mmVolumePlus\" event \"click\"";
        executeScript(script);
        break;
      case VOLUME_DOWN:
        console.log(`Volume down on ${deviceId}`);
        script += "\"mmVolumeMinus\" event \"click\"";
        executeScript(script);
        break;
      case MUTE_TOGGLE:
        console.log(`Mute on/off on on ${deviceId}`);
        script += "\"mute\" event \"click\"";
        executeScript(script);
        break;
      case CURSOR_UP:
        console.log(`Cursor UP on on ${deviceId}`);
        script +=  "\"plus\" event \"click\"";
        executeScript(script);
        break;
      case CURSOR_DOWN:
        console.log(`Cursor DOWN on ${deviceId}`);
        script += "\"minus\" event \"click\"";
        executeScript(script);
        break;
      case CURSOR_LEFT:
        console.log(`Cursor LEFT on ${deviceId}`);
        script += "\"left\" event \"click\"";
        executeScript(script);
        break;
      case CURSOR_RIGHT:
        console.log(`Cursor RIGHT on ${deviceId}`);
        script += "\"right\" event \"click\"";
        executeScript(script);
        break;
      case CURSOR_ENTER:
        console.log(`Cursor ENTER on on ${deviceId}`);
        script += "\"playPause\" event \"click\"";
        executeScript(script);
        break;
      case MENU:
        console.log(`MENU on ${deviceId}`);
        script += "\"menu\" event \"click\"";
        executeScript(script);
        break;
      case BACK:
        console.log(`BACK on ${deviceId}`);
        script += "\"menu\" event \"click\"";
        executeScript(script);
        break;
      default:
        console.log(`Unsupported button: ${action} for ${deviceId}`);
        return Promise.resolve(false);
    }
  }

  executeScript(script) {
    console.log("Executing script: " + script);
  }

};
