import users from './users';

function UserCard(props) {
    return users.map(user => {
        let img_url = user.picture.medium;
        let name = user.name.title + ' ' + user.name.first + ' ' + user.name.last;
        let email = user.email;

        return <div class="card">
			<img src={img_url} alt="profile"/>
			<div class="user-info">
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
    });
}

export default UserCard;
