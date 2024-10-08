import { Button } from "../@/components/ui/button"
// import { Input } from "../@/components/ui/input"
import { MapPin, Clock, Bell, Menu } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Landing() {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = () => {
    document.getElementById("howitworks")?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <a className="flex items-center justify-center" href="#">
          <MapPin className="h-6 w-6 text-blue-600" />
          <span className="ml-2 text-2xl font-bold">BusTracker</span>
        </a>
        <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu className="h-6 w-6" />
        </button>
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row absolute lg:relative top-14 lg:top-0 left-0 right-0 bg-white lg:bg-transparent shadow-md lg:shadow-none z-50 lg:ml-auto gap-4 p-4 lg:p-0`}>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </a>
          <button className="text-sm font-medium hover:underline underline-offset-4" onClick={scrollToSection}>
            How It Works
          </button>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Never Miss Your Bus Again
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Real-time bus tracking for a smoother, more efficient commute. Know exactly when your bus will arrive.
                </p>
              </div>
              <div className="space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="w-full sm:w-auto" onClick={() => navigate('/Route')}>Start Tracking Now</Button>
                <Button variant="outline" className="w-full sm:w-auto" onClick={scrollToSection}>Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <MapPin className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Real-Time Tracking</h3>
                <p className="text-gray-500 dark:text-gray-400">Know the exact location of your bus in real-time.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Clock className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Accurate ETAs</h3>
                <p className="text-gray-500 dark:text-gray-400">Get precise estimated arrival times for your bus.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Bell className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Notifications</h3>
                <p className="text-gray-500 dark:text-gray-400">Receive alerts when your bus is approaching.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="howitworks">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-4">1</div>
                <h3 className="text-xl font-bold mb-2">Sign Up</h3>
                <p className="text-gray-500 dark:text-gray-400">Get free Tracking features.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-4">2</div>
                <h3 className="text-xl font-bold mb-2">Select Your Route</h3>
                <p className="text-gray-500 dark:text-gray-400">Choose your bus route and stop.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-4">3</div>
                <h3 className="text-xl font-bold mb-2">Track in Real-Time</h3>
                <p className="text-gray-500 dark:text-gray-400">See your bus moving on the map in real-time.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Never Miss Your Bus?</h2>
                <p className="mx-auto max-w-[600px] text-blue-100 md:text-xl">
                  Sign up and experience stress-free commuting with real-time bus tracking.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full" onClick={() => navigate('/sign')}>Sign Up Now</Button>
                <p className="text-xs text-blue-100">
                  By signing up, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 BusTracker. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}