
export interface Instructor {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  students: r;
  courses?: number;
}

export const instructorsData: Instructor[] = [
  {
    id: 1,
    name: 'Devon Lane',
    role: 'Senior Developer',
    avatar: '/images/people/man-1.png',
    rating: 4.8,
    students: 8100,
    courses: 12
  },
  {
    id: 2,
    name: 'Darrell Steward',
    role: 'Digital Project Designer',
    avatar: '/images/people/man-2.png',
    rating: 4.6,
    students: 4442,
    courses: 8
  },
  {
    id: 3,
    name: 'Jane Cooper',
    role: 'UX/UI Designer',
    avatar: '/images/people/girl-1.png',
    rating: 4.8,
    students: 8092,
    courses: 15
  },
  {
    id: 4,
    name: 'Albert Flores',
    role: 'Adobe Instructor',
    avatar: '/images/people/man-3.png',
    rating: 4.7,
    students: 300872,
    courses: 10
  },
  {
    id: 5,
    name: 'Jack Borrows',
    role: 'Senior Developer',
    avatar: '/images/people/man-4.png',
    rating: 4.6,
    students: 101,
    courses: 5
  },
  {
    id: 6,
    name: 'Kevin Richie',
    role: 'Developer',
    avatar: '/images/people/man-6.png',
    rating: 4.2,
    students: 8492,
    courses: 12
  },
  {
    id: 7,
    name: 'Liz Taylor',
    role: 'Lead Developer',
    avatar: '/images/people/girl-2.png',
    rating: 4.4,
    students: 421,
    courses: 8
  },
  {
    id: 8,
    name: 'Danny Holmes',
    role: 'DevOps Developer',
    avatar: '/images/people/girl-4.png',
    rating: 4.4,
    students: 1566,
    courses: 52
  },
  {
    id: 9,
    name: 'Brooke',
    role: 'Engineer',
    avatar: '/images/people/man-5.png',
    rating: 4.1,
    students: 7001,
    courses: 5
  },
  {
    id: 10,
    name: 'Angela',
    role: 'Team Lead',
    avatar: '/images/people/girl-6.png',
    rating: 4.5,
    students: 5020,
    courses: 90
  },
  {
    id: 11,
    name: 'Katie Langford',
    role: 'Developer',
    avatar: '/images/people/girl-7.png',
    rating: 4.4,
    students: 4890,
    courses: 75
  },
  {
    id: 12,
    name: 'Kathryn Murphy',
    role: 'Guy Hawkins',
    avatar: '/images/people/man-5.png',
    rating: 4.2,
    students: 346,
    courses: 50
  },
  {
    id: 13,
    name: 'Annette Black',
    role: 'Lead Developer',
    avatar: '/images/people/girl-9.png',
    rating: 3.5,
    students: 4500,
    courses: 15
  },
  {
    id: 14,
    name: 'Esther Howard',
    role: 'UI/UX Designer',
    avatar: '/images/people/girl-8.jpg',
    rating: 4.3,
    students: 2090,
    courses: 5
  }
];

export const topInstructors = instructorsData.filter(instructor => instructor.rating > 4.5);
