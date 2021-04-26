import './style.css';
import UserCard from './UserCard';

function Home(props) {
    return (
        <div class="container">
            <h1>Users At Acme Inc.</h1>
            <UserCard />
        </div>
    );
}

export default Home;