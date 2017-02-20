import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Lists', module)
  .addWithInfo('Definition List', 'Definition List', () => (
    <dl>
      <dt>Description name</dt>
      <dd>Description value</dd>
      <dt>Description name</dt>
      <dd>Description value</dd>
      <dd>Description value</dd>
      <dt>Description name</dt>
      <dt>Description name</dt>
      <dd>Description value</dd>
    </dl>
  ))
  .addWithInfo('Ordered List', 'Ordered List', () => (
    <ol>
      <li>list item 1</li>
      <li>list item 1
        <ol>
          <li>list item 2</li>
          <li>list item 2
            <ol>
              <li>list item 3</li>
              <li>list item 3</li>
            </ol>
          </li>
          <li>list item 2</li>
          <li>list item 2</li>
        </ol>
      </li>
      <li>list item 1</li>
      <li>list item 1</li>
    </ol>
  ))
  .addWithInfo('Unordered List', 'Unordered List', () => (
    <ul>
      <li>list item 1</li>
      <li>list item 1
        <ul>
          <li>list item 2</li>
          <li>list item 2
            <ul>
              <li>list item 3</li>
              <li>list item 3</li>
            </ul>
          </li>
          <li>list item 2</li>
          <li>list item 2</li>
        </ul>
      </li>
      <li>list item 1</li>
      <li>list item 1</li>
    </ul>
  ))
  .addWithInfo('Details', 'Details', () => (
    <div>
      <details open>
        <summary>More info</summary>
        <div>
          <p>Additional information</p>
          <ul>
            <li>Point 1</li>
            <li>Point 2</li>
          </ul>
        </div>
      </details>
      <details>
        <summary>More info</summary>
        <div>
          <p>Additional information</p>
          <ul>
            <li>Point 1</li>
            <li>Point 2</li>
          </ul>
        </div>
      </details>
      <details>
        <summary>More info</summary>
        <div>
          <p>Additional information</p>
          <ul>
            <li>Point 1</li>
            <li>Point 2</li>
          </ul>
        </div>
      </details>
    </div>
  ));