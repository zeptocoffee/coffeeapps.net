import Head from 'next/head'
import Image from 'next/image'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Head>
        <title>CoffeeApps</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Stylish&display=swap" rel="stylesheet" />
        <meta name="description" content="We build iOS, Android and Web applications for coffee lovers." />
        <meta property="og:description" content="We build iOS, Android and Web applications for coffee lovers." />
        <meta property="og:image" content="https://coffeeapps.net/logo.png" />
        <meta property="og:title" content="CoffeeApps" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://coffeeapps.net" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:site" content="@coffeeappsnet" />
      </Head>
      <nav className="bg-yellow-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex pt-5">
            <div className="ml-6">
              <a href="https://coffeeapps.net">
                <h1 className="text-gray-600 text-xl font-medium font-stylish">CoffeeApps</h1>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <main>
        {children}
      </main>
      <footer className="bg-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap-reverse justify-between h-48 items-center">
            <div className="flex-auto ml-0 md:ml-6 xl:ml-0 text-center sm:text-left">
              <a href="https://coffeeapps.net" className="text-white text-base">&copy;2020 CoffeeApps. Made with ❤️ &amp; ☕ </a>
            </div>
            <div className="flex-auto self-start md:self-auto">
              <div className="flex justify-evenly md:justify-end">
                <div className="flex flex-shrink-0 w-28 items-center justify-center">
                  <a href="https://twitter.com/coffeeappsnet">
                    <Image src="/image/twitter.svg" width={28} height={28} alt="Twitter" />
                  </a>
                </div>
                <div className="flex flex-shrink-0 w-28 items-center justify-center">
                  <a href="https://instagram.com/coffeeappsnet">
                    <Image src="/image/instagram.svg" width={28} height={28} alt="Instagram" />
                  </a>
                </div>
                <div className="flex flex-shrink-0 w-28 items-center justify-center">
                  <a href="https://github.com/coffeeappsnet">
                    <Image src="/image/github.svg" width={28} height={28} alt="GitHub" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
