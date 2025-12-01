import { GoodCompany } from "../components/landingpage/company/GoodCompany";
import { ExamTypes } from "../components/landingpage/examtypes/ExamTypes";
import { ExploreExam } from "../components/landingpage/exploreExam/ExploreExam";
import { Hero } from "../components/landingpage/hero/Hero";

export const LandingPage = () => {
  return (
    <div>
        <Hero/>
        <ExamTypes/>
        <ExploreExam/>
        <GoodCompany/>
    </div>
  );
}