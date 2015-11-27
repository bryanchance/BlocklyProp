/**
 * Visual Blocks Language
 *
 * Copyright 2015 Vale Tolpegin
 * Copyright 2015 Dr. Corey Brady
 *
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

 /**
  * @fileoverview Generating Prop-C for Hackable Electronic Badge blocks.
  * @author valetolpegin@gmail.com (Vale Tolpegin)
  */
'use strict';

if (!Blockly.Blocks)
  Blockly.Blocks = {};

// @TODO : Change "toggle_led" to something more appropriate maybe?
Blockly.Blocks.toggle_led = {
  category : 'Hackable Electronic Badge',
  helpUrl : '',
  init : function() {
    // @TODO : Set proper color scheme
    this.setColour( 250 );
    this.appendDummyInput()
      .appendField( 'Set LED state' )
      .appendField( 'LED #' )
      .appendField( new Blockly.FieldDropdown([["1", "0"], ["2", "1"], ["3", "2"], ["4", "3"], ["5", "4"], ["6", "5"]]), "LED_#" )
      .appendField( 'LED state' )
      .appendField( new Blockly.FieldDropdown([["ON", "1"], ["OFF", "0"]]), "STATE" );
    this.setPreviousStatement( true, null );
    this.setNextStatement( true, null );
  }
};

Blockly.propc.toggle_led = function() {
  var led_number = this.getFieldValue( "LED_#" );
  var led_state = this.getFieldValue( "STATE" );

  // @TODO : move initialization & set up to be automatic
  Blockly.propc.definitions_[ "badgetools" ] = '#include "badgetools.h"';
  Blockly.propc.setups_[ "badgetools" ] = 'badge_setup();';

  var code = 'led( ' + led_number + ', ' + led_state + ' );';
  return code;
};

Blockly.Blocks.set_led_rgb = {
  category : 'Hackable Electronic Badge',
  helpUrl : '',
  init : function() {
    // @TODO : Set proper color scheme
    this.setColour( 250 );
    this.appendDummyInput()
      .appendField( 'Set LED' + "'" + 's RGB' )
      .appendField( 'LED side' )
      .appendField( new Blockly.FieldDropdown([["L", "L"], ["R", "R"]]), "SIDE" )
      .appendField( 'RGB value' )
      .appendField( new Blockly.FieldDropdown([["BLUE", "BLUE"], ["GREEN", "GREEN"], ["CYAN", "CYAN"], ["RED", "RED"], ["MAGENTA", "MAGENTA"], ["YELLOW", "YELLOW"], ["WHITE", "WHITE"]]), "RGB" );
    this.setPreviousStatement( true, null );
    this.setNextStatement( true, null );
  }
};

Blockly.propc.set_led_rgb = function() {
  var led_side = this.getFieldValue( "SIDE" );
  var led_rgb = this.getFieldValue( "RGB" );

  // @TODO : move initialization & set up to be automatic
  Blockly.propc.definitions_[ "badgetools" ] = '#include "badgetools.h"';
  Blockly.propc.setups_[ "badgetools" ] = 'badge_setup();';

  var code = 'rgb( ' + led_side + ', ' + led_rgb + ' );';
  return code;
};

Blockly.Blocks.print_string = {
  category : 'Hackable Electronic Badge',
  helpUrl : '',
  init : function() {
    // @TODO : Set proper color scheme
    this.setColour( 250 );
    this.appendDummyInput()
      .appendField( 'Print a string' )
      .appendField( new Blockly.FieldTextInput( '' ), "STRING" );
    this.setPreviousStatement( true, null );
    this.setNextStatement( true, null );
  }
};

Blockly.propc.print_string = function() {
  var string_to_print = this.getFieldValue( "STRING" );

  // @TODO : move initialization & set up to be automatic
  Blockly.propc.definitions_[ "badgetools" ] = '#include "badgetools.h"';
  Blockly.propc.setups_[ "badgetools" ] = 'badge_setup();';

  var code = 'oledprint( "' + string_to_print + '" );';
  return code;
};

Blockly.Blocks.text_size = {
  category : 'Hackable Electronic Badge',
  helpUrl : '',
  init : function() {
    // @TODO : Set proper color scheme
    this.setColour( 250 );
    this.appendDummyInput()
      .appendField( 'Set text size' )
      .appendField( new Blockly.FieldDropdown([["SMALL", "SMALL"], ["LARGE", "LARGE"]]), "TEXT_SIZE" );
    this.setPreviousStatement( true, null );
    this.setNextStatement( true, null );
  }
};

Blockly.propc.text_size = function() {
  var text_size = this.getFieldValue( "TEXT_SIZE" );

  // @TODO : move initialization & set up to be automatic
  Blockly.propc.definitions_[ "badgetools" ] = '#include "badgetools.h"';
  Blockly.propc.setups_[ "badgetools" ] = 'badge_setup();';

  var code = 'text_size( ' + text_size + ' );';
  return code;
};

Blockly.Blocks.cursor_position = {
  category : 'Hackable Electronic Badge',
  helpUrl : '',
  init : function() {
    // @TODO : Set proper color scheme
    this.setColour( 250 );
    this.appendDummyInput()
      .appendField( 'Set cursor position' )
      .appendField( 'Columns' )
      .appendField( new Blockly.FieldDropdown([["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"]]), "COLS" )
      .appendField( 'Rows' )
      .appendField( new Blockly.FieldDropdown([["0", "0"], ["1", "1"]]), "ROWS" );
    this.setPreviousStatement( true, null );
    this.setNextStatement( true, null );
  }
};

Blockly.propc.cursor_position = function() {
  var columns = this.getFieldValue( "COLS" );
  var rows = this.getFieldValue( "ROWS" );

  // @TODO : move initialization & set up to be automatic
  Blockly.propc.definitions_[ "badgetools" ] = '#include "badgetools.h"';
  Blockly.propc.setups_[ "badgetools" ] = 'badge_setup();';

  var code = 'cursor( ' + columns + ', ' + rows + ' );';
  return code;
};

Blockly.Blocks.clear_screen = {
  category : 'Hackable Electronic Badge',
  helpUrl : '',
  init : function() {
    // @TODO : Set proper color scheme
    this.setColour( 250 );
    this.appendDummyInput()
      .appendField( 'Clear screen' );
    this.setPreviousStatement( true, null );
    this.setNextStatement( true, null );
  }
};

Blockly.propc.clear_screen = function() {
  // @TODO : move initialization & set up to be automatic
  Blockly.propc.definitions_[ "badgetools" ] = '#include "badgetools.h"';
  Blockly.propc.setups_[ "badgetools" ] = 'badge_setup();';

  var code = 'clear();';
  return code;
};

Blockly.Blocks.rotate = {
  category : 'Hackable Electronic Badge',
  helpUrl : '',
  init : function() {
    // @TODO : Set proper color scheme
    this.setColour( 250 );
    this.appendDummyInput()
      .appendField( 'Rotate 180' );
    this.setPreviousStatement( true, null );
    this.setNextStatement( true, null );
  }
};

Blockly.propc.rotate = function() {
  // @TODO : move initialization & set up to be automatic
  Blockly.propc.definitions_[ "badgetools" ] = '#include "badgetools.h"';
  Blockly.propc.setups_[ "badgetools" ] = 'badge_setup();';

  var code = 'rotate180();';
  return code;
};

Blockly.Blocks.send_signal = {
  category : 'Hackable Electronic Badge',
  helpUrl : '',
  init : function() {
    // @TODO : Set proper color scheme
    this.setColour( 250 );
    this.appendDummyInput()
      .appendField( 'Send a message' )
      .appendField( new Blockly.FieldTextInput( '' ), "MESSAGE" );
    this.setPreviousStatement( true, null );
    this.setNextStatement( true, null );
  }
};

Blockly.propc.send_signal = function() {
  var message = this.getFieldValue( "MESSAGE" );

  // @TODO : move initialization & set up to be automatic
  Blockly.propc.definitions_[ "badgetools" ] = '#include "badgetools.h"';
  Blockly.propc.setups_[ "badgetools" ] = 'badge_setup();';

  var code = 'send( ' + message + ' );';
  return code;
};

Blockly.Blocks.read_signal = {
  category : 'Hackable Electronic Badge',
  helpUrl : '',
  init : function() {
    // @TODO : Set proper color scheme
    this.setColour( 250 );
    this.appendDummyInput()
      .appendField( 'Retrieve a message' );
    this.appendValueInput( "BUFFER" )
      .appendField( 'Variable' );
    this.setOutput( true, Number );
    this.setPreviousStatement( false, null );
    this.setNextStatement( false, null );
  }
};

Blockly.propc.read_signal = function() {
  var buffer = Blockly.propc.valueToCode( this, "BUFFER", Blockly.propc.ORDER_NONE );

  // @TODO : move initialization & set up to be automatic
  Blockly.propc.definitions_[ "badgetools" ] = '#include "badgetools.h"';
  Blockly.propc.setups_[ "badgetools" ] = 'badge_setup();';

  var code = 'receive( ' + buffer + ' )';
  return [ code, Blockly.propc.ORDER_ATOMIC ];
};
