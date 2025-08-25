import Header from "@/app/components/dashboard/Header"
import Sidebar from "../components/dashboard/Sidebar"

const layout = ({ children }) => {
  return (
    <div className="flex w-full min-h-screen bg-[#C5E1A5] items-center justify-center gap-4">
      {/* Sidebar */}
      <Sidebar /> 

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center">
        <div className="w-[98%] min-h-[96vh] bg-[#000000] text-[#FEFEFE] rounded-2xl">
          <Header />
          {children}
        </div>
      </main>
    </div>
  )
}

export default layout
