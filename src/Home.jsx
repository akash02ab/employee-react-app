import "./style.css";
import UserCard from "./UserCard";
import users from "./users";

function Home() {
	return (
		<div class="outer-one">
			<h1>Users At Acme Inc.</h1>
			<div class="container">
				{users.map((user) => (
					<UserCard
						name={user.name}
						email={user.email}
						avatar={user.picture.medium}
					/>
				))}
			</div>
		</div>
	);
}

export default Home;
