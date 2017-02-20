import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { Button } from 'react-bootstrap';

storiesOf('Buttons', module)
  .addWithInfo('Simple Usage', 'This is basic usage', () => (
    <Button>Default Button</Button>
  ))
  .addWithInfo('Color Variations', 'These are the main color variations, based on the core color scheme.', () => (
    <div>
      <button className="primary">Primary</button><br/>
      <button className="success">Success</button><br/>
      <button className="info">Info</button><br/>
      <button className="warning">Warning</button><br/>
      <button className="danger">Danger</button><br/>
    </div>
  ))
  .addWithInfo('Type Variations', 'Different button types', () => (
    <div>
      <input type="button" value="Input Type=Button" /><br/>
      <input type="reset" value="Input Type=Reset" /><br/>
      <input type="submit" value="Input Type=Submit" /><br/>
      <input type="submit" value="Input Type=Submit, Disabled" disabled /><br/><br/>
      <button>Button</button><br/>
      <button type="button">Button Type=Button</button><br/>
      <button type="reset">Button Type=Reset</button><br/>
      <button type="submit">Button Type=Submit</button><br/>
      <button type="button" disabled>Button Type=Button, Disabled</button><br/><br/>
      <a className="btn">Anchor Tag class=btn</a>
    </div>
  ))
  .addWithInfo('Style Variations', 'Styles for particular usage', () => (
    <div>
        <button type="button" className="btn btn-lg btn-block">Block-level button</button><br/><br/>

        <div className="btn-group btn-group-justified">
          <a href="#" className="btn">Left</a>
          <a href="#" className="btn">Middle</a>
          <a href="#" className="btn">Right</a>
        </div><br/><br/>

        <div className="btn-toolbar">
          <div className="btn-group">
            <button type="button" className="btn">1</button>
            <button type="button" className="btn">2</button>
            <button type="button" className="btn">3</button>
          </div>
        </div><br/><br/>

        <div className="btn-group">
          <div className="btn-group open">
            <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
              Dropdown
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu">
              <li><a href="#">Dropdown link</a></li>
              <li><a href="#">Dropdown link</a></li>
              <li><a href="#">Dropdown link</a></li>
             </ul>
          </div>
        </div><br/><br/>
      
        <div className="btn-group-vertical">
          <button type="button" className="btn">Button</button>
          <button type="button" className="btn">Button</button>
          <button type="button" className="btn">Button</button>
        </div><br/><br/>

        <button type="button" className="btn btn-lg">Large button</button>
        <button type="button" className="btn">Default button</button>
        <button type="button" className="btn btn-sm">Small button</button>
        <button type="button" className="btn btn-xs">Mini button</button>
    </div>
  ))
  .addWithInfo('Primary Bootstrap', 'This is a primary bootstrap button', () => (
    <Button bsStyle="primary">Primary Button</Button>
  ))
  .add('With onClick', () => (
    <Button onClick={action('clicked')}>Click Me</Button>
  ));
