import { categories } from '@/utils/categories'
import Link from 'next/link'
import React from 'react'
import {FiGithub, FiInstagram, FiLinkedin, FiTwitter, FiYoutube} from "react-icons/fi"
import FiverrLogo from './FiverrLogo'

const Footer = () => {
  const socialLinks = [
    {name:"Github", icon: <FiGithub />, link:"https://www.github.com"},
    {name:"Github", icon: <FiYoutube />, link:"https://www.youtube.com"},
    {name:"Github", icon: <FiLinkedin />, link:"https://www.linkedin.com"},
    {name:"Github", icon: <FiInstagram />, link:"https://www.instagram.com"},
    {name:"Github", icon: <FiTwitter />, link:"https://www.twitter.com"}, 
  ]

  const data = [
    {
      headerName: "Categories",
    links:[
      ...categories.map(({name})=>({
        name, link: `/search?category=${name}`
      }))
    ]
  },
  {
    headerName: "About",
    links:[
      {name:"Career", link:"#"},
      {name:"Press & News", link:"#"},
      {name:"Partnership", link:"#"},
      {name:"Privacy Policy", link:"#"},
      {name:"Terms of Services", link:"#"},
      {name:"Intellectual Property Claims", link:"#"},
      {name:"Investor Relations", link:"#"},
    ]
  },
  {
    headerName:"Support",
    links:[
      {name: "Help & Support", link:"#"},
     { name: "Trust & Safety", link:"#"},
      {name: "Selling on Side-Husl", link:"#"},
      {name: "Buying on Side-Husl", link:"#"},
  ]
  },
  {
    headerName: "Community",
    links:[
      {name:"Community Success Stories", link:"#"},
      {name:"Community Hub", link:"#"},
      {name:"Forums", link:"#"},
      {name:"Event", link:"#"},
      {name:"Blogs", link:"#"},
      {name:"Influencers", link:"#"},
      {name:"Affliates", link:"#"},
      {name:"Podcasts", link:"#"},
      {name:"Invite a Friend", link:"#"},
      {name:"Community Standard", link:"#"},
      {name:"Become A Seller", link:"#"},
    ]
  },
  {
    headerName: "More From Side-Husl",
    links:[
      {name:"Side-Husl Business", link:"#"},
      {name:"Side-Husl Pro", link:"#"},
      {name:"Side-Husl Logo Maker", link:"#"},
      {name:"Side-Husl Guides", link:"#"},
      {name:"Get Inspired", link:"#"},
      {name:"Side-Husl Select", link:"#"},
      {name:"ClearVoice", link:"#"},
      {name:"Side-Husl Workspace", link:"#"},
      {name:"Learn", link:"#"},
      {name:"Working Not Working", link:"#"},
    ]
  }
  ]
  return (
    <footer className="w-full mx-auto px-32 py-16 h-max border-t border-gray-200 bg-gray-100">
      <ul className="flex justify-between">
        {data.map(({headerName,links})=>{
          return (
            <li key={headerName} className="flex flex-col gap-2">
              <span className="font-bold">
                {headerName}
              </span>
              <ul className="flex flex-col gap-2">
                {links.map(({name,link})=>(
                  <li key={name} className='text-[#404145]'>
                    <Link href={link}>{name}</Link>
                  </li>
                ))}
              </ul>
            </li>
          )
        })}
      </ul>
      <div className="mt-12 flex justify-between items-center">
        <FiverrLogo fillColor={"#404145"}  />
        <ul className="flex gap-5">
          {socialLinks.map(({name, icon, link})=>(
            <li key={name} className="text-xl text-[#404145] hover:text-[#1d8f73] transition-all">
              <Link href={link} >{icon}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer