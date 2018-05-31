"use strict";

var _utils = require("./utils.js");

console.log("app running testing");
console.log((0, _utils.square)(4));
console.log((0, _utils.add)(100, 23));
/*class IndecisionApp extends React.Component {
	constructor(props) { //FIRST MENTHOD THAT FIRES.
		super(props);
		this.handleDeletedOptions = this.handleDeletedOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.handleDeleteOption = this.handleDeleteOption.bind(this);
		this.state = {
			options: []
		};
	};
	componentDidMount() { //FIRES AFTER RENDER MENTHOD.
		try {
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);
			if(options){
				this.setState(() => ({options}));
			}
		} catch (e){
			//DO NOTHING AT ALL
			console.log(e);
		}
	}
	componentDidUpdate(preProps, prevState) { //FIRES WHEN A STATE OR PROPS CHANGES
		if (prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);
		}
	}
	componentWillUnmount() {
		console.log('componentWillUnmount');
	}
	handleDeletedOptions() {
		this.setState(() => ({options: []}));
	}
	handleDeleteOption(optionToRemove) { //MULTIPLE LAYER METHOD
		this.setState((state) => ({
			options: state.options.filter((option) => optionToRemove !== option)
		}));
	}
	handlePick() {
		const randomNum = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randomNum];
		alert(option);
	}
	handleAddOption(option) {
		if(!option){
			return 'Enter valid value to add item';
		}else if(this.state.options.indexOf(option) > -1){
			return 'This option already exists';
		}
		this.setState((state) => ({options: state.options.concat([option])}));
	}
	render() {
		const subTitle = 'Put your life in the hands of a computer';
		return (
			<div>
				<Header subtitle={subTitle} />
				<Action
					hasOptions={this.state.options.length > 0}
					handlePick={this.handlePick}
				 />
				<Options
					options={this.state.options}
					handleDeletedOptions={this.handleDeletedOptions}
					handleDeleteOption={this.handleDeleteOption}
				/>
				<AddOptions
					handleAddOption={this.handleAddOption}
				/>
			</div>
		);
	}
}

const Header = (props) => {
	return (
		<div>
			<h1>{props.title}</h1>
			<h2>{props.subtitle}</h2>
		</div>
	);
}
Header.defaultProps = {
	title: 'Indecision'
};

const Action = (props) => {
	return (
		<div>
			<button
				onClick={props.handlePick}
				disabled={!props.hasOptions}
			>
				what should I do?
			</button>
		</div>
	);
}

const Options = (props) => {
	return (
		<div>
			<button onClick={props.handleDeletedOptions}>Remove All</button>
			{props.options.length === 0 && <p>Please add an option to get started!</p>}
			{
				props.options.map((option) => (
					<Option
						key={option}
						optionText={option}
						handleDeleteOption={props.handleDeleteOption}
					/>
				))
			}
		</div>
	);
}

const Option = (props) => {
	return (
		<div>
			<p>{props.optionText}</p>
			<button
				onClick={(e) => {
					props.handleDeleteOption(props.optionText);
				}}
			>
				remove
			</button>
		</div>
	);
}

class AddOptions extends React.Component {
	constructor(props){
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			error: undefined
		}
	}
	handleAddOption(e) {
		e.preventDefault();

		const option = e.target.elements.option.value.trim();
		const error = this.props.handleAddOption(option);

		this.setState(() => ({error: error}));

		if (!error) {
			e.target.elements.option.value = '';
		}
	}
	render() {
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.handleAddOption}>
					<input type="text" name="option"/>
					<button>Add Option</button>
				</form>
			</div>
		);
	}
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));*/
