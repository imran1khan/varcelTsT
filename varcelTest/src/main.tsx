import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import Login from './pages/Login.tsx'
import SignUp from './pages/SignUp.tsx'
import HomePage from './pages/HomePage.tsx'
import Dashboard from './pages/Dashboard.tsx'
import Transfer from './pages/Transfer.tsx'
import Transactions from './pages/Transactions.tsx'
import P2PTransfer from './pages/P2PTransfer.tsx'

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path='/' element={<Login/>} />
    <Route path='/signUp' element={<SignUp/>} />
    <Route path='/homepage' element={<HomePage/>}>
      <Route path='' element={<Dashboard/>}/>
      <Route path='/homepage/transfer' element={<Transfer/>}/>
      <Route path='/homepage/transactions' element={<Transactions/>}/>
      <Route path='/homepage/p2ptransfer' element={<P2PTransfer/>}/>
    </Route>
  </>
));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
    <RouterProvider router={router}/>
    </RecoilRoot>
  </React.StrictMode>,
)
