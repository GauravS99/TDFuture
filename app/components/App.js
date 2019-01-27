import React from 'react';
import {Sidebar} from './Sidebar'
import {TitleBar} from './TitleBar'

export class App extends React.Component{
   render(){
     return (
     	 <div>
			<Sidebar/>
			<TitleBar name="John"/>
         </div>
     );			
   }
}
