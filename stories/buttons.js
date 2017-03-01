import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { RaisedButton } from 'material-ui';
import { muiTheme } from 'storybook-addon-material-ui';
import { fullWhite } from 'material-ui/styles/colors';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';

const styles = {
  button: {
    margin: 12,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

storiesOf('Buttons', module)
  .addDecorator(muiTheme())
  .addWithInfo('Basic Variations', () => (
    <div>
      <RaisedButton
        label="Default"
        style={styles.button}
      />
      <RaisedButton
        label="Primary"
        primary={true}
        style={styles.button}
      />
      <RaisedButton
        label="Secondary"
        secondary={true}
        style={styles.button}
      />
      <RaisedButton
        label="Disabled"
        disabled={true}
        style={styles.button}
      />
      <br />
      <br />
      <RaisedButton
        label="Full width"
        fullWidth={true}
      />
    </div>
  ))
  .addWithInfo('Complex Variations', () => (
    <div>
      <RaisedButton
        label="Choose an Image"
        labelPosition="before"
        style={styles.button}
        containerElement="label"
      >
        <input type="file" style={styles.exampleImageInput} />
      </RaisedButton>
      <RaisedButton
        label="Label before"
        labelPosition="before"
        primary={true}
        icon={<ActionAndroid />}
        style={styles.button}
      />
      <RaisedButton
        label="Label after"
        labelPosition="after"
        secondary={true}
        icon={<ActionAndroid />}
        style={styles.button}
      />
    </div>
  ))
  .addWithInfo('Icon Variations', () => (
    <div>
      <RaisedButton
        icon={<ActionAndroid />}
        style={styles.button}
      />
      <RaisedButton
        backgroundColor="#a4c639"
        icon={<ActionAndroid color={fullWhite} />}
        style={styles.button}
      />
      <RaisedButton
        href="https://github.com/callemall/material-ui"
        target="_blank"
        secondary={true}
        icon={<FontIcon className="muidocs-icon-custom-github" />}
        style={styles.button}
      />
    </div>
  ))
