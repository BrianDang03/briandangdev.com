import './HeroSection.css'
import { HeroSectionData } from '../../data/HeroSectionData'

function HeroSection() {
  return (
    <>
      <div className="hero-section">
        <div className="hero-content">  
            <h1>{HeroSectionData.title}</h1>
            <h2>{HeroSectionData.jobTitle}</h2>
            <p>
                {HeroSectionData.introduction}
            </p>
        </div>
      </div>
    </>
  )
}
export default HeroSection