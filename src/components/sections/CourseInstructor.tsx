
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {Star, Users, PlayCircleFill} from "@/assets/icons/common-icons"

interface Instructor {
  id: string;
  name: string;
  title: string;
  avatar: string;
  rating: number;
  students: number;
  courses: number;
  bio: string;
  expanded?: boolean;
}

const CourseInstructor = () => {
  const instructors: Instructor[] = [
    {
      id: "i1",
      name: "Vako Shvili",
      title: "Web Designer & Best-Selling Instructor",
      avatar: "/images/people/man-3.png",
      rating: 4.9,
      students: 236568,
      courses: 9,
      bio: "One day Vako had enough with the 9-to-5 grind, or more like 9-to-9 in his case, and quit his job, or more like got himself fired from his own startup. He decided to work on his dream: be his own boss, travel the world, only do the work he enjoyed..."
    },
    {
      id: "i2",
      name: "Nima Tahami",
      title: "Entrepreneur & Designer • Founder of ShiftRide",
      avatar: "/images/people/man-4.png",
      rating: 4.6,
      students: 5342,
      courses: 1,
      bio: "I'm an entrepreneur & designer with a high passion for building products of all sorts and seeing ideas come to life. As a serial entrepreneur, I've designed and built projects in fields ranging from fashion to technology. I have over 10 years of experience in both..."
    }
  ];

  return (
    <div className="space-y-5">
        <h2 className="text-2xl">Course instructor <span className="font-normal">(02)</span></h2>

      {instructors.map(instructor => (
        <div key={instructor.id} className="flex flex-col md:flex-row gap-6 p-8 border border-gray-100">
          <div className="flex-shrink-0">
            <Avatar className="size-[136px] rounded-full">
              <AvatarImage src={instructor.avatar} alt={instructor.name} />
              <AvatarFallback>{instructor.name.charAt(0)}</AvatarFallback>
            </Avatar>
          </div>

          <div className="flex-grow flex flex-col gap-4">
            <div className="space-y-1.5">
              <h3 className="text-xl">{instructor.name}</h3>
              <p className="text-gray-600">{instructor.title}</p>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <div className="flex items-center text-sm">
                <Star />
                <span className="font-medium ml-1.5">{instructor.rating}</span>
                <span className="text-gray-600 ml-1">Course rating</span>
              </div>

              <div className="flex items-center [&>svg]:text-secondary-500 text-sm">
                <Users />
                <span className="font-medium ml-1.5">{instructor.students.toLocaleString()}</span>
                <span className="text-gray-600 ml-1">Students</span>
              </div>

              <div className="flex items-center [&>svg]:text-primary-500 text-sm">
                <PlayCircleFill />
                <span className="font-medium ml-1.5">{instructor.courses.toString().padStart(2, '0')}</span>
                <span className="text-gray-600 ml-1">Courses</span>
              </div>
            </div>

            <p className="text-gray-600">
              {instructor.bio}
              <span className="font-medium cursor-pointer">
                READ MORE
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseInstructor;
