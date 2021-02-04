import Head from 'next/head'

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
              <a href="https://coffeeapps.net" className="text-white text-base">&copy;2021 CoffeeApps. Made with ❤️ &amp; ☕ </a>
            </div>
            <div className="flex-auto self-start md:self-auto">
              <div className="flex justify-evenly md:justify-end">
                <div className="flex flex-shrink-0 w-28 items-center justify-center">
                  <a href="https://twitter.com/coffeeappsnet" aria-label="Twitter Account" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                  </a>
                </div>
                <div className="flex flex-shrink-0 w-28 items-center justify-center">
                  <a href="https://instagram.com/coffeeappsnet" aria-label="Instagram Account" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                </div>
                <div className="flex flex-shrink-0 w-28 items-center justify-center">
                  <a href="https://github.com/coffeeappsnet" aria-label="GitHub Account" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
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
