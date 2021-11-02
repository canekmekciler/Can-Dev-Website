import * as React from "react"

//Images & Components
import "bootstrap/dist/css/bootstrap.min.css"
import { Helmet } from 'react-helmet'
import { Col, Container, Row, ProgressBar, Image} from "react-bootstrap"
import Layout from "../components/layout"
import "aos/dist/aos.css"
import Photo1 from "../images/my-photo.jpg"
import Photo2 from "../images/my-photo2.jpg"
import HtmlIcon from "../images/html5-brands.svg"
import CssIcon from "../images/css3-alt-brands.svg"
import BootstrapIcon from "../images/bootstrap-brands.svg"
import ReactIcon from "../images/react-brands.svg"


// markup
const IndexPage = () => {
  
  return (
    <div style={{fontFamily:"Helvetica"}}>
      <Helmet title="Anasayfa" defer={false} />
      <Layout>

      {/*HERO STARTS*/}

        <section id="main" className="py-5 bg-light">
          <Container>
            <Row>
              <Col lg>
                <h1 className="display-1 fw-bold d-flex h-100 flex-column justify-content-center">
                  Hi, I am Can, a Junior Frontend Developer
                  <a className="btn btn-danger w-25 rounded-0" href="#about" role="button">About Me</a>
                </h1>
              </Col>
              <Col lg>
                <Image src={Photo1} fluid />
              </Col>
            </Row>
          </Container>
        </section>

      {/*HERO ENDS*/}

      {/*ABOUT STARTS*/}

      <section id="about" className="py-5">
          <Container>
            <Row className="py-5">
              <Col lg={7}>
                <h3 style={{letterSpacing:".5rem"}} className="pb-5 text-danger">
                  -ABOUT ME
                </h3>
                <p className="pb-5">
                Hi, I am Can, a Junior Frontend Developer. I'm quick learner about new technologies for Frontend. Always get excited when working on a new project. I am still beginning of my career I know but always try to improve my skills like tireless.
                </p>
              </Col>
              <Col lg={1}>

              </Col>
              <Col lg={4}>
                <h3 style={{letterSpacing:".5rem"}} className="pb-5 text-danger">
                  -SKILLS
                </h3>
                <p>
                  Communication <br />
                  Critical Thinking <br />
                  Creative Solving
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        {/*ABOUT ENDS*/}

        {/*EXPERIENCE ENDS*/}

        <section id="experience" className="py-5 bg-light">
          <Container>
            <Row className="py-5">
              <Col lg={4}>
                <h3 className="pb-5 text-danger">
                  WORK EXPERIENCE
                </h3>
              </Col>
              <Col lg={1}>

              </Col>
              <Col lg={7}>
               <div className="pb-5">
                  <h3 className="fw-bold">
                    Junior Frontend Developer
                  </h3>
                  <p className="lead">DidiLabs  / June 2021 - Present</p>
                  <p className="pt-3">Now I work at DidiLabs as a Junior Frontend Developer. After a year experience as a trainee, finally I became a Junior Developer. I really love working here, because I can work on big projects much more and learn new tons of things. We got great team chemistry here so I love it, I improved my communacation skills here.
                  <br />
                  <b>Technologies: HTML5, CSS3, Bootstrap, React.JS, Gatsby, Zeplin, GitLab</b>
                  </p>
               </div>
               <div className="pb-5">
                  <h3 className="fw-bold">
                    Traniee Frontend Developer
                  </h3>
                  <p className="lead">Nutima Studio  / September 2020 - May 2021</p>
                  <p className="pt-3">After my graduate I have to work at somewhere who can teach me Frontend technologies great, and I found Nutima Studio. I have worked here 9 months and learned new things and practicing these new technologies on real projects. It helps me a lot still.
                  <br />
                  <b>Technologies: HTML5, CSS3, Bootstrap, Gulp, Figma, GitHub</b>
                  </p>
               </div>
               <div>
                  <h3 className="fw-bold">
                    Internship
                  </h3>
                  <p className="lead">SEM  / July 2019 - September 2019</p>
                  <p className="pt-3">I worked here for my University Internship. Actually here was my first company about software that's why I worked hard too much for two months and learned too much thing about software, especially differance between Frontend and Backend. At the end of the Internship, I decided to become a Frontend developer.
                  <br />
                  <b>Technologies: HTML5, CSS3, Photoshop, JQuery</b>
                  </p>
               </div>
              </Col>
            </Row>
            <Row className="py-5">
              <Col lg={4}>
                <h3 className="pb-5 text-danger">
                  EDUCATION
                </h3>
              </Col>
              <Col lg={1}>

              </Col>
              <Col lg={7}>
               <div className="pb-5">
                  <h3 className="fw-bold">
                    Anadolu University
                  </h3>
                  <p className="lead">Bachelor's degree , Management Information Systems  / 2020 - Present</p>
               </div>
               <div className="pb-5">
                  <h3 className="fw-bold">
                    Uludag University
                  </h3>
                  <p className="lead">Associate's degree , Computer Programming / 2018 - 2020</p>
               </div>
               <div>
                  <h3 className="fw-bold">
                    Warsaw University of Technology
                  </h3>
                  <p className="lead">Computer Science / 2017 - 2018 </p>
               </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/*EXPERIENCE ENDS*/}

        {/*SPEECH STARTS*/}

        <section className="bg-danger">
          <Container>
            <Row className="py-5">
              <h1 className="fw-bold text-white">
              “The most important thing is to try and inspire people so that they can be great in whatever they want to do.”
              </h1>
              <p className="text-white lead">
              – Kobe Bryant
              </p>
            </Row>
          </Container>
        </section>

        {/*SPEECH ENDS*/}

        {/*SKILLS STARTS*/}
          <section id="skills" className="py-5">
            <Container>
              <Row className="py-5">
                <Col lg={7}>
                  <h3 style={{letterSpacing:".5rem"}} className="pb-5 text-danger">
                    -SKILLS
                  </h3>
                  <div className="mb-5">
                    <p className="m-0 lead">
                      HTML <Image className="mb-1" width="20" height="20" src={HtmlIcon} fluid />
                    </p>
                    <ProgressBar className="rounded-0" variant="danger" now={80} label={`80%`} />
                  </div>
                  <div className="my-5">
                    <p className="m-0 lead">
                      CSS <Image className="mb-1" width="20" height="20" src={CssIcon} fluid />
                    </p>
                    <ProgressBar className="rounded-0" variant="danger" now={70} label={`70%`} />
                  </div>
                  <div className="my-5">
                    <p className="m-0 lead">
                      BOOTSTRAP <Image className="mb-1" width="20" height="20" src={BootstrapIcon} fluid />
                    </p>
                    <ProgressBar className="rounded-0" variant="danger" now={80} label={`80%`} />
                  </div>
                  <div className="my-5">
                    <p className="m-0 lead">
                      REACT.JS <Image className="mb-1" width="20" height="20" src={ReactIcon} fluid />
                    </p>
                    <ProgressBar className="rounded-0" variant="danger" now={50} label={`50%`} />
                  </div>
                  <div className="my-5">
                    <p className="m-0 lead">
                      GATSBY
                    </p>
                    <ProgressBar className="rounded-0" variant="danger" now={50} label={`50%`} />
                  </div>
                </Col>
                <Col lg={1}>

                </Col>
                <Col lg={4}>
                  <Image src={Photo2} fluid />
                </Col>
              </Row>
            </Container>
          </section>

        {/*SKILLS ENDS*/}
        
      </Layout>
    </div>
  )
}

export default IndexPage