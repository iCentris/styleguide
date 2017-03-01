import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Alerts', module)
  .addWithInfo('Alerts', 'Alerts', () => (
  	<div>
		<div className="alert alert-warning">
		  <strong>Warning Message!</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
		</div>

		<div className="alert alert-error">
		  <strong>Error Message!</strong> Numquam quos fuga quam suscipit sapiente perferendis magnam.
		</div>

		<div className="alert alert-success">
		  <strong>Success Message!</strong> Totam officiis dolorum voluptatibus maxime molestiae iste.
		</div>

		<div className="alert alert-info">
		  <strong>Info Message!</strong> Consequatur facere deleniti cumque ducimus maiores nemo.
		</div>
  	</div>
  ));
