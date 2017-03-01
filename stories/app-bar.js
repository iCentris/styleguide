import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { AppBar } from 'material-ui';
import { muiTheme } from 'storybook-addon-material-ui';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  title: {
    cursor: 'pointer',
  },
};


storiesOf('App Bar', module)
  .addDecorator(muiTheme())
  .addWithInfo('Simple Example','A simple example of AppBar with an icon on the right. By default, the left icon is a navigation-menu.', () => (
    <div>
      <AppBar
        title="Title"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    </div>
  ))
  .addWithInfo('Buttons Example','This example uses an IconButton on the left, has a clickable title through the onTouchTap property, and a FlatButton on the right.', () => (
    <div>
      <AppBar
        title={<span style={styles.title}>Title</span>}
        //onTitleTouchTap={handleTouchTap}
        iconElementLeft={<IconButton><NavigationClose /></IconButton>}
        iconElementRight={<FlatButton label="Save" />}
      />
    </div>
  ))