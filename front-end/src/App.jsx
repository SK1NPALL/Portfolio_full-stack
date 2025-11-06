import './App.css'
import Portfolio from './components/Portfolio'
import { Routes, Route } from "react-router";
import Edit from './components/Edit-page/Edit'
import AboutmeEdit from './components/Edit-page/AboutmeEdit';
import ProjectEdit from './components/Edit-page/ProjectEdit';
import ActivitiesEdit from './components/Edit-page/ActivitiesEdit';

function App() {

  return (
    <>
      
      <Routes>
        <Route path="/" element={<Portfolio/>} />
        <Route path="/edit" element={<Edit/>} />
        <Route path="/abt_edit" element={<AboutmeEdit/>} />
        <Route path="/proj_edit" element={<ProjectEdit/>} />
        <Route path="/acti_edit" element={<ActivitiesEdit/>} />
      </Routes>

    </>
  )
}

export default App
