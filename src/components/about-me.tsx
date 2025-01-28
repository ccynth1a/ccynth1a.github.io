import Picture from "./picture";

const AboutMe = () => {
  return (
    <>
      <div className="about-me">
        <Picture src="profile.jpg"
          alt="A Chibi Representation of A Deer Fursona"
          classes="icon"
        />
        <div className="info">
          <h2>CCynth1a</h2>
          <p><i>she/her/it/its</i></p>
          <hr />
          <b>
          Computer Science Student<br />
          Certified Deergirl<br />
          Low-Level Developer (C)<br />
          #1 Hater of Javascript Since 2023
          </b>
        </div>
      </div>
    </>
  )
}

export default AboutMe;
