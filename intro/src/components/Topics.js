import React from 'react'
import {Link,
Route} from 'react-router-dom'


function Topic({match}){
	return (<h3>{match.params.topicId}</h3>)
}
export default function Topics ({match}) {
	return (

		<div>
		<h2> Topics</h2>

		<ul>
			<li>
				<Link to={`${match.url}/rendering`}>Rendering with React</Link>
			</li>

			<li>
				<Link to={`${match.url}/components`}>Components</Link>
			</li>
			<li>
				<Link to={`${match.url}/props-v-state`}>Props vs State</Link>
			</li>
		</ul>


		<hr/>

		<Route exact path={`${match.url}/:topicId`} component={Topic} />


		</div>)
}