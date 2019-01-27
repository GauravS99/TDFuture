import React from 'react';
import {Sidebar} from './Sidebar'
import {Content} from './Content'

export class App extends React.Component{
   render(){
     return (
     	 <div>
			<Sidebar/>
			<Content name="John"/>
         </div>
     );			
   }
}
