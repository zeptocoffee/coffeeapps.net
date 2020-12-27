import Image from 'next/image'
import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <main>
        <div className="bg-yellow-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center h-screen">
              <div className="flex-auto lg:flex-1">
                <div className="w-auto">
                  <Image src="/image/coworking.png" width="1600" height="1200" />
                </div>
              </div>
              <div className="flex-auto lg:flex-1 self-start lg:self-auto text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900">
                  <span className="block sm:inline-block text-left ml-6 md:ml-0">Applications for&nbsp;</span>
                  <span className="block sm:inline-block text-yellow-800 text-right mr-6 md:mr-0">Coffee Lovers ☕️</span>
                </h1>
                <p className="mt-3 mx-6 lg:mx-0 text-gray-500 text-xl">
                  Made for the coffee lovers by the coffee lovers.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-primary">
          <div className="max-w-7xl mx-3 md:mx-6 xl:mx-auto">
            <div className="flex flex-wrap-reverse items-center h-screen">
              <div className="flex-auto lg:flex-1 self-end lg:self-auto text-center lg:text-left">
                <a href="https://todays.coffee" className="text-3xl tracking-tight font-extrabold text-gray-900 underline">
                  todays.coffee
                </a>
                <p className="mt-3 text-gray-500 text-xl">
                  Keep a record of your everyday coffee.
                </p>
              </div>
              <div className="flex-auto lg:flex-1">
                <div className="w-auto">
                  <Image src="/image/todays.coffee.png" width="800" height="500" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-secondary">
          <div className="max-w-7xl mx-3 md:mx-6 xl:mx-auto">
            <div className="flex flex-wrap items-center h-screen">
              <div className="flex-auto lg:flex-1">
                <div className="w-auto">
                  <Image src="/image/roastery.jp.png" width="800" height="500" />
                </div>
              </div>
              <div className="flex-auto lg:flex-1 self-start lg:self-auto mx-0 lg:mx-6 text-center lg:text-left">
                <a href="https://roastery.jp" className="text-3xl tracking-tight font-extrabold text-gray-100 underline">
                  roastery.jp
                </a>
                <p className="mt-3 text-gray-300 text-xl">
                  Search and share coffee roasteries in Japan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
