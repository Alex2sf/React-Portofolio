import { Component } from "react";
import Slide from "react-awesome-reveal";
import Fade from "react-awesome-reveal";

class Resume extends Component {
    getRandomColor() {
        let letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    render() {
        if (!this.props.data) return null;

        const skillmessage = this.props.data.skillmessage;
        const education = this.props.data.education.map(function (education) {
            return (
                <div key={education.school}>
                    <h3>{education.school}</h3>
                    <p className="info">
                        {education.degree} <span>&bull;</span>
                        <em className="date">{education.graduated}</em>
                    </p>
                    <p>{education.description}</p>
                </div>
            );
        });

        const work = this.props.data.work.map(function (work) {
            return (
                <div key={work.company}>
                    <h3>{work.company}</h3>
                    <p className="info">
                        {work.title}
                        <span>&bull;</span> <em className="date">{work.years}</em>
                    </p>
                    <p>{work.description}</p>
                </div>
            );
        });

        const skills = this.props.data.skills.map((skills) => {
            const backgroundColor = this.getRandomColor();
            const className = "bar-expand " + skills.name.toLowerCase();
            const width = skills.level;

            return (
                <li key={skills.name}>
                    <span style={{ width, backgroundColor}} className={className}></span>
                    <em>{skills.name}</em>
                </li>
            );
        });

        return (
            <section id="resume" style={{ backgroundColor: '#f9f9f9', padding: '40px 0' }}>
              {/* Education Section */}
              <Fade duration={1500}>
                <div className="row" style={{ marginBottom: '60px' }}>
                  <div className="six columns" style={{ textAlign: 'center' }}>
                    <h2 style={{ color: '#333', fontSize: '2.5rem', marginBottom: '20px' }}>Education</h2>
                    <div style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                      {education}
                    </div>
                  </div>
        
                  {/* Work Section */}
                  <div className="six columns" style={{ textAlign: 'center' }}>
                    <h2 style={{ color: '#333', fontSize: '2.5rem', marginBottom: '20px' }}>Work</h2>
                    <div style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                      {work}
                    </div>
                  </div>
                </div>
              </Fade>
        
              {/* Skills Section */}
              <Fade duration={1500}>
                <div className="row" style={{ textAlign: 'center', marginBottom: '40px' }}>
                  <div className="twelve columns">
                    <h2 style={{ color: '#333', fontSize: '2.5rem', marginBottom: '20px' }}>Skills</h2>
                    <p style={{ color: '#777', marginBottom: '40px' }}>{skillmessage}</p>
                    <div className="skills-container" style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                      <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                        {skills}
                      </ul>
                    </div>
                  </div>
                </div>
              </Fade>
            </section>
          );

    }
}

export default Resume;