import React, { createContext, useContext, useState, ReactNode } from "react"
import { PortfolioData } from "../types"

const defaultData: PortfolioData = {
  about: {
    name: "Steph",
    title: "Frontend Engineer",
    bio: "Crafting beautiful, intuitive interfaces with Vue.js and React. Passionate about real-time systems, mapping technologies, and building products that make a difference.",
    email: "stephaniehutama@gmail.com",
    github: "stephaniehutama",
    linkedin: "stephanie-hutama",
  },
  projects: [
    {
      id: "1",
      title: "Control Tower Dashboard",
      description:
        "Real-time fleet management dashboard for monitoring vehicles and driver activities. Led multiple enhancements including WebSocket connectivity fixes, multi-IMEI query optimization for faster data loading, CT card component revamp, notification system integration, and vehicle grouping logic improvements for better fleet organization.",
      image: "/images/control-tower.png",
      tags: ["Vue.js", "WebSocket", "GraphQL", "Vuex", "SCSS"],
      category: "work",
      featured: true,
      client: "MCEasy",
    },
    {
      id: "2",
      title: "Alert Center System",
      description:
        "Centralized notification hub for fleet alerts featuring real-time WebSocket updates, smart filtering, and intuitive accordion UI. Includes alert detail pages with Google Maps integration displaying vehicle locations and route polylines. Developed and maintained across two codebases — Vue 2 with JavaScript (legacy) and Vue 3 Nuxt with TypeScript (modern) — ensuring feature parity between both systems.",
      image: "/images/alert-center.png",
      tags: [
        "Vue.js",
        "Nuxt",
        "TypeScript",
        "WebSocket",
        "Google Maps API",
        "SCSS",
      ],
      category: "work",
      featured: true,
      client: "MCEasy",
    },
    {
      id: "3",
      title: "Orthophoto Map Overlay",
      description:
        "High-performance mapping feature displaying aerial orthophoto imagery with dynamic tile loading and service worker caching. Enables users to toggle satellite overlays on fleet tracking maps for enhanced spatial awareness and route planning.",
      image: "/images/orthophoto.png",
      tags: ["Vue.js", "Google Maps API", "Service Worker", "TypeScript"],
      category: "work",
      featured: true,
      client: "MCEasy",
    },
    {
      id: "4",
      title: "Fleet Operations Suite",
      description:
        "End-to-end development of core fleet management modules enhancing operational efficiency. Delivered Maintenance Management for vehicle servicing workflows, Scheduler for automated task coordination, and Shift Management for streamlined driver allocation. Implemented complex form handling, data validation, and scalable component architecture.",
      image: "/images/fleet-management.png",
      tags: ["Vue.js", "TypeScript", "Vuex", "REST API", "SCSS"],
      category: "work",
      featured: true,
      client: "MCEasy",
    },
    {
      id: "5",
      title: "Portfolio Website",
      description:
        "Personal portfolio built with React, TypeScript, and Vite. Features dark/light theme toggle, responsive design, and a secret CMS for content management.",
      image: "",
      tags: ["React", "TypeScript", "Vite", "CSS Modules"],
      category: "personal",
      featured: false,
    },
  ],
  experiences: [
    {
      id: "1",
      role: "Frontend Engineer",
      company: "MCEasy",
      period: "2023 — Present",
      description:
        "Building and maintaining Vue.js applications for a fleet management platform serving enterprise clients. Responsible for real-time monitoring systems, mapping integrations, and notification infrastructure.",
      highlights: [
        "Vue.js",
        "Nuxt",
        "WebSocket",
        "GraphQL",
        "Google Maps API",
        "TypeScript",
        "Vuex",
        "Pinia",
      ],
    },
    {
      id: "2",
      role: "Marketing Agent",
      company: "Vista Property",
      period: "May 2018 — 2023",
      description:
        "Freelance property agent specializing in apartment and house rentals and sales. Built client relationships, conducted property viewings, and negotiated deals for residential properties.",
      highlights: [
        "Sales",
        "Negotiation",
        "Client Relations",
        "Property Marketing",
        "Freelance",
      ],
    },
  ],
  skills: {
    technical: [
      // Frontend
      { name: "Vue.js", category: "Frontend" },
      { name: "React", category: "Frontend" },
      { name: "Nuxt", category: "Frontend" },
      { name: "HTML/CSS", category: "Frontend" },
      { name: "Bootstrap", category: "Frontend" },

      // Language
      { name: "TypeScript", category: "Language" },
      { name: "JavaScript", category: "Language" },

      // State Management
      { name: "Vuex", category: "State Management" },
      { name: "Pinia", category: "State Management" },
      { name: "Vue Router", category: "State Management" },

      // Backend & Integration
      { name: "GraphQL", category: "Backend & Integration" },
      { name: "WebSocket", category: "Backend & Integration" },
      { name: "Google Maps", category: "Backend & Integration" },
      { name: "Chart.js", category: "Backend & Integration" },

      // Tools
      { name: "Git", category: "Tools" },
      { name: "Docker", category: "Tools" },
    ],
    languages: [
      { name: "English", level: "Fluent", flag: "🇬🇧", percentage: 95 },
      {
        name: "Bahasa Indonesia",
        level: "Native",
        flag: "🇮🇩",
        percentage: 100,
      },
      { name: "Mandarin", level: "Intermediate", flag: "🇨🇳", percentage: 50 },
      { name: "German", level: "A1 - Learning", flag: "🇩🇪", percentage: 20 },
    ],
  },
}

interface DataContextType {
  data: PortfolioData
}

const DataContext = createContext<DataContextType | undefined>(undefined)

export const DataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<PortfolioData>(defaultData)

  return (
    <DataContext.Provider
      value={{
        data,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export const useData = () => {
  const context = useContext(DataContext)
  if (!context) throw new Error("useData must be used within DataProvider")
  return context
}
