import {Clock, FolderNotchOpen, PlayCircle} from "@/assets/icons/common-icons";

const CourseLength = () => {
    return (
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
                <FolderNotchOpen />
                <p>6 Sections</p>
            </div>
            <div className="flex items-center gap-1.5">
                <PlayCircle />
                <p>202 lectures</p>
            </div>
            <div className="flex items-center gap-1.5 [&>svg]:text-warning-500">
                <Clock />
                <p>19h 37m</p>
            </div>
        </div>
    )
}

export default CourseLength;
