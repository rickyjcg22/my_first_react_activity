import bannerImage from '../photos/banner.jpg'
import profilePhoto from '../photos/about_profile-photo.png'

const About = () => {

    return(
        <div className="About">
            <div className="quote">
                <img src={bannerImage} alt="banner" className="img__banner" width="100%"></img>
                <p className="text__quote">"I am the master of my faith, I am the captain of my soul."</p>
            </div>
            <div className="about__content">
                <h1 className="about__contentH1">The man behind <p className="p__emph">codeWithJay.ph</p></h1>
                <div className="about__contentProfile">
                    <div className="contentProfile__item profilePhoto"><img src={profilePhoto} alt="profile" className="profilePhoto" height="700px"></img></div>
                    <p className="contentProfile__item par">Hi, folks! </p>
                </div>
                ;ldvnsdklvnskl<br/>
                doivhsod
            </div>
        </div>
    )

}

export default About;