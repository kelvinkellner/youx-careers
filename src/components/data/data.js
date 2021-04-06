import VisualDesignImg from '../../assets/graphics/visual-design.svg';
import UXEngineerImg from '../../assets/graphics/ux-engineer.svg';
import UXResearcherImg from '../../assets/graphics/ux-researcher.svg';

const q = (msg) => ({
    message: msg,
    choice: 0
});

const job = (title, weights, bio, img, bullets, responsibilities, requirements, willenjoyif, tasks, skills, salary) => ({
    title: title,
    weights: weights,
    bio: bio,
    img: img,
    bullets: bullets,
    responsibilities: responsibilities,
    requirements: requirements,
    willenjoyif: willenjoyif,
    tasks: tasks,
    skills: skills,
    salary: salary
});

const questions = {
     1: q("I have experience using digital design tools (Adobe Photoshop, Illustrator)."),
     2: q("I focus on the pictures when reading articles or books."),
     3: q("A website's color palette is really important to me."),
     4: q("I am an artistic type of person."),
     5: q("I enjoy arranging and rearranging my things so they are organized."),
     6: q("I enjoy doing research."),
     7: q("I enjoy analyzing data using statistics."),
     8: q("I would rather be interviewing people than working by myself."),
     9: q("I enjoy collecting data."),
    10: q("I tend to think of new inventions."),
    11: q("I like to think of how I can make things more to appealing others."),
    12: q("I always think of how I can improve on something I'm using or doing."),
    13: q("I focus on the small details."),
    14: q("I make mind maps to help me sort out my ideas."),
    15: q("I like thinking of solutions to help people."),
    16: q("I enjoy being a part of the whole solution-making process."),
    17: q("I am able to pinpoint what issues different people have."),
    18: q("I enjoy writing."),
    19: q("I enjoy storytelling."),
    20: q("I enjoy book-keeping and keeping track of records."),
    21: q("I enjoy setting guidelines and rules."),
    22: q("I have some form of coding knowledge / experience (HTML, CSS, Python, Javascript)."),
    23: q("I enjoy programming."),
    24: q("I enjoy testing and debugging code."),
    25: q("I enjoy the social sciences (psychology, anthropology)."),
    26: q("I like working with others."),
    27: q("I am someone who focuses on the whole picture."),
    28: q("I have experience using video-editing software."),
    29: q("I have experience animating.")
};
const jobs = {
   1: {
         title: "Visual Designer",
         weights: {1: 1, 2: 1, 3: 1, 4: 1, 5: 1},
         bio: "Unlike UX or Product designers, they are more towards specialists than generalists. They take on the job of creating pixel-perfect prototypes that align or remain consistent with the rest of the product. Their main role begins when the production development reaches the Prototyping phase.",
         img: VisualDesignImg,
         bullets: ["Sub roles include UI (User Interface) designer and Graphic designers.", "Focuses on the visual aspect of the product design (I.e. How they look, what they’re going to look like for the users, how will they appeal to the users via outward appearance." ],
         responsibilities: ["Create or maintain a library of icons, colors and fonts that would be used throughout the product.", "Transforming UX design goals such as signing up for an account into a set of easy to use and visually appealing designs items and much more.", "Providing a pleasant and visually attractive user interface and so on to enrich the user’s overall experience.", "Collaborate with teams to define user interface requirements.", "Present rough drafts to product managers and/or key stakeholders.", "Develop prototypes and models to use in products."],
         requirements: ["Portfolio of related works (logos, animations, graphics, etc.)", "Proven work experience as a Visual Design, UI Designer or similar role", "Hands-on experience with image editing and digital sketch software", "BSc degree in Design, Visual Arts or relevant qualifications"],
         willenjoyif: ["You enjoy designing and focusing on the artistic aspect of UX design, using colors, typography, use of space and other graphic design elements/concepts.", "Enjoy creating a visual, pixel-perfect mock-up of a product.", "Enjoy applying consistent, meaningful and pleasant visuals across a wide range of user flows and contexts."],
         tasks: ["Pixel-Perfect prototypes", "Interactive prototypes", "Visual style guides", "Icon libraries", "Design specifications", "Branding guidelines or materials to supplement the product (I.e. Creating a layout of what they would like on the finished product)."],
         skills: ["Ability to combine colors, fonts and layouts", "Strong aesthetics skills", "Attention to visual detail", "Ability to meet deadlines while working on team projects"],
         salary: "59,595"
      },
   2: {
         title: "UX Researcher",
         weights: {5: 1, 6: 1, 7: 1, 8:1, 9: 1, 26: 1, 25: 1},
         bio: "Just like Product designers, they’re specialists in terms of their skill set, as they are focused on utilizing qualitative and quantitative research methods to provide information about users to other designers to inform them about the design they’re working towards and how it matches up to the user’s needs, etc. They are commonly more known as user researchers or simply researchers.",
         img: UXResearcherImg,
         bullets: ["They focus on three of the five design thinking processes: Emphasize, Define and Test.", "As they’re part of and involved in the first design process, they focus on emphasizing with the users to gain holistic understanding of their needs and help them define the problems they have, which calls for specific designs  that are needed to solve them.", "They also are very much involved in the testing process to help validate and improve designs to ensure they closely follow the information that they have gathered for better accuracy."],
         responsibilities: ["Gain a rich and full understanding of the users through Qualitative research methods (I.e. Interviews, User observation and Field studies).", "Utilizing Quantitative research to piece together significant or accurate specific traits of the users through Card sorting and Survey methods.", "Making use of research information gathered to synthesize their key points and create design proposals based on them.", "Advocate for users needs and perspectives towards internal organization such as stakeholders, designers, developers, marketers and executives."],
         requirements: ["TODO: MISSING DATA"],
         willenjoyif: ["You have strong interest in Human psychology and the study of people (I.e. behaviors, traits, characteristics, etc.)", "You often step in the shoes of others to emphasize with them in their perspectives and problems. (I.e. Understanding other people's concerns).", "You are versed in the field of psychology and know the ins and outs of it.", "Love generating and analyzing research data."],
         tasks: ["User Research reports (Qualitative and Quantitative research)", "Utilizing User Research methods to gather data about the users", "Creating User personas, Journey maps, Stories, Usability report, User testing reports and etc.", "Heuristic evaluation reports"],
         skills: ["Knowledge of marketing, cognitive science, psychology, economics or information science, and a solid understanding of user experience design", "User-centric design practices", "Excellent communication skills and empathy of user", "Ability to collaborate with different teams", "Knowledge of industry tools such as presentation programs, UX design programs, and analytics tracking tools"],
         salary: "67,082"
      },
   3: {
         title: "Product Designer",
         weights: {10: 1, 11: 1, 12: 1, 13: 1, 14: 1},
         bio: "While they’re similar in nature to UX designers, the most distinguishing part is that they are specialized in paying special attention towards the product on top of user experience. (I.e. They pay greater attention to detail on how the product will function and benefit their end user).",
         img: "",
         bullets: ["They help with creation of product design goals and developing an interactive roadmap for it (I.e. what they needed to create the specific product, what needs to be done, specifics of their offerings and functions).", "Has to ensure that their product designs get implemented well."],
         responsibilities: ["Carries the same responsibilities as UX designer in terms of 5 design thinking processes.", "Creating and designing the product roadmap for the future plans", "Collaborating with development and marketing teams to ensure designs can be successfully implemented.", "Plan and run user tests and other design research to inform design decisions", "Analyze how new product ties in with market needs and consumer preferences"],
         requirements: ["Work experience as a Product Designer or similar role", "Background in designing for mobile-first platforms", "Experience in industrial design", "Experience with computer-aided design tools, 3D modeling software, and design programs such as Illustrator and Sketch.", "BSc/MSc in Product Design, Manufacturing Design Engineering or relevant field"],
         willenjoyif: ["Enjoy integrating business goals into design and product decisions.", "Enjoy participating in the entire design process.", "Able to analyze complex data to synthesize designs for business goals and user needs."],
         tasks: ["Designing and developing a roadmap for the product, as a reference for developer and marketing teams"],
         skills: ["Problem solving and analytical skills", "Experience with user research such as surveys, interviews, and usability testing", "Understanding of design patterns and foundation in layout and design", "Creativity in colors, shapes and techniques"],
         salary: "65,338"
      },
   4: {
         title: "UX Designer",
         weights: {15: 1, 16: 1, 17: 1, 11: 0.75, 12: 1},
         bio: "Generalists who cover a little of everything in the entire design process. Their job is to understand their user’s needs, generate ideas to solve their problems, prototype designs and test them with users.",
         img: "",
         bullets: ["Responsible for all 5 phase of design thinking process: Empathize, Define, Ideate, Prototype and Test.", "Their sub-roles also include: Interaction Designer, UI/UX Designer and Experience Designers."],
         responsibilities: ["Conducting user research through interviews, observations, and other research methods. (I.e. Learning from their users’ perspective).", "Selecting the most promising idea(s) based on their: feasibility, desirability, viability and among other criteria. ", "Analyzing Pain points from User’s perspective based on User Research.", "Prototyping designs from low fidelity (Sketch, etc.) to high-fidelity (Coding, etc.).", "Pushing design solutions out to the world that will benefit both users and company.", "Conduct usability testing to see if they need further improvements.", "Create user stories, personas, and storyboards.", "Collaborate with designers and developers to create user-friendly software."],
         requirements: ["Proven experience as a UX Designer, UI Designer or similar role", "Strong portfolio of design projects", "Background in project management, research, interaction design, and information architecture", "Knowledge of industry tools such as Sketch, Adobe InDesign, Illustrator, and InVision", "Proficient in design software and knowledge of HTML/CSS", "BSc in Design, computer science, engineering or a related field"],
         willenjoyif: ["Love to create intuitive and useful solutions to solve the problems users face in their lives.", "Enjoy taking charge of the entire design process, from the initial stage of understanding users to the final stage of producing a high-fidelity prototype."],
         tasks: ["User Research", "Wireframing", "Low to High fidelity", "User testing", "Heuristic evaluation reports", "User journey map", "User persona"],
         skills: ["Communication, collaboration, teamwork", "Creative and analytical approach", "Understanding of interaction design principles and user psychology"],
         salary: "63,613"
     },
   5: {
         title:"Content Strategist", 
         weight: {18: 1, 19: 1, 20: 1, 21: 1},
         bio: "They play the role of the most critical area that designers often overlook: words. As copy is the most important part of design, Copywriting is a specific role for that. As a Content Strategist, you will be mainly contributing to the Prototype process of design thinking, and you will be crucial in finalizing the product before launch (I.e. Ensuring that everything is properly checked and accurate to the design proposal)."),
         img: "",
         bullets: ["Also known as UX writers or Copywriters.", "Provide a copy of the user interface so that people can navigate, use and troubleshoot the product easily."],
         responsibilities: ["Create effective title names and navigation menu items so that users can intuitively get to the page or screen they want.", "Define and maintain a vision for the product’s language that will be applied across the board.", "Writing error messages that are simple, effective and blame-free so that in an event of unfortunate error, users would feel assured than being annoyed.", "Creating effective email or newsletters to achieve product goals (After a user signs up for an account).", "Drive inbound traffic.", "Setting guidelines for the tone, style and voice of all brand content.", "Setting editorial strategy to make content consistent and compelling across all delivery streams analyzing content that is and isn’t working for the brand.", "Create specifications and appropriate content for brand’s designated audience.", "Strategize and improve content delivery and promotion."],
         requirements: ["At least five years of experience as a digital content manager, web writer or content editor", "Bachelor’s degree", "Common majors include English, journalism, communications, marketing creative writing, technical writing and information management"],
         willenjoyif: ["You enjoy helping others to achieve their goals with the least amount of cognitive load (I.e. Simplifying things). And should be attracted to empathizing with users and understanding their goals.", "Passionate in achieving product goals and business goals.", "Have solid knowledge of UX design and understanding in writing.", "Enjoy using empathy, data, business goals and logic to inform your writing."],
         tasks: ["Copy, which you will integrate it into the product itself.", "Editorial guidelines or product language guidelines that will set the tone or content style for the product.", ""],
         skills: ["Solid copywriting skills", "Content presentation and Content delivery", "Campaign experience", "Multitasking and organization", "Communication", "Have an analytical mind", "Attention to detail"],
         salary: "54,029"
      },
   6: {
         title: "UX Engineer", 
         weight: {18: 1, 22: 1, 23: 1, 24: 1},
         bio: "UX engineer is a front-end engineer who facilitates effective design collaboration between the design and engineering teams. They are also responsible for producing prototypes that require coding. Much like a UX designer, their job is to turn a complex problem into a more intuitive solution.",
         img: "",
         bullets: ["TODO: MISSING DATA. Consider making optional?"],
         responsibilities: ["TODO: MISSING DATA, make separate from tasks"],
         requirements: ["A portfolio that demonstrates all skills acquired and specific areas of interests within the field", "HTML, CSS, and JavaScript experience", "Experience with responsive design programming"],
         willenjoyif: ["TODO: MISSING DATA"],
         tasks: ["User research", "Human computer interaction", "Prototyping", "Advanced visual design (mock-ups)", "Usability testing and User journey analysis"],
         skills: ["Able to communicate your ideas, thoughts, or concerns with others.", "Ability to code, test/debug, and manage version control.", "UI design skills such as Sketch, Adobe Creative Suite, and Figma."],
         salary: "95,934"
      },
   7: {
         title: "UX Unicorn",
         weight: {25: 1, 1: 0.5, 26: 0.5, 22: 0.5, 4: 0.5, 15: 0.5, 18: 0.5, 14: 0.5, 9: 0.5, 27: 1},
         bio: "Although the name sounds new and mostly unfamiliar to people, don’t be confused! In the world of start-ups, “Unicorn” refers to those who not only possess the usual skill set for UX design but also have additional skills from other domains, as they can provide multiple values to business with a different skill set (I.e. covering other areas). They can be also considered as programmers who live code the product’s accessibility and functions (I.e. Browser)."),
         img: "",
         bullets: ["It typically refers to an UX designer who’s proficient in design AND frontend development.", "Part of the 5 design thinking processes, plus Frontend development.", "Considered to be rare as only people who are talented enough to do Frontend work are considered to be one.", "In charge of the entire design process, and translate their designs into live code.", "Shares similar traits to UX designer and UX engineer, thus is a combination of both. Therefore acts concurrently to the aforementioned two roles at once."],
         responsibilities: ["Carries the same responsibilities as UX designer.", "Develop live frontend prototypes, which can be used to test on users and gather realistic results for more data.", "Implementing Frontend code of design (I.e. Focusing on the browser outlook).", "User research usability testing, journey mapping and experience mapping tasks", "Data analytics and behavioral insights", "Interactive prototyping", "Development collaboration", "Visual design and creativity "],
         requirements: ["Coding and technical knowledge to design for feasibility"],
         willenjoyif: ["While it is considered to be the toughest and most complicated role, it can be achieved if you can juggle between UX design and Frontend coding, and carry strong knowledge for both roles. It is a viable option, but the least pursued role."],
         tasks: ["Performs similar tasks to a UX designer", "Providing Frontend prototypes and the code that is ready for launch."],
         skills: ["Design, graphic design, visual design, and coding", "Ability to not only design and prototype interfaces, but can also build them as well", "Psychology and the ability to empathize with users", "Creative mind"],
         salary: "94,167"
      },
     /*8: job("Information Architect", {5: 1, 27: 1, 9: 1, 21: 1, 7: 1}),*/
   9: {
         title: "Motion Designer",
         weight: {1: 1, 28: 1, 29: 1, 4: 1, 19: 1},
         bio: "While websites and applications are visual products, they aren’t static as there is constant movement and animation happening concurrently as the users scroll through pages and click around menus.",
         img: "",
         bullets: ["They are the movement and animation specialists in the UX field.", "All the subtle motion dynamics that take place when you use a digital product (the way a screen refreshes, the way menu options fade in and out, etc.) are the domain of motion designers."],
         responsibilities: ["Coordinating motion designs with overall UX strategy and research (I.e. Researching how people would like to see their product move and what they don’t like about them).", "Creating and testing moving product elements, motion graphics and animations."],
         requirements: ["TODO: MISSING DATA"],
         willenjoyif: ["You enjoy creating fluid movements for navigation and so on to enrich overall user experience with the product.", "Create and emphasize with the users on how they perceive the motions on their product."],
         tasks: ["Creating Motion prototypes", "Apply the motions of the product (I.e. how they should look and work for the users) to achieve overall user experience and satisfaction"],
         skills: ["TODO: MISSING DATA"],
         salary: "63,373"
      },
}

export {
    jobs,
    questions
}