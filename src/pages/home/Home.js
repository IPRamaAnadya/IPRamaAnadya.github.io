import './Home.scss';
import HomeHeader from './component/header/HomeHeader';
import HomeAbout from './component/about/HomeAbout';
import Qualification from './component/qualification/Qualification';
import Skill from './component/skills/Skill.js';

const Home = () => {
    return (
        <div className='home'>
            <HomeHeader/>
            <HomeAbout/>
            <Qualification/>
            <Skill/>
        </div>
    )
}

export default Home