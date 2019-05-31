import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App.js';
import {cleanup, render} from '@testing-library/react';

afterEach(cleanup);

test('it renders App', () => {
  const {getByTitle} = render(<App />);
  const app = getByTitle('app-container');
  expect(app).toBeDefined();
});
