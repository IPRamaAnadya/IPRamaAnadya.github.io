import './HomeHeader.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import profileImage from './../../../../assets/images/profile.png';

const HomeHeader = () => {
    return (
        <div className='home-header'>
            <div className='content'>
                <img src={profileImage} alt='profile'/>
                <div className='name'>I Putu Rama Anadya</div>
                <div className='major'>Mobile Engineer</div>
            </div>
        </div>
    )
}

export default HomeHeader