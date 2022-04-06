import type { NextPage } from 'next'
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  BellIcon,
  BookOpenIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  GlobeAltIcon,
  HomeIcon,
  InboxIcon,
  MenuAlt2Icon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/outline'
import { DocumentReportIcon, SearchIcon } from '@heroicons/react/solid'
import Projects from './components/Projects'
import Sidebar from './components/sidebar'

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Rankings', href: '#', icon: GlobeAltIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Upcoming', href: '#', icon: CalendarIcon, current: false },
  { name: 'Reports', href: '#', icon: DocumentReportIcon, current: false },
  { name: 'Request Assessment', href: '#', icon: BookOpenIcon, current: false },
]
const userNavigation = [
  { name: 'Your Wallet', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Home: NextPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
    <Sidebar />
      <main>
        <div className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-bold text-gray-900 shadow-stone-900">
              DYOR Dashboard
            </h1>
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            {/* Replace with your content */}
            <div className="py-4">
              <Projects />
            </div>
            {/* /End replace */}
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
