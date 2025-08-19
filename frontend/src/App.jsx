import React, { useContext } from 'react'
import AuthPage from './pages/auth'
import { Routes, Route } from 'react-router-dom'
import RouteGuard from './components/route-guard'
import { AuthContext } from './context/auth-context'
import InstructorDashboardPage from './pages/instructor'
import StudenViewCommonLayout from './components/student-view/common-layout'
import StudentHomePage from './pages/student/home'

const App = () => {

  const { auth } = useContext(AuthContext);

  return (
    <Routes>

      <Route
        path='/auth'
        element={
          <RouteGuard element={<AuthPage />}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
        }
      />

      <Route
        path='/instructor'
        element={
          <RouteGuard
            element={<InstructorDashboardPage />}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
        }
      />

      <Route path='/'
        element={
          <RouteGuard
            element={<StudenViewCommonLayout />}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
        }
      >
        <Route path='' element={<StudentHomePage />}/>
        <Route path='home' element={<StudentHomePage />}/>

      </Route>

    </Routes>
  )
}

export default App
