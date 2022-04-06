import Head from 'next/head'
import Footer from './components/Footer/footer'
import Sidebar from './components/Sidebar/sidebar'

export default function Home() {
  return (
    <div>
      <Sidebar/>
      <h1>Homepage</h1>
      <p>lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <Footer/>
    </div>
  )
}

