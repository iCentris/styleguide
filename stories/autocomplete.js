import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import AutoComplete from 'material-ui/AutoComplete';
import { muiTheme } from 'storybook-addon-material-ui';

const styles = {
  title: {
    cursor: 'pointer',
  },
};


storiesOf('Autocomplete', module)
  .addDecorator(muiTheme())
  .addWithInfo('Simple Example','The input is used to create the dataSource, so the input always matches three entries.', () => (
    <div>
      <AutoComplete
        hintText="Type anything"
        dataSource={this.state.dataSource}
        onUpdateInput={this.handleUpdateInput}
      />
      <AutoComplete
        hintText="Type anything"
        dataSource={this.state.dataSource}
        onUpdateInput={this.handleUpdateInput}
        floatingLabelText="Full width"
        fullWidth={true}
      />
    </div>
  ))