export const subjects = [
  {
    id: "science",
    name: "Science",
    description: "Explore the natural world and its phenomena.",
    image:
      "https://img.freepik.com/free-vector/hand-drawn-science-education-background_23-2148499325.jpg?t=st=1720811246~exp=1720814846~hmac=5d02cb2a28062663c2e4e7dc1638396098904154c20d6c81742840cb67f5e001&w=1060",
  },

  {
    id: "engineering",
    name: "Engineering",
    description:
      "Apply scientific principles to design and build structures, machines, devices, systems, materials, and processes.",
    image:
      "https://img.freepik.com/free-vector/flat-design-industry-4-0-background_23-2151326136.jpg?w=1060&t=st=1720811975~exp=1720812575~hmac=19f2a53ff6f505f4ec3ed24f7fc633927db246d6febede0ae6296affad389401",
  },
  {
    id: "maths",
    name: "Mathematics",
    description: "Study numbers, quantities, shapes, and patterns.",
    image:
      "https://img.freepik.com/free-vector/maths-chalkboard_23-2148178219.jpg?t=st=1720810978~exp=1720814578~hmac=c60992eb2dd4faa3afb12012ede4d63ded5c702457a3eb6d8343955dccccdc2a&w=1060",
  },
  {
    id: "computer",
    name: "Computer Programming",
    description: "Explore the world of computers, software, and networks.",
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
        description: "Study of living organisms.",
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
        description: "Study of matter and its interactions.",
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
        description:
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
export const engineering_sub = [
  {
    id: "engineering",
    name: "Engineering",
    topics: [
      {
        id: "mechanical",
        name: "Mechanical Engineering",
        image:
          "https://img.freepik.com/free-vector/teamwork-concept-with-gear-wheels_23-2147771486.jpg?t=st=1720818246~exp=1720821846~hmac=bb59cecc4240c9ad42e22b7f1b4115457a7a491e6b1d5c7f220b048381e7c057&w=740",
        description:
          "Study of principles of physics, materials science, and engineering for design and analysis of mechanical systems.",
        subtopics: [
          {
            id: "thermodynamics",
            name: "Thermodynamics",
            description:
              "Thermodynamics is the study of energy transformations in physical and chemical processes. It involves understanding the laws governing energy transfer, heat, work, and the properties of systems in equilibrium. Thermodynamics has applications in a variety of fields including engineering, chemistry, and biology. Key concepts include the first and second laws of thermodynamics, enthalpy, entropy, and free energy. Engineers use thermodynamics to design and optimize systems such as engines, refrigerators, and power plants.",
            quizzes: [
              {
                question: "What is the first law of thermodynamics?",
                options: [
                  "Energy cannot be created or destroyed, only transformed.",
                  "Entropy of an isolated system always increases.",
                  "For every action, there is an equal and opposite reaction.",
                  "The pressure of a gas is directly proportional to its temperature.",
                ],
                correct:
                  "Energy cannot be created or destroyed, only transformed.",
              },
              {
                question: "What does the second law of thermodynamics state?",
                options: [
                  "Entropy of an isolated system always increases.",
                  "Energy cannot be created or destroyed.",
                  "Force equals mass times acceleration.",
                  "Pressure is directly proportional to temperature.",
                ],
                correct: "Entropy of an isolated system always increases.",
              },
              {
                question: "What is enthalpy?",
                options: [
                  "A measure of the total energy of a thermodynamic system.",
                  "A measure of disorder or randomness.",
                  "A measure of the force applied over an area.",
                  "A measure of the rate of reaction.",
                ],
                correct:
                  "A measure of the total energy of a thermodynamic system.",
              },
              {
                question:
                  "Which of the following is a practical application of thermodynamics?",
                options: [
                  "Designing engines and refrigerators.",
                  "Calculating orbital trajectories.",
                  "Developing new programming languages.",
                  "Designing electrical circuits.",
                ],
                correct: "Designing engines and refrigerators.",
              },
              {
                question: "What is free energy?",
                options: [
                  "The energy available to do work in a system.",
                  "The energy stored in chemical bonds.",
                  "The energy released in nuclear reactions.",
                  "The energy required to start a reaction.",
                ],
                correct: "The energy available to do work in a system.",
              },
            ],
          },
          {
            id: "fluid-mechanics",
            name: "Fluid Mechanics",
            description:
              "Fluid mechanics is the study of fluids (liquids and gases) and their interactions with boundaries. It involves analyzing the behavior of fluids in motion and at rest, understanding the forces and energy changes within the fluid, and applying this knowledge to solve engineering problems. Key concepts include fluid statics, fluid dynamics, viscosity, laminar and turbulent flow, and the continuity, momentum, and energy equations. Fluid mechanics has applications in various fields including aerodynamics, hydraulics, and meteorology.",
            quizzes: [
              {
                question: "What does Bernoulli's equation describe?",
                options: [
                  "The relationship between pressure, velocity, and height in a fluid.",
                  "The behavior of gases under various temperatures.",
                  "The stress-strain relationship in solid materials.",
                  "The heat transfer in thermodynamic systems.",
                ],
                correct:
                  "The relationship between pressure, velocity, and height in a fluid.",
              },
              {
                question: "What is viscosity?",
                options: [
                  "A measure of a fluid's resistance to flow.",
                  "The ability of a fluid to compress under pressure.",
                  "The temperature at which a fluid boils.",
                  "The speed at which a fluid flows.",
                ],
                correct: "A measure of a fluid's resistance to flow.",
              },
              {
                question:
                  "What is the difference between laminar and turbulent flow?",
                options: [
                  "Laminar flow is smooth and orderly, while turbulent flow is chaotic.",
                  "Laminar flow is chaotic, while turbulent flow is smooth.",
                  "Both flows are smooth and orderly.",
                  "Both flows are chaotic.",
                ],
                correct:
                  "Laminar flow is smooth and orderly, while turbulent flow is chaotic.",
              },
              {
                question: "What is the continuity equation used for?",
                options: [
                  "To describe the conservation of mass in fluid flow.",
                  "To calculate the heat transfer rate.",
                  "To measure the force applied over an area.",
                  "To analyze the energy changes in a system.",
                ],
                correct: "To describe the conservation of mass in fluid flow.",
              },
              {
                question:
                  "What is the primary application of fluid mechanics in engineering?",
                options: [
                  "Designing hydraulic systems.",
                  "Developing new materials.",
                  "Analyzing chemical reactions.",
                  "Calculating electrical resistance.",
                ],
                correct: "Designing hydraulic systems.",
              },
            ],
          },
          {
            id: "solid-mechanics",
            name: "Solid Mechanics",
            description:
              "Solid mechanics is the study of the behavior of solid materials under stress and strain. It involves understanding how materials deform and fail under various types of loads, such as tension, compression, and shear. Key concepts include stress, strain, elasticity, plasticity, and failure theories. Solid mechanics is crucial for designing and analyzing structures and mechanical components to ensure they can withstand the forces they encounter during their service life. Applications include the design of buildings, bridges, aircraft, and machinery.",
            quizzes: [
              {
                question: "What is Hooke's Law?",
                options: [
                  "Stress is proportional to strain.",
                  "Energy is conserved in an isolated system.",
                  "Force equals mass times acceleration.",
                  "Current is proportional to voltage.",
                ],
                correct: "Stress is proportional to strain.",
              },
              {
                question: "What is meant by elasticity?",
                options: [
                  "The ability of a material to return to its original shape after deformation.",
                  "The ability of a material to conduct electricity.",
                  "The ability of a material to absorb heat.",
                  "The ability of a material to resist corrosion.",
                ],
                correct:
                  "The ability of a material to return to its original shape after deformation.",
              },
              {
                question: "What is the difference between stress and strain?",
                options: [
                  "Stress is the force applied to a material, strain is the deformation caused by the force.",
                  "Stress is the deformation caused by the force, strain is the force applied to a material.",
                  "Both are measures of force applied to a material.",
                  "Both are measures of deformation caused by a force.",
                ],
                correct:
                  "Stress is the force applied to a material, strain is the deformation caused by the force.",
              },
              {
                question:
                  "What is the significance of the yield point in solid mechanics?",
                options: [
                  "It marks the transition from elastic to plastic deformation.",
                  "It indicates the maximum stress a material can withstand.",
                  "It represents the point where a material breaks.",
                  "It shows the minimum stress required to deform a material.",
                ],
                correct:
                  "It marks the transition from elastic to plastic deformation.",
              },
              {
                question: "What is a practical application of solid mechanics?",
                options: [
                  "Designing load-bearing structures.",
                  "Developing new software.",
                  "Analyzing chemical properties.",
                  "Measuring electrical resistance.",
                ],
                correct: "Designing load-bearing structures.",
              },
            ],
          },
        ],
      },
      {
        id: "electrical",
        name: "Electrical Engineering",
        image:
          "https://img.freepik.com/free-vector/electrician-icons-set_1284-11920.jpg?t=st=1720818304~exp=1720821904~hmac=9f5169946b00177a5f2ebd2f7688ccb75c64d1a1c47205339896ae5f80b25a48&w=740",
        description:
          "Study of electricity, electromagnetism, and electronics for design and maintenance of electrical systems.",
        subtopics: [
          {
            id: "circuits",
            name: "Circuit Theory",
            description:
              "Circuit theory is the study of electrical circuits and their components. It involves analyzing the behavior of electrical networks consisting of resistors, capacitors, inductors, and other elements. Key concepts include Ohm's law, Kirchhoff's laws, and the analysis of AC and DC circuits. Circuit theory is essential for designing and understanding electronic devices and systems, from simple household electronics to complex communication systems. Applications include the design of power supplies, amplifiers, and signal processing circuits.",
            quizzes: [
              {
                question: "What is Ohm's Law?",
                options: [
                  "Voltage equals current times resistance.",
                  "Current is inversely proportional to voltage.",
                  "Power equals voltage times current.",
                  "Energy is conserved in an electrical circuit.",
                ],
                correct: "Voltage equals current times resistance.",
              },
              {
                question: "What is Kirchhoff's Voltage Law?",
                options: [
                  "The sum of all voltages around a closed loop is zero.",
                  "Current is inversely proportional to resistance.",
                  "Power equals voltage times current.",
                  "The sum of all currents entering a node is zero.",
                ],
                correct:
                  "The sum of all voltages around a closed loop is zero.",
              },
              {
                question: "What is the difference between AC and DC circuits?",
                options: [
                  "AC circuits have alternating current, DC circuits have direct current.",
                  "AC circuits have direct current, DC circuits have alternating current.",
                  "Both have alternating current.",
                  "Both have direct current.",
                ],
                correct:
                  "AC circuits have alternating current, DC circuits have direct current.",
              },
              {
                question: "What is a practical application of circuit theory?",
                options: [
                  "Designing power supplies.",
                  "Developing new materials.",
                  "Analyzing chemical reactions.",
                  "Calculating fluid dynamics.",
                ],
                correct: "Designing power supplies.",
              },
              {
                question: "What is a capacitor used for in a circuit?",
                options: [
                  "Storing electrical energy.",
                  "Resisting the flow of current.",
                  "Inducing a magnetic field.",
                  "Conducting electrical current.",
                ],
                correct: "Storing electrical energy.",
              },
            ],
          },
          {
            id: "power-systems",
            name: "Power Systems",
            description:
              "Power systems engineering is the study of the generation, transmission, and distribution of electrical power. It involves the design and analysis of power plants, transformers, transmission lines, and distribution networks. Key concepts include power generation methods (such as thermal, hydro, and renewable sources), load flow analysis, fault analysis, and system stability. Power systems engineering ensures the reliable and efficient delivery of electricity from producers to consumers, supporting the functioning of modern society.",
            quizzes: [
              {
                question: "What is a transformer used for?",
                options: [
                  "Changing the voltage of an alternating current.",
                  "Storing electrical energy.",
                  "Measuring electrical resistance.",
                  "Converting direct current to alternating current.",
                ],
                correct: "Changing the voltage of an alternating current.",
              },
              {
                question: "What is load flow analysis?",
                options: [
                  "The study of power flow in an electrical network.",
                  "The measurement of electrical resistance.",
                  "The analysis of fluid dynamics.",
                  "The calculation of thermal energy transfer.",
                ],
                correct: "The study of power flow in an electrical network.",
              },
              {
                question: "What are renewable sources of power generation?",
                options: [
                  "Solar, wind, and hydro power.",
                  "Coal, natural gas, and nuclear power.",
                  "Oil, diesel, and biomass.",
                  "Geothermal, tidal, and fossil fuels.",
                ],
                correct: "Solar, wind, and hydro power.",
              },
              {
                question: "What is the primary function of a power plant?",
                options: [
                  "To generate electrical power.",
                  "To store electrical energy.",
                  "To distribute electrical power.",
                  "To measure electrical resistance.",
                ],
                correct: "To generate electrical power.",
              },
              {
                question: "What is a fault analysis in power systems?",
                options: [
                  "The study of abnormal conditions in an electrical network.",
                  "The measurement of current flow.",
                  "The analysis of circuit components.",
                  "The calculation of voltage drop.",
                ],
                correct:
                  "The study of abnormal conditions in an electrical network.",
              },
            ],
          },
          {
            id: "electronics",
            name: "Electronics",
            description:
              "Electronics is the study of electronic components and circuits. It involves understanding how devices such as diodes, transistors, and integrated circuits operate and are used to build electronic systems. Key concepts include semiconductor physics, analog and digital circuits, signal processing, and microelectronics. Electronics is fundamental to the design and development of a wide range of products, from consumer electronics like smartphones and computers to industrial control systems and medical devices.",
            quizzes: [
              {
                question: "What is a diode?",
                options: [
                  "A component that allows current to flow in one direction only.",
                  "A component that stores electrical energy.",
                  "A component that converts AC to DC.",
                  "A component that amplifies signals.",
                ],
                correct:
                  "A component that allows current to flow in one direction only.",
              },
              {
                question: "What is the main function of a transistor?",
                options: [
                  "To amplify or switch electronic signals.",
                  "To store electrical energy.",
                  "To resist the flow of current.",
                  "To measure voltage.",
                ],
                correct: "To amplify or switch electronic signals.",
              },
              {
                question:
                  "What is the difference between analog and digital circuits?",
                options: [
                  "Analog circuits process continuous signals, digital circuits process discrete signals.",
                  "Analog circuits process discrete signals, digital circuits process continuous signals.",
                  "Both process continuous signals.",
                  "Both process discrete signals.",
                ],
                correct:
                  "Analog circuits process continuous signals, digital circuits process discrete signals.",
              },
              {
                question: "What is an integrated circuit?",
                options: [
                  "A set of electronic circuits on a small chip.",
                  "A single electronic component.",
                  "A circuit that stores electrical energy.",
                  "A circuit that measures resistance.",
                ],
                correct: "A set of electronic circuits on a small chip.",
              },
              {
                question: "What is a practical application of electronics?",
                options: [
                  "Designing smartphones.",
                  "Developing new construction materials.",
                  "Analyzing chemical properties.",
                  "Calculating fluid dynamics.",
                ],
                correct: "Designing smartphones.",
              },
            ],
          },
        ],
      },
      {
        id: "civil",
        name: "Civil Engineering",
        image:
          "https://img.freepik.com/free-vector/construction-concept-with-retro-style-concept-workers-machines-building-house-cartoon_1284-8104.jpg?t=st=1720818813~exp=1720822413~hmac=2547bb3819b1acc2ceb98227fdddff85721c500004855b242aea9a5b8310f91d&w=740",
        description:
          "Study of design, construction, and maintenance of infrastructure projects like roads, bridges, and buildings.",
        subtopics: [
          {
            id: "structural-engineering",
            name: "Structural Engineering",
            description:
              "Structural engineering is the study of the analysis and design of load-bearing structures. It involves understanding how structures such as buildings, bridges, and towers support and resist various loads. Key concepts include stress, strain, material properties, and load distribution. Structural engineers use this knowledge to ensure the safety, stability, and durability of structures. Applications include designing earthquake-resistant buildings, assessing the strength of bridges, and developing innovative construction materials.",
            quizzes: [
              {
                question: "What is the primary purpose of a truss?",
                options: [
                  "To provide structural support with minimal material usage.",
                  "To control the flow of water.",
                  "To insulate against heat transfer.",
                  "To store construction materials.",
                ],
                correct:
                  "To provide structural support with minimal material usage.",
              },
              {
                question:
                  "What is the significance of material properties in structural engineering?",
                options: [
                  "They determine the strength and durability of a structure.",
                  "They measure the electrical conductivity of a material.",
                  "They calculate the thermal resistance of a material.",
                  "They analyze the chemical composition of a material.",
                ],
                correct:
                  "They determine the strength and durability of a structure.",
              },
              {
                question: "What is load distribution?",
                options: [
                  "The way loads are spread across a structure.",
                  "The measurement of electrical resistance.",
                  "The calculation of fluid dynamics.",
                  "The analysis of chemical reactions.",
                ],
                correct: "The way loads are spread across a structure.",
              },
              {
                question:
                  "What is a practical application of structural engineering?",
                options: [
                  "Designing earthquake-resistant buildings.",
                  "Developing new software.",
                  "Analyzing fluid flow.",
                  "Measuring electrical resistance.",
                ],
                correct: "Designing earthquake-resistant buildings.",
              },
              {
                question: "What is a key concept in structural engineering?",
                options: [
                  "Stress and strain.",
                  "Voltage and current.",
                  "Heat and temperature.",
                  "Mass and acceleration.",
                ],
                correct: "Stress and strain.",
              },
            ],
          },
          {
            id: "transportation-engineering",
            name: "Transportation Engineering",
            description:
              "Transportation engineering is the study of the planning, design, and operation of transportation systems. It involves ensuring the safe, efficient, and sustainable movement of people and goods. Key concepts include traffic flow theory, transportation planning, highway and transit system design, and transportation safety. Transportation engineers use this knowledge to develop and improve roads, highways, railways, airports, and public transit systems. Applications include designing traffic control systems, optimizing public transport routes, and improving road safety.",
            quizzes: [
              {
                question:
                  "What is the main goal of transportation engineering?",
                options: [
                  "To design efficient and safe transportation systems.",
                  "To manage environmental resources.",
                  "To construct residential buildings.",
                  "To analyze electrical circuits.",
                ],
                correct: "To design efficient and safe transportation systems.",
              },
              {
                question: "What is traffic flow theory?",
                options: [
                  "The study of the movement of vehicles on roadways.",
                  "The measurement of fluid dynamics.",
                  "The analysis of stress and strain in materials.",
                  "The calculation of thermal energy transfer.",
                ],
                correct: "The study of the movement of vehicles on roadways.",
              },
              {
                question:
                  "What is a practical application of transportation engineering?",
                options: [
                  "Designing traffic control systems.",
                  "Developing new construction materials.",
                  "Analyzing chemical properties.",
                  "Calculating electrical resistance.",
                ],
                correct: "Designing traffic control systems.",
              },
              {
                question:
                  "What is the significance of transportation planning?",
                options: [
                  "To ensure the efficient and sustainable movement of people and goods.",
                  "To measure the thermal resistance of materials.",
                  "To analyze the chemical composition of materials.",
                  "To calculate the stress and strain in structures.",
                ],
                correct:
                  "To ensure the efficient and sustainable movement of people and goods.",
              },
              {
                question:
                  "What is a key concept in transportation engineering?",
                options: [
                  "Highway and transit system design.",
                  "Voltage and current measurement.",
                  "Heat and temperature analysis.",
                  "Mass and acceleration calculation.",
                ],
                correct: "Highway and transit system design.",
              },
            ],
          },
          {
            id: "environmental-engineering",
            name: "Environmental Engineering",
            description:
              "Environmental engineering is the study of protecting and improving the natural environment. It involves designing systems and solutions to address environmental challenges such as pollution, waste management, and resource conservation. Key concepts include water and air quality management, waste treatment, environmental impact assessment, and sustainable development. Environmental engineers use this knowledge to develop technologies and practices that minimize environmental harm and promote sustainability. Applications include designing wastewater treatment plants, managing hazardous waste, and conducting environmental impact assessments.",
            quizzes: [
              {
                question:
                  "What is the primary goal of environmental engineering?",
                options: [
                  "To protect and improve the natural environment.",
                  "To analyze electrical circuits.",
                  "To design load-bearing structures.",
                  "To measure thermal resistance.",
                ],
                correct: "To protect and improve the natural environment.",
              },
              {
                question:
                  "What is a practical application of environmental engineering?",
                options: [
                  "Designing wastewater treatment plants.",
                  "Developing new construction materials.",
                  "Analyzing chemical properties.",
                  "Calculating fluid dynamics.",
                ],
                correct: "Designing wastewater treatment plants.",
              },
              {
                question: "What is environmental impact assessment?",
                options: [
                  "The evaluation of the potential environmental effects of a project.",
                  "The measurement of electrical resistance.",
                  "The analysis of stress and strain in materials.",
                  "The calculation of thermal energy transfer.",
                ],
                correct:
                  "The evaluation of the potential environmental effects of a project.",
              },
              {
                question: "What is a key concept in environmental engineering?",
                options: [
                  "Sustainable development.",
                  "Voltage and current measurement.",
                  "Heat and temperature analysis.",
                  "Mass and acceleration calculation.",
                ],
                correct: "Sustainable development.",
              },
              {
                question: "What is water quality management?",
                options: [
                  "The process of ensuring the safety and cleanliness of water resources.",
                  "The measurement of thermal resistance.",
                  "The analysis of chemical composition.",
                  "The calculation of stress and strain.",
                ],
                correct:
                  "The process of ensuring the safety and cleanliness of water resources.",
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
    description:
      "Study of mathematical symbols and rules for manipulating these symbols.",
    topics: [
      {
        id: "linear-algebra",
        name: "Linear Algebra",
        description: "Study of linear equations and their applications.",
        image: "https://example.com/linear-algebra-image.jpg",
      },
      {
        id: "abstract-algebra",
        name: "Abstract Algebra",
        description:
          "Study of algebraic structures like groups, rings, and fields.",
        image: "https://example.com/abstract-algebra-image.jpg",
      },
      {
        id: "boolean-algebra",
        name: "Boolean Algebra",
        description: "Study of mathematical operations on binary variables.",
        image: "https://example.com/boolean-algebra-image.jpg",
      },
    ],
  },
  {
    id: "geometry",
    name: "Geometry",
    image:
      "https://img.freepik.com/free-vector/geometry-maths-graphs_23-2147501136.jpg?t=st=1720817197~exp=1720820797~hmac=0522288196a712d2c7619da0b93ba0a987736f1cea8d7cc274dc0427de24802c&w=740",
    description:
      "Study of shapes, sizes, and properties of space including spatial relationships and geometric figures.",
    topics: [
      {
        id: "euclidean-geometry",
        name: "Euclidean Geometry",
        description: "Study of shapes, sizes, and properties of space.",
        image: "https://example.com/euclidean-geometry-image.jpg",
      },
      {
        id: "differential-geometry",
        name: "Differential Geometry",
        description: "Study of curved surfaces and smooth spaces.",
        image: "https://example.com/differential-geometry-image.jpg",
      },
      {
        id: "topology",
        name: "Topology",
        description:
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
    description:
      "Study of rates of change, accumulation, and functions of multiple variables.",
    topics: [
      {
        id: "differential-calculus",
        name: "Differential Calculus",
        description: "Study of rates of change and slopes of curves.",
        image: "https://example.com/differential-calculus-image.jpg",
      },
      {
        id: "integral-calculus",
        name: "Integral Calculus",
        description:
          "Study of accumulation of quantities and areas under curves.",
        image: "https://example.com/integral-calculus-image.jpg",
      },
      {
        id: "multivariable-calculus",
        name: "Multivariable Calculus",
        description:
          "Study of functions of multiple variables and their derivatives.",
        image: "https://example.com/multivariable-calculus-image.jpg",
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
    description:
      "Introduction to basic concepts and principles of programming.",
    topics: [
      {
        id: "variables",
        name: "Variables and Data Types",
        description: "Understanding different types of data and variables.",
        image: "https://example.com/variables-image.jpg",
      },
      {
        id: "control-structures",
        name: "Control Structures",
        description: "Study of decision-making and loop structures.",
        image: "https://example.com/control-structures-image.jpg",
      },
      {
        id: "functions",
        name: "Functions",
        description: "Defining and using functions in programming.",
        image: "https://example.com/functions-image.jpg",
      },
    ],
  },
  {
    id: "algorithms",
    name: "Algorithms",
    image:
      "https://img.freepik.com/premium-vector/programmer-working-computer-coders-programmers-writing-program-landing-page-web-it-courses-with-html-c_199064-1767.jpg?w=740",
    description: "Study of algorithms, their analysis, and optimization.",
    topics: [
      {
        id: "sorting-algorithms",
        name: "Sorting Algorithms",
        description: "Exploring different algorithms to sort data.",
        image: "https://example.com/sorting-algorithms-image.jpg",
      },
      {
        id: "searching-algorithms",
        name: "Searching Algorithms",
        description: "Understanding algorithms to search for elements in data.",
        image: "https://example.com/searching-algorithms-image.jpg",
      },
      {
        id: "dynamic-programming",
        name: "Dynamic Programming",
        description:
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
    description:
      "Study of technologies and practices for developing web applications.",
    topics: [
      {
        id: "html-css",
        name: "HTML & CSS",
        description:
          "Building blocks of web development for structure and styling.",
        image: "https://example.com/html-css-image.jpg",
      },
      {
        id: "javascript",
        name: "JavaScript",
        description: "Programming language for interactive web development.",
        image: "https://example.com/javascript-image.jpg",
      },
      {
        id: "react",
        name: "React.js",
        description: "Library for building user interfaces in JavaScript.",
        image: "https://example.com/reactjs-image.jpg",
      },
    ],
  },
];
