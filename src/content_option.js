const logotext = "MokaHiko";
const meta = {
    title: "Christian Solon",
    description: "I’m Christian Solon a graphics programmer.",
};

const introdata = {
    title: "Things I Make: ",
    animated: {
        first: "Mars",
        second: "The Automata Engine",
        third: "Ricochet",
    },
    description: "I'm Christian Solon (@MokaHiko). I'm a game engine developer who is as interested in software as the underlying principles that make computing possible. I make websites, design databases, game engines, and neural networks. Sometimes I even try to emulate hardware I like.",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "abit about my self",
    aboutme: "Hi! I'm Christian Solon. I'm a game and game engine developer who is as interested in software as the underlying principles that make computing possible. I make websites, design databases, game engines, and neural networks. Sometimes I even try to emulate hardware I like.",
};
const worktimeline = [
    {
        jobtitle: "Head Developer",
        where: "Mars",
        date: "2023",
    },
    {
        jobtitle: "Game Developer",
        where: "FanYouPH",
        date: "2023",
    },
    {
        jobtitle: "Full Stack Developer",
        where: "Accenture",
        date: "2022",
    },
    {
        jobtitle: "Web/AI Developer",
        where: "ClinkIT Solution",
        date: "2021",
    },
];

const skills = [{
        name: "C/C++ using Vulkan & OpenGL",
        value: 90,
    },
    {
        name: "React",
        value: 85,
    },
    {
        name: "ASP.Net",
        value: 80,
    },
    {
        name: "Tensorflow",
        value: 60,
    },
    {
        name: "Unity",
        value: 85,
    },
];

const services = [{
        title: "Mars Game Engine",
        description: "You can use, ask and contribute to my open source game engine Mars",
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const dataportfolio = [{
        img: "https://github.com/tic-tacs/Ricochet/raw/main/DemoGIFS/CombatDemo.gif",
        description: "Ricochet Combat",
        link: "#",
    },
    {
        img: "https://github.com/tic-tacs/SENGENE/raw/2D/Docs/Gifs/box2D_demo.gif?raw=true",
        description: "Mars 2d Physics Demo.",
        link: "#",
    },
    {
        img: "https://github.com/tic-tacs/AutomataEngine/raw/main/gifs/AutomataDemo.gif?raw=true",
        description: "Automata Engine",
        link: "#",
    },
    {
        img: "https://github.com/MokaHiko/SENGENE/raw/main/SGE_DOCS/Gifs/dancing.gif?raw=true",
        description: "Mars Skeletal Animation",
        link: "#",
    },
    {
        img: "https://github.com/MokaHiko/Mars/raw/master/demo_gifs/Shadows.gif?raw=true",
        description: "Shadow Maps",
        link: "#",
    },
    {
        img: "https://github.com/MokaHiko/Mars/raw/master/demo_gifs/Gpu%20Compute%20And%202D%20Sprite%20Rendering.gif?raw=true",
        description: "GPU based particles",
        link: "#",
    }
];
const datablog = [
  {
    "img": "https://upload.wikimedia.org/wikipedia/commons/5/5e/JohnvonNeumann-LosAlamos.gif",
    "title": "History of Computer Science",
    "description": "The history of computer science dates back to ancient times with the development of counting tools. However, modern computer science began in the mid-20th century with the advent of electronic computers. Key milestones include the invention of the transistor, development of programming languages, and the rise of personal computers."
  },
  {
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/ENIAC-changing_a_tube.jpg/1200px-ENIAC-changing_a_tube.jpg",
    "title": "Computing Disciplines",
    "description": "Computing encompasses various disciplines, including computer science, which focuses on algorithms, programming languages, and the theoretical foundations of computation. Information Systems are concerned with the design and use of computer-based information systems in business and organizations. Software Engineering involves the systematic design and maintenance of software. Computer Engineering deals with the design and construction of computer systems and networks. Data Science involves extracting insights and knowledge from data through various methods, including statistics and machine learning." 
  },
  {
    "img": "https://yt3.googleusercontent.com/ytc/APkrFKZViPM10GrZVUiUhH2Dn_2yQhTpAr2zbtnGFhFK_g=s900-c-k-c0x00ffffff-no-rj",
    "title": "Careers and Roles in Computing",
    "description": "Careers in computing include roles such as a Software Developer who designs and develops software applications, a Systems Analyst who analyzes and designs information systems, a Network Administrator who manages and maintains computer networks, a Database Administrator who manages and organizes databases, a Data Scientist who analyzes and interprets complex data sets, and a Cybersecurity Analyst who protects computer systems and networks from security breaches."
  },
  {
    "img": "https://wordpressstorageaccount.blob.core.windows.net/wp-media/wp-content/uploads/sites/946/2019/06/student-bkgrd.jpg",
    "title": "Information System: Concepts and Definitions",
    "description": "An information system is a set of interconnected components that collect, process, store, and distribute information to support decision-making and control in an organization. It includes hardware, software, data, people, and procedures."
  },
  {
    "img": "https://i.redd.it/uij4t3gjdz251.jpg",
    "title": "Uses of Computer System",
    "description": "Computers are used in various fields, including business for data processing, accounting, and management; education for research, learning, and administration; healthcare for patient records, diagnostics, and research; entertainment for gaming, multimedia, and content creation; and science for simulations, modeling, and data analysis."
  },
  {
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/NumberSetinC.svg/1200px-NumberSetinC.svg.png",
    "title": "Number Systems",
    "description": "Computers use the binary number system (base-2), consisting of 0s and 1s. Other common number systems include decimal (base-10), used in everyday human calculations, and hexadecimal (base-16), convenient for representing binary code in a more compact form."
  },
  {
    "img": "https://www.csoonline.com/wp-content/uploads/2023/06/linuxcon_europe_linus_torvalds_05-100742477-orig.jpg?quality=50&strip=all",
    "title": "Computer Components & Operating Systems",
    "description": "Computer components include the central processing unit (CPU), memory, storage devices, input/output devices, and networking components. Operating systems are software that manages hardware resources and provides services for computer programs. Examples include Windows, macOS, and Linux."
  }
]

const contactConfig = {
    YOUR_EMAIL: "name@domain.com",
    YOUR_FONE: "(555)123-4567",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/MokaHiko",
    facebook: "https://www.facebook.com/clark.solon",
    linkedin: "https://www.linkedin.com/in/christiansolon/",
    twitter: "https://twitter.com/HikoMoka",
};
export {
    meta,
    dataabout,
    dataportfolio,
    datablog,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};