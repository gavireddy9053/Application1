import React from "react"
import ReactDOM from 'react-dom/client'
import App from './App'
import { RouterProvider } from "react-router-dom"
import { router } from "./App"
import '@fortawesome/fontawesome-free/css/all.min.css';

let ele = document.getElementById('root')
let rootEle = ReactDOM.createRoot(ele)
rootEle.render(
    <RouterProvider router={router}/>
)
