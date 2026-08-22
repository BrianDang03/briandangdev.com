import './HeroSection.css'
import { HeroSectionData } from '../../data/HeroSectionData'

function HeroSection() {
  return (
    <>
      <div className="hero-section">
        <div className="hero-content"> 
          <div className="hero-text"> 
            <h1>{HeroSectionData.title}</h1>
            <h2>{HeroSectionData.jobTitle}</h2>
            <p>
                {HeroSectionData.introduction}
            </p>
          </div>
          <div className="hero-image">
            <img src={HeroSectionData.image} alt={HeroSectionData.imageAlt} />
          </div>
        </div>
      </div>
    </>
  )
}
export default HeroSection