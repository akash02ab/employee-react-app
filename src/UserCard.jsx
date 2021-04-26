

function UserCard(props) {
    let {title, first, last} = props.name;
    let email = props.email;
    let medium = props.avatar;
	return (
		<div class="card">
			<img src={medium} alt="profile" />
			<div class="user-info">
				<h2>{`${title} ${first} ${last}`}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default UserCard;




