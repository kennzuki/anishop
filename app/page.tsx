import Image from "next/image";



export default function Home() {
  return (
    <main className='grid grid-cols-1 sm:grid-cols-2 min-h-screen justify-between p-12 gap-6 place-items-center bg-white'>
      <section className="w-full">
        <Image  className="rounded-xl " src='https://images.unsplash.com/photo-1620021030259-977a6aa9006f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBldCUyMGRheWNhcmV8ZW58MHx8MHx8fDA%3D' alt='logo' width={450} height={450} />
      </section>
      <section className="flex flex-col gap-4 p-8 ">
        <h2 className="text-3xl font-bold mb-4 text-black text-center w-1/2 mx-auto">Take the stress out of your leaving pets alone with anisoft daycare</h2>
        <article className="[&_button]:py-2 [&_button]:px-4 [&_button]:text-white [&_button]:rounded-md text-center flex place-items-center gap-4 justify-center">
          <button className="bg-black text-white">Get started</button>
          <button className="bg-gray-400 text-black">Login</button>
        </article>
      </section>
    </main>
  );
}
