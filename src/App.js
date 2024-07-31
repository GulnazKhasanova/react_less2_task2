
import styles from './App.module.css'
import {useState} from 'react';

export const App = () => {

	let isValueVaild = true;

	const[value,setValue] = useState('');
	const[list, setList] = useState([]);
	const[error, setError] = useState('');


	const onInputButtonClick = () => {
		let promptValue = prompt("Ввести новое");
		if(promptValue.length >= 3) {
			setValue(promptValue);
			setError(updatedError =>updatedError ='');
			isValueVaild = true;
		}
		else {
			setError('Введенное сообщение должно содержать минимум 3 символа');
			isValueVaild = false;
		}


	}

	const onAddButtonClick = () => {
		let id =  Date.now();
		const updatedList = [...list, { id, value }]
		setList(updatedList);
		setValue(updatedValue => (updatedValue = ''));
		setError(updatedError => (updatedError= ''))
	}

return 	<div className={styles.app}>
			<h1 className={styles['page-heading']}></h1>
		<p className={styles['no-margin-text']}>
		Текущее значение <code>value</code>: "<output className={styles['current-value']}>{value}</output>"
		</p>
		{error !== '' && <div className={styles.error}>{error}</div>}
		<div className={styles['buttons-container']}>
		<button className={styles.button} onClick = {onInputButtonClick}>Ввести новое</button>
		<button className={styles.button} disabled={!isValueVaild} onClick={onAddButtonClick}>Добавить в список</button>
		</div>
		<div className={styles['list-container']}>
		<h2 className={styles['list-heading']}>Список:</h2>
		<p className={styles['no-margin-text']}>Нет добавленных элементов</p>
		<ul className={styles.list}>
		{list.map((value) =>  <li key={value.id} className={styles['list-item']}>{value.value}</li>)}
		</ul>
		</div>
		</div>
}




