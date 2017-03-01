import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Media', module)
  .addWithInfo('Default Image', 'Default Image', () => (
  	<div>
  		<img src="http://placehold.it/240x240" alt="Image alt text 3" />
	</div>
  ))
  .addWithInfo('Linked Image', 'Linked Image', () => (
  	<div>
  		<a href="#"><img src="http://placehold.it/240x240" alt="Image alt text 4" /></a>
	</div>
  ))
  .addWithInfo('Missing Image', 'Missing Image', () => (
  	<div>
  		<img alt="This is an example of a missing image" />
	</div>
  ))
  .addWithInfo('Figure', 'Figure', () => (
  	<div>
		<figure>
		  <img src="http://placehold.it/240x240" alt="Image alt text 1" />
		  <figcaption>Figcaption content</figcaption>
		</figure>

		<figure>
		  <img src="http://placehold.it/240x240" alt="Image alt text 2" />
		  <figcaption>
		    <h4>Figure Title</h4>
		    Figcaption content
		  </figcaption>
		</figure>
	</div>
  ))
  .addWithInfo('Picture', 'Picture', () => (
  	<div>
		<picture>
		  <source media="(min-width: 60em)" srcset="http://placehold.it/600x600" />
		  <source media="(min-width: 40em)" srcset="http://placehold.it/300x300" />
		  <source srcset="http://placehold.it/150x150" />
		  <img src="http://placehold.it/150x150" alt="Image alt text 5" />
		</picture>
	</div>
  ))
  .addWithInfo('SVG', 'SVG', () => (
  	<div>
		<svg width="200px" height="200px">
		  <circle cx="100" cy="100" r="100" fill="#ff0000" />
		</svg>
	</div>
  ))
  .addWithInfo('Video', 'Video', () => (
	<div className="sg-video">
	  <video id="video1" controls preload poster="http://sandbox.thewikies.com/vfe-generator/images/big-buck-bunny_poster.jpg" width="640" height="360">
	    <source id="mp4" src="http://media.w3.org/2010/05/bunny/trailer.mp4" type="video/mp4" />
	    <source id="ogv" src="http://media.w3.org/2010/05/bunny/trailer.ogv" type="video/ogg" />
	    <p>Your user agent does not support the HTML5 Video element.</p>
	  </video>
	  <label className="sg-visually-hidden" for="video1">Video of Big Buck Bunny</label>
	</div>
  ))
  .addWithInfo('Missing Video', 'Missing Video', () => (
  	<div>
		<video id="video2" controls></video>
		<label className="sg-visually-hidden" for="video2">Missing video</label>
	</div>
  ))
  .addWithInfo('Audio', 'Audio', () => (
	<audio controls>
	  <source src="http://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.mp4" type='audio/mp4' />
	  <source src="http://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.oga" type='audio/ogg; codecs=vorbis' />
	  <p>Your user agent does not support the HTML5 Audio element.</p>
	</audio>
  ))
  .addWithInfo('Missing Audio', 'Missing Audio', () => (
	<audio controls></audio>
  ));
