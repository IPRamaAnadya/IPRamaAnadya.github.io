import './Skill.scss'

const Skill = () => {
 return (
    <div className='home-skill'>
        <div className='section-title'>
             <span>Development</span> Skills
        </div>
        <div className='skills-wrapper'>
            <div className='skill'>
                <img src='https://developer.apple.com/swift/images/swift-og.png'/>
                <div>Swift</div>
            </div>
            <div className='skill'>
                <img src='https://cms-assets.tutsplus.com/uploads/users/1499/posts/29820/preview_image/kotlin.jpg'/>
                <div>Kotlin</div>
            </div>
            <div className='skill'>
                <img src='https://yt3.googleusercontent.com/ytc/AGIKgqM8zh66fZqGKeTkopHaU9GM4zvyuFnQhXThr37u=s900-c-k-c0x00ffffff-no-rj'/>
                <div>Flutter</div>
            {/* </div>
            <div className='skill'>
                <img src='https://react.dev/images/og-home.png'/>
                <div>React</div>
            </div>
            <div className='skill'>
                <img src='https://e7.pngegg.com/pngimages/666/502/png-clipart-brand-php-logo-computer-file-product-breeze-blue-text.png'/>
                <div>PHP</div>
            </div>
            <div className='skill'>
                <img src='https://images.ctfassets.net/mrop88jh71hl/55rrbZfwMaURHZKAUc5oOW/9e5fe805eb03135b82e962e92169ce6d/python-programming-language.png?w=750&h=750&q=100&fm=png'/>
                <div>Python</div>
            </div> */}
        </div>
        <div className='other-skills'>Other skills</div>
        <div className='skills-wrapper'>
            <div className='skill'>
                <img src='https://play-lh.googleusercontent.com/3aWGqSf3T_p3F6wc8FFvcZcnjWlxpZdNaqFVEvPwQ1gTOPkVoZwq6cYvfK9eCkwCXbRY'/>
                <div>Canva</div>
            </div>
        </div>
    </div>
 )
}

export default Skill