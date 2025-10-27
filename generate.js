const allTechnologies = {
  list: [
    {
      name: "C#",
    },
    {
      name: "C++",
    },
    {
      name: "Python",
    },
    {
      name: "Java",
    },
    {
      name: "JS",
    },
    {
      name: "Unreal",
    },
    {
      name: "Unity",
    },
    {
      name: "Github",
    },
    {
      name: "Jira",
    },
    {
      name: "Asana",
    },
    {
      name: "Adobe",
    }
  ]
};

const allStores = {
  list: [
    {
      name: "Steam",
    },
    {
      name: "Epic",
    },
    {
      name: "Itch.io",
    },
    {
      name: "Nintendo",
    },
    {
      name: "Playstation",
    },
    {
      name: "Xbox",
    }
  ]
};

// Skill appris 
// Mechanics implémenté 
// Tâches effectués sur le projet 

const allGames = {
  list: [
    {
      name: "THE SIGNAL: Stranded on Sirenis",
      logo: true,
      date: "Janurary 2025 ~ October 2025",
      technologies: [5, 1, 7, 8],
      description: "A survival crafting extraction shooter game where players explore diverse environments, gather resources, build bases and strategically combat on the alien planet.",
      role: "Gameplay Programmer",
      team: 21,
      time: "9 months",
      genre: ["Survival", "Crafting", "Extraction shooter", "Base building"],
      style: ["Science fiction", "Realistic", "Stylize"],
      link: ["https://store.steampowered.com/app/1830110/THE_SIGNAL_Stranded_on_Sirenis/"],

      content: `<h3>Unreal Engine Weapon Systems and Character Upgrades</h3>
  <p>
    This project was a large-scale Unreal Engine game where I was responsible for designing and implementing the weapon systems. 
    My work included multiple core features such as reload mechanics, weapon overheating, 
    critical hits, damage falloff over distance and on-hit visual and particle effects.
  </p>
  <p>
    This was my first experience working with Unreal Engine and I quickly became proficient with Blueprints, 
    BlueprintCallable functions, C++ integration, Data Assets and 
    Data Tables. I also learned to utilize Unreal's sweep-based bullet physics to implement realistic projectile interactions.
  </p>
  <p>
    I created a variety of weapons including a pistol, shotgun, assault rifle, 
    submachine gun, sniper rifle and rocket launcher. Each weapon featured unique behavior and was integrated into the overall combat system.
    There was also a system to switch between bullet type, so it was possible to switch from incendary ammo to normal ammor to poison ammo,
    all working with applying effect on hit that stacked to certain ammount.
  </p>
  <p>
    In addition to weapon systems, I implemented a character upgrade system. 
    Players could enhance their main character by adding health, armor and carry weight capacity. 
    Weapon upgrades included reduced spread for shotguns, increased magazine capacity, 
    higher bullet velocity and faster firing rates. These upgrades required careful balancing to ensure 
    a meaningful progression system while maintaining gameplay challenge.
  </p>
  <p>
    Overall, this project gave me extensive experience with Unreal Engine's Blueprint system, 
    C++ integration, gameplay mechanics design and creating modular, scalable systems for both weapons and player progression.
  </p>`,
    },
    {
      name: "The Melty Way",
      logo: true,
      date: "December 2021 ~ Present", // December 2021 ~ March 2026
      technologies: [6, 0, 7, 8, 10],
      description: "A puzzle-platformer where players control a shape-shifting slime, navigating vibrant levels, solving puzzles, avoiding traps and using creative movement to explore hidden paths and overcome challenges.",
      role: "Game Programmer, Artist, Game Design, Marketer",
      team: 2,
      time: "4 years",
      genre: ["Plateformer", "Puzzle", "Adventure"],
      style: ["Pixel Art", "Fantasy"],
      link: ["https://store.steampowered.com/app/3990570/The_Melty_Way/"],

      content: `  <h3>First commercial project: Advanced platformer</h3>

  <p>
    This was my first commercial project, a platformer spanning 60 levels with an extensive variety of mechanics, interactive environments and player feedback systems. 
    The game centered on a slime character with advanced movement and physics systems designed for both responsiveness and player enjoyment.
  </p>

  <h4>Core Character Mechanics</h4>
  <ul>
    <li>Soft-body physics: The slime's body jiggles dynamically during walking, running, jumping and dashing.</li>
    <li>Size transformation: The slime can shrink or grow, with visual adjustments for each size state, affecting interactions with the environment.</li>
    <li>Advanced jump mechanics: Includes gravity boost when falling, coyote time, jump buffering and tolerant input handling for precise control.</li>
    <li>Dash mechanic: Detects proximity to walls and adjusts trajectory to maximize efficiency.</li>
    <li>Responsive controls: Controller support, precise movement and seamless input adaptation between PC and controller.</li>
  </ul>

  <h4>Environmental Interactions</h4>
  <ul>
    <li>Water: Swimable via dash</li>
    <li>Saws: Programmed movement patterns</li>
    <li>Spikes: Size-sensitive damage</li>
    <li>Lasers: Periodic damage with visual indicators</li>
    <li>Cannons: Shoot projectiles periodically</li>
    <li>Sticky surfaces: Prevent jumping</li>
    <li>Slippery surfaces: Glide effect like ice</li>
    <li>Conveyors: Automatic directional movement</li>
    <li>Anvils: Moveable if player size allows, can ride and jump off</li>
    <li>Jelly: Bounce pads for enhanced vertical movement</li>
    <li>Portal activation: Allows progression to next level</li>
    <li>Liquid light: Glows when submerged for a limited time</li>
    <li>Lava: Damage if touched and make the player jump out</li>
    <li>Mud: Deadly if slime remains inside too long</li>
    <li>Liquid slime: Causes player growth when submerged</li>
  </ul>

  <h4>Gameplay Feedback and Polish</h4>
  <ul>
    <li>Camera system: Pixel-perfect alignment, dynamic positioning, always maintaining consistent pixelation.</li>
    <li>Screen and controller feedback: Shake effects and rumble for key moments, enhancing immersion.</li>
    <li>Animation for collecting potions or gems</li>
    <li>Slime size change indicator flashes to alert player</li>
    <li>NPC animations for cutscenes</li>
    <li>Level selection animations: gems collected and portal opening</li>
  </ul>

  <h4>Level Design Features</h4>
  <ul>
    <li>60 unique levels with varied mechanics and difficulty</li>
    <li>Tutorial system with books showing available moves and input buttons, dynamically switching based on control method</li>
    <li>Level progression and unlocks with animated portals and visual rewards</li>
    <li>Dynamic hazards, interactive objects and environmental challenges designed to scale with slime size</li>
  </ul>

  <h4>Systems Implementation</h4>
  <ul>
    <li>Scene transitions with smooth animation</li>
    <li>Save and load system</li>
    <li>Settings management: control remapping, volume adjustment, frame rate, resolution and luminosity</li>
    <li>Title screen with animated background and interactive elements</li>
    <li>All UI limited to main menu and settings to maximize gameplay immersion</li>
  </ul>

  <h4>Technical Highlights</h4>
  <ul>
    <li>Responsive input and mechanics for both PC and controller</li>
    <li>Complex physics interactions for soft-body, liquids and moving objects</li>
    <li>Dynamic hazard and environmental system reacting to slime size and player actions</li>
    <li>Integrated audiovisual feedback systems: particle effects and programmatic animation</li>
    <li>Procedural systems for interactive objects (portals, anvils, liquids and projectiles)</li>
  </ul>

  <p>
    Overall, this project represents the culmination of my experience with advanced platforming mechanics, player feedback, physics systems, procedural interactions and commercial-level polish. 
    Every aspect was designed to create a responsive, fun and highly interactive experience, combining complex gameplay systems with immersive audiovisual cues.
  </p>`,
    },
    {
      name: "Citywars Savage",
      logo: true,
      date: "Janurary 2021 ~ March 2021",
      technologies: [6],
      description: "An indie MMORPG combining fast-paced combat, sandbox building, questing and cooperative PvE. With classless progression, gear upgrades and community-driven content creation.",
      role: "Gameplay Programmer, Game Design",
      team: 8,
      time: "3 months",
      genre: ["MMORPG", "Sandbox", "Crafting", "Building"],
      style: ["Cartoon", "Cubic"],
      link: ["https://store.steampowered.com/app/910800/Citywars_Savage/"],

      content: `<h3>Advanced boss design and behavior trees</h3>
  <p>
    In this project, I focused on creating dynamic, content-driven boss encounters using a custom
    blueprint system. My goal was to implement complex AI behaviors and phase-based
    mechanics to challenge players while maintaining engaging and interactive combat.
    The game was developed as a multiplayer experience, allowing multiple players to cooperate during intense boss fights and dynamically adapt to evolving challenges together.
  </p>
      
  <p>
    The first boss was a lava rock monster with three distinct attacks:
    meteor strikes from the sky, fire projectiles and summoned minions.
    Its behavior was governed by a behavior tree system and its attack strength dynamically
    scaled according to its health-based phases. Additionally, this boss had terrain-destructive abilities.
    As the fight progressed, the environment became increasingly damaged, creating new hazards such as
    underground lava that required the players to continuously adapt their strategy and coordinate positioning to survive.
  </p>
      
  <p>
    The second boss, a Treant, specialized in environmental control.
    It spawned vines to defend itself, could summon a row of damaging vines toward the players,
    and create a circular zone of vine attacks beneath player positions.
    Furthermore, it could generate smaller treants from uncut trees, introducing layered threats and forcing the team to manage multiple priorities simultaneously, balancing crowd control, area awareness and target focus.
  </p>
      
  <p>
    The third boss, a spider entity, focused on mobility and area denial.
    It spawned smaller spiders, shot cobwebs to restrict player movement and constantly maintained distance from players to enforce strategic positioning.
    If players got too close, it began using powerful bite attacks. Because ranged combat was the most effective strategy, the spider AI was designed to intelligently kite players, keeping them at bay while maintaining offensive pressure.
    Designing this boss required careful calibration of AI decision-making to ensure it intelligently prioritized positioning, spawning and attack timing even in multiplayer scenarios.
  </p>
      
  <p>
    Overall, this project enhanced my understanding of behavior tree architecture,
    phase-based AI scaling, procedural environmental interaction and how to design layered, reactive encounters.
    It also emphasized the importance of balancing challenge, telegraphing mechanics and creating emergent gameplay scenarios within cooperative multiplayer boss fights, where teamwork and strategy were critical to success.
  </p>
      
  <p>
    In this project, I also implemented a pirate boat environment populated by goblin NPCs with complex, task-driven behaviors.
    Each goblin had a set of responsibilities that contributed to a living and interactive world.
  </p>
  <p>
    Their tasks included loading cannonballs into cannons, firing at beach guards 
    and performing daily routines such as eating and sleeping. These behaviors were managed by a 
    task scheduling system, which allowed the AI to prioritize actions, respond to environmental triggers 
    and switch between combat, maintenance and rest activities dynamically.
  </p>
  <p>
    Overall, this project enhanced my understanding of dynamic AI systems, task prioritization 
    and environment-driven behaviors, enabling me to create more immersive and interactive gameplay scenarios.
  </p>`,
    },
    {
      name: "Zero Six Booting",
      logo: true,
      date: "March 2021 ~ April 2021",
      technologies: [6, 0, 7, 10],
      description: "A swift ninja armed with a deadly spear use a grappling hook, slow down time and rewind time in this intense, action-adventure plateformer.",
      role: "Game Programmer, Artist, Game Design",
      team: 1,
      time: "2 months",
      genre: ["Hack 'n' Slash", "Time manipulation", "Plateformer"],
      style: ["Pixel Art", "Science fiction"],
      link: ["https://betteromra.itch.io/zero-six-booting"],

      content: `<h3>Physics-based movement and rewind system</h3>
  <p>
    This project was heavily inspired by
    <a href="https://store.steampowered.com/app/460950/Katana_ZERO/" target="_blank">Katana ZERO</a>
    and focused on creating fast-paced,
    physics-driven gameplay. The most technically challenging part of development involved implementing 
    smooth character and enemy movement across sloped surfaces while maintaining a 
    consistent velocity regardless of terrain inclination.
  </p>
  <p>
    To achieve this, I had to refine the movement physics by adjusting 
    Rigidbody2D forces and custom velocity calculations, ensuring both the player and enemies 
    preserved uniform motion across varying slope gradients. This required careful handling of 
    raycasts and normal vectors to maintain grounded movement and prevent speed fluctuations.
  </p>
  <p>
    One of the core mechanics I implemented was a rewind system, 
    which involved capturing and storing the player's positional data over time. 
    The system continuously recorded the player's transform.position at each frame, 
    and when triggered, it iterated backward through the stored data to restore the player's 
    previous states with precise temporal accuracy. This mechanic introduced challenges in 
    data management and interpolation, especially when handling physics-based interactions.
  </p>
  <p>
    Additionally, I designed a grappling hook mechanic using Unity's 
    SpringJoint2D component combined with a LineRenderer for visual feedback. 
    The grappling system allowed the player to attach to walls dynamically, generating tension and 
    swing physics that enhanced both traversal and combat fluidity.
  </p>
  <p>
    Overall, this project deepened my understanding of 2D physics simulation, 
    data-driven rewind mechanics and procedural animation techniques,
    all of which contributed to a more polished and technically complex gameplay experience.
  </p>`,
    },
    {
      name: "Dream Catcher",
      logo: true,
      date: "Feburary 2024 ~ April 2024",
      technologies: [6, 0, 7],
      description: "In this whimsical multiplayer platformer, you play as a tiny snail journeying through surreal dreamscapes. Work together with your friend to collect scattered dreams and keep the dreamer peacefully asleep.",
      role: "Gameplay Programmer",
      team: 8,
      time: "3 months",
      genre: ["Plateformer", "Coop"],
      style: ["Vector art", "Fantasy"],
      link: [],

      content: `<h3>Peer-to-Peer Multiplayer Networking</h3>
  <p>
    This project represented my first experience developing a multiplayer game, 
    where I was primarily responsible for implementing and optimizing the networked gameplay systems. 
    I built a peer-to-peer connection model that allowed players on the same local 
    network to seamlessly connect and interact in real time.
  </p>
  <p>
    Developing this functionality required an in-depth understanding of network architecture, 
    including distinctions between client-side and server-side operations. 
    Early in development, I encountered synchronization and authority issues that occurred because 
    certain actions were not properly replicated on the client side. Through iterative testing, I learned 
    how to manage data flow securely between hosts and clients, handle latency compensation, 
    and address potential security vulnerabilities inherent to P2P systems.
  </p>
  <p>
    The project also reinforced the importance of team collaboration. 
    Because team availability varied significantly, we relied heavily on well-documented code, 
    inline comments and consistent naming conventions to maintain 
    project clarity and ensure that each developer could contribute effectively despite asynchronous work schedules.
  </p>
  <p>
    Ultimately, this experience strengthened my understanding of multiplayer system design, 
    network synchronization and the critical role of clean, maintainable code 
    in distributed development environments.
  </p>`,
    },
    {
      name: "The Orc Cook",
      logo: true,
      date: "December 2020 ~ January 2021",
      technologies: [6, 0, 10],
      description: "An orc chef combines ingredients in precise sequences to create hearty meals. Each successful combination, boosts reputation and satisfies the tribe's hunger in a puzzle of timing and culinary mastery.",
      team: 1,
      time: "2 months",
      role: "Game Programmer, Artist, Game Design",
      genre: ["Match-3", "Puzzle"],
      style: ["Vector art", "Fantasy"],
      link: ["https://betteromra.itch.io/the-orc-cook"],

      content: `<h3>Data-driven design and dynamic difficulty</h3>
  <p>
    This was my first personal project and it focused heavily on creating a 
    data-driven architecture using scriptable objects in Unity. 
    The main goal of the project was to design a flexible system that could dynamically generate 
    levels by selecting recipes from a data bank while maintaining a balanced 
    and engaging level of difficulty.
  </p>
  <p>
    I implemented an algorithm to select recipes procedurally based on predefined difficulty curves. 
    The system ensured that each level generated contained challenges that were neither too simple nor overly complex. 
    To achieve this, I introduced a graduated difficulty mechanic, increasing the complexity of 
    recipes while compensating with speed bonuses to preserve pacing and prevent player fatigue.
  </p>
  <p>
    Once a recipe was chosen, the system automatically retrieved all the required ingredients and ensured that 
    at least one of each was available in the generated level. After populating the mandatory elements, 
    I developed a secondary logic layer to fill the remaining slots with randomized ingredients 
    to keep gameplay fresh and unpredictable while preserving the overall balance of the experience.
  </p>
  <p>
    Through this project, I deepened my understanding of procedural generation, 
    data encapsulation and system scalability, all essential skills for building robust and adaptable game mechanics.
  </p>`,
    },
    {
      name: "Sightline",
      logo: true,
      date: "Feburary 2023",
      technologies: [6, 0, 10],
      description: "Play as a cunning outlaw in the Wild West, planning heists, dodging sheriffs and looting banks for fortune and freedom.",
      role: "Game Programmer, Artist, Game Design",
      team: 3,
      time: "3 days",
      genre: ["Stealth", "Extraction", "Time manipulation"],
      style: ["Far west", "Vector art"],
      link: ["https://toominio.itch.io/sightline"],

      content: `<h3>First game jam experience</h3>
  <p>
    This project marked my first-ever participation in a Game Jam. 
    Our team initially consisted of four members, but one member became inactive once the event began, 
    leaving us as a team of three developers. Despite the limited team size and the absence of an artist, 
    we successfully completed a playable and engaging prototype within the strict time constraints of the competition.
  </p>
  <p>
    The development process was both challenging and rewarding. 
    We focused on creating a competitive experience that included a functional 
    leaderboard system linked to an online server. 
    This required me to learn about network communication, API integration and 
    HTTP requests to manage player scores and synchronize data between clients and the remote database.
  </p>
  <p>
    There was a mechanic to slow down time, but it was also unintentionally slowing down the speedrun timer.
    We wanted the time-slowing ability to give the player an advantage while still introducing a drawback,
    since they would move slower too, but not to affect the speedrun timer. To fix this, I switched to using
    real time instead of the in-game time since the start and it worked much better.
  </p>
  <p>
    Time management was a crucial skill I developed during this project. 
    Working under the intense time pressure of a game jam environment taught me how to prioritize features, 
    identify minimum viable functionality and use asset packages and 
    plug-ins strategically to accelerate production without sacrificing quality. 
    This experience helped me understand the importance of efficient workflow pipelines and rapid iteration in game development.
  </p>
  <p>
    Overall, this game jam reinforced key lessons in collaboration, adaptability and agile development practices.
    As well as the ability to transform creative ideas into a functional prototype within a highly compressed timeframe.
  </p>`,
    },
    {
      name: "Plateformer Squelletron",
      logo: false,
      date: "September 2020 ~ December 2020",
      technologies: [6, 0, 7, 10],
      description: "A skeleton traverses an endlessly generated world, jumping across platforms, avoiding dangers and exploring haunting, ever-changing landscapes full of surprises.",
      role: "Game Programmer, Artist, Game Design",
      team: 2,
      time: "3 months",
      genre: ["Plateformer", "Procedural generation"],
      style: ["Dark Fantasy", "Vector art"],
      link: [],

      content: `<h3>Procedural generation and 2D lighting</h3>
  <p>
    This project centered around creating a procedurally generated maze that the main character could navigate. 
    The development process was guided by our instructor, but by the final phase, we were encouraged to integrate our own 
    unique gameplay mechanics and technical features.
  </p>
  <p>
    Through this project, I explored the core principles that make a platformer both engaging and dynamic,
    responsive controls, clear feedback loops and level design that encourages exploration and flow. 
    I gained practical experience in implementing procedural content generation algorithms to create 
    infinitely expanding levels, learning firsthand about the structural challenges of generating 
    coherent environments that maintain both playability and performance stability.
  </p>
  <p>
    The project was developed collaboratively between two team members. While sharing tasks proved difficult, largely due to 
    my enthusiasm and desire to handle multiple aspects of the development process, it reinforced the importance of 
    workload distribution, communication and collaborative version control 
    in team-based environments.
  </p>
  <p>
    Additionally, I experimented with Unity's 2D lighting system, implementing real-time lighting
    to enhance visual depth and atmosphere. This led me to confront performance optimization challenges, 
    particularly when managing a high number of active light sources and taught me how to balance graphical fidelity with 
    runtime efficiency.
  </p>`,
    },
    {
      name: "Sorcière avec éclair de feu versus Chevaliers avec nimbus 2001 sauf que les balais sont interdit",
      logo: false,
      date: "September 2020 ~ October 2020",
      technologies: [6, 0],
      description: "A strategic, turn-based adventure where you, a witch, navigate enemies, plan moves carefully and reach the finish line triumphantly.",
      role: "Game Programmer, Game Design",
      team: 1,
      time: "2 months",
      genre: ["Turn-Based", "Stealth"],
      style: ["Fantasy"],
      link: [],

      content: `<h3>Turn-based mechanics and AI fundamentals</h3>
  <p>
    This was a relatively small-scale project, but it introduced several key challenges that deepened my understanding of 
    game logic and artificial intelligence systems. The most technically demanding aspect was implementing the 
    turn-based gameplay architecture, which required precise state management, player input handling and 
    synchronization between player and AI turns.
  </p>
  <p>
    Developing simple AI behaviors presented an engaging challenge. 
    I designed multiple enemy archetypes with distinct logic patterns. One enemy utilized a line-of-sight detection system 
    that triggered the enemy to walk to the player position and capture him if it was his turn.
    Another followed a predefined patrol route using waypoint navigation; 
    and a third exhibited randomized movement.
  </p>`,
    },
    {
      name: "Attaque des patates",
      logo: false,
      date: "October 2020 ~ December 2020",
      technologies: [6, 0],
      description: "A humble village boy sets out on a thrilling RPG adventure, exploring vast lands, making loyal friends, engaging in strategic turn-based battles and confronting a powerful necromancer to save the world.",
      role: "Game Programmer",
      team: 4,
      time: "3 months",
      genre: ["RPG", "Turn-Based"],
      style: ["Dark Fantasy", "Vector art"],
      link: [],

      content: `<h3>Collaborative game development experience</h3>
  <p>
    This project represented a significant leap in complexity and ambition compared to my earlier individual endeavors. 
    Our development team consisted of two artists and two programmers, each contributing to different aspects of the production pipeline. 
    The project's core functionality had already been implemented, so our task as programmers was to extend the feature set, 
    refactor unstable code segments and resolve numerous technical issues inherited from prior iterations.
  </p>
  <p>
    Among the major additions we implemented were unique monster abilities, 
    enhanced interactive storytelling elements and a final boss encounter 
    featuring advanced state management and AI-driven attack patterns. These additions required close collaboration between 
    the programming and art teams to synchronize gameplay logic with animation states, visual effects and sound cues.
  </p>
  <p>
    This project became a pivotal experience in understanding the dynamics of team-based software development. 
    I learned how to efficiently distribute tasks using agile-inspired workflows, manage version control using Git and 
    GitHub branches to minimize merge conflicts and conduct regular code reviews to ensure architectural consistency.
  </p>
  <p>
    Furthermore, I gained valuable experience in reading and interpreting existing codebases, learning to understand 
    another developer's logic, design patterns and architectural choices. This process improved my debugging skills, 
    deepened my understanding of collaborative programming practices and reinforced the importance of clean, 
    well-documented and modular code when working in a shared environment.
  </p>`,
    },
    {
      name: "Mille Etage",
      logo: false,
      date: "November 2020 ~ December 2020",
      technologies: [6, 0],
      description: "Build and manage your hotel empire, upgrade floors, attract guests, optimize profits, automate operations and watch income grow effortlessly.",
      role: "Game Programmer",
      team: 1,
      time: "2 months",
      genre: ["Idle"],
      style: [],
      link: [],

      content: `<h3>Deepening my programming knowledge</h3>
  <p>
    This project significantly expanded my understanding of programming principles beyond the surface level. 
    I began to integrate more advanced paradigms of Object-Oriented Programming, 
    applying concepts such as Polymorphism, Encapsulation, 
    Data Abstraction and Inheritance to create cleaner and more modular code structures.
  </p>
  <p>
    Through hands-on experimentation, I learned how to utilize coroutines correctly for asynchronous operations,
    managing time-dependent behaviors such as cooldowns, animations and event-driven logic. I also implemented custom event systems to decouple 
    gameplay logic, improving scalability and maintainability across different game components.
  </p>
  <p>
    My primary focus throughout this project was not on crafting a polished gameplay experience, 
    but rather on optimizing performance, ensuring system stability and designing an architecture that could 
    scale efficiently for future features. This approach helped me internalize core software engineering concepts 
    like code reusability, modularity and efficient memory management within a game engine context.
  </p>`,
    },
    {
      name: "Hinvie Zible",
      logo: false,
      date: "November 2019 ~ December 2019",
      technologies: [6, 0, 10],
      description: "Small prototype that lets you be a ghost in a graveyard and use different ability.",
      role: "Game Programmer, Game Design",
      team: 1,
      time: "2 months",
      genre: [],
      style: [],
      link: [],

      content: `
  <h3>Ambition and scope management</h3>
  <p>
    At that stage of my journey, I was extremely ambitious and invested a significant amount of time experimenting with UI mechanics. 
    I spent nearly three full days developing a carousel-style animated main menu interface, implementing rotation logic and smooth transitions 
    using Lerp() functions for seamless element movement. I was starting to create my own script and understanding how C# worked.
  </p>
  <p>
    Once the user interface was functional, I shifted focus to the main player character. My goal was to replicate the fluid and responsive combat 
    mechanics of <a href="https://www.leagueoflegends.com/en-sg/champions/riven/" target="_blank">Riven</a>
    from League of Legends. This led me to design and prototype the Q ability, this was a very hard task at that time, I managed
    to make it work after barely understanding coroutine and the UI System that show the radial cooldown on the ability.
  </p>
  <p>
    My narrow focus on this subsystem caused me to neglect other critical components, the visual assets, basic core gameplay and overall content.
    As a result, the project became visually unpolished and uninteresting.
  </p>
  <p>
    Through this experience, I learned an invaluable lesson about project scope management and resource allocation 
    in solo development. I realized the importance of adopting an incremental development approach, creating smaller, achievable milestones 
    and maintaining a balance between ambition and feasibility when working independently on large-scale projects.
  </p>`,
    },
    {
      name: "Tower Defense",
      logo: false,
      date: "March 2017 ~ April 2017",
      technologies: [6, 0],
      description: "My first game ever, a tower defense where you strategically place towers, stop enemies, survive waves, defend your base.",
      role: "Game Programmer",
      team: 1,
      time: "2 weeks",
      genre: ["Tower defense"],
      style: [],
      link: [],

      content: `
  <h3>Early game development journey</h3>
  <p>
    During that period, I was deeply fascinated by the idea of developing game on a computer. 
    Initially, I experimented with creating simple games on my graphing calculator, utilizing basic scripting logic and 
    procedural programming concepts. However, I was unable to transition those small-scale projects into more complex software builds.
  </p>
  <p>
    My first real exposure to professional game development came through 
    <a href="https://m.youtube.com/watch?v=beuoNuK2tbk" target="_blank">Brackeys' Unity tutorial : How to make a Tower Defense Game</a>. 
    At the beginning, I had minimal understanding of how the Unity Engine worked, concepts such as 
    GameObjects, Components, Transform and Vectors were completely new to me. 
    I meticulously followed the tutorial line by line, replicating each C# script and inspecting how the 
    game loop functioned under the hood.
  </p>
  <p>
    Through this process, I gained a much better understanding of fundamental principles such as 
    object-oriented programming, FixedUpdate()/Update() and Awake()/Start() methods in the Unity scripting lifecycle 
    and how to attach custom scripts to GameObjects via the component-based architecture. 
    I also learned to manipulate movement to make the ennemy follow a path, implement collision detection, 
    and utilize the Inspector for parameter tuning and debugging.
  </p>
  <p>
    This hands-on experience served as a crucial foundation for my future in software engineering and game development. 
    It enhanced my computational thinking, introduced me to the concept of a real-time rendering pipeline and 
    helped me bridge the gap between simple linear programming and practical implementation within an IDE within a much more complexe program.
  </p>`,
    }
  ]
};

