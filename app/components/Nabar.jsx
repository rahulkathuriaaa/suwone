import React from 'react'
import Image from 'next/image'
const Nabar = () => {
  return (
    <div>
      <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
    <Image src="/hamburger.png" height={25} width={25}/>
      {/* <a class="mr-5 hover:text-gray-900">Second Link</a>
      <a class="mr-5 hover:text-gray-900">Third Link</a>
      <a class="hover:text-gray-900">Fourth Link</a> */}
    </nav>
    <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
    <Image src="/suwone.png" height={100} width={100}/>
    </a>
    <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
      <Image className="mr-2" src="/camera.png" height={25} width={25}/>
      <Image className="mr-2" src="/search.png" height={25} width={25}/>
      <Image className="mr-2" src="/heart.png" height={25} width={25}/>
      <Image src="/cart.png" height={25} width={25}/>


    </div>
  </div>
</header>
    </div>
  )
}

export default Nabar
