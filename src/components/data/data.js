import VisualDesignImg from '../../assets/graphics/visual-design.svg';
import UXEngineerImg from '../../assets/graphics/ux-engineer.svg';
import UXResearcherImg from '../../assets/graphics/ux-researcher.svg';

const q = (msg) => ({
    message: msg,
    choice: 0
});

const job = (title, weights, bio, img, bullets, responsibilities, roles, skills, requirements) => ({
    title: title,
    weights: weights,
    bio: bio,
    img: img,
    bullets: bullets,
    responsibilities: responsibilities,
    roles: roles,
    skills: skills,
    requirements: requirements,
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
     1: job("Visual Designer", {1: 1, 2: 1, 3: 1, 4: 1, 5: 1},
        "Unlike UX or Product designers, they are more towards specialists than generalists. They take on the job of creating pixel-perfect prototypes that align or remain consistent with the rest of the product. Their main role begins when the production development reaches the Prototyping phase.",
        VisualDesignImg),
     2: job("UX Researcher", {5: 1, 6: 1, 7: 1, 8:1, 9: 1, 26: 1, 25: 1},
        "Just like Product designers, they’re specialists in terms of their skill set, as they are focused on utilizing qualitative and quantitative research methods to provide information about users to other designers to inform them about the design they’re working towards and how it matches up to the user’s needs, etc. They are commonly more known as user researchers or simply researchers.",
        UXResearcherImg),
     3: job("Product Designer", {10: 1, 11: 1, 12: 1, 13: 1, 14: 1},
        "While they’re similar in nature to UX designers, the most distinguishing part is that they are specialized in paying special attention towards the product on top of user experience. (I.e. They pay greater attention to detail on how the product will function and benefit their end user)."),
     4: job("UX Designer", {15: 1, 16: 1, 17: 1, 11: 0.75, 12: 1},
        "Generalists who cover a little of everything in the entire design process. Their job is to understand their user’s needs, generate ideas to solve their problems, prototype designs and test them with users."),
     5: job("Content Strategist", {18: 1, 19: 1, 20: 1, 21: 1},
        "They play the role of the most critical area that designers often overlook: words. As copy is the most important part of design, Copywriting is a specific role for that. As a Content Strategist, you will be mainly contributing to the Prototype process of design thinking, and you will be crucial in finalizing the product before launch (I.e. Ensuring that everything is properly checked and accurate to the design proposal)."),
     6: job("UX Engineer", {18: 1, 22: 1, 23: 1, 24: 1},
        "UX engineer is a front-end engineer who facilitates effective design collaboration between the design and engineering teams. They are also responsible for producing prototypes that require coding. Much like a UX designer, their job is to turn a complex problem into a more intuitive solution.",
        UXEngineerImg),
     7: job("UX Unicorn", {25: 1, 1: 0.5, 26: 0.5, 22: 0.5, 4: 0.5, 15: 0.5, 18: 0.5, 14: 0.5, 9: 0.5, 27: 1},
        "Although the name sounds new and mostly unfamiliar to people, don’t be confused! In the world of start-ups, “Unicorn” refers to those who not only possess the usual skill set for UX design but also have additional skills from other domains, as they can provide multiple values to business with a different skill set (I.e. covering other areas). They can be also considered as programmers who live code the product’s accessibility and functions (I.e. Browser)."),
     /*8: job("Information Architect", {5: 1, 27: 1, 9: 1, 21: 1, 7: 1}),*/
     9: job("Motion Designer", {1: 1, 28: 1, 29: 1, 4: 1, 19: 1},
        "While websites and applications are visual products, they aren’t static as there is constant movement and animation happening concurrently as the users scroll through pages and click around menus.")
}

export {
    jobs,
    questions
}