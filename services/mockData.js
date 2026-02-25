export const servicesData = [
    {
        id: 's1',
        slug: 'abacus-mastery',
        title: 'Abacus Mastery',
        shortDescription: 'Boost brain power and calculation speed with our proven Abacus curriculum.',
        fullDescription: 'Our Abacus Mastery program is designed to enhance cognitive skills, concentration, and mathematical ability in children. Through a structured curriculum using the physical abacus tool, students learn to visualize calculations and perform complex arithmetic with speed and accuracy.',
        category: 'Abacus',
        isSeasonal: false,
        imageUrl: 'https://images.unsplash.com/photo-1596495573105-31bc9d4979d8?auto=format&fit=crop&q=80&w=800',
        outcomes: ['3x Faster Mental Calculations', 'Improved Photographic Memory', 'Enhanced Concentration Levels', 'Better Logical Reasoning'],
        curriculum: [
            { level: 'Level 1', title: 'Basic Bead Movement', details: 'Introduction to the abacus, finger movements, and 1-digit addition/subtraction.' },
            { level: 'Level 2', title: 'Small Friends Formula', details: 'Learning formulas for numbers adding up to 5.' },
            { level: 'Level 3', title: 'Big Friends & Mixed', details: 'Calculations using base 10 and complex mixed formulas.' }
        ],
        classes: [
            { id: 'c1', title: 'Beginner Level 1', duration: '3 Months', ageGroup: '5-7 Years' },
            { id: 'c2', title: 'Intermediate Level', duration: '6 Months', ageGroup: '8-12 Years' }
        ]
    },
    {
        id: 's2',
        slug: 'vedic-maths',
        title: 'Vedic Mathematics',
        shortDescription: 'Ancient techniques for solving complex math problems in seconds.',
        fullDescription: 'Vedic Mathematics is a collection of techniques/sutras to solve mathematical arithmetics in easy and faster way. It consists of 16 Sutras (Formulae) and 13 sub-sutras (Sub Formulae) which can be used for problems involved in arithmetic, algebra, geometry, calculus, conics.',
        category: 'Abacus',
        isSeasonal: true,
        imageUrl: 'https://images.unsplash.com/photo-1635372722656-389f87a941b7?auto=format&fit=crop&q=80&w=800',
        outcomes: ['Solve Square Roots in Seconds', 'Speed up Algebra Calculations', 'Eliminate Math Phobia', 'Competitive Exam Edge'],
        curriculum: [
            { level: 'Phase 1', title: 'Sutras Introduction', details: 'Nikhilam and Ekadhikena techniques for fast multiplication.' },
            { level: 'Phase 2', title: 'Advanced Arithmetic', details: 'Square roots, cube roots, and division sutras.' }
        ],
        classes: [
            { id: 'c3', title: 'Summer Crash Course', duration: '4 Weeks', ageGroup: '10+ Years' }
        ]
    },
    {
        id: 's3',
        slug: 'fashion-illustration',
        title: 'Fashion Illustration',
        shortDescription: 'Learn to sketch your designs and bring your creative visions to paper.',
        fullDescription: 'This course focuses on the artistic side of fashion. Students will learn how to draw the fashion figure (croquis), render different fabric textures, and present their design collections professionally. Ideal for aspiring designers and portfolio building.',
        category: 'Fashion Design',
        isSeasonal: false,
        imageUrl: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800',
        outcomes: ['Master 9-Head Proportions', 'Hand-Render Silk, Denim & Lace', 'Digitize Portfolio Sketches', 'Professional Presentation Skills'],
        curriculum: [
            { level: 'Module 1', title: 'Anatomy of Croquis', details: 'Building the fashion figure from basic bone structures.' },
            { level: 'Module 2', title: 'Fabric Rendering', details: 'Using markers and watercolors to depict different materials.' }
        ],
        classes: [
            { id: 'c4', title: 'Sketching Basics', duration: '2 Months', ageGroup: '16+ Years' },
            { id: 'c5', title: 'Digital Illustration', duration: '3 Months', ageGroup: '16+ Years' }
        ]
    },
    {
        id: 's4',
        slug: 'pattern-making',
        title: 'Pattern Making & Sewing',
        shortDescription: 'Construct garments from scratch with professional pattern making techniques.',
        fullDescription: 'Master the technical skills required to turn a sketch into a wearable garment. This comprehensive course covers measurement taking, drafting blocks, pattern manipulation, and industrial sewing techniques.',
        category: 'Fashion Design',
        isSeasonal: false,
        imageUrl: 'https://images.unsplash.com/photo-1520033503123-3f30999947fd?auto=format&fit=crop&q=80&w=800',
        outcomes: ['Create Custom-Fit Blocks', 'Master Industrial Sewing', 'Understanding Grain Lines', 'Garment Assembly Excellence'],
        curriculum: [
            { level: 'Stage 1', title: 'Basic Bodice Block', details: 'Drafting the foundation for all upper-body garments.' },
            { level: 'Stage 2', title: 'Darts & Manipulation', details: 'Techniques for fitting and creative design changes.' }
        ],
        classes: [
            { id: 'c6', title: 'Garment Construction', duration: '6 Months', ageGroup: 'Adults' }
        ]
    },
    {
        id: 's5',
        slug: 'creative-drawing',
        title: 'Creative Drawing & Sketching',
        shortDescription: 'Master the art of observation and expression through various drawing mediums.',
        fullDescription: 'Our Drawing & Sketching program is designed for students of all ages who want to develop their artistic voice. From pencil shading to charcoal and pastels, we cover the fundamentals of light, shadow, and perspective.',
        category: 'Drawing',
        isSeasonal: false,
        imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800',
        outcomes: ['Photorealistic Shading', 'Perspective Mastery', 'Medium Versatility', 'Exhibition Portfolio'],
        curriculum: [
            { level: 'Level 1', title: 'Pencil Mastery', details: 'Understanding values, textures, and basic shapes.' },
            { level: 'Level 2', title: 'Still Life & Live Sketching', details: 'Drawing from observation with focus on depth.' }
        ],
        classes: [
            { id: 'c7', title: 'Young Artists', duration: 'Ongoing', ageGroup: '6-12 Years' },
            { id: 'c8', title: 'Advanced Portfolio', duration: '6 Months', ageGroup: '14+ Years' }
        ]
    },
    {
        id: 's6',
        slug: 'spoken-english',
        title: 'Spoken English & Communication',
        shortDescription: 'Build confidence and fluency in English for professional and personal success.',
        fullDescription: 'Communication is the key to leadership. Our course focuses on public speaking, active listening, and refined grammar, ensuring students can express themselves clearly in any environment.',
        category: 'Spoken English',
        isSeasonal: false,
        imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800',
        outcomes: ['Fluent Public Speaking', 'Business Writing Basics', 'Active Listening Skills', 'Confidence in Interviews'],
        curriculum: [
            { level: 'Phase 1', title: 'Confidence Building', details: 'Overcoming stage fear and basic sentence structure.' },
            { level: 'Phase 2', title: 'Professional Etiquette', details: 'Formal communication and presentation skills.' }
        ],
        classes: [
            { id: 'c9', title: 'Fluency Fast-track', duration: '3 Months', ageGroup: 'Open' }
        ]
    }
];

export const branchesData = [
    {
        id: 'b1',
        slug: 'main-campus-downtown',
        name: 'Main Campus - Downtown',
        type: 'Main Campus',
        description: 'Our flagship institution located in the heart of the city, featuring state-of-the-art facilities and our most experienced faculty.',
        address: '123 Education Lane, City Center',
        phone: '+1 234 567 8900',
        imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe1?auto=format&fit=crop&q=80&w=1200',
        serviceIds: ['s1', 's2', 's3', 's4', 's5', 's6'],
        facilities: ['Olympic-size Design Studio', 'Advanced Abacus Lab', 'Auditorium', 'Smart Classrooms'],
        hours: 'Mon-Sat: 9:00 AM - 8:00 PM',
        stats: { students: '500+', faculty: '25+' }
    },
    {
        id: 'b2',
        slug: 'westside-franchise',
        name: 'Westside Academy',
        type: 'Franchise',
        description: 'A vibrant learning hub serving the western district, specializing in primary education and abacus mastery.',
        address: '456 Creative Ave, West District',
        phone: '+1 234 567 8901',
        imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200',
        serviceIds: ['s1', 's2', 's5'],
        facilities: ['Interactive Play Zone', 'Modern Math Lab', 'Library'],
        hours: 'Mon-Sat: 10:00 AM - 6:00 PM',
        stats: { students: '200+', faculty: '12+' }
    },
    {
        id: 'b3',
        slug: 'north-hills-studio',
        name: 'North Hills Fashion Studio',
        type: 'Franchise',
        description: 'Our specialized studio dedicated to high-end fashion design and advanced illustration techniques.',
        address: '789 Style Blvd, North Hills',
        phone: '+1 234 567 8902',
        imageUrl: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200',
        serviceIds: ['s3', 's4', 's5'],
        facilities: ['Industrial Sewing Machines', 'Drafting Tables', 'Gallery Space'],
        hours: 'Mon-Fri: 11:00 AM - 7:00 PM',
        stats: { students: '150+', faculty: '8+' }
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
        author: 'Jayalakshmi',
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
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
        title: 'Abacus Competition Highlights 2023'
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


