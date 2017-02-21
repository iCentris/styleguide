import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Breadcrumbs', module)
  .addWithInfo('Breadcrumbs', 'Breadcrumbs', () => (
	<ul className="breadcrumb">
	  <li><a href="#">Home</a></li>
	  <li><a href="#">Library</a></li>
	  <li className="active">Data</li>
	</ul>
  ));
