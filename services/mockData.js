export const servicesData = [
    {
        id: 's1',
        slug: 'abacus',
        title: 'Abacus',
        shortDescription: 'Cognitive Skill Development',
        fullDescription: '*Mental Math Mastery:* Abacus helps students in transition from physical manipulation to high-speed mental calculation, significantly improving their ability to process numerical data rapidly.\n*Enhanced Concentration & Focus:* The structured, multi-sensory learning process actively trains the mind to sustain focus for longer periods.\n*Superior Memory Recall:* Regular practice strengthens visual and working memory, which benefits overall academic performance.\n*Curriculum Standard:* Utilizes an internationally-recognized framework to ensure consistent, measurable progress and establish a strong, foundational understanding for advanced mathematics, including algebra and calculus.',
        category: 'Math',
        isSeasonal: false,
        imageUrl: 'https://images.unsplash.com/photo-1596495573105-31bc9d4979d8?auto=format&fit=crop&q=80&w=800',
        outcomes: ['Mental Math Mastery', 'Enhanced Concentration', 'Superior Memory Recall', 'Strong Math Foundations'],
        curriculum: [
            { level: 'Foundation', title: 'Basic Operations', details: 'Introduction to the abacus tool, finger movements, and 1-digit addition/subtraction.' },
            { level: 'Intermediate', title: 'Visualization', details: 'Transitioning from physical beads to mental image calculation for 2-digit numbers.' },
            { level: 'Advanced', title: 'Speed Mastery', details: 'High-speed mental multiplication and division using level-specific formulas.' }
        ],
        classes: [{ id: 'c1', title: 'Standard Batch', duration: '1.5 Hours', ageGroup: '5-12 Years' }]
    },
    {
        id: 's2',
        slug: 'vedic-maths',
        title: 'Vedic Maths',
        shortDescription: 'Accelerated Mathematical Systems',
        fullDescription: 'Rapid Problem-Solving: Introduces powerful, intuitive "sutras" (formulae) that enable single-line solutions for multi-digit multiplication, division, squares, and cubes.\nBoosted Numerical Aptitude: Develops a deeper, intuitive understanding of numerical relationships, making mathematics engaging and less intimidating.\nCritical Thinking Enhancement: Encourages students to choose the most efficient method for a given problem, fostering strategic thinking.\nApplication: Ideal for students preparing for competitive exams, as it significantly reduces calculation time while maintaining accuracy.',
        category: 'Math',
        isSeasonal: false,
        imageUrl: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800',
        outcomes: ['Rapid Problem-Solving', 'Boosted Numerical Aptitude', 'Critical Thinking', 'Competitive Exam Preparation'],
        curriculum: [
            { level: 'Phase 1', title: 'Base Sutras', details: 'Mastering Nikhilam and Ekadhikena sutras for rapid multiplication.' },
            { level: 'Phase 2', title: 'Arithmetic Power', details: 'Solving squares, cubes, and long divisions in a single line.' },
            { level: 'Phase 3', title: 'Exam Edge', details: 'Application of Vedic techniques to competitive exam problem sets.' }
        ],
        classes: [{ id: 'c2', title: 'Expert Batch', duration: '1 Hour', ageGroup: '10+ Years' }]
    },
    {
        id: 's3',
        slug: 'spoken-english',
        title: 'Spoken English',
        shortDescription: 'Professional Fluency & Communication',
        fullDescription: 'Practical Conversational Skills: Focuses on real-world communication, ensuring professional fluency and clarity in diverse environments.\nNeutral Accent & Pronunciation: Intensive training designed to achieve flawless pronunciation and a globally accepted neutral accent.\nAdvanced Grammar Application: Moves beyond basic rules to focus on sophisticated and correct use of grammar in practice.\nExpansive Vocabulary: Dedicated modules for rapid acquisition and confident application of a broad range of vocabulary.',
        category: 'Communication',
        isSeasonal: false,
        imageUrl: 'https://images.unsplash.com/photo-1543269664-56d93c1b41a6?auto=format&fit=crop&q=80&w=800',
        outcomes: ['Conversational Fluency', 'Accent Correction', 'Grammar Mastery', 'Vocabulary Expansion'],
        curriculum: [
            { level: 'Beginner', title: 'Communication Core', details: 'Basic sentence formation, daily use phrases, and confidence building.' },
            { level: 'Intermediate', title: 'Grammar & Accent', details: 'Tense mastery, pronunciation correction, and active listening skills.' },
            { level: 'Advanced', title: 'Public Speaking', details: 'Professional presentation skills, debates, and formal communication.' }
        ],
        classes: [{ id: 'c3', title: 'Fluency Track', duration: '2 Months', ageGroup: 'All Ages' }]
    },
    {
        id: 's4',
        slug: 'karate',
        title: 'Karate',
        shortDescription: 'Discipline & Physical Mastery',
        fullDescription: 'Core Value Instillation: Focuses on fostering discipline, unwavering focus, respect, and superior physical fitness.\nSelf-Defense Applications: Systematic training in practical, effective self-defense techniques.\nMastery of Forms (Katas): Rigorous instruction in traditional forms, controlled sparring, and strength development.\nMental Resilience: Builds confidence and mental toughness required for success both inside and outside the dojo.',
        category: 'Martial Arts',
        isSeasonal: false,
        imageUrl: 'https://images.unsplash.com/photo-1552072805-2a9039d00e57?auto=format&fit=crop&q=80&w=800',
        outcomes: ['Discipline & Focus', 'Self-Defense Skills', 'Physical Fitness', 'Mental Resilience'],
        curriculum: [
            { level: 'Primary', title: 'Basic Stances', details: 'Learning fundamental strikes, blocks, and basic body balance.' },
            { level: 'Intermediate', title: 'Kata & Defense', details: 'Introduction to traditional forms and controlled self-defense maneuvers.' },
            { level: 'Mastery', title: 'Sparring & Spirit', details: 'Advanced sparring techniques and development of mental fortitude.' }
        ],
        classes: [{ id: 'c4', title: 'Dojo Batch', duration: 'Daily/Weekly', ageGroup: '6+ Years' }]
    },
    {
        id: 's5',
        slug: 'hand-writing',
        title: 'Hand Writing',
        shortDescription: 'Legibility & Efficiency',
        fullDescription: 'Improved Penmanship: Specialized program aimed at dramatically improving legibility and consistency in handwriting.\nEfficiency (Speed) Enhancement: Techniques introduced to increase writing speed without sacrificing clarity.\nFundamental Mechanics: Comprehensive course addressing correct ergonomic grip, optimal writing posture, and precise letter formation.\nProfessional Standard: Results in clear, aesthetically pleasing, and professional-grade handwriting suitable for all academic and career needs.',
        category: 'Skills',
        isSeasonal: false,
        imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800',
        outcomes: ['Improved Penmanship', 'Increased Writing Speed', 'Correct Grip & Posture', 'Aesthetic Clarity'],
        curriculum: [
            { level: 'Basics', title: 'Grip & Posture', details: 'Correcting technical aspects: pen hold, seating posture, and paper angle.' },
            { level: 'Formation', title: 'Letter Geometry', details: 'Systematic practice of letter curves, heights, and consistent slant.' },
            { level: 'Speed', title: 'Fluid Writing', details: 'Increasing words-per-minute while maintaining professional legibility.' }
        ],
        classes: [{ id: 'c5', title: 'Penmanship Class', duration: '1 Month', ageGroup: 'All Ages' }]
    },
    {
        id: 's6',
        slug: 'drawing-and-craft',
        title: 'Drawing and Craft',
        shortDescription: 'Creative Expression & Fine Motor Skills',
        fullDescription: 'Imaginative Conceptualization: Intensive program that cultivates creative expression and the ability to visualize and conceptualize ideas.\nRefined Fine Motor Skills: Hands-on practice designed to significantly improve dexterity and control.\nMedium Mastery: Practical experience exploring and mastering a variety of artistic mediums, including sketching, painting, and diverse crafting techniques.\nConfident Artistic Development: Enables students to confidently explore and develop their unique artistic voice.',
        category: 'Arts',
        isSeasonal: false,
        imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800',
        outcomes: ['Creative Visualization', 'Fine Motor Control', 'Medium Mastery', 'Artistic Confidence'],
        curriculum: [
            { level: 'Foundation', title: 'Sketching Basics', details: 'Understanding lines, shapes, light, and shadow through pencil work.' },
            { level: 'Creative', title: 'Color Exploration', details: 'Working with watercolors, oil pastels, and basic color theory.' },
            { level: 'Design', title: 'Crafting Skills', details: '3D paper crafts, clay modeling, and imaginative project building.' }
        ],
        classes: [{ id: 'c6', title: 'Creative Kids', duration: 'Ongoing', ageGroup: '5+ Years' }]
    },
    {
        id: 's7',
        slug: 'fashion-designing',
        title: 'Fashion Designing',
        shortDescription: 'Foundational Industry Knowledge',
        fullDescription: 'Core Design Principles: Provides a thorough understanding of foundational design principles and professional color theory.\nTechnical Skills: Training in essential techniques, including technical sketching and textile knowledge.\nIndustry Insight: Imparts crucial fundamental skills necessary for entry-level work or further study in apparel creation.\nModule Objective: To offer an insightful introductory module to the broader fashion and garment industry.',
        category: 'Design',
        isSeasonal: false,
        imageUrl: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800',
        outcomes: ['Design Principles Mastery', 'Technical Sketching', 'Textile Knowledge', 'Industry Insight'],
        curriculum: [
            { level: 'Module 1', title: 'Visual Design', details: 'Introduction to color psychology, silhouettes, and mood boards.' },
            { level: 'Module 2', title: 'Technical Drawing', details: 'Drafting garment flats and learning basic textile categorization.' },
            { level: 'Module 3', title: 'Draping Basics', details: 'Fundamental patterns and understanding fabric behavior on dress forms.' }
        ],
        classes: [{ id: 'c7', title: 'Fashion Start', duration: '6 Months', ageGroup: '15+ Years' }]
    },
    {
        id: 's8',
        slug: 'aari-work',
        title: 'Aari Work',
        shortDescription: 'Professional Embroidery Techniques',
        fullDescription: 'Traditional Skill Acquisition: Teaches the highly sought-after, traditional form of intricate chain stitch embroidery.\nSpecialized Tool Use: Expert instruction on utilizing the specialized Aari (hooked needle).\nHigh-End Detailing: Focuses on detailed, professional-level embroidery techniques for creating exquisite designs on various fabrics.\nEntrepreneurial Application: Skills are suitable for creating high-end garments and pursuing entrepreneurial ventures in custom embroidery.',
        category: 'Craft',
        isSeasonal: false,
        imageUrl: 'https://images.unsplash.com/photo-1506806732259-39c2d4a32127?auto=format&fit=crop&q=80&w=800',
        outcomes: ['Chain Stitch Embroidery', 'Aari Tool Mastery', 'Professional Detailing', 'Boutique Entrepreneurship'],
        curriculum: [
            { level: 'Level 1', title: 'The Hook Technique', details: 'Mastering the Aari needle and basic fabric mounting methods.' },
            { level: 'Level 2', title: 'Embellishments', details: 'Integrating beads, stones, and Zardosi work into intricate patterns.' },
            { level: 'Level 3', title: 'Design Layouts', details: 'Planning and executing heavy bridal blouse designs and motifs.' }
        ],
        classes: [{ id: 'c8', title: 'Embroidery Studio', duration: '3 Months', ageGroup: 'Adults' }]
    },
    {
        id: 's9',
        slug: 'navodaya',
        title: 'Navodaya',
        shortDescription: 'JNVST Exam Preparation',
        fullDescription: 'Comprehensive Coverage: Meticulous training across all three mandatory sections: the Mental Ability Test (MAT), the Arithmetic Test (AT), and the Language Test (LT).\nTargeted Study Materials: Access to systematically curated and updated materials, focusing exclusively on the official JNVST syllabus and exam pattern.\nPerformance Tracking: Implementation of intensive practice sessions, weekly sectional tests, and full-length, performance-driven mock examinations under simulated exam conditions.\nObjective: To equip students with the necessary knowledge, speed, and test-taking strategies required to secure admission to the prestigious Jawahar Navodaya Vidyalaya institutions.',
        category: 'Education',
        isSeasonal: false,
        imageUrl: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800',
        outcomes: ['Secure JNV Admission', 'Master Mental Ability', 'Arithmetic Proficiency', 'Language Excellence'],
        curriculum: [
            { level: 'Unit 1', title: 'Mental Ability', details: 'Non-verbal reasoning, visual patterns, and odd-one-out techniques.' },
            { level: 'Unit 2', title: 'Arithmetic Power', details: 'Fractions, decimals, percentages, and competitive math speed.' },
            { level: 'Unit 3', title: 'Language Skills', details: 'Reading comprehension mastery and vocabulary building for LT.' }
        ],
        classes: [{ id: 'c9', title: 'JNVST Batch', duration: 'Ongoing', ageGroup: '10-12 Years' }]
    }
];

export const branchesData = [
    {
        id: 'b1',
        slug: 'haveri-main-branch',
        name: 'Haveri Main Branch',
        type: 'Main Campus',
        description: 'Our central hub led by Founder Shilpa Kotresh Gadad, offering a comprehensive suite of cognitive and creative programs.',
        address: 'Aryabhata Abacus, Behind Geleyara Balaga Primary School, Opp. J H Patel Circle, Haveri - 581110',
        phone: '9986396375, 7996515656',
        email: 'aryabhataabacus2019@gmail.com, shrisannidhi2011@gmail.com',
        imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1200',
        serviceIds: ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8'],
        facilities: ['Modern Classrooms', 'Abacus Lab', 'Fashion Studio', 'Martial Arts Dojo'],
        hours: 'Tue-Sat: 3:30 PM - 7:00 PM, Sun: 8:00 AM - 11:30 AM',
        stats: { students: '1000+', faculty: '40+' },
        founder: 'Shilpa Kotresh Gadad',
        qualification: 'Dip.C.Sc, (PGDCA), MA, Eco. So.',
        social: {
            instagram: 'https://www.instagram.com/aryabhataabacus_haveri/',
            facebook: 'https://www.facebook.com/swarupa.cb?mibextid=ZbWKwL',
            youtube: 'https://www.youtube.com/@aryabhataabacushaveri'
        }
    },
    {
        id: 'b2',
        slug: 'haveri-2',
        name: 'Haveri 2',
        type: 'Franchise',
        description: 'Specialized center focusing on foundation skills including Abacus, Vedic Maths, and Navodaya preparation.',
        address: 'Haveri, Karnataka',
        phone: '9986396375',
        imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200',
        serviceIds: ['s1', 's2', 's9'],
        facilities: ['Math-focused Classrooms', 'Study Library'],
        hours: 'Mon-Sat: 10:00 AM - 6:00 PM',
        stats: { students: '300+', faculty: '15+' }
    },
    {
        id: 'b3',
        slug: 'agadi-branch',
        name: 'Agadi Branch',
        type: 'Franchise',
        description: 'A community-focused learning center providing core Abacus and Vedic Maths programs.',
        address: 'Agadi, Karnataka',
        phone: '9986396375',
        imageUrl: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200',
        serviceIds: ['s1', 's2'],
        facilities: ['Dedicated Math Zone'],
        hours: 'Mon-Sat: 4:00 PM - 7:00 PM',
        stats: { students: '150+', faculty: '10+' }
    }
];

export const blogsData = [
    {
        id: 'bg1',
        slug: 'benefits-of-abacus',
        title: '5 Reasons Why Abacus Training is Essential for Kids',
        excerpt: 'Discover how abacus learning stimulates whole-brain development and improves concentration.',
        content: `Abacus learning is not just about math; it is about brain development. When children use both hands to move the beads, it stimulates both the left and right hemispheres of the brain. This leads to improved concentration, better memory, and faster cognitive processing speeds. 

In today's digital age, mental arithmetic skills provide a significant advantage. It builds confidence in numbers and removes the "fear of math" that many students face. Beyond calculations, the visualization techniques used in abacus training enhance overall creative thinking and spatial awareness.

At Aryabhata, we follow a systemic level-based approach to ensure that every child masters the foundations before moving to complex multi-digit operations. The journey from physical beads to mental visualization is a transformative cognitive experience.`,
        date: 'Oct 12, 2023',
        author: 'Shilpa Kotresh Gadad',
        authorRole: 'Founder & Chief Educator',
        category: 'Education',
        readTime: '6 min read',
        tags: ['Brain Development', 'Mathematics', 'Early Learning'],
        imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200'
    },
    {
        id: 'bg2',
        slug: 'sustainable-fashion-trends',
        title: 'Sustainable Fashion: The Future of Design',
        excerpt: 'Exploring eco-friendly fabrics and ethical production methods in modern fashion.',
        content: `The fashion industry is undergoing a green revolution. Sustainable fashion is no longer a niche market but a necessity. From organic cotton to recycled polyester, designers are finding innovative ways to reduce their carbon footprint without compromising on style.

Learn how our academy integrates sustainability into the curriculum by teaching students about zero-waste pattern making and ethical sourcing. We believe that the next generation of designers should not only be creative but also conscious of their environmental impact.

This article explores the rise of "Slow Fashion" and why durability and timelessness are becoming more valued than fast-moving seasonal trends. We also showcase student projects that utilize upcycled materials to create high-end couture.`,
        date: 'Nov 05, 2023',
        author: 'Sarah Jenkins',
        authorRole: 'Fashion Design Lead',
        category: 'Fashion',
        readTime: '8 min read',
        tags: ['Sustainability', 'Eco-Design', 'Future Trends'],
        imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200'
    },
    {
        id: 'bg3',
        slug: 'vedic-maths-shortcuts',
        title: 'Mastering Math with Ancient Vedic Techniques',
        excerpt: 'Unlock the secrets of lightning-fast mental calculations using Vedic Mathematics.',
        content: `Vedic Mathematics is a gift to the world from India's ancient heritage. It consists of 16 Sutras (formulae) which can solve complex mathematical problems with incredible speed and accuracy. 

Whether it's finding square roots or solving long divisions, Vedic math provides one-line answers that seem like magic to the uninitiated. In this post, we demonstrate three core sutras that can help students save up to 70% of their time during exams.

More than just shortcuts, Vedic math encourages an agile mind. It allows students to check their own answers instantly and builds a deep, intuitive relationship with number patterns that traditional methods often overlook.`,
        date: 'Dec 15, 2023',
        author: 'R. K. Sharma',
        authorRole: 'Mathematics Researcher',
        category: 'Education',
        readTime: '5 min read',
        tags: ['Vedic Math', 'Student Tips', 'Academic Excellence'],
        imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1200'
    },
    {
        id: 'bg4',
        slug: 'karate-for-discipline',
        title: 'Why Karate is the Ultimate Tool for Child Discipline',
        excerpt: 'Mastering the art of Karate goes beyond self-defense; it builds mental resilience and unwavering focus.',
        content: `Karate is much more than a set of physical techniques; it is a way of life that emphasizes discipline, respect, and self-control. For children, the structured environment of a dojo provides a unique space to learn the value of perseverance and the importance of setting and achieving goals.

Every belt earned and every kata mastered is a testament to the power of consistent effort. Through karate, students learn to channel their energy into productive focus, which often translates into improved academic performance and better social behavior. It builds a foundation of respect—for oneself, for peers, and for mentors.

At Aryabhata, our karate program is designed to nurture both the body and the mind. We focus on traditional techniques that instill a sense of heritage and pride, ensuring that children grow up to be confident, disciplined individuals who are ready to face any challenge with a calm and focused spirit.`,
        date: 'Jan 20, 2024',
        author: 'Master Vikram Singh',
        authorRole: 'Chief Martial Arts Instructor',
        category: 'Self-Defense',
        readTime: '7 min read',
        tags: ['Martial Arts', 'Discipline', 'Child Development'],
        imageUrl: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80&w=1200'
    }
];

export const galleryData = [
    { id: 'g1', category: 'Abacus', imageUrl: 'https://picsum.photos/600/600?random=10', caption: 'State Level Competition' },
    { id: 'g2', category: 'Fashion Design', imageUrl: 'https://picsum.photos/600/600?random=11', caption: 'Student Showcase 2023' },
    { id: 'g3', category: 'Campus', imageUrl: 'https://picsum.photos/600/600?random=12', caption: 'Our Modern Classrooms' },
    { id: 'g4', category: 'Events', imageUrl: 'https://picsum.photos/600/600?random=13', caption: 'Annual Day Celebration' },
    { id: 'g5', category: 'Abacus', imageUrl: 'https://picsum.photos/600/600?random=14', caption: 'Graduation Ceremony' },
    { id: 'g6', category: 'Fashion Design', imageUrl: 'https://picsum.photos/600/600?random=15', caption: 'Draping Workshop' },
    { id: 'g7', category: 'Drawing', imageUrl: 'https://picsum.photos/600/600?random=16', caption: 'Drawing Workshop' },
];

export const videosData = [
    {
        id: 'v1',
        type: 'youtube',
        thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
        videoUrl: 'https://youtu.be/NQpxOomkeOI?si=0FLXO0IlA_K251Qc',
        title: 'Abacus Expert'
    },
    {
        id: 'v2',
        type: 'youtube',
        thumbnail: 'https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg', // Placeholder ID
        videoUrl: 'https://www.youtube.com/embed/jNQXAC9IVRw?autoplay=1',
        title: 'Fashion Show: Student Collections'
    },
    {
        id: 'v3',
        type: 'youtube',
        thumbnail: 'https://img.youtube.com/vi/3JZ_D3ELw88/maxresdefault.jpg', // Placeholder ID
        videoUrl: 'https://www.youtube.com/embed/3JZ_D3ELw88?autoplay=1', // Placeholder ID
        title: 'Parent Testimonials & Reviews'
    },
    {
        id: 'v4',
        type: 'youtube',
        thumbnail: 'https://img.youtube.com/vi/LXb3EKWsInQ/maxresdefault.jpg',
        videoUrl: 'https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1',
        title: 'Art & Craft Exhibition 2023'
    },
    {
        id: 'v5',
        type: 'youtube',
        thumbnail: 'https://img.youtube.com/vi/ScMzIvxBSi4/maxresdefault.jpg',
        videoUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1',
        title: 'Summer Camp Fun Activities'
    }
];

export const testimonialsData = [
    {
        id: 't1',
        name: 'Priya Sharma',
        role: 'Parent of Abacus Student',
        content: 'My son has improved his math skills significantly after joining the Abacus classes. He is now more confident and faster at calculations. Highly recommended!',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
        id: 't2',
        name: 'Rahul Verma',
        role: 'Fashion Design Student',
        content: 'The fashion design course here is top-notch. The faculty is experienced and the practical sessions are very helpful. I learned a lot about pattern making and garment construction.',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
        id: 't3',
        name: 'Anjali Gupta',
        role: 'Vedic Maths Student',
        content: 'Vedic Maths tricks have made math so much easier for me. I can solve problems in seconds now. Thank you for the amazing teaching!',
        avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
    {
        id: 't4',
        name: 'Meera Patel',
        role: 'Parent of Drawing Student',
        content: 'My daughter loves the drawing classes. She has learned so many new techniques and her confidence has grown.',
        avatar: 'https://randomuser.me/api/portraits/women/22.jpg'
    },
    {
        id: 't5',
        name: 'Suresh Kumar',
        role: 'Spoken English Student',
        content: 'The spoken English course helped me improve my communication skills significantly. I can now speak fluently without hesitation.',
        avatar: 'https://randomuser.me/api/portraits/men/45.jpg'
    }
];

export const specialClassesData = [
    {
        id: 'sc1',
        title: 'Summer Vacation Camp 2024',
        subtitle: 'A blend of Abacus, Art, and Fun!',
        description: 'Engage your child this summer with a month-long camp focusing on cognitive skills and creative expression.',
        badge: 'Hiring Now',
        status: 'active',
        dates: 'May 1st - May 30th',
        imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
        tags: ['Abacus', 'Painting', 'Yoga'],
        link: '/contact'
    },
    {
        id: 'sc2',
        title: 'Holiday Art Workshop',
        subtitle: 'Unleash the Little Artist',
        description: 'Special weekend workshops for kids to learn advanced sketching and watercolor techniques.',
        badge: 'Limited Seats',
        status: 'upcoming',
        dates: 'April 15th - April 20th',
        imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800',
        tags: ['Sketching', 'Watercolors'],
        link: '/contact'
    },
    {
        id: 'sc3',
        title: 'Robotics Summer Intensive',
        subtitle: 'Build. Program. Play.',
        description: 'A hands-on introduction to robotics and coding for curious minds.',
        badge: 'New Launch',
        status: 'active',
        dates: 'June 5th - June 25th',
        imageUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=800',
        tags: ['Robotics', 'Coding', 'STEM'],
        link: '/contact'
    },
    {
        id: 'sc4',
        title: 'Communication Skills Boot Camp',
        subtitle: 'Speak with Confidence',
        description: 'Focused training on public speaking and effective presentation skills.',
        badge: 'Early Bird',
        status: 'upcoming',
        dates: 'July 1st - July 10th',
        imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800',
        tags: ['Public Speaking', 'Confidence'],
        link: '/contact'
    }
];


