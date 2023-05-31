import './Home.scss';
import HomeHeader from './component/header/HomeHeader';
import HomeAbout from './component/about/HomeAbout';
import Qualification from './component/qualification/Qualification';

const Home = () => {
    return (
        <div className='home'>
            <HomeHeader/>
            <HomeAbout/>
            <Qualification/>
        </div>
    )
}

export default Home