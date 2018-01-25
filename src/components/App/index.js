import React, { Component } from 'react';
import './index.css';
import EventsList from '../EventsList';
import FavoriteList from '../FavoriteList';


class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			data: [
				{
					title: "Концерт Depeche Mode",
					description: "Описание концерта здесь",
					price: 300,
					type: "concert",
					id: 1,
					like: false
				},
				{
					title: "Выставка Модильяни",
					description: "Описание выставки здесь",
					price: 200,
					type: "exhibition",
					id: 2,
					like: false
				},
				{
					title: "Концерт Metallica",
					description: "Описание концерта здесь",
					price: 1000,
					type: "concert",
					id: 3,
					like: false
				},
				{
					title: "Выставка Пикассо",
					description: "Описание выставки здесь",
					price: 1200,
					type: "exhibition",
					id: 4,
					like: false
				},
				{
					title: "Выставка Малевича",
					description: "Описание выставки здесь",
					price: 2200,
					type: "exhibition",
					id: 5,
					like: false
				},
				{
					title: "Выставка Пабло",
					description: "Описание выставки здесь",
					price: 1200,
					type: "exhibition",
					id: 6,
					like: false
				}
			]
		}
	}

	//фильтрация по заголовку
	filterTitle = (e) => {
		const searchQuery = e.target.value.toLowerCase();
		this.setState({
			data: this.state.data.filter((item) => {
				let searchValue = item.title.toLowerCase();
				return searchValue.indexOf(searchQuery) !== -1;
			})
		});
	}
	//фильтрация по типу

	//поставить лайк
	likeChoose = (id) => {
		this.setState({
			data: this.state.data.map((item)=>{
				if (item.id===id){
					return Object.assign({}, item, {like: !item.like});
				}
				return item;
			})
	 })
	}
	//изменённая data для favoriteList
	
	//актуальная data для eventListData

	render() {		
		const eventListData = this.state.data;
		const favoriteData = this.state.data.filter((item) => item.like);

		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">List of events</h1>
				</header>
				<div className="wrapper">
					<EventsList eventListData={eventListData} addToFavorite={this.likeChoose} inputFilter={this.filterTitle}/>
					<FavoriteList favoriteDataProps={favoriteData}/>
				</div>
			</div>
		);
	}
}

export default App;
