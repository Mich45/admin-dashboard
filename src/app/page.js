import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Chart from '../components/Chart'

export default function Home() {
  return (
    <>
    <div className="flex">
    <Sidebar/>
    <main className="flex-grow ml-64  overflow-x-auto relative">
          <Navbar />
          <Chart/>
    </main>
    </div>
    </>
  )
}
