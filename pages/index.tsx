import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>coffeeapps.net</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button type="button" className="px-4 py-2 rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600">
        👋 Hello
      </button>
    </>
  )
}
