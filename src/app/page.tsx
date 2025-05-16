import Hero from "@/components/sections/Hero";
import CourseCategories from "@/components/sections/CourseCategories";
import BestSellingCourses from "@/components/sections/BestSellingCourses";
import FeaturedCourses from "@/components/sections/FeaturedCourses";
import BecomeInstructor from "@/components/sections/BecomeInstructor";
import TopInstructors from "@/components/sections/TopInstructors";
import TrustedCompanies from "@/components/sections/TrustedCompanies";
import CtaSection from "@/components/sections/CtaSection";
import DefaultLayout from "@/components/layouts/DefaultLayout";

export default function Home() {
  return (
      <>
          <DefaultLayout>
              <Hero/>
              <CourseCategories/>
              <BestSellingCourses/>
              <FeaturedCourses/>
              <BecomeInstructor/>
              <TopInstructors title="Top instructor of the month" aboveTheSection={true} showBottomLine={true}/>
              <TrustedCompanies BGColor="bg-white"/>
              <CtaSection/>
          </DefaultLayout>
      </>
  );
}
