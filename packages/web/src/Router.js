
import Home from './pages/Home'
import SignIn from './pages/Sign-in'


import { Routes, Route} from 'react-router-dom'

export default function Rotas(){
    return(
        <Routes>
            <Route path= ""  element={<Home/>} />
            <Route path= "/" element={<Home/>} />
            <Route path="/sign-in" element={<SignIn/>}/>
        </Routes>

        
    )
}