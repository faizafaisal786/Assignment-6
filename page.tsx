import Header from "./components/Header";
import Hero from "./components/Hero";
import CoursesCatagory from "./components/CoursesCatagory";
import Companies from "./components/Companies";
import Achievements from "./components/Acheivements";
import Navbar from "./components/Navbar";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Courses from "./components/Courses";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Hero />
      <Companies />
      <CoursesCatagory />
      <Achievements />
      <Courses />
      <Team />
      <Testimonials />
      <Footer />
    </div>
  );
}


