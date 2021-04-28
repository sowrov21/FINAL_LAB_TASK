

export default function Diary({title, id, date, details, deleteInfo}){
	return (
		<div className='usermain'>
			<h3>Title: {title}</h3>
			<p>
				ID: {id} <br/>
				Date: {date} <br/>
				Details: {details} <br/>
			</p>			
			<button onClick={()=>deleteInfo(id)}>Delete</button>
		</div>
	)
};