import { courseCategories } from "@/lib/@fake-db/courseCategories";
import { Course } from "@/lib/@fake-db/courses/type"

export const coursesData: Course[] = [
  {
    id: 1,
    title: 'Machine Learning A-Z™: Hands-On Python & R in Data Science',
    category: courseCategories.DESIGN,
    price: 57,
    originalPrice: 199.99,
    rating: 5.0,
    reviewCount: 357914,
    students: 451444,
    instructor: {
      id: '1',
      name: 'Kevin Gilbert',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    },
    coInstructor: {
      id: '1',
      name: 'Guy Hawkins',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    },
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    duration: 6,
    level: 'Beginner',
    subtitle: "",
    isBestSelling: true
  },
  {
    id: 2,
    title: 'The Complete 2021 Web Development Bootcamp',
    category: courseCategories.FINANCE,
    price: 45,
    rating: 5.0,
    reviewCount: 357914,
    students: 197637,
    instructor: {
      id: '1',
      name: 'Kevin Gilbert',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    },
    coInstructor: {
      id: '1',
      name: 'Guy Hawkins',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    },
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    duration: 6,
    level: 'Beginner',
    isBestSelling: false
  },
  {
    id: 3,
    title: 'Learn Python and Django Programming Masterclass',
    category: courseCategories.BUSINESS,
    price: 97,
    originalPrice: 235.99,
    rating: 2.0,
    reviewCount: 357914,
    students: 511123,
    instructor: {
      id: '1',
      name: 'Kevin Gilbert',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    },
    image: 'https://images.unsplash.com/photo-1587691592099-24045742c181?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    duration: 6,
    level: 'Beginner',
    isBestSelling: true
  },
  {
    id: 4,
    title: 'The Complete Digital Marketing Course - 12 Courses in 1',
    category: courseCategories.MARKETING,
    price: 65,
    originalPrice: 110.55,
    rating: 5.0,
    reviewCount: 357914,
    students: 90988,
    instructor: {
      id: '1',
      name: 'Kevin Gilbert',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    },
    coInstructor: {
      id: '1',
      name: 'Guy Hawkins',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    },
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    duration: 6,
    level: 'Beginner',
    isBestSelling: true
  },
  {
    id: 5,
    title: 'React Level I: LifeUI Master/Teacher Program',
    category: courseCategories.DEVELOPMENTS,
    price: 57,
    originalPrice: 95.99,
    rating: 4.0,
    reviewCount: 357914,
    students: 280,
    instructor: {
      id: '1',
      name: 'Kevin Gilbert',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    },
    coInstructor: {
      id: '1',
      name: 'Guy Hawkins',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    },
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    duration: 6,
    level: 'Beginner',
    isBestSelling: false
  },
  {
    id: 6,
    title: 'The Complete Foundation Stock Trading Course',
    category: courseCategories.LEGAL,
    price: 49,
    originalPrice: 199.99,
    rating: 5.0,
    reviewCount: 357914,
    students: 197637,
    instructor: {
      id: '1',
      name: 'Kevin Gilbert',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    },
    image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    duration: 6,
    level: 'Beginner',
    isBestSelling: false
  },
  {
    id: 7,
    title: 'Become an Pro in Excel, Financial Modeling and Valuation',
    category: courseCategories.LEGAL,
    price: 90,
    originalPrice: 115.00,
    rating: 4.8,
    reviewCount: 357914,
    students: 511123,
    instructor: {
      id: '1',
      name: 'Kevin Gilbert',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    },
    image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    duration: 6,
    level: 'Beginner',
    isBestSelling: true
  },
  {
    id: 8,
    title: 'The Python Mega Course: Build 10 Real World Applications',
    category: courseCategories.HEALTH,
    price: 50,
    originalPrice: 156.99,
    rating: 4.3,
    reviewCount: 357914,
    students: 42434,
    instructor: {
      id: '1',
      name: 'Kevin Gilbert',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    },
    coInstructor: {
      id: '1',
      name: 'Guy Hawkins',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    },
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    duration: 6,
    level: 'Beginner',
    description: 'The Python Mega Course will take you from beginner to professional in Python programming, teaching both theory and practical implementation through building 10 real-world applications.',
    learningPoints: [
      'Learn to use Python professionally, learning both Python 2 and Python 3',
      'Create games with Python, like Tic Tac Toe and Blackjack',
      'Create web applications with Python'
    ],
    isBestSelling: true
  },
  {
    id: 9,
    title: 'Copywriting - Become a Freelance Copywriter, your own boss',
    category: courseCategories.IT,
    price: 78,
    originalPrice: 99,
    rating: 3.8,
    reviewCount: 357914,
    students: 81400,
    instructor: {
      id: '1',
      name: 'Kevin Gilbert',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    },
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    duration: 6,
    level: 'Beginner',
    learningPoints: [
      'Learn to use Python professionally, learning both Python 2 and Python 3',
      'Create games with Python, like Tic Tac Toe and Blackjack',
      'Create web applications with Python'
    ],
    isBestSelling: true
  },
  {
    id: 10,
    title: 'Google Analytics Certification - Learn How To Pass The Exam',
    category: courseCategories.OFFICE,
    price: 24,
    originalPrice: 50.75,
    rating: 5.0,
    reviewCount: 357914,
    students: 28,
    instructor: {
      id: '1',
      name: 'Kevin Gilbert',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    },
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    duration: 6,
    level: 'Beginner',
    learningPoints: [
      'Learn to use Python professionally, learning both Python 2 and Python 3',
      'Create games with Python, like Tic Tac Toe and Blackjack',
      'Create web applications with Python'
    ],
    isBestSelling: true
  },
  {
    id: 11,
    title: 'Google Analytics Certification - Learn How To Pass The Exam',
    category: courseCategories.MUSIC,
    price: 14.00,
    originalPrice: 89.99,
    rating: 5.0,
    reviewCount: 357914,
    students: 1494,
    instructor: {
      id: '1',
      name: 'Kevin Gilbert',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    },
    coInstructor: {
      id: '1',
      name: 'Guy Hawkins',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    },
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    duration: 6,
    level: 'Beginner',
    learningPoints: [
      'Learn to use Python professionally, learning both Python 2 and Python 3',
      'Create games with Python, like Tic Tac Toe and Blackjack',
      'Create web applications with Python'
    ],
    isBestSelling: false
  },
  {
    id: 12,
    title: 'Investing In Stocks The Complete Course! (13 Hour)',
    category: courseCategories.MARKETING,
    price: 14.00,
    originalPrice: 89.99,
    rating: 4.5,
    reviewCount: 357914,
    students: 26,
    instructor: {
      id: '1',
      name: 'Kevin Gilbert',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    },
    coInstructor: {
      id: '1',
      name: 'Guy Hawkins',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    },
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    duration: 6,
    level: 'Beginner',
    learningPoints: [
      'Learn to use Python professionally, learning both Python 2 and Python 3',
      'Create games with Python, like Tic Tac Toe and Blackjack',
      'Create web applications with Python'
    ],
    isBestSelling: false
  },
  {
    id: 13,
    title: 'Adobe XD for Web Design: Essential Principles',
    category: courseCategories.BUSINESS,
    price: 14.00,
    originalPrice: 89.99,
    rating: 5.0,
    reviewCount: 357914,
    students: 51444,
    instructor: {
      id: '1',
      name: 'Kevin Gilbert',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    },
    coInstructor: {
      id: '1',
      name: 'Guy Hawkins',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    },
    image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    duration: 6,
    level: 'Beginner',
    learningPoints: [
      'Learn to use Python professionally, learning both Python 2 and Python 3',
      'Create games with Python, like Tic Tac Toe and Blackjack',
      'Create web applications with Python'
    ],
    isBestSelling: true
  },
  {
    id: 14,
    title: 'The Python Mega Course: Build 10 Real World Applications',
    category: courseCategories.DESIGN,
    price: 14.00,
    originalPrice: 89.99,
    rating: 4.9,
    reviewCount: 357914,
    students: 26,
    instructor: {
      id: '1',
      name: 'Kevin Gilbert',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    },
    image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    duration: 6,
    level: 'Beginner',
    learningPoints: [
      'Learn to use Python professionally, learning both Python 2 and Python 3',
      'Create games with Python, like Tic Tac Toe and Blackjack',
      'Create web applications with Python'
    ],
    isBestSelling: false
  },
  {
    id: 15,
    title: 'Facebook Ads & Facebook Marketing MASTERY 2021 Course',
    category: courseCategories.BUSINESS,
    price: 90,
    originalPrice: 150.99,
    rating: 4.0,
    reviewCount: 357914,
    students: 451444,
    instructor: {
      id: '1',
      name: 'Kevin Gilbert',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    },
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    duration: 6,
    level: 'Beginner',
    isBestSelling: true
  },
  {
    id: 16,
    title: '2021 Complete Python Bootcamp From Zero to Hero in Python',
    category: courseCategories.DEVELOPMENTS,
    price: 77,
    originalPrice: 149.99,
    discount: 50,
    rating: 5.0,
    reviewCount: 357914,
    students: 197637,
    instructor: {
      id: '1',
      name: 'Kevin Gilbert',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    },
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    duration: 6,
    level: 'Beginner',
    description: '2021 Complete Python Bootcamp From Zero to Hero in Python',
    learningPoints: [
      'Learn to use Python professionally, learning both Python 2 and Python 3',
      'Create games with Python, like Tic Tac Toe and Blackjack',
      'Create games with Python, like Tic Tac Toe and Blackjack'
    ],
    isBestSelling: false
  }
];

export const topCourses = [courseCategories.LEGAL, courseCategories.BUSINESS, courseCategories.FINANCE, courseCategories.IT, courseCategories.PERSONALDEVELOPMENT, courseCategories.OFFICE, courseCategories.MARKETING, courseCategories.PHOTOGRAPHY, courseCategories.LIFESTYLE, courseCategories.DESIGN, courseCategories.HEALTH, courseCategories.MUSIC]
// Export different selections of courses
export const bestSellingCourses = coursesData.filter((course) => course.category.isBestSelling);
export const featuredCourses = coursesData.slice(10, 14);
export const recentlyAddedCourses = coursesData.slice(7, 16);
export const getSingleCourse = (id: string) => coursesData.find(course => course.id === id) || null;
export const getCoursesByCategory = (category: string) =>
  coursesData.filter(course => course.category.title.toLowerCase() === category.toLowerCase());

export const sortOptions: { value: string; label: string }[] = [
  {
    value: 'trending',
    label: 'Trending'
  },
  {
    value: 'high-rating',
    label: 'High Rating'
  },
  {
    value: 'low-rating',
    label: 'Lowest Rating'
  }
]
export const tools = [
  { id: 1, name: "HTML 5", count: 1345 },
  { id: 2, name: "CSS 3", count: 15796 },
  { id: 3, name: "React", count: 1345 },
  { id: 4, name: "Webflow", count: 1345 },
  { id: 5, name: "Node.js", count: 1345 },
  { id: 6, name: "Laravel", count: 1345 },
  { id: 7, name: "Sass", count: 1345 },
  { id: 8, name: "WordPress", count: 1345 }
];

export const ratings = [
  { value: 5, label: "5 Star", count: 1345 },
  { value: 4, label: "4 Star & up", count: 1345 },
  { value: 3, label: "3 Star & up", count: 1345 },
  { value: 2, label: "2 Star & up", count: 1345 },
  { value: 1, label: "1 Star & up", count: 1345 }
];

export const courseLevels = [
  { id: "all", name: "All Level", count: 1345 },
  { id: "beginner", name: "Beginner", count: 1345 },
  { id: "intermediate", name: "Intermediate", count: 1345 },
  { id: "advanced", name: "Expert", count: 1345 }
];

export const durations = [
  { id: "6-12", name: "6-12 Months", count: 1345 },
  { id: "3-6", name: "3-6 Months", count: 1345 },
  { id: "1-3", name: "1-3 Months", count: 1345 },
  { id: "1-4weeks", name: "1-4 Weeks", count: 1345 },
  { id: "1-7days", name: "1-7 Days", count: 1345 }
];

export default coursesData;
