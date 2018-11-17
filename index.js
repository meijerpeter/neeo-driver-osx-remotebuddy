'use strict';

const neeoapi = require('neeo-sdk');
const RemoteBuddyController = require('./lib/controller');

const controller = RemoteBuddyController.build();

console.log('NEEO SDK "RemoteBuddy" adapter');
/*
 * Adapter - an Adapter contains one or more DEVICES. In this case we only use single RemoteBuddy device
 */

// first we set the device info, used to identify it on the Brain
const macRemoteBuddy = neeoapi.buildDevice('RemoteBuddy 1.1')
  .setManufacturer('IOSpirit')
  .addAdditionalSearchToken('remote buddy remotebuddy')
  .setType('MEDIAPLAYER')

  // Then we add the capabilities of the device
  .addButtonGroup('Controlpad')
  .addButtonGroup('Menu and Back')
  .addButtonGroup('VOLUME')
  .addButtonHandler(controller.onButtonPressed);

module.exports = {
  devices: [macRemoteBuddy]
}
