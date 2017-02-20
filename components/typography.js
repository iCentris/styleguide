import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Typography', module)
  .addWithInfo('Font Stacks', 'Font Stacks', () => (
    <div>
      <dl>
        <dt>Primary Font:</dt>
        <dd>"Lato", "Helvetica", Helvetica, Arial, sans-serif;</dd>

        <dt>Primary Font Italic:</dt>
        <dd>"Lato", "Helvetica", Helvetica, Arial, sans-serif;</dd>

        <dt>Primary Font Bold:</dt>
        <dd>"Lato", "Helvetica", Helvetica, Arial, sans-serif;</dd>

        <dt>Secondary Font:</dt>
        <dd>"Palatino Linotype", "Palatino", Georgia, Times, "Times New Roman", serif;</dd>

        <dt>Secondary Font Italic:</dt>
        <dd>"Palatino Linotype", "Palatino", Georgia, Times, "Times New Roman", serif;</dd>

        <dt>Secondary Font Bold:</dt>
        <dd>"Palatino Linotype", "Palatino", Georgia, Times, "Times New Roman", serif;</dd>
      </dl>
    </div>
  ))
  .addWithInfo('Headers and Body Copy', 'Headers and Body Copy', () => (
    <div>
      <h1>H1 with <small>small text</small> and a <a href="#">link</a></h1>
      <h2>H2 with <small>small text</small> and a <a href="#">link</a></h2>
      <h3>H3 with <small>small text</small> and a <a href="#">link</a></h3>
      <h4>H4 with <small>small text</small> and a <a href="#">link</a></h4>
      <h5>H5 with <small>small text</small> and a <a href="#">link</a></h5>
      <h6>H6 with <small>small text</small> and a <a href="#">link</a></h6>

      <p>Body Copy / Paragraph Text</p>
      <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
      <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
    </div>
  ))
  .addWithInfo('Blockquotes', 'Blockquotes', () => (
    <div>
      <div className="bs-component">
        <blockquote>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
        </blockquote>
      </div>
      <div className="bs-component">
        <blockquote class="pull-right">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
          <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
        </blockquote>
      </div>
    </div>
  ))
  .addWithInfo('Text Elements', 'Text Elements', () => (
    <div>
      <p>The <a href="#">a element</a> example</p>
      <p>The <abbr>abbr element</abbr> and an <abbr title="Abbreviation">abbr</abbr> element with title examples</p>
      <p>The <b>b element</b> example</p>
      <p>The <cite>cite element</cite> example</p>
      <p>The <code>code element</code> example</p>
      <p>The <em>em element</em> example</p>
      <p>The <del>del element</del> example</p>
      <p>The <dfn>dfn element</dfn> and <dfn title="Title text">dfn element with title</dfn> examples</p>
      <p>The <i>i element</i> example</p>
      <p>The <ins>ins element</ins> example</p>
      <p>The <kbd>kbd element</kbd> example</p>
      <p>The <mark>mark element</mark> example</p>
      <p>The <q>q element</q> example</p>
      <p>The <q>q element <q>inside</q> a q element</q> example</p>
      <p>The <s>s element</s> example</p>
      <p>The <samp>samp element</samp> example</p>
      <p>The <small>small element</small> example</p>
      <p>The <span>span element</span> example</p>
      <p>The <strong>strong element</strong> example</p>
      <p>The <sub>sub element</sub> example</p>
      <p>The <sup>sup element</sup> example</p>
      <p>The <u>u element</u> example</p>
      <p>The <var>var element</var> example</p>
    </div>
  ))
  .addWithInfo('Preformatted Text', 'Preformatted Text', () => (
    <div>
      <pre>
      P R E F O R M A T T E D T E X T
      ! " # $ % &amp; ' ( ) * + , - . /
      0 1 2 3 4 5 6 7 8 9 : ; &lt; = &gt; ?
      @ A B C D E F G H I J K L M N O
      P Q R S T U V W X Y Z [ \ ] ^ _
      ` a b c d e f g h i j k l m n o
      p q r s t u v w x y z 
      </pre>

      <h3>Pre Code</h3>
      <pre><code>&lt;html>
        &lt;head>
        &lt;/head>
        &lt;body>
            &lt;div class="main"> &lt;div>
        &lt;/body>
      &lt;/html></code></pre>
    </div>
  ))
  .addWithInfo('Address', 'Address', () => (
    <address>
      Company Name, Inc.<br/>
      811 7th Ave, Suite 700<br/>
      Manhattan, NY 10019<br/>
      USA
    </address>
  ))
  .addWithInfo('Time', 'Time', () => (
    <p>Remember, remember the <time datetime="1605-11-05">5<sup>th</sup> of November</time></p>
  ));

