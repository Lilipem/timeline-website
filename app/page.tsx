'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface TimelineEvent {
  year: number
  title: string
  description: string
}

const timelineEvents: TimelineEvent[] = [
  { year: 1963, title: "Ano inicio da IEEE", description: "Sample text sample text etc etc yatta yatta." },
  { year: 2021, title: "Sampleeee", description: "Sample text sample text etc etc yatta yatta" },
  { year: 2022, title: "Sampleeee", description: "Sample text sample text etc etc yatta yatta" },
  { year: 2023, title: "Sampleeee", description: "Sample text sample text etc etc yatta yatta" },
  { year: 2024, title: "Sampleeee", description: "Sample text sample text etc etc yatta yatta" },
  { year: 2025, title: "Sampleeee", description: "Sample text sample text etc etc yatta yatta" },
  { year: 2026, title: "Sampleeee", description: "Sample text sample text etc etc yatta yatta" },
  { year: 2027, title: "Sampleeee", description: "Sample text sample text etc etc yatta yatta" },
]

export default function Timeline() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null)
  const { scrollY } = useScroll()
  const backgroundY = useTransform(scrollY, [0, 1000], ['0%', '50%'])

  useEffect(() => {
    document.body.style.overflowX = 'hidden'
    return () => {
      document.body.style.overflowX = 'auto'
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: backgroundY
        }}
      />
      <div className="relative z-10 min-h-screen bg-black bg-opacity-50 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">História da ética IEEE e IA</h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Sample text sample text etc etc yatta yatta.
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-blue-500 transform md:-translate-x-1/2" />
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                className={`mb-12 md:mb-24 flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className="w-8 h-8 rounded-full bg-blue-500 border-4 border-white shadow-lg flex-shrink-0 mr-4 md:hidden" />
                    <h2 className="text-3xl font-bold text-white md:hidden">{event.year}</h2>
                  </div>
                  <motion.div
                    className="w-full text-left bg-white bg-opacity-90 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-200"
                  >
                    <div className="flex justify-between items-center">
                      <h2 className="hidden md:block text-3xl font-bold text-blue-600">{event.year}</h2>
                      <button
                        onClick={() => setSelectedEvent(selectedEvent === index ? null : index)}
                        aria-expanded={selectedEvent === index}
                        aria-controls={`content-${index}`}
                      >
                        <ChevronDown
                          className={`w-6 h-6 text-blue-500 transition-transform duration-200 ${
                            selectedEvent === index ? 'transform rotate-180' : ''
                          }`}
                        />
                      </button>
                    </div>
                    <h3 className="text-xl font-semibold mt-2 text-gray-900">{event.title}</h3>
                    <motion.div
                      id={`content-${index}`}
                      initial={false}
                      animate={{ height: selectedEvent === index ? 'auto' : 0, opacity: selectedEvent === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-gray-600">{event.description}</p>
                      <Link href={`/timeline/${event.year}`} className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800">
                        See More <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
                <div className="absolute left-0 md:left-1/2 top-4 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 hidden md:flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500 border-4 border-white shadow-lg" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}