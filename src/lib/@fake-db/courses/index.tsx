import {instructorsData} from "@/lib/@fake-db/instructors";
import { courseCategories } from "@/lib/@fake-db/courseCategories";
import { Course, CourseProgress } from "@/lib/@fake-db/courses/type"
import {DropdownOption} from "../../../../types";

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
    instructor: instructorsData[0],
    coInstructor: instructorsData[2],
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    duration: 6,
    level: 'Beginner',
    subtitle: "",
    isBestSelling: true,
    learningPoints: [
      "Build ML models using libraries like scikit-learn & caret.",
      "Understand Supervised vs Unsupervised Learning.",
      "Master data preprocessing techniques.",
      "Implement algorithms like SVM, Decision Trees, and Random Forest.",
      "Visualize results using matplotlib and ggplot2."
    ]
  },
  {
    id: 2,
    title: 'The Complete 2021 Web Development Bootcamp',
    category: courseCategories.FINANCE,
    price: 45,
    rating: 5.0,
    reviewCount: 357914,
    students: 197637,
    instructor: instructorsData[1],
    coInstructor: instructorsData[0],
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    duration: 6,
    level: 'Beginner',
    isBestSelling: false,
    learningPoints: [
      'Build web apps with HTML, CSS, JavaScript, and Node.js',
      'Use MongoDB and Express for backend development',
      'Deploy web projects using Git and GitHub',
      'Learn RESTful API integration',
      'Master responsive design with Bootstrap'
    ]
  },
  {
    id: 3,
    title: 'Learn Business Development as an Expert',
    category: courseCategories.BUSINESS,
    price: 97,
    originalPrice: 235.99,
    rating: 2.0,
    reviewCount: 357914,
    students: 511123,
    instructor: instructorsData[3],
    image: 'https://images.unsplash.com/photo-1587691592099-24045742c181?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    duration: 6,
    level: 'Beginner',
    isBestSelling: true,
    learningPoints: [
      'Identify and qualify new business opportunities',
      'Build long-term strategic partnerships',
      'Create and manage sales pipelines',
      'Understand go-to-market strategies'
    ]
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
    instructor: instructorsData[4],
    coInstructor: instructorsData[5],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    duration: 6,
    level: 'Beginner',
    isBestSelling: true,
    learningPoints: [
      'Run effective campaigns on Google Ads and Facebook Ads',
      'Perform SEO optimization and keyword targeting',
      'Track marketing results using Google Analytics'
    ]
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
    instructor: instructorsData[5],
    coInstructor: instructorsData[6],
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    duration: 6,
    level: 'Beginner',
    isBestSelling: false,
    learningPoints: [
      'Understand React component architecture',
      'Use hooks like useState and useEffect',
      'Build dynamic user interfaces with props and state',
      'Apply conditional rendering techniques'
    ]
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
    instructor: instructorsData[8],
    image: 'https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    duration: 6,
    level: 'Beginner',
    isBestSelling: false,
    learningPoints: [
      'Understand stock market fundamentals',
      'Learn technical vs. fundamental analysis',
      'Read and interpret candlestick charts',
      'Practice risk management and trade psychology'
    ]
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
    instructor: instructorsData[7],
    image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    duration: 6,
    level: 'Beginner',
    isBestSelling: true,
    learningPoints: [
      'Build advanced Excel models',
      'Perform financial forecasting and budgeting',
      'Master business valuation techniques',
      'Use Excel for scenario and sensitivity analysis',
      'Understand real-world case studies'
    ]
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
    instructor: instructorsData[6],
    coInstructor: instructorsData[9],
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
    instructor: instructorsData[10],
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    duration: 6,
    level: 'Beginner',
    learningPoints: [
      "Learn persuasive writing techniques for sales and marketing",
      "Understand client briefs and write high-converting copy",
      "Build a sustainable freelance business"
    ],
    isBestSelling: true,
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
    instructor: instructorsData[7],
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    duration: 6,
    level: 'Beginner',
    learningPoints: [
      'Understand GA metrics, dimensions, and data reports',
      'Learn how to set up goals, filters, and segments',
      'Track user behavior across websites and devices',
      'Prepare confidently for the certification exam',
      'Apply analytics insights to optimize web performance'
    ],
    isBestSelling: true
  },
  {
    id: 11,
    title: 'Google SEO Certification - Learn How To Add SEO in application',
    category: courseCategories.MUSIC,
    price: 14.00,
    originalPrice: 89.99,
    rating: 5.0,
    reviewCount: 357914,
    students: 1494,
    instructor: instructorsData[2],
    coInstructor: instructorsData[10],
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    duration: 6,
    level: 'Beginner',
    learningPoints: [
      'Implement on-page and technical SEO strategies',
      'Use tools like Google Search Console and SEMrush',
      'Optimize meta tags, headings, and site structure',
      'Learn keyword research and content planning',
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
    instructor: instructorsData[13],
    coInstructor: instructorsData[3],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    duration: 6,
    level: 'Beginner',
    learningPoints: [
      'Understand stock market fundamentals and terminology',
      'Learn how to evaluate stocks using key indicators',
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
    instructor: instructorsData[12],
    coInstructor: instructorsData[10],
    image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    duration: 6,
    level: 'Beginner',
    learningPoints: [
      'Collaborate and share designs with clients and teams',
      'Learn design best practices and accessibility'
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
    instructor: instructorsData[0],
    image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    duration: 6,
    level: 'Beginner',
    learningPoints: [
      'Learn Python syntax, data structures, and libraries',
      'Build apps with Flask, Tkinter, and Django',
      'Connect Python to databases and APIs'
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
    instructor: instructorsData[2],
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    duration: 6,
    level: 'Beginner',
    isBestSelling: true,
    learningPoints: [
      'Create and manage Facebook ad campaigns',
      'Target the right audience using pixel and custom audiences',
      'Design effective ad creatives and landing pages',
      'Analyze campaign performance with FB Ads Manager',
      'Scale successful ads for higher ROI'
    ]
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
    instructor: instructorsData[8],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80',
    duration: 6,
    level: 'Beginner',
    description: '2021 Complete Python Bootcamp From Zero to Hero in Python',
    learningPoints: [
      'Learn to use Python professionally, learning both Python 2 and Python 3',
      'Create games with Python, like Tic Tac Toe and Blackjack'
    ],
    isBestSelling: false
  }
];

export const courseProgressData :CourseProgress[] = [
  {
    ...coursesData[0],
    currentLecture: "Intorductions",
    lectureNumber: 1,
    status: 'in-progress'
  },
  {
    ...coursesData[1],
    currentLecture: "Intorductions",
    lectureNumber: 1,
    status: 'in-progress',
    progress: 61,
  },
  {
    ...coursesData[2],
    currentLecture: "Intorductions",
    lectureNumber: 1,
    status: 'completed'
  },
  {
    ...coursesData[3],
    currentLecture: "Intorductions",
    lectureNumber: 1,
    status: 'in-progress',
    progress: 12,
  },
  {
    ...coursesData[4],
    currentLecture: "Intorductions",
    lectureNumber: 1,
    status: 'in-progress'
  },
  {
    ...coursesData[6],
    currentLecture: "Intorductions",
    lectureNumber: 1,
    status: 'in-progress',
    progress: 20,
  },
  {
    ...coursesData[7],
    currentLecture: "Intorductions",
    lectureNumber: 1,
    status: 'completed'
  },
  {
    ...coursesData[9],
    currentLecture: "Intorductions",
    lectureNumber: 1,
    status: 'in-progress'
  },
  {
    ...coursesData[5],
    currentLecture: "Intorductions",
    lectureNumber: 1,
    status: 'in-progress',
    progress: 45,
  },
  {
    ...coursesData[10],
    currentLecture: "Intorductions",
    lectureNumber: 1,
    status: 'in-progress'
  },
  {
    ...coursesData[11],
    currentLecture: "Intorductions",
    lectureNumber: 1,
    status: 'in-progress',
    progress: 75,
  },
  {
    ...coursesData[12],
    currentLecture: "Intorductions",
    lectureNumber: 1,
    status: 'completed'
  },
  {
    ...coursesData[13],
    currentLecture: "Intorductions",
    lectureNumber: 1,
    status: 'in-progress'
  },
  {
    ...coursesData[14],
    currentLecture: "Intorductions",
    lectureNumber: 1,
    status: 'in-progress',
    progress: 90,
  },
  {
    ...coursesData[15],
    currentLecture: "Intorductions",
    lectureNumber: 1,
    status: 'completed'
  },
];

export const topCourses = [courseCategories.LEGAL, courseCategories.BUSINESS, courseCategories.FINANCE, courseCategories.IT, courseCategories.PERSONALDEVELOPMENT, courseCategories.OFFICE, courseCategories.MARKETING, courseCategories.PHOTOGRAPHY, courseCategories.LIFESTYLE, courseCategories.DESIGN, courseCategories.HEALTH, courseCategories.MUSIC]
// Export different selections of courses
export const bestSellingCourses = coursesData.filter((course) => course.category.isBestSelling);
export const featuredCourses = coursesData.slice(10, 14);
export const recentlyAddedCourses = coursesData.slice(7, 16);
export const getSingleCourse = (id: number) => coursesData.find(course => course.id === id) || null;
export const getCoursesByCategory = (category: string) =>
  coursesData.filter(course => course.category.title.toLowerCase() === category.toLowerCase());

export const sortOptions: DropdownOption[] = [
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

export const courseLanguage = [
  { value: "eng", name: "English" },
  { value: "french", name: "French" },
  { value: "portuguese", name: "Portuguese" },
  { value: "danish", name: "Danish" },
  { value: "hindi", name: "Hindi" }
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
