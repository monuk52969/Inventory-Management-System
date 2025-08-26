import Header from "@/app/components/dashboard/Header"
import Sidebar from "../components/dashboard/Sidebar"

const Layout = ({ children }) => {
  return (
    <div className="flex w-full  min-h-screen bg-[#111111]">
      {/* Sidebar */}
      <Sidebar className=""/>

      {/* Main Content */}
      <main className="flex-1 min-h-screen bg-[#000000] text-[#FEFEFE]">
        <Header />
        <div className="p-4">{children}</div>
      </main>
    </div>
  )
}

export default Layout