const contentDiv = document.querySelector(".games");
contentDiv.innerHTML = '<div class="game-content-space"></div>';
document.querySelector('.game-content-space').style.position = "absolute";

parent = 'games';

for (let i = 0; i < allGames.list.length; i++) {
  let game = allGames.list[i];
  addGame(parent, game);
}

parent = 'technologies';

for (let i = 0; i < allTechnologies.list.length; i++) {
  const technology = allTechnologies.list[i];
  addTechnology(parent, technology);
}

function addGame(parent, game) {

  const contentDiv = document.querySelector("." + parent);

  // thumbnail
  const trimmerName = game.name.replace(/[^a-zA-Z0-9]/g, "");

  imageThumbnail = "background-image: url('Images/Thumbnails/" + trimmerName + " main.jpg');"
  imageThumbnailOver = "background-image: url('Images/Thumbnails/" + trimmerName + " gameplay.jpg');"

  date = '<i>' + game.date + '</i>';

  gameName = '<h2>' + game.name + '</h2>';

  description = '<p>' + game.description + '</p>';

  const contentThumbnail = '<div class="thumbnail-content">' + date + gameName + description + '</div>';

  imageThumbnail = '<div class="image-thumbnail" style="' + imageThumbnail + '"></div>';
  imageThumbnailOver = '<div class="image-thumbnail-over" style="' + imageThumbnailOver + '"></div>';

  technologiesHtml = '<div class="game-technologies">';

  for (let i = 0; i < game.technologies.length; i++) {

    const technology = allTechnologies.list[game.technologies[i]];

    image = '<div class="game-technology">';
    image += getImageTechnology(getNameTechnology(technology.name), "game-technology-image");
    image += '</div>';

    technologiesHtml += image;
  }

  technologiesHtml += '</div>';

  const thumbnail = '<div class="game-thumbnail">' + technologiesHtml + contentThumbnail + imageThumbnail + imageThumbnailOver + '</div>';

  // Content

  contentHeaderHtml = '<div class="game-content-header">';

  contentHeaderTitleHtml = '<div class="game-content-header-title">';
  if (game.logo) {
    const logoImage = '<img src="Images/Logos/' + trimmerName + '.png">';
    contentHeaderTitleHtml += '<div class="game-content-header-logo">' + logoImage + '</div>';
  } else {
    contentHeaderTitleHtml += '<h2 class="game-content-header-no-logo">' + game.name + '</h2>';
  }

  if (game.link.length > 0) contentHeaderTitleHtml += '<div class="game-content-header-links">' + createArrayGameLink(game.link, "game-link") + '</div>';

  contentHeaderTitleHtml += '</div>';

  contentHeaderHtml += contentHeaderTitleHtml;

  if (game.genre.length > 0 || game.style.length > 0) contentHeaderHtml += '<div class="game-content-header-tag">' + createArrayElement(game.genre, "game-genre") + createArrayElement(game.style, "game-style") + '</div>';

  jobHtml = '<div class="game-content-header-job">';

  iconImage = '<img class="job-icon" src="Images/Icons/role.svg">';
  jobHtml += '<div class="game-content-header-role">' + iconImage + game.role + '</div>';
  iconImage = '<img class="job-icon" src="Images/Icons/team.svg">';
  jobHtml += '<div class="game-content-header-team">' + iconImage + game.team + '</div>';
  iconImage = '<img class="job-icon" src="Images/Icons/time.svg">';
  jobHtml += '<div class="game-content-header-time">' + iconImage + game.time + '</div>';

  jobHtml += '</div>';

  contentHeaderHtml += jobHtml;

  contentHeaderHtml += '</div>';

  contentHtml = '<div class="game-content">' + contentHeaderHtml + '<div class="game-content-main">' + game.content + '</div></div>';

  // Add it to the page

  const gameHtml = '<div class="game">' + thumbnail + contentHtml + '</div>'

  contentDiv.innerHTML += gameHtml;
}

function addTechnology(parent, technology) {

  const contentDiv = document.querySelector("." + parent);

  const image = getImageTechnology(getNameTechnology(technology.name), "image-technology");

  technologyName = '<p>' + technology.name + '</p>';

  const technologyHtml = '<div class="technology">' + image + technologyName + '</div>';

  contentDiv.innerHTML += technologyHtml;
}

function getNameTechnology(name) {

  const namePlus = name.replace(/\+/g, "Plus");
  const nameSharp = namePlus.replace(/\#/g, "Sharp");
  const trimmerName = nameSharp.replace(/[^a-zA-Z0-9]/g, "");
  return trimmerName;

}

function createArrayElement(list, classHtml) {
  html = "";

  for (let i = 0; i < list.length; i++) {
    html += '<div class="' + classHtml + '">' + list[i] + '</div>';
  }

  return html
}

function createArrayGameLink(list, classHtml) {
  html = "";

  for (let i = 0; i < list.length; i++) {

    link = list[i];

    imagesStore = "";
    if (link.includes("steam")) {
      imagesStore = "background-image: url('Images/Stores/" + allStores.list[0].name + ".png');";
    }
    else if (link.includes("epicgames")) {
      imagesStore = "background-image: url('Images/Stores/" + allStores.list[1].name + ".png');";
    }
    else if (link.includes("itch.io")) {
      imagesStore = "background-image: url('Images/Stores/" + allStores.list[2].name + ".png');";
    }
    else if (link.includes("nintendo")) {
      imagesStore = "background-image: url('Images/Stores/" + allStores.list[3].name + ".png');";
    }
    else if (link.includes("playstation")) {
      imagesStore = "background-image: url('Images/Stores/" + allStores.list[4].name + ".png');";
    }
    else if (link.includes("xbox")) {
      imagesStore = "background-image: url('Images/Stores/" + allStores.list[5].name + ".png');";
    }

    if (imagesStore != "") {
      html += '<a target="_blank" class="' + classHtml + '" href="' + link + '" style="' + imagesStore + '"></a>';
    }
  }
  return html
}

function getImageTechnology(name, classImage) {

  const imageTechnology = "background-image: url('Images/Technologies/" + name + ".png');";

  return '<div class="' + classImage + '" style="' + imageTechnology + '"></div>';
}