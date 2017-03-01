import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Form Fields', module)
  .addWithInfo('Default Form Fields', 'Default form field styles',() => (
    <form>
      <fieldset>
        <legend>Default Form Fields</legend>
        <div><label for="text-input">Text input</label> <input id="text-input" type="text" /></div>
        <div><label for="text-input-placeholder">Text input with placeholder</label> <input id="text-input-placeholder" type="text" placeholder="I'm placeholder text" /></div>
        <div><label for="readonly-input">Readonly input</label> <input id="readonly-input" type="text" value="Read only text input" readonly /></div>
        <div><label for="disabled-input">Disabled input</label> <input id="disabled-input" type="text" value="Disabled text input" disabled /></div>
        <div><label for="required-input">Required input <span class="required">*</span></label> <input id="required-input" type="text" required aria-required="true" /></div>
        <div><label for="email-input">Email input</label> <input id="email-input" type="email" /></div>
        <div><label for="search-input">Search input</label> <input id="search-input" type="search" /></div>
        <div><label for="speech-input">Speech recognition input</label> <input id="speech-input" type="text" name="speech" x-webkit-speech="" /></div>
        <div><label for="tel-input">Tel input</label> <input id="tel-input" type="tel" /></div>
        <div><label for="url-input">URL input</label> <input id="url-input" type="url" placeholder="http://" /></div>
        <div><label for="password-input">Password input</label> <input id="password-input" type="password" value="password" /></div>
        <div><label for="select-field">Select field</label> <select id="select-field"><option selected="selected">Option 01</option><option>Option 02</option></select></div>
        <div><label for="multiple-select-field">Multiple select field</label><select id="multiple-select-field" multiple size="5"><option>Option 1</option><option>Option 2</option><option>Option 3</option><option>Option 4</option><option>Option 5</option><option>Option 6</option><option>Option 7</option><option>Option 8</option><option>Option 9</option><option>Option 10</option></select></div>
        <div><label for="radio-input"><input id="radio-input" type="radio" name="rad" /> Radio input</label></div>
        <div><label for="checkbox-input"><input id="checkbox-input" type="checkbox" /> Checkbox input</label></div>
        <div><label for="file-input">File input</label> <input id="file-input" type="file" /></div>
        <div><label for="textarea">Textarea</label> <textarea id="textarea" cols="30" rows="5" >Textarea text</textarea></div>
        <div><label for="color-input">Color input</label> <input id="color-input" type="color" value="#000000" /></div>
        <div><label for="number-input">Number input</label> <input id="number-input" type="number" value="5" min="0" max="10" /></div>
        <div><label for="range-input">Range input</label> <input id="range-input" type="range" value="0" min="0" max="100" /> <output>0</output>
        {
          //if (document.querySelector) {
          //  document.querySelector('#range-input').onchange = function(e) {
          //    e.target.nextElementSibling.innerText = e.target.value;
          //  }
          //}
        }
        </div>
        <div><label for="date-input">Date input</label> <input id="date-input" type="date" /></div>
        <div><label for="month-input">Month input</label> <input id="month-input" type="month" /></div>
        <div><label for="week-input">Week input</label> <input id="week-input" type="week" /></div>
        <div><label for="time-input">Time input</label> <input id="time-input" type="time" /></div>
        <div><label for="datetime-input">Datetime input</label> <input id="datetime-input" type="datetime" /></div>
        <div><label for="datetime-local-input">Datetime-local input</label> <input id="datetime-local-input" type="datetime-local" /></div>
      </fieldset>
      <input type="submit" value="Submit form" />
    </form>
  ))
  .addWithInfo('Disabled Form Fields', 'Disabled Form Fields', () => (
    <form>
      <fieldset>
        <div><label for="text-input-disabled">Disabled text input</label> <input id="text-input-disabled" type="text" value="Disabled text input" disabled /></div>
        <div><label for="select-field-disabled">Disabled select field</label> <select id="select-field-disabled" disabled><option selected="selected">Option 01</option><option>Option 02</option></select></div>
        <div><label for="file-input-disabled">Disabled file input</label> <input id="file-input-disabled" type="file" disabled /></div>
        <div><label for="radio-input-disabled"><input id="radio-input-disabled" type="radio" name="rad" disabled /> Disabled radio input</label></div>
        <div><label for="checkbox-input-disabled"><input id="checkbox-input-disabled" type="checkbox" disabled /> Disabled checkbox input</label></div>
        <div><label for="color-input-disabled">Disabled color input</label> <input id="color-input-disabled" type="color" value="#000000" disabled /></div>
        <div><label for="range-input-disabled">Disabled range input</label> <input id="range-input-disabled" type="range" disabled /></div>
        <div><label for="number-input-disabled">Disabled number input</label> <input id="number-input-disabled" type="number" value="5" min="0" max="10" disabled /></div>
        <div><label for="textarea-disabled">Disabled textarea</label> <textarea id="textarea-disabled" cols="30" rows="5" disabled>Textarea text</textarea></div>
      </fieldset>
      <input type="submit" value="Submit form" disabled />
    </form>
  ))
  .add('Readonly Form Fields', () => (
    <form>
      <fieldset>
        <div><label for="text-input-readonly">Readonly text input</label> <input id="text-input-readonly" type="text" value="Readonly text input" readonly /></div>
        <div><label for="color-input-readonly">Readonly color input</label> <input id="color-input-readonly" type="color" value="#000000" readonly /></div>
        <div><label for="range-input-readonly">Readonly range input</label> <input id="range-input-readonly" type="range" readonly /></div>
        <div><label for="number-input-readonly">Readonly number input</label> <input id="number-input-readonly" type="number" value="5" min="0" max="10" readonly /></div>
        <div><label for="textarea-readonly">Readonly textarea</label> <textarea id="textarea-readonly" cols="30" rows="5" readonly>Textarea text</textarea></div>
      </fieldset>
      <input type="submit" value="Submit form" />
    </form>
  ));