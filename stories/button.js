import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Button } from 'react-bootstrap';

storiesOf('Button', module)
  .addWithInfo('Simple Usage', 'This is basic usage', () => (
    <Button>Default Button</Button>
  ))
  .add('Default', () => (
    <Button>Default Button</Button>
  ))
  .addWithInfo('Primary', 'This is a primary bootstrap button', () => (
    <Button bsStyle="primary">Primary Button</Button>
  ))
  .add('With onClick', () => (
    <Button onClick={action('clicked')}>Click Me</Button>
  ));
