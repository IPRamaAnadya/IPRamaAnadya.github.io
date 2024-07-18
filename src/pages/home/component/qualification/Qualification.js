import './Qualification.scss'
import { useState } from "react";



const Qualification = () => {

    const [qualificationSelected, setQualificationSelected] = useState('education');

    const educations = [
        {
            title: "SMA Negeri 1 Pupuan",
            year: "2015 - 2018",
            place: "Tabanan, Bali",
            majoring: "Science"
        },
        {
            title: "Udayana University",
            year: "2018 - 2022",
            place: "Jimbaran, Bali",
            majoring: "Informatics or Computer Science"
        },
    ]

    const works = [
        {
            title: "Kode Kolektif",
            year: "July 2024 - Now",
            place: "Kuta, Bali",
            majoring: "Mobile Engineer"
        },
        {
            title: "Perusahaan Umum Daerah Kerthi Bali Santhi",
            year: "June 2024 - Now",
            place: "Kuta, Bali",
            majoring: "Mobile Engineer"
        },
        {
            title: "PT. SUM Digital Consulting",
            year: "June 2022 - February 2024",
            place: "Kuta, Bali",
            majoring: "Front-end & Mobile Developer"
        },
        {
            title: "CV. Maiharta",
            year: "September 2022 - January 2024",
            place: "Denpasar, Bali",
            majoring: "Mobile Developer"
        },
        {
            title: "Re:creation, Inc",
            year: "February 2023 - April 2023",
            place: "Shibuya, Tokyo",
            majoring: "Mobile Developer"
        },
    ]

    const data = qualificationSelected === 'education' ? educations : works

    return (
        <div className='home-qualification'>
            <div className='section-title'>
                My <span>Qualification</span> 
            </div>
            <div className='qualification-menus'>
                <div className={(qualificationSelected === 'education') ? 'menu-item active' : 'menu-item'} onClick={() => setQualificationSelected("education")}>
                    <img src=''/>
                    <div>Education</div>
                </div>
                <div className={(qualificationSelected === 'works') ? 'menu-item active' : 'menu-item'} onClick={() => setQualificationSelected("works")}>
                    <img src=''/>
                    <div>Work</div>
                </div>
            </div>
            <div className='qualification-data-container'>
                {data.map(function(item, index) {
                    const left = index % 2 === 1
                    return (
                        <div className='qualification-data'>
                            <div className='left-data data'>
                                <div className="title"> {!left ? item.title : ''} </div>
                                <div className="year"> {!left ? item.year : ''} </div>
                                <small className="place"> {!left ? item.place : ''} </small> 
                                <div className="majoring">{!left ? item.majoring : ''}</div>
                            </div>
                            <div className='dot-line'>
                                <div className='dot'></div>
                                <div className={index === data.length - 1 ? 'line last' : 'line'}></div>
                            </div>
                            <div className='right-data data'>
                                <div className="title"> {left ? item.title : ''} </div>
                                <div className="year"> {left ? item.year : ''} </div>
                                <small className="place"> {left ? item.place : ''} </small> 
                                <div className="majoring">{left ? item.majoring : ''}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Qualification;