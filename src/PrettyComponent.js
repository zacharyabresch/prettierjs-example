import React,{Component} from 'react'

export default class PrettyComponent extends Component{
	constructor ( props){
		super(  props ) ;

		const aSillyArray = ['things', 'stuff','other',1,2,3,4,5,6,7,{even:'an object', tuckedInThere: true}]

		this.state = {why:'is', the : "code so ugly", andCouldnt: `Anyone do anything ${new Date()}`, theData: aSillyArray}
	}

	render() {
		return (
<div>
	<h3>This was ugly!</h3>
		<p>But ... PrettierJS made everything better!
		</p>

		<ul>
{ this.state.theData.map((datum) => {
	return <li>{datum}</li>
})}
		</ul>
</div>
			)
	}
}