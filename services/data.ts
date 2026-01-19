import { Achievement, Event, AcademicCategory, TeamMember, Resource, CourseCategory } from '../types';

export const TEAM_MEMBERS: TeamMember[] = [
  { id: '1', name: 'Alex Johnson', role: 'Chapter Chair', imageUrl: 'https://picsum.photos/id/1005/200/200' },
  { id: '2', name: 'Sarah Khalil', role: 'Vice Chair', imageUrl: 'https://picsum.photos/id/1011/200/200' },
  { id: '3', name: 'Karim Mroueh', role: 'Secretary', imageUrl: 'https://picsum.photos/id/1025/200/200' },
  { id: '4', name: 'Lina Fakih', role: 'Treasurer', imageUrl: 'https://picsum.photos/id/1027/200/200' },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: '1',
    title: 'Excellence Award 2023',
    description: 'Awarded the Outstanding University Award by ACI International for exceptional engagement and student activities.',
    date: '2023-10-15',
    imageUrl: 'https://picsum.photos/id/20/800/600',
  },
  {
    id: '2',
    title: 'Concrete Cube Competition Winner',
    description: 'First place in the regional concrete cube strength competition held at Beirut Arab University.',
    date: '2023-05-20',
    imageUrl: 'https://picsum.photos/id/16/800/600',
  },
  {
    id: '3',
    title: 'Community Outreach Drive',
    description: 'Renovated local public stairs in collaboration with the municipality, demonstrating engineering for social good.',
    date: '2022-11-05',
    imageUrl: 'https://picsum.photos/id/42/800/600',
  },
];

export const EVENTS: Event[] = [
  {
    id: '1',
    title: 'Seminar: Sustainable Concrete',
    date: '2024-04-15',
    time: '10:00 AM',
    location: 'BAU Main Auditorium',
    description: 'A deep dive into the future of eco-friendly building materials with guest speaker Dr. A. Smith.',
    imageUrl: 'https://picsum.photos/id/24/800/400',
    status: 'upcoming',
    isOpenForRegistration: true,
  },
  {
    id: '2',
    title: 'Site Visit: Port Reconstruction',
    date: '2024-05-01',
    time: '08:00 AM',
    location: 'Beirut Port',
    description: 'Field trip to observe ongoing reconstruction efforts and structural analysis.',
    imageUrl: 'https://picsum.photos/id/48/800/400',
    status: 'upcoming',
    isOpenForRegistration: false,
  },
  {
    id: '3',
    title: 'Annual Engineering Gala',
    date: '2023-12-10',
    description: 'Networking event connecting students with industry leaders.',
    imageUrl: 'https://picsum.photos/id/76/800/400',
    status: 'past',
  },
  {
    id: '4',
    title: 'Workshop: AutoCAD Advanced',
    date: '2023-11-20',
    description: 'Hands-on training session for advanced CAD techniques.',
    imageUrl: 'https://picsum.photos/id/60/800/400',
    status: 'past',
  },
];

export const CIVIL_CURRICULUM: CourseCategory[] = [
  {
    title: "University & Basic Requirements",
    courses: [
      "Islamic Culture",
      "National Education",
      "Military Sciences",
      "Innovation, Leadership and Entrepreneurship",
      "University Life Skills",
      "Communication Skills",
      "Principles of Economics",
      "Principles of Management",
      "Jordanian Constitution"
    ]
  },
  {
    title: "Mathematics & Basic Sciences",
    courses: [
      "Calculus I",
      "Calculus II",
      "Linear Algebra",
      "Differential Equations",
      "Probability and Statistics for Engineers",
      "Engineering Mathematics",
      "General Physics I",
      "General Physics II",
      "General Chemistry I",
      "General Chemistry II",
      "Engineering Geology"
    ]
  },
  {
    title: "Computer & Programming",
    courses: [
      "Computer Skills",
      "Engineering Programming",
      "Computer Applications in Engineering"
    ]
  },
  {
    title: "Engineering Basics",
    courses: [
      "Engineering Drawing",
      "Surveying",
      "Engineering Ethics and Professional Practice"
    ]
  },
  {
    title: "Structural Engineering",
    courses: [
      "Engineering Mechanics (Statics)",
      "Engineering Mechanics (Dynamics)",
      "Mechanics of Materials",
      "Structural Analysis I",
      "Structural Analysis II",
      "Reinforced Concrete Design I",
      "Reinforced Concrete Design II",
      "Steel Structure Design",
      "Foundation Engineering",
      "Earthquake Engineering"
    ]
  },
  {
    title: "Construction & Management",
    courses: [
      "Construction Materials",
      "Concrete Technology",
      "Construction Methods",
      "Construction Management",
      "Project Management",
      "Engineering Economics",
      "Quantity Surveying"
    ]
  },
  {
    title: "Transportation Engineering",
    courses: [
      "Transportation Engineering",
      "Highway Engineering",
      "Traffic Engineering",
      "Pavement Design"
    ]
  },
  {
    title: "Geotechnical Engineering",
    courses: [
      "Soil Mechanics",
      "Geotechnical Engineering",
      "Foundation Design"
    ]
  },
  {
    title: "Water & Environmental Engineering",
    courses: [
      "Fluid Mechanics",
      "Hydraulics",
      "Engineering Hydrology",
      "Water Resources Engineering",
      "Environmental Engineering",
      "Water and Wastewater Engineering"
    ]
  },
  {
    title: "Surveying & Geomatics",
    courses: [
      "Plane Surveying",
      "Engineering Surveying",
      "Advanced Surveying"
    ]
  },
  {
    title: "Electives",
    courses: [
      "Civil Engineering Elective I",
      "Civil Engineering Elective II",
      "Civil Engineering Elective III"
    ]
  },
  {
    title: "Training & Graduation",
    courses: [
      "Field Training",
      "Graduation Project I",
      "Graduation Project II"
    ]
  }
];

export const ACADEMIC_RESOURCES: Record<AcademicCategory, Resource[]> = {
  [AcademicCategory.CIVIL]: [], // Uses CIVIL_CURRICULUM
  [AcademicCategory.ARCH]: [
    { id: 'a1', title: 'History of Modern Architecture', type: 'article', url: '#', description: 'Overview of key movements in the 20th century.' },
    { id: 'a2', title: 'Sustainable Design Principles', type: 'pdf', url: '#' },
  ],
  [AcademicCategory.SURVEYING]: [
    { id: 's1', title: 'GIS Fundamentals', type: 'link', url: '#', description: 'Introduction to Geographic Information Systems.' },
    { id: 's2', title: 'Total Station Operation Manual', type: 'pdf', url: '#' },
  ],
};