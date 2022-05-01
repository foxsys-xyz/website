import { useEffect, useRef, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Halo from 'vanta/dist/vanta.halo.min'

const Home: NextPage = () => {

  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
    useEffect(() => {
      if (!vantaEffect) {
        setVantaEffect(Halo({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          backgroundColor: 0x0,
          amplitudeFactor: 0.00,
          xOffset: 0.20,
          size: 1.20
        }))
      }
      return () => {
        if (vantaEffect) vantaEffect.destroy()
      }
    }, [vantaEffect])

  return (
    <div className="font-mono text-white bg-black">
      <Head>
        <title>foxsys-xyz // the next generation virtual airline management framework.</title>
        <meta name="description" content="introducing foxsys-xyz, the most advanced virtual management framework ever built." />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
      </Head>
      
      <main>
        <div className="justify-between flex items-center w-full bg-black bg-opacity-50 backdrop-blur py-8 px-10 fixed top-0 z-10">
          <div className="flex items-center">
            <Image src="/logoDark.svg" width={24} height={32} />
            <h1 className="ml-4">foxsys-xyz</h1>
          </div>
          <div className="flex items-center gap-6">
            <a className="hover:text-gray-300 transition duration-150" href=''>About Us</a>
            <a className="hover:text-gray-300 transition duration-150" href=''>Solutions</a>
            <a className="hover:text-gray-300 transition duration-150" href=''>Pricing</a>
            <a className="hover:text-gray-300 transition duration-150" href=''>Contact Us</a>
          </div>
        </div>

        <div ref={myRef} className="h-screen px-10">
          <div className="h-full flex items-center">
            <div>
              <h3 className="max-w-2xl text-4xl mb-3">the most advanced virtual airline management framework.</h3>
              <span className="text-sm text-gray-400">bringing innovation for the simulation community.</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
