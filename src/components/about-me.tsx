import Picture from "./picture";

const AboutMe = () => {
  return (
    <>
      <div className="about-me">
        <Picture src="profile.jpg"
          alt="A Chibi Representation of A Deer Fursona"
          position="about-me"
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
          </b><br /><br />

          <i>Welcome To My Page!</i> I'm CCynth1a, a Transgender programmer from the UK. I'm currently a student, but consider myself a programming hobbyist. My interest pretty much exclusively lies in Low-Level systems languages, though I do dip out occasionally to work on web projects with my bitch wife <a href="https://github.com/phlobism">Phoebe</a>. I'm most knowledgeable about C, but do have experience with Rust and Haskell too; I think C will be gone in most new jobs by the time I enter the workforce properly.<br/>
        </div>
      </div>
    </>
  )
}

export default AboutMe;
