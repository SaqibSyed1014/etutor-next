
export interface Instructor {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  students: string;
  courses?: number;
}

const instructorsData: Instructor[] = [
  {
    id: '1',
    name: 'Devon Lane',
    role: 'Senior Developer',
    avatar: '/images/people/man-1.png',
    rating: 4.8,
    students: '854',
    courses: 12
  },
  {
    id: '2',
    name: 'Darrell Steward',
    role: 'Digital Project Designer',
    avatar: '/images/people/man-2.png',
    rating: 4.6,
    students: '451,444',
    courses: 8
  },
  {
    id: '3',
    name: 'Jane Cooper',
    role: 'UX/UI Designer',
    avatar: '/images/people/girl-1.png',
    rating: 4.8,
    students: '435,871',
    courses: 15
  },
  {
    id: '4',
    name: 'Albert Flores',
    role: 'Adobe Instructor',
    avatar: '/images/people/man-3.png',
    rating: 4.7,
    students: '311,323',
    courses: 10
  },
  {
    id: '5',
    name: 'Kathryn Murphy',
    role: 'Lead Developer',
    avatar: '/images/people/man-4.png',
    rating: 4.2,
    students: '2,711',
    courses: 5
  }
];

export const topInstructors = instructorsData;

export default instructorsData;
