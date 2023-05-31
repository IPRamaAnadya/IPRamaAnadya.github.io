import './HomeHeader.scss';
import ScrollAnimation from 'react-animate-on-scroll';

const HomeHeader = () => {
    return (
        <div className='home-header'>
            <div className='content'>
                <img src='https://asset.kompas.com/crops/qEzp1lRjF_h3AOjVv8rhNwzoomU=/0x500:1000x1167/750x500/data/photo/2018/08/19/2853283469.jpg'/>
                <div className='name'>I Putu Rama Anadya</div>
                <div className='major'>Mobile and Front-end Developer</div>
            </div>
        </div>
    )
}

export default HomeHeader