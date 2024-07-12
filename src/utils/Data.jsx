export const subjects = [
  {
    id: "science",
    name: "Science",
    overview: "Explore the natural world and its phenomena.",
    image:
      "https://img.freepik.com/free-vector/hand-drawn-science-education-background_23-2148499325.jpg?t=st=1720811246~exp=1720814846~hmac=5d02cb2a28062663c2e4e7dc1638396098904154c20d6c81742840cb67f5e001&w=1060",
  },

  {
    id: "engineering",
    name: "Engineering",
    overview:
      "Apply scientific principles to design and build structures, machines, devices, systems, materials, and processes.",
    image:
      "https://img.freepik.com/free-vector/flat-design-industry-4-0-background_23-2151326136.jpg?w=1060&t=st=1720811975~exp=1720812575~hmac=19f2a53ff6f505f4ec3ed24f7fc633927db246d6febede0ae6296affad389401",
  },
  {
    id: "maths",
    name: "Mathematics",
    overview: "Study numbers, quantities, shapes, and patterns.",
    image:
      "https://img.freepik.com/free-vector/maths-chalkboard_23-2148178219.jpg?t=st=1720810978~exp=1720814578~hmac=c60992eb2dd4faa3afb12012ede4d63ded5c702457a3eb6d8343955dccccdc2a&w=1060",
  },
  {
    id: "computer",
    name: "Computer Programming",
    overview: "Explore the world of computers, software, and networks.",
    image:
      "https://img.freepik.com/free-vector/pair-programming-concept-illustration_114360-3941.jpg?t=st=1720811892~exp=1720815492~hmac=446054fab201b2cc48577ded05fbac18af65159c6b2645dbe1255dfd3ade3bf5&w=1060",
  },
];
export const science_sub = [
  {
    id: "science",
    name: "Science",
    topics: [
      {
        id: "bio",
        name: "Biology",
        overview: "Study of living organisms.",
        image:
          "https://img.freepik.com/free-vector/biology-laboratory-workspace-design-concept_1284-11559.jpg?t=st=1720815206~exp=1720818806~hmac=c6da0a5aa1337e18b0abe3b74c3c91a2a77aee7feac8e1131a222dc2b3297869&w=740",
        subtopics: [
          {
            id: "cell-biology",
            name: "Cell Biology",
            description:
              "Cell Biology is the study of cell structure and function, including the basic unit of life known as the cell. It involves understanding the different organelles such as the mitochondria, which is known as the powerhouse of the cell, and the ribosomes, which are responsible for protein synthesis. The cell membrane plays a crucial role in regulating the entry and exit of substances, and plant cells contain chloroplasts, which are not found in animal cells.",
            quizzes: [
              {
                question: "What is the basic unit of life?",
                options: ["Atom", "Molecule", "Cell", "Organ"],
                correct: "Cell",
              },
              {
                question:
                  "Which organelle is known as the powerhouse of the cell?",
                options: [
                  "Nucleus",
                  "Mitochondria",
                  "Ribosome",
                  "Endoplasmic Reticulum",
                ],
                correct: "Mitochondria",
              },
              {
                question:
                  "Which structure is responsible for protein synthesis?",
                options: [
                  "Golgi Apparatus",
                  "Lysosome",
                  "Ribosome",
                  "Chloroplast",
                ],
                correct: "Ribosome",
              },
              {
                question: "What is the function of the cell membrane?",
                options: [
                  "Energy production",
                  "Protein synthesis",
                  "Photosynthesis",
                  "Regulating entry and exit of substances",
                ],
                correct: "Regulating entry and exit of substances",
              },
              {
                question:
                  "Which of the following is found in plant cells but not in animal cells?",
                options: ["Nucleus", "Mitochondria", "Chloroplast", "Ribosome"],
                correct: "Chloroplast",
              },
            ],
          },
          {
            id: "genetics",
            name: "Genetics",
            description:
              "Genetics is the study of genes and heredity, focusing on the molecule that carries genetic information known as DNA. Genetics also covers the processes of mitosis and meiosis, which describe the division of cells. Mitosis results in two genetically identical daughter cells, while meiosis leads to the production of gametes. Understanding genetic disorders such as Down Syndrome, caused by an extra chromosome 21, is also part of this field.",
            quizzes: [
              {
                question:
                  "What is the molecule that carries genetic information?",
                options: ["RNA", "Protein", "Lipid", "DNA"],
                correct: "DNA",
              },
              {
                question:
                  "Which process describes the division of a single cell into two genetically identical daughter cells?",
                options: [
                  "Meiosis",
                  "Mitosis",
                  "Fertilization",
                  "Transcription",
                ],
                correct: "Mitosis",
              },
              {
                question: "What are the basic units of heredity?",
                options: ["Chromosomes", "Genes", "Cells", "Proteins"],
                correct: "Genes",
              },
              {
                question:
                  "Which genetic disorder is caused by the presence of an extra chromosome 21?",
                options: [
                  "Turner Syndrome",
                  "Klinefelter Syndrome",
                  "Down Syndrome",
                  "Cystic Fibrosis",
                ],
                correct: "Down Syndrome",
              },
              {
                question:
                  "What is the name of the process by which DNA is copied?",
                options: [
                  "Transcription",
                  "Translation",
                  "Replication",
                  "Mutation",
                ],
                correct: "Replication",
              },
            ],
          },
          {
            id: "ecology",
            name: "Ecology",
            description:
              "Ecology is the study of organisms and their environments, including ecosystems, which are communities of organisms interacting with their physical environment. Key processes in ecology include photosynthesis, where plants convert sunlight into food, and the role of decomposers in breaking down dead matter. Ecologists also study different types of relationships between species, such as mutualism where both species benefit, and concepts like carrying capacity, which describes the maximum population size an environment can support.",
            quizzes: [
              {
                question:
                  "What is the term for a community of organisms and their physical environment?",
                options: ["Population", "Ecosystem", "Biome", "Habitat"],
                correct: "Ecosystem",
              },
              {
                question:
                  "Which process do plants use to convert sunlight into food?",
                options: [
                  "Respiration",
                  "Transpiration",
                  "Photosynthesis",
                  "Decomposition",
                ],
                correct: "Photosynthesis",
              },
              {
                question: "What is the role of decomposers in an ecosystem?",
                options: [
                  "Produce energy",
                  "Consume plants",
                  "Break down dead matter",
                  "Capture sunlight",
                ],
                correct: "Break down dead matter",
              },
              {
                question:
                  "What type of relationship exists when both species benefit?",
                options: [
                  "Parasitism",
                  "Mutualism",
                  "Commensalism",
                  "Competition",
                ],
                correct: "Mutualism",
              },
              {
                question:
                  "Which term describes the maximum population size an environment can support?",
                options: [
                  "Carrying capacity",
                  "Biomass",
                  "Niche",
                  "Limiting factor",
                ],
                correct: "Carrying capacity",
              },
            ],
          },
        ],
      },
      {
        id: "chem",
        name: "Chemistry",
        overview: "Study of matter and its interactions.",
        image:
          "https://img.freepik.com/free-vector/flat-chemistry-colorful-background_23-2148157680.jpg?t=st=1720815443~exp=1720819043~hmac=ed274eeca72c388a59f73f194957508b6323457af5c460abce08d0328b7922a4&w=740",
        subtopics: [
          {
            id: "organic-chemistry",
            name: "Organic Chemistry",
            description:
              "Organic Chemistry is the study of carbon compounds, focusing on the types of bonds such as covalent bonds, and the structure of hydrocarbons. Organic chemistry also explores isomers, which are molecules with the same formula but different structures, and polymerization reactions where small molecules combine to form larger molecules.",
            quizzes: [
              {
                question:
                  "What is the main element studied in organic chemistry?",
                options: ["Hydrogen", "Oxygen", "Carbon", "Nitrogen"],
                correct: "Carbon",
              },
              {
                question:
                  "Which type of bond is commonly found in organic compounds?",
                options: ["Ionic", "Covalent", "Metallic", "Hydrogen"],
                correct: "Covalent",
              },
              {
                question: "What is a hydrocarbon?",
                options: [
                  "Compound containing hydrogen and carbon",
                  "Compound containing oxygen and hydrogen",
                  "Compound containing nitrogen and carbon",
                  "Compound containing sulfur and oxygen",
                ],
                correct: "Compound containing hydrogen and carbon",
              },
              {
                question: "What is an isomer?",
                options: [
                  "Molecule with the same formula but different structure",
                  "Molecule with different formula and same structure",
                  "Element with same number of protons but different neutrons",
                  "Atom with same number of electrons but different energy levels",
                ],
                correct:
                  "Molecule with the same formula but different structure",
              },
              {
                question: "What type of reaction is a polymerization?",
                options: [
                  "Addition",
                  "Substitution",
                  "Elimination",
                  "Polymerization",
                ],
                correct: "Addition",
              },
            ],
          },
          {
            id: "inorganic-chemistry",
            name: "Inorganic Chemistry",
            description:
              "Inorganic Chemistry is the study of inorganic compounds, including ionic bonds formed by the transfer of electrons. This field covers the common states of matter for inorganic compounds, noble gases like argon, and the most abundant metals in the Earth's crust, such as aluminum. Inorganic chemistry also examines the role of catalysts in speeding up chemical reactions.",
            quizzes: [
              {
                question: "What is an ionic bond?",
                options: [
                  "Bond formed by sharing electrons",
                  "Bond formed by transfer of electrons",
                  "Bond formed by sharing protons",
                  "Bond formed by transfer of neutrons",
                ],
                correct: "Bond formed by transfer of electrons",
              },
              {
                question:
                  "What is the common state of matter for most inorganic compounds?",
                options: ["Solid", "Liquid", "Gas", "Plasma"],
                correct: "Solid",
              },
              {
                question: "Which element is a noble gas?",
                options: ["Oxygen", "Nitrogen", "Argon", "Carbon"],
                correct: "Argon",
              },
              {
                question:
                  "What is the most abundant metal in the Earth's crust?",
                options: ["Iron", "Copper", "Aluminum", "Gold"],
                correct: "Aluminum",
              },
              {
                question: "What is a catalyst?",
                options: [
                  "Substance that speeds up a chemical reaction",
                  "Substance that slows down a chemical reaction",
                  "Product of a chemical reaction",
                  "Reactant in a chemical reaction",
                ],
                correct: "Substance that speeds up a chemical reaction",
              },
            ],
          },
          {
            id: "physical-chemistry",
            name: "Physical Chemistry",
            description:
              "Physical Chemistry is the study of how matter behaves on a molecular and atomic level and how chemical reactions occur. This field examines concepts such as thermodynamics, which involves the study of energy and heat, and quantum chemistry, which deals with the behavior of particles at the quantum level. Physical chemistry also explores kinetics, the rate of chemical reactions, and spectroscopy, the interaction of light with matter.",
            quizzes: [
              {
                question: "What does thermodynamics study?",
                options: [
                  "Chemical reactions",
                  "Energy and heat",
                  "Quantum particles",
                  "Reaction rates",
                ],
                correct: "Energy and heat",
              },
              {
                question: "What is the focus of quantum chemistry?",
                options: [
                  "Chemical reactions",
                  "Energy transfer",
                  "Behavior of particles at the quantum level",
                  "Molecular interactions",
                ],
                correct: "Behavior of particles at the quantum level",
              },
              {
                question: "What is kinetics concerned with?",
                options: [
                  "Chemical structure",
                  "Reaction rates",
                  "Energy changes",
                  "Quantum states",
                ],
                correct: "Reaction rates",
              },
              {
                question: "What does spectroscopy study?",
                options: [
                  "Interaction of light with matter",
                  "Chemical bonding",
                  "Energy levels",
                  "Molecular shapes",
                ],
                correct: "Interaction of light with matter",
              },
              {
                question:
                  "Which branch of chemistry examines the rate of chemical reactions?",
                options: [
                  "Organic chemistry",
                  "Inorganic chemistry",
                  "Physical chemistry",
                  "Biochemistry",
                ],
                correct: "Physical chemistry",
              },
            ],
          },
        ],
      },
      {
        id: "phys",
        name: "Physics",
        overview:
          "Study of matter, energy, and the fundamental forces of nature.",
        image:
          "https://img.freepik.com/free-vector/physics-concept-illustration_114360-1319.jpg",
        subtopics: [
          {
            id: "mechanics",
            name: "Mechanics",
            description:
              "Mechanics is the branch of physics that deals with the motion of objects and the forces that affect them. This field includes the study of Newton's laws of motion, the concepts of work, energy, and power, and the analysis of different types of mechanical systems, such as levers and pulleys.",
            quizzes: [
              {
                question: "What is the first law of motion by Newton?",
                options: [
                  "Law of inertia",
                  "Law of acceleration",
                  "Law of action-reaction",
                  "Law of gravitation",
                ],
                correct: "Law of inertia",
              },
              {
                question:
                  "Which quantity is defined as the rate of doing work?",
                options: ["Energy", "Force", "Power", "Momentum"],
                correct: "Power",
              },
              {
                question:
                  "What is the unit of force in the International System of Units (SI)?",
                options: ["Joule", "Newton", "Watt", "Pascal"],
                correct: "Newton",
              },
              {
                question: "What type of simple machine is a pulley?",
                options: ["Lever", "Inclined plane", "Wedge", "Wheel and axle"],
                correct: "Wheel and axle",
              },
              {
                question:
                  "Which law explains the relationship between force, mass, and acceleration?",
                options: [
                  "Newton's first law",
                  "Newton's second law",
                  "Newton's third law",
                  "Law of conservation of energy",
                ],
                correct: "Newton's second law",
              },
            ],
          },
          {
            id: "thermodynamics",
            name: "Thermodynamics",
            description:
              "Thermodynamics is the study of heat and temperature and their relation to energy and work. It covers the laws of thermodynamics, the concept of entropy, and the behavior of gases under different conditions.",
            quizzes: [
              {
                question: "What does the first law of thermodynamics state?",
                options: [
                  "Energy cannot be created or destroyed",
                  "Entropy of a system always increases",
                  "Heat flows from hot to cold",
                  "Pressure is directly proportional to temperature",
                ],
                correct: "Energy cannot be created or destroyed",
              },
              {
                question: "What is entropy?",
                options: [
                  "A measure of energy",
                  "A measure of disorder",
                  "A type of force",
                  "A unit of temperature",
                ],
                correct: "A measure of disorder",
              },
              {
                question:
                  "Which law describes the relationship between pressure and volume of a gas?",
                options: [
                  "Boyle's law",
                  "Charles's law",
                  "Newton's law",
                  "Ohm's law",
                ],
                correct: "Boyle's law",
              },
              {
                question: "What does the second law of thermodynamics state?",
                options: [
                  "Energy cannot be created or destroyed",
                  "Entropy of a system always increases",
                  "Heat flows from cold to hot",
                  "Pressure is inversely proportional to volume",
                ],
                correct: "Entropy of a system always increases",
              },
              {
                question:
                  "What is the unit of temperature in the International System of Units (SI)?",
                options: ["Celsius", "Fahrenheit", "Kelvin", "Rankine"],
                correct: "Kelvin",
              },
            ],
          },
          {
            id: "electromagnetism",
            name: "Electromagnetism",
            description:
              "Electromagnetism is the study of electric and magnetic fields and their interactions. This field includes the study of Coulomb's law, which describes the force between electric charges, Faraday's law of induction, which explains how electric currents are generated, and the behavior of electromagnetic waves, such as light.",
            quizzes: [
              {
                question: "What does Coulomb's law describe?",
                options: [
                  "The force between magnetic poles",
                  "The force between electric charges",
                  "The force of gravity",
                  "The force of friction",
                ],
                correct: "The force between electric charges",
              },
              {
                question: "What is the unit of electric charge?",
                options: ["Volt", "Ampere", "Coulomb", "Ohm"],
                correct: "Coulomb",
              },
              {
                question: "What does Faraday's law of induction explain?",
                options: [
                  "How electric currents are generated",
                  "How magnetic fields interact",
                  "How light travels",
                  "How electric circuits function",
                ],
                correct: "How electric currents are generated",
              },
              {
                question: "What is an electromagnetic wave?",
                options: [
                  "A wave of water",
                  "A wave of sound",
                  "A wave of electric and magnetic fields",
                  "A wave of particles",
                ],
                correct: "A wave of electric and magnetic fields",
              },
              {
                question:
                  "Which type of electromagnetic wave is visible to the human eye?",
                options: [
                  "Radio waves",
                  "X-rays",
                  "Visible light",
                  "Gamma rays",
                ],
                correct: "Visible light",
              },
            ],
          },
        ],
      },
    ],
  },
];

export const maths_sub = [
  {
    id: "algebra",
    name: "Algebra",
    image:
      "https://img.freepik.com/premium-photo/algebra-text-effect-gold-jpg-attractive-background-card-photo_873925-578158.jpg?w=740",
    overview:
      "Study of mathematical symbols and rules for manipulating these symbols.",
    topics: [
      {
        id: "linear-algebra",
        name: "Linear Algebra",
        overview: "Study of linear equations and their applications.",
        image: "https://example.com/linear-algebra-image.jpg",
      },
      {
        id: "abstract-algebra",
        name: "Abstract Algebra",
        overview:
          "Study of algebraic structures like groups, rings, and fields.",
        image: "https://example.com/abstract-algebra-image.jpg",
      },
      {
        id: "boolean-algebra",
        name: "Boolean Algebra",
        overview: "Study of mathematical operations on binary variables.",
        image: "https://example.com/boolean-algebra-image.jpg",
      },
    ],
  },
  {
    id: "geometry",
    name: "Geometry",
    image:
      "https://img.freepik.com/free-vector/geometry-maths-graphs_23-2147501136.jpg?t=st=1720817197~exp=1720820797~hmac=0522288196a712d2c7619da0b93ba0a987736f1cea8d7cc274dc0427de24802c&w=740",
    overview:
      "Study of shapes, sizes, and properties of space including spatial relationships and geometric figures.",
    topics: [
      {
        id: "euclidean-geometry",
        name: "Euclidean Geometry",
        overview: "Study of shapes, sizes, and properties of space.",
        image: "https://example.com/euclidean-geometry-image.jpg",
      },
      {
        id: "differential-geometry",
        name: "Differential Geometry",
        overview: "Study of curved surfaces and smooth spaces.",
        image: "https://example.com/differential-geometry-image.jpg",
      },
      {
        id: "topology",
        name: "Topology",
        overview:
          "Study of properties of space preserved under continuous deformations.",
        image: "https://example.com/topology-image.jpg",
      },
    ],
  },
  {
    id: "calculus",
    name: "Calculus",
    image:
      "https://img.freepik.com/free-vector/math-background_23-2148143983.jpg?t=st=1720817509~exp=1720821109~hmac=d77bb6561c39ee5043c2a570bfb7924d730a01962cd1be52f65632426f2b04c4&w=740",
    overview:
      "Study of rates of change, accumulation, and functions of multiple variables.",
    topics: [
      {
        id: "differential-calculus",
        name: "Differential Calculus",
        overview: "Study of rates of change and slopes of curves.",
        image: "https://example.com/differential-calculus-image.jpg",
      },
      {
        id: "integral-calculus",
        name: "Integral Calculus",
        overview: "Study of accumulation of quantities and areas under curves.",
        image: "https://example.com/integral-calculus-image.jpg",
      },
      {
        id: "multivariable-calculus",
        name: "Multivariable Calculus",
        overview:
          "Study of functions of multiple variables and their derivatives.",
        image: "https://example.com/multivariable-calculus-image.jpg",
      },
    ],
  },
];
export const engineering_sub = [
  {
    id: "mechanical",
    name: "Mechanical Engineering",
    image:
      "https://img.freepik.com/free-vector/teamwork-concept-with-gear-wheels_23-2147771486.jpg?t=st=1720818246~exp=1720821846~hmac=bb59cecc4240c9ad42e22b7f1b4115457a7a491e6b1d5c7f220b048381e7c057&w=740",
    overview:
      "Study of principles of physics, materials science, and engineering for design and analysis of mechanical systems.",
    topics: [
      {
        id: "thermodynamics",
        name: "Thermodynamics",
        overview:
          "Study of energy transformations in physical and chemical processes.",
        image: "https://example.com/thermodynamics-image.jpg",
      },
      {
        id: "fluid-mechanics",
        name: "Fluid Mechanics",
        overview: "Study of fluids and their interactions with boundaries.",
        image: "https://example.com/fluid-mechanics-image.jpg",
      },
      {
        id: "solid-mechanics",
        name: "Solid Mechanics",
        overview:
          "Study of behavior of solid materials under stress and strain.",
        image: "https://example.com/solid-mechanics-image.jpg",
      },
    ],
  },
  {
    id: "electrical",
    name: "Electrical Engineering",
    image:
      "https://img.freepik.com/free-vector/electrician-icons-set_1284-11920.jpg?t=st=1720818304~exp=1720821904~hmac=9f5169946b00177a5f2ebd2f7688ccb75c64d1a1c47205339896ae5f80b25a48&w=740",
    overview:
      "Study of electricity, electromagnetism, and electronics for design and maintenance of electrical systems.",
    topics: [
      {
        id: "circuits",
        name: "Circuit Theory",
        overview: "Study of electrical circuits and their analysis.",
        image: "https://example.com/circuits-image.jpg",
      },
      {
        id: "power-systems",
        name: "Power Systems",
        overview:
          "Study of generation, transmission, and distribution of electrical power.",
        image: "https://example.com/power-systems-image.jpg",
      },
      {
        id: "electronics",
        name: "Electronics",
        overview: "Study of electronic components and circuits.",
        image: "https://example.com/electronics-image.jpg",
      },
    ],
  },
  {
    id: "civil",
    name: "Civil Engineering",
    image:
      "https://img.freepik.com/free-vector/construction-concept-with-retro-style-concept-workers-machines-building-house-cartoon_1284-8104.jpg?t=st=1720818813~exp=1720822413~hmac=2547bb3819b1acc2ceb98227fdddff85721c500004855b242aea9a5b8310f91d&w=740",
    overview:
      "Study of design, construction, and maintenance of infrastructure projects like roads, bridges, and buildings.",
    topics: [
      {
        id: "structural-engineering",
        name: "Structural Engineering",
        overview: "Study of analysis and design of load-bearing structures.",
        image: "https://example.com/structural-engineering-image.jpg",
      },
      {
        id: "transportation-engineering",
        name: "Transportation Engineering",
        overview: "Study of planning and design of transportation systems.",
        image: "https://example.com/transportation-engineering-image.jpg",
      },
      {
        id: "environmental-engineering",
        name: "Environmental Engineering",
        overview: "Study of managing environmental impact and resources.",
        image: "https://example.com/environmental-engineering-image.jpg",
      },
    ],
  },
];
export const programming_sub = [
  {
    id: "fundamentals",
    name: "Programming Fundamentals",
    image:
      "https://img.freepik.com/free-vector/flat-computer-engineering-concept_23-2148152149.jpg?t=st=1720818712~exp=1720822312~hmac=804b33cc81e63a7311a4bcc966941dd0a0bf9b4096061bb08d01b0fb68a876cd&w=740",
    overview: "Introduction to basic concepts and principles of programming.",
    topics: [
      {
        id: "variables",
        name: "Variables and Data Types",
        overview: "Understanding different types of data and variables.",
        image: "https://example.com/variables-image.jpg",
      },
      {
        id: "control-structures",
        name: "Control Structures",
        overview: "Study of decision-making and loop structures.",
        image: "https://example.com/control-structures-image.jpg",
      },
      {
        id: "functions",
        name: "Functions",
        overview: "Defining and using functions in programming.",
        image: "https://example.com/functions-image.jpg",
      },
    ],
  },
  {
    id: "algorithms",
    name: "Algorithms",
    image:
      "https://img.freepik.com/premium-vector/programmer-working-computer-coders-programmers-writing-program-landing-page-web-it-courses-with-html-c_199064-1767.jpg?w=740",
    overview: "Study of algorithms, their analysis, and optimization.",
    topics: [
      {
        id: "sorting-algorithms",
        name: "Sorting Algorithms",
        overview: "Exploring different algorithms to sort data.",
        image: "https://example.com/sorting-algorithms-image.jpg",
      },
      {
        id: "searching-algorithms",
        name: "Searching Algorithms",
        overview: "Understanding algorithms to search for elements in data.",
        image: "https://example.com/searching-algorithms-image.jpg",
      },
      {
        id: "dynamic-programming",
        name: "Dynamic Programming",
        overview:
          "Technique for solving complex problems by breaking them down into simpler subproblems.",
        image: "https://example.com/dynamic-programming-image.jpg",
      },
    ],
  },
  {
    id: "web-development",
    name: "Web Development",
    image:
      "https://img.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_23-2149365021.jpg?t=st=1720818728~exp=1720822328~hmac=fd724b338256e22a284942c9457b8e9ad1f5c627fdd11965b1e604d0a9c8263d&w=740",
    overview:
      "Study of technologies and practices for developing web applications.",
    topics: [
      {
        id: "html-css",
        name: "HTML & CSS",
        overview:
          "Building blocks of web development for structure and styling.",
        image: "https://example.com/html-css-image.jpg",
      },
      {
        id: "javascript",
        name: "JavaScript",
        overview: "Programming language for interactive web development.",
        image: "https://example.com/javascript-image.jpg",
      },
      {
        id: "react",
        name: "React.js",
        overview: "Library for building user interfaces in JavaScript.",
        image: "https://example.com/reactjs-image.jpg",
      },
    ],
  },
];
