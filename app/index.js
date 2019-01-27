import React from 'react';
import ReactDOM from 'react-dom';

import {App} from './components/App';

import './styles/styles.css';
import './styles/reset.css';

  bills = require("./toInclude/bills/model.json");
// let entertainment = require("./toInclude/entertainment/model.json");
// let food = require("./toInclude/food/model.json");
// let groc = require("./toInclude/groceries/model.json");
// let inc = require("./toInclude/income/model.json");
// let mis = require("./toInclude/miscellaneous/model.json");

//import "./toInclude/bills/model.json";


ReactDOM.render(<App/>, document.getElementById('app'));