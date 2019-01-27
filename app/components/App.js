import React from 'react';
import {Sidebar} from './Sidebar'
import {Content} from './Content'
import {Graph} from './Graph'

export class App extends React.Component{
  render(){
    return (
    	<div>
        <nav id="sidebar">
		      <Sidebar/>
        </nav>
        <nav id="page-content">
		      <Content name="John"/>
          <Graph/>
        </nav>
      </div>
    );			
  }
}
