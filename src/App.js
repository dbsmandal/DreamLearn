<<<<<<< HEAD
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './GlobalStyle'
import Navbar from './Navbar/Navbar'
import Home from './Pages/Home'
import Learn from './Pages/Learn'

const App = () => {


  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
=======
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Nav from './Components/NavFooter/Nav';
import Footer from './Components/NavFooter/Footer';
import LearnerHome from './Components/HomePage/Learner';
import EducatorHome from './Components/HomePage/EducatorHome/MyCourse';
import LandingPage from './Components/LandingPage';
import Comp from './Components/NavFooter/Comp'
import SignIn from './Components/SignIN/SignIn';
// import SignUp from './Components/SignIN/SignUp';
import AuthService from './Components/Auth/auth.service';
import LearnerDropdown from './Components/SecondNavbar/LearnerDD'
import InstrumentCourses from './Components/InstrumentCourses';
import Register from './Components/Register';
import Courses from './Components/Courses'
import Schedule from './Components/Schedule';
import About from './Components/AboutContact/About'
import Contact from './Components/AboutContact/Contact';
import Profile from './Components/Profile';
// import PrivateRoutes from './Components/ProtectedRoutes';
// import AllSchedule from './Components/AllSchedule';
import EducatorDropdown from './Components/SecondNavbar/EducatorDD';
import AddDemoVideo from './Components/Educator/AddDemoVideo/AddVideo';
import AddCourse from './Components/Educator/AddCourse/AddCourse';
import AddSchedule from './Components/Educator/AddSchedule/AddCourseSchedule';
import MyDemoVideo from './Components/Educator/MyDemoVideo/Educator';
import EducatorSchedule from './Components/Educator/EducatorSchedule/EducatorSchedule';
import Modal from './Components/Modal';
import PageNotFound from './Components/PageNotFound';
import LearnerRoute from './LearnerRoutes';
import EducatorRoute from './EducatorRoutes';
function App() {
  const [learner, setLearner] = useState(false);
  const [educator, setEducator] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    // console.log(user, 'currentuser');
    if (user) {
      setCurrentUser(user);
      setLearner(user.role.includes("ROLE_LEARNER"));
      setEducator(user.role.includes("ROLE_EDUCATOR"));

    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
<<<<<<< HEAD
        <Nav />
>>>>>>> dd4402fb378cd141107d06292901cec7e7ecbab7
=======
        <Nav
          currentUser={currentUser}
          learner={learner} educator={educator} />
        {learner ? <LearnerDropdown /> : ""}
        {educator ? <EducatorDropdown /> : ""}
>>>>>>> 4ee8bcc6ca3add2a480000ca8c056053959e94f0
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          {/* <Route path='/signup' element={<SignUp />} /> */}
          <Route path='/signin' element={<SignIn learner={learner} educator={educator} />} />
          <Route path='/learner' element={<LearnerRoute Component={LearnerHome} />} />
          <Route path='/profile' element={<LearnerRoute Component={Profile} />} />
          <Route path='/instruments/:instrument' element={<LearnerRoute Component={InstrumentCourses} />} />
          <Route path='/instruments/:instrument/:courseTitle' element={<LearnerRoute Component={Register} />} />
          <Route path='/modal/:courseID' element={<LearnerRoute Component={Modal} />} />
          <Route path='/courses' element={<LearnerRoute Component={Courses} />} />
          <Route path='/courses/:courseTitle' element={<LearnerRoute Component={Schedule} />} />
          {/* <Route path='/allschedule' element={<AllSchedule />} /> */}
          {/* educator routes */}
          <Route path='/educator' element={<EducatorRoute Component={EducatorHome} />} />
          <Route path='/adddemovideo' element={<EducatorRoute Component={AddDemoVideo} />} />
          <Route path='/addcourse' element={<EducatorRoute Component={AddCourse} />} />
          <Route path='/addschedule' element={<EducatorRoute Component={AddSchedule} />} />
          <Route path='/educatorschedule/:title' element={<EducatorRoute Component={EducatorSchedule} />} />
          <Route path='/mycourses' element={<EducatorRoute Component={MyDemoVideo} />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
<<<<<<< HEAD
<<<<<<< HEAD
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
=======
=======
        <Comp />
>>>>>>> 4ee8bcc6ca3add2a480000ca8c056053959e94f0
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
>>>>>>> dd4402fb378cd141107d06292901cec7e7ecbab7
