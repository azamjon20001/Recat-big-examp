import { Link } from 'react-router-dom'
import { useState } from 'react'
import './header.scss'

const Header = ({ headerActive }) => {
	
	const [token, setToken] = useState(window.localStorage.getItem('sessionToken'))


	function DropDown() {
		document.getElementById('kategore-box').classList.toggle('active');
		document.getElementById('regions').classList.remove('active');
	}

	function SearchMaps() {
		document.getElementById('regions').classList.toggle('active');
		document.getElementById('kategore-box').classList.remove('active');
	}
	

	function CloseSelect() {
		document.getElementById('kategore-box').classList.remove('active');
	}
	function CenterSearch() {
		const CenterInputSearch = document.querySelector('#inputSearch');
		document.getElementById('kategore-box').classList.remove('active');
		document.getElementById('regions').classList.remove('active');
		CenterInputSearch.classList.add('active')
		CenterInputSearch.focus()

		CenterInputSearch.addEventListener('blur', ()=>{

			CenterInputSearch.classList.remove('active')
			CenterInputSearch.value = ''
		})
	}

	
	return (

		<header className="header" id="header-none">

			<div className="header-inner container">
				<div className="header-inner-top">
					<Link to={`/`} className="header-inner-top-logo">
						<svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g opacity="0.9">
								<circle cx="33.5" cy="33.5" r="33.5" fill="#00CF67" />
								<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="67" height="67">
									<circle cx="33.5" cy="33.5" r="33.5" fill="white" />
								</mask>
								<g mask="url(#mask0)">
								</g>
								<path fill-rule="evenodd" clip-rule="evenodd" d="M13 42.1014V21.5887C13 21.4441 13.0624 21.3099 13.1872 21.1859C13.312 21.062 13.4473 21 13.5929 21H17.0565C17.2229 21 17.3633 21.062 17.4777 21.1859C17.5921 21.3099 17.6493 21.4441 17.6493 21.5887V35.0056L21.425 30.6676C21.6746 30.4197 21.9346 30.2958 22.2051 30.2958H25.6999C25.9703 30.2958 26.1575 30.3991 26.2615 30.6056C26.3655 30.8122 26.3343 31.0291 26.1679 31.2563L22.049 35.9972L27.0416 41.7606C27.208 41.9671 27.2392 42.1737 27.1352 42.3803C27.0312 42.5869 26.844 42.6901 26.5736 42.6901H22.3611C22.1738 42.6901 22.0178 42.6075 21.893 42.4423L17.6493 37.0507V42.1014C17.6493 42.246 17.5921 42.3803 17.4777 42.5042C17.3633 42.6282 17.2229 42.6901 17.0565 42.6901H13.5929C13.4473 42.6901 13.312 42.6282 13.1872 42.5042C13.0624 42.3803 13 42.246 13 42.1014ZM32.9703 25.8338C32.4918 26.3089 31.9094 26.5465 31.2229 26.5465C30.5364 26.5465 29.9539 26.3089 29.4755 25.8338C28.997 25.3587 28.7578 24.7803 28.7578 24.0986C28.7578 23.4169 28.997 22.8333 29.4755 22.3479C29.9539 21.8624 30.5364 21.6197 31.2229 21.6197C31.9094 21.6197 32.497 21.8624 32.9859 22.3479C33.4747 22.8333 33.7192 23.4169 33.7192 24.0986C33.7192 24.7803 33.4695 25.3587 32.9703 25.8338ZM28.945 42.1014V30.8845C28.945 30.7192 29.0022 30.5798 29.1166 30.4662C29.2311 30.3526 29.3715 30.2958 29.5379 30.2958H32.9703C33.1367 30.2958 33.2771 30.3526 33.3915 30.4662C33.5059 30.5798 33.5632 30.7192 33.5632 30.8845V42.1014C33.5632 42.246 33.5007 42.3803 33.3759 42.5042C33.2511 42.6282 33.1159 42.6901 32.9703 42.6901H29.5379C29.3923 42.6901 29.2571 42.6282 29.1322 42.5042C29.0074 42.3803 28.945 42.246 28.945 42.1014ZM41.2392 42.6901L35.373 31.1324C35.2689 30.9258 35.2741 30.7347 35.3886 30.5592C35.503 30.3836 35.6746 30.2958 35.9034 30.2958H39.3982C39.6686 30.2958 39.8559 30.4094 39.9599 30.6366L41.8009 34.8507H41.8945L43.8603 30.6366C43.9435 30.4714 44.0371 30.3732 44.1412 30.3423C44.2452 30.3113 44.4324 30.2958 44.7028 30.2958H47.8544C48.0832 30.2958 48.2548 30.3836 48.3692 30.5592C48.4837 30.7347 48.4889 30.9258 48.3848 31.1324L42.4562 42.6901C42.3314 42.8967 42.1545 43 41.9257 43H41.7697C41.5409 43 41.364 42.8967 41.2392 42.6901ZM54.2511 25.8338C53.7727 26.3089 53.1902 26.5465 52.5037 26.5465C51.8172 26.5465 51.2348 26.3089 50.7563 25.8338C50.2779 25.3587 50.0386 24.7803 50.0386 24.0986C50.0386 23.4169 50.2779 22.8333 50.7563 22.3479C51.2348 21.8624 51.8172 21.6197 52.5037 21.6197C53.1902 21.6197 53.7779 21.8624 54.2667 22.3479C54.7556 22.8333 55 23.4169 55 24.0986C55 24.7803 54.7504 25.3587 54.2511 25.8338ZM50.2259 42.1014V30.8845C50.2259 30.7192 50.2831 30.5798 50.3975 30.4662C50.5119 30.3526 50.6523 30.2958 50.8187 30.2958H54.2511C54.4175 30.2958 54.5579 30.3526 54.6724 30.4662C54.7868 30.5798 54.844 30.7192 54.844 30.8845V42.1014C54.844 42.246 54.7816 42.3803 54.6568 42.5042C54.5319 42.6282 54.3967 42.6901 54.2511 42.6901H50.8187C50.6731 42.6901 50.5379 42.6282 50.4131 42.5042C50.2883 42.3803 50.2259 42.246 50.2259 42.1014Z" fill="white" />
							</g>
						</svg>
					</Link>

					<div className="header-inner-top-right">
						<div className="header-inner-top-right-leng">
							<button className="header-inner-top-right-leng__item active" id="ru">Pyc</button>
							<button className="header-inner-top-right-leng__item" id="uz">O'z</button>
						</div>
						<div className="header-inner-top-right-auth">
							<Link to={`/`}>
								<button className="header-inner-top-right-auth__link befor-border">Вход</button>
							</Link>
							<Link to={`/registration`}>
								<button className="header-inner-top-right-auth__link">Регистрация</button>
							</Link>
						</div>
					</div>
				</div>

				<div className="header-inner-bottom">
					<div className="header-inner-bottom-left">

						<div className="header-inner-bottom-left-select kategorya" onClick={DropDown}>
							<span className="header-inner-bottom-left-select__span">Любая категория</span>
						</div>

						<div className="kategore-item" id="kategore-box">
							<button className="kategore-item__text" onClick={CloseSelect}>Автомобили</button>
							<button className="kategore-item__text" onClick={CloseSelect}> Недвижимость</button>
							<button className="kategore-item__text" onClick={CloseSelect}> Электроника</button>
							<button className="kategore-item__text" onClick={CloseSelect}> Работа</button>
							<button className="kategore-item__text" onClick={CloseSelect}> Личные вещи</button>
							<button className="kategore-item__text" onClick={CloseSelect}>  Дом и Сад</button>
							<button className="kategore-item__text" onClick={CloseSelect}> Стройка и ремонт</button>
							<button className="kategore-item__text" onClick={CloseSelect}>  Хобби и Спорт</button>
							<button className="kategore-item__text" onClick={CloseSelect}>  Бизнес и услуги</button>
						</div>

						<div className="header-inner-bottom-left-select iskatt" onClick={CenterSearch}>
							<span className="header-inner-bottom-left-select__span">Что будем искать ?</span>
							<input type="search" id="inputSearch" className="header-inner-bottom-left-select__search" placeholder="Search"/>
						</div>

						<div className="header-inner-bottom-left-select mapss" id="mapss" onClick={SearchMaps}>
							<span className="header-inner-bottom-left-select__span">По всей Узбекистану</span>
						</div>

						<div className="region" id="regions">
							<div className="card">
								<button className="region__text">Андижанская область</button>
								<button className="region__text">Бухарская область</button>
								<button className="region__text">Джизакская область</button>
								<button className="region__text">Каракалпакстан</button>
							</div>
							<div className="card">
								<button className="region__text">Кашкадарьинская область</button>
								<button className="region__text">Навоийская область</button>
								<button className="region__text">Наманганская область</button>
								<button className="region__text">Самаркандская область</button>
							</div>
							<div className="card">
								<button className="region__text">Сурхандарьинская область</button>
								<button className="region__text">Сырдарьинская область</button>
								<button className="region__text">Ташкентская область</button>
								<button className="region__text">Ферганская область</button>
							</div>
							<div className="card">
								<button className="region__text">Хорезмская область</button>
							</div>
						</div>

						<Link to={`search-pages`} className="header-inner-bottom-left-search">Найти</Link>
					</div>
					<div className="header-inner-bottom-right">
						{
							token ? (
								<Link to={`add-ads`} className="right-link">
									<div className="header-inner-bottom-right-item">
										<span className="header-inner-bottom-right-item__span1">+</span>
										<span className="header-inner-bottom-right-item__span2">Добавить обьявления</span>
									</div>
								</Link>
							) : (
								<div className="header-inner-bottom-right-item">
									<span className="header-inner-bottom-right-item__span1">+</span>
									<span className="header-inner-bottom-right-item__span2">Добавить обьявления</span>
								</div>
							)
						}
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header;