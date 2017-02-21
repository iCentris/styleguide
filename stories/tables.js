import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Tables', module)
  .addWithInfo('Standard Table', 'Standard Table w/ hover effects', () => (
    <div>
      <table className="table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th scope="col">thead tr th</th>
            <th scope="col">thead tr th</th>
            <th scope="col">thead tr th</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Standard Row</td>
            <td>tbody tr td</td>
            <td>tbody tr td</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Standard Row</td>
            <td>tbody tr td</td>
            <td>tbody tr td</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Standard Row</td>
            <td>tbody tr td</td>
            <td>tbody tr td</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Standard Row</td>
            <td>tbody tr td</td>
            <td>tbody tr td</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Standard Row</td>
            <td>tbody tr td</td>
            <td>tbody tr td</td>
          </tr>
        </tbody>
      </table>
    </div>
  ))
  .addWithInfo('Striped Table', 'Striped Table w/ hover effects', () => (
    <div>
      <table className="table-striped table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th scope="col">thead tr th</th>
            <th scope="col">thead tr th</th>
            <th scope="col">thead tr th</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Standard Row</td>
            <td>tbody tr td</td>
            <td>tbody tr td</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Standard Row</td>
            <td>tbody tr td</td>
            <td>tbody tr td</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Standard Row</td>
            <td>tbody tr td</td>
            <td>tbody tr td</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Standard Row</td>
            <td>tbody tr td</td>
            <td>tbody tr td</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Standard Row</td>
            <td>tbody tr td</td>
            <td>tbody tr td</td>
          </tr>
        </tbody>
      </table>
    </div>
  ))
  .addWithInfo('Colored Table Rows', 'Colored Table Rows w/ hover effects', () => (
    <div>
      <table className="table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th scope="col">thead tr th</th>
            <th scope="col">thead tr th</th>
            <th scope="col">thead tr th</th>
          </tr>
        </thead>
        <tbody>
          <tr className="info">
            <td>1</td>
            <td>Info Row</td>
            <td>tbody tr td</td>
            <td>tbody tr td</td>
          </tr>
          <tr className="success">
            <td>2</td>
            <td>Success Row</td>
            <td>tbody tr td</td>
            <td>tbody tr td</td>
          </tr>
          <tr className="warning">
            <td>3</td>
            <td>Warning Row</td>
            <td>tbody tr td</td>
            <td>tbody tr td</td>
          </tr>
          <tr className="danger">
            <td>4</td>
            <td>Danger Row</td>
            <td>tbody tr td</td>
            <td>tbody tr td</td>
          </tr>
          <tr className="active">
            <td>5</td>
            <td>Active Row</td>
            <td>tbody tr td</td>
            <td>tbody tr td</td>
          </tr>
        </tbody>
      </table>
    </div>
  ));