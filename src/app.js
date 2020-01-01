// install --> import --> use
import React from 'react';
import ReactDOM from 'react-dom';
import PunkBeerApp from './components/PunkBeerApp';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import 'normalize-css/normalize.css';
import './styles/styles.scss'


ReactDOM.render(<PunkBeerApp />, document.getElementById('app'));
