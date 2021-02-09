import Head from 'next/head'

export default function Home() {
  return (
    <div className="h-500">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div class="my-10 p-6 max-w-sm mx-auto h-300 bg-white rounded shadow-md flex-col justify-between items-center space-x-4">
        <div class="flex-shrink-0">
          <img class="h-12 w-12" src="/vercel.svg" alt="ChitChat Logo" />
        </div>
        <div>
          <div className="text-xl font-medium text-primary-red">ChitChat</div>
          <p class=" text-primary-purple font-mono">You have a new message!</p>
        </div>
      </div>
    </div>
  )
}
