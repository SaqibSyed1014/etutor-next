import {topInstructors} from "@/lib/@fake-db/instructors";
import {Card, CardContent, CardFooter} from "@/components/ui/card";
import {Rating, StudentCount} from "@/components/common/tiny-collection";
import {Button} from "@/components/ui/button";

const InstructorCard = ({ instructor, showSendMessageOption }: { instructor: typeof topInstructors[0], showSendMessageOption?: boolean }) => {
    return (
        <Card className="overflow-hidden text-center">
            <div className="aspect-square w-full overflow-hidden bg-yellow-500">
                <img
                    src={instructor.avatar}
                    alt={instructor.name}
                    className="w-full h-full object-cover"
                />
            </div>
            <CardContent className="flex flex-col gap-1 p-4">
                <p className="text-base font-medium text-gray-900">{instructor.name}</p>
                <p className="text-sm text-gray-500">{instructor.role}</p>
            </CardContent>
            <CardFooter className="flex flex-col items-stretch gap-4">
                <div className="flex items-center justify-between">
                    <Rating rating={instructor.rating} showCount={false}/>
                    <StudentCount count={instructor.students.toLocaleString()} showIcon={false}/>
                </div>
                {showSendMessageOption && <Button className="w-full" variant="outline">Send Message</Button>}
            </CardFooter>
        </Card>
    );
};

export default InstructorCard;
