import './assets/css/fonts.css';
import './assets/css/index.scss';
import './assets/css/App.css';

import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Careers from './components/pages/Careers';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import MyProfile from './components/pages/MyProfile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: null,
      isQuizActive: false,
      tempJob: null, tempKey: null, tempQuiz: null,
      quizHistory: [],
      pins: {},
      userDB: {
        "friendlyuser13@gmail.com": {
          email: "friendlyuser13@gmail.com",
          password: "hunter2",
          pins: {
            1: {
              "title": "Visual Designer",
              "weights": {
                "1": 1,
                "2": 1,
                "3": 1,
                "4": 1,
                "5": 1
              },
              "bio": "Unlike UX or Product designers, they are more towards specialists than generalists. They take on the job of creating pixel-perfect prototypes that align or remain consistent with the rest of the product. Their main role begins when the production development reaches the Prototyping phase.",
              "img": "/static/media/visual-design.d5a013d4.svg",
              "bullets": [
                "Sub roles include UI (User Interface) designer and Graphic designers.",
                "Focuses on the visual aspect of the product design (I.e. How they look, what they’re going to look like for the users, how will they appeal to the users via outward appearance."
              ],
              "responsibilities": [
                "Create or maintain a library of icons, colors and fonts that would be used throughout the product.",
                "Transforming UX design goals such as signing up for an account into a set of easy to use and visually appealing designs items and much more.",
                "Providing a pleasant and visually attractive user interface and so on to enrich the user’s overall experience.",
                "Collaborate with teams to define user interface requirements.",
                "Present rough drafts to product managers and/or key stakeholders.",
                "Develop prototypes and models to use in products."
              ],
              "requirements": [
                "Portfolio of related works (logos, animations, graphics, etc.)",
                "Proven work experience as a Visual Design, UI Designer or similar role",
                "Hands-on experience with image editing and digital sketch software",
                "BSc degree in Design, Visual Arts or relevant qualifications"
              ],
              "willenjoyif": [
                "You enjoy designing and focusing on the artistic aspect of UX design, using colors, typography, use of space and other graphic design elements/concepts.",
                "Enjoy creating a visual, pixel-perfect mock-up of a product.",
                "Enjoy applying consistent, meaningful and pleasant visuals across a wide range of user flows and contexts."
              ],
              "tasks": [
                "Pixel-Perfect prototypes",
                "Interactive prototypes",
                "Visual style guides",
                "Icon libraries",
                "Design specifications",
                "Branding guidelines or materials to supplement the product (I.e. Creating a layout of what they would like on the finished product)."
              ],
              "skills": [
                "Ability to combine colors, fonts and layouts",
                "Strong aesthetics skills",
                "Attention to visual detail",
                "Ability to meet deadlines while working on team projects"
              ],
              "salary": "59,595"
            },
            9: {
              "title": "Motion Designer",
              "weights": {
                "1": 1,
                "4": 1,
                "19": 1,
                "28": 1,
                "29": 1
              },
              "bio": "While websites and applications are visual products, they aren’t static as there is constant movement and animation happening concurrently as the users scroll through pages and click around menus.",
              "img": "",
              "bullets": [
                "They are the movement and animation specialists in the UX field.",
                "All the subtle motion dynamics that take place when you use a digital product (the way a screen refreshes, the way menu options fade in and out, etc.) are the domain of motion designers."
              ],
              "responsibilities": [
                "Coordinating motion designs with overall UX strategy and research (I.e. Researching how people would like to see their product move and what they don’t like about them).",
                "Creating and testing moving product elements, motion graphics and animations."
              ],
              "requirements": [
                "TODO: MISSING DATA"
              ],
              "willenjoyif": [
                "You enjoy creating fluid movements for navigation and so on to enrich overall user experience with the product.",
                "Create and emphasize with the users on how they perceive the motions on their product."
              ],
              "tasks": [
                "Creating Motion prototypes",
                "Apply the motions of the product (I.e. how they should look and work for the users) to achieve overall user experience and satisfaction"
              ],
              "skills": [
                "TODO: MISSING DATA"
              ],
              "salary": "63,373"
            }
          },
          quizHistory: [
            {
              "date": "6/4/2021",
              "title": "Careers and civics",
              "results": [
                {
                  "title": "UX Unicorn",
                  "weights": {
                    "1": 0.5,
                    "4": 0.5,
                    "9": 0.5,
                    "14": 0.5,
                    "15": 0.5,
                    "18": 0.5,
                    "22": 0.5,
                    "25": 1,
                    "26": 0.5,
                    "27": 1
                  },
                  "bio": "Although the name sounds new and mostly unfamiliar to people, don’t be confused! In the world of start-ups, “Unicorn” refers to those who not only possess the usual skill set for UX design but also have additional skills from other domains, as they can provide multiple values to business with a different skill set (I.e. covering other areas). They can be also considered as programmers who live code the product’s accessibility and functions (I.e. Browser).",
                  "img": "",
                  "bullets": [
                    "It typically refers to an UX designer who’s proficient in design AND frontend development.",
                    "Part of the 5 design thinking processes, plus Frontend development.",
                    "Considered to be rare as only people who are talented enough to do Frontend work are considered to be one.",
                    "In charge of the entire design process, and translate their designs into live code.",
                    "Shares similar traits to UX designer and UX engineer, thus is a combination of both. Therefore acts concurrently to the aforementioned two roles at once."
                  ],
                  "responsibilities": [
                    "Carries the same responsibilities as UX designer.",
                    "Develop live frontend prototypes, which can be used to test on users and gather realistic results for more data.",
                    "Implementing Frontend code of design (I.e. Focusing on the browser outlook).",
                    "User research usability testing, journey mapping and experience mapping tasks",
                    "Data analytics and behavioral insights",
                    "Interactive prototyping",
                    "Development collaboration",
                    "Visual design and creativity "
                  ],
                  "requirements": [
                    "Coding and technical knowledge to design for feasibility"
                  ],
                  "willenjoyif": [
                    "While it is considered to be the toughest and most complicated role, it can be achieved if you can juggle between UX design and Frontend coding, and carry strong knowledge for both roles. It is a viable option, but the least pursued role."
                  ],
                  "tasks": [
                    "Performs similar tasks to a UX designer",
                    "Providing Frontend prototypes and the code that is ready for launch."
                  ],
                  "skills": [
                    "Design, graphic design, visual design, and coding",
                    "Ability to not only design and prototype interfaces, but can also build them as well",
                    "Psychology and the ability to empathize with users",
                    "Creative mind"
                  ],
                  "salary": "94,167"
                },
                {
                  "title": "Visual Designer",
                  "weights": {
                    "1": 1,
                    "2": 1,
                    "3": 1,
                    "4": 1,
                    "5": 1
                  },
                  "bio": "Unlike UX or Product designers, they are more towards specialists than generalists. They take on the job of creating pixel-perfect prototypes that align or remain consistent with the rest of the product. Their main role begins when the production development reaches the Prototyping phase.",
                  "img": "/static/media/visual-design.d5a013d4.svg",
                  "bullets": [
                    "Sub roles include UI (User Interface) designer and Graphic designers.",
                    "Focuses on the visual aspect of the product design (I.e. How they look, what they’re going to look like for the users, how will they appeal to the users via outward appearance."
                  ],
                  "responsibilities": [
                    "Create or maintain a library of icons, colors and fonts that would be used throughout the product.",
                    "Transforming UX design goals such as signing up for an account into a set of easy to use and visually appealing designs items and much more.",
                    "Providing a pleasant and visually attractive user interface and so on to enrich the user’s overall experience.",
                    "Collaborate with teams to define user interface requirements.",
                    "Present rough drafts to product managers and/or key stakeholders.",
                    "Develop prototypes and models to use in products."
                  ],
                  "requirements": [
                    "Portfolio of related works (logos, animations, graphics, etc.)",
                    "Proven work experience as a Visual Design, UI Designer or similar role",
                    "Hands-on experience with image editing and digital sketch software",
                    "BSc degree in Design, Visual Arts or relevant qualifications"
                  ],
                  "willenjoyif": [
                    "You enjoy designing and focusing on the artistic aspect of UX design, using colors, typography, use of space and other graphic design elements/concepts.",
                    "Enjoy creating a visual, pixel-perfect mock-up of a product.",
                    "Enjoy applying consistent, meaningful and pleasant visuals across a wide range of user flows and contexts."
                  ],
                  "tasks": [
                    "Pixel-Perfect prototypes",
                    "Interactive prototypes",
                    "Visual style guides",
                    "Icon libraries",
                    "Design specifications",
                    "Branding guidelines or materials to supplement the product (I.e. Creating a layout of what they would like on the finished product)."
                  ],
                  "skills": [
                    "Ability to combine colors, fonts and layouts",
                    "Strong aesthetics skills",
                    "Attention to visual detail",
                    "Ability to meet deadlines while working on team projects"
                  ],
                  "salary": "59,595"
                },
                {
                  "title": "UX Researcher",
                  "weights": {
                    "5": 1,
                    "6": 1,
                    "7": 1,
                    "8": 1,
                    "9": 1,
                    "25": 1,
                    "26": 1
                  },
                  "bio": "Just like Product designers, they’re specialists in terms of their skill set, as they are focused on utilizing qualitative and quantitative research methods to provide information about users to other designers to inform them about the design they’re working towards and how it matches up to the user’s needs, etc. They are commonly more known as user researchers or simply researchers.",
                  "img": "/static/media/ux-researcher.b6e7f4a7.svg",
                  "bullets": [
                    "They focus on three of the five design thinking processes: Emphasize, Define and Test.",
                    "As they’re part of and involved in the first design process, they focus on emphasizing with the users to gain holistic understanding of their needs and help them define the problems they have, which calls for specific designs  that are needed to solve them.",
                    "They also are very much involved in the testing process to help validate and improve designs to ensure they closely follow the information that they have gathered for better accuracy."
                  ],
                  "responsibilities": [
                    "Gain a rich and full understanding of the users through Qualitative research methods (I.e. Interviews, User observation and Field studies).",
                    "Utilizing Quantitative research to piece together significant or accurate specific traits of the users through Card sorting and Survey methods.",
                    "Making use of research information gathered to synthesize their key points and create design proposals based on them.",
                    "Advocate for users needs and perspectives towards internal organization such as stakeholders, designers, developers, marketers and executives."
                  ],
                  "requirements": [
                    "TODO: MISSING DATA"
                  ],
                  "willenjoyif": [
                    "You have strong interest in Human psychology and the study of people (I.e. behaviors, traits, characteristics, etc.)",
                    "You often step in the shoes of others to emphasize with them in their perspectives and problems. (I.e. Understanding other people's concerns).",
                    "You are versed in the field of psychology and know the ins and outs of it.",
                    "Love generating and analyzing research data."
                  ],
                  "tasks": [
                    "User Research reports (Qualitative and Quantitative research)",
                    "Utilizing User Research methods to gather data about the users",
                    "Creating User personas, Journey maps, Stories, Usability report, User testing reports and etc.",
                    "Heuristic evaluation reports"
                  ],
                  "skills": [
                    "Knowledge of marketing, cognitive science, psychology, economics or information science, and a solid understanding of user experience design",
                    "User-centric design practices",
                    "Excellent communication skills and empathy of user",
                    "Ability to collaborate with different teams",
                    "Knowledge of industry tools such as presentation programs, UX design programs, and analytics tracking tools"
                  ],
                  "salary": "67,082"
                }
              ],
              "questions": {
                "1": {
                  "message": "I have experience using digital design tools (Adobe Photoshop, Illustrator).",
                  "choice": 4
                },
                "2": {
                  "message": "I focus on the pictures when reading articles or books.",
                  "choice": 2
                },
                "3": {
                  "message": "A website's color palette is really important to me.",
                  "choice": 5
                },
                "4": {
                  "message": "I am an artistic type of person.",
                  "choice": 4
                },
                "5": {
                  "message": "I enjoy arranging and rearranging my things so they are organized.",
                  "choice": 5
                },
                "6": {
                  "message": "I enjoy doing research.",
                  "choice": 2
                },
                "7": {
                  "message": "I enjoy analyzing data using statistics.",
                  "choice": 2
                },
                "8": {
                  "message": "I would rather be interviewing people than working by myself.",
                  "choice": 4
                },
                "9": {
                  "message": "I enjoy collecting data.",
                  "choice": 3
                },
                "10": {
                  "message": "I tend to think of new inventions.",
                  "choice": 4
                },
                "11": {
                  "message": "I like to think of how I can make things more to appealing others.",
                  "choice": 4
                },
                "12": {
                  "message": "I always think of how I can improve on something I'm using or doing.",
                  "choice": 0
                },
                "13": {
                  "message": "I focus on the small details.",
                  "choice": 5
                },
                "14": {
                  "message": "I make mind maps to help me sort out my ideas.",
                  "choice": 4
                },
                "15": {
                  "message": "I like thinking of solutions to help people.",
                  "choice": 4
                },
                "16": {
                  "message": "I enjoy being a part of the whole solution-making process.",
                  "choice": 2
                },
                "17": {
                  "message": "I am able to pinpoint what issues different people have.",
                  "choice": 4
                },
                "18": {
                  "message": "I enjoy writing.",
                  "choice": 2
                },
                "19": {
                  "message": "I enjoy storytelling.",
                  "choice": 5
                },
                "20": {
                  "message": "I enjoy book-keeping and keeping track of records.",
                  "choice": 1
                },
                "21": {
                  "message": "I enjoy setting guidelines and rules.",
                  "choice": 2
                },
                "22": {
                  "message": "I have some form of coding knowledge / experience (HTML, CSS, Python, Javascript).",
                  "choice": 4
                },
                "23": {
                  "message": "I enjoy programming.",
                  "choice": 2
                },
                "24": {
                  "message": "I enjoy testing and debugging code.",
                  "choice": 2
                },
                "25": {
                  "message": "I enjoy the social sciences (psychology, anthropology).",
                  "choice": 5
                },
                "26": {
                  "message": "I like working with others.",
                  "choice": 5
                },
                "27": {
                  "message": "I am someone who focuses on the whole picture.",
                  "choice": 5
                },
                "28": {
                  "message": "I have experience using video-editing software.",
                  "choice": 2
                },
                "29": {
                  "message": "I have experience animating.",
                  "choice": 5
                }
              }
            }
          ]
        }
      }
    }
  }
  render() {
    return (
      <Router>
        <div id="app">
          <Header global={this} />
          <Route exact path="/"><Home global={this}/></Route>
          <Route path="/careers"><Careers global={this}/></Route>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/my-profile"><MyProfile global={this}/></Route>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
