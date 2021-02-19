<template>
  <div class="font-main dark:bg-gray-800">
    <div class="conatiner object-cover h-96 text-white bg-cover bg-hero-header px-5 py-5">
      <div class="max-w-md">
        <img :src="require('@/assets/images/logo-long.png')" alt="" />
        <p class="text-5xl text-gradient-to-r from-purple-600 font-black to-yellow-300">When the fandom meets.</p>
        <p class="text-gray-300 text-xl">Join us in a growing community with 105 channels, and 150+ members.</p>
        <a href="https://furrygalaxy.xyz/join"><button href="https://furrygalaxy.xyz/join" class="inline-block inline-flex items-center focus:ring-4 focus:ring-yellow-300 duration-100 focus:ring-opacity-80 bg-purple-600 text-white rounded py-3 px-5 rounded-xl"> <svg class="fill-current text-white w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 245 240"><path d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"/><path d="M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"/></svg> <span>Join Us</span></button></a>
      </div>
    </div>
    
    <div class="container xl:px-52 mx-auto py-10 px-3">
      <div class="text-center pb-3">
        <p class="text-3xl font-black dark:text-white">We are The Furry Galaxy.</p>
        <p class="dark:text-white text-gray-500">The Furry Galaxy is a furry discord server founded by TexoRexo and Progress since April 2020, since then, were serving 150+ members a safe and fun community for furs and non-furs alike.</p>
      </div>
      
      <div class="wrapper px-3">
        <p class="dark:text-white text-center font-bold text-3xl">The things we have</p>
        <div class="card dark:bg-gray-700 bg-gray-200 mx-auto mt-5 mb-5 rounded-3xl shadow-xl px-5 py-3 md:w-72">
          <img class="mx-auto rounded-full w-32 h-32" src="~assets/images/uno_nights.png" alt="UNO Nights Logo" />
          <br>
          <p class="dark:text-white text-center font-bold text-3xl">Events</p>
          <p class="text-center dark:text-gray-300 text-gray-500">The Furry Galaxy has events for you, movie nights, to a night at UNO, we got em and more events to come.</p>
          <br>
          <NuxtLink class="text-left text-purple-600 duration-100 hover:text-yellow-300" to="/events">Learn more about events &rarr;</NuxtLink>
        </div>
        <div class="card dark:bg-gray-700 bg-gray-200 mt-5 mb-5 rounded-3xl shadow-xl px-5 py-3 md:w-72 mx-auto">
          <img class="mx-auto rounded-full w-32 h-32" src="~assets/images/galaxian_mc.png" alt="GalaxianMC Logo" />
          <br>
          <p class="dark:text-white text-center font-bold text-3xl">Minecraft</p>
          <p class="text-center text-gray-500 dark:text-gray-500">Join our growing Minecraft survival server, with Dynmap, integrated Discord chat and more!</p>
          <br>
          <NuxtLink class="text-left hover:text-yellow-300 duration-100 text-purple-600" to="/minecraft">Learn more about GalaxianMC &rarr;</NuxtLink>
        </div>
        <div class="text-left">
          <p class="dark:text-white font-bold text-3xl">Dont just take our word for it.</p>
          <p class="dark:text-gray-400 text-gray-500">Hear testimonies from server members.</p>
        </div>
        <div class="card dark:bg-gray-700 bg-gray-200 mt-5 mb-5 rounded-3xl shadow-xl px-5 py-3 md:w-80 mx-auto">
          <img class="mx-auto rounded-full w-32 h-32" src="https://cdn.discordapp.com/avatars/476193516746440715/c953e984a7cca0f6fa104544370cd9a5.png?size=1024" alt="Sputnik#8522" />
          <br>
          <blockquote class="dark:text-white font-black">
            "I usually say, [The Furry Galaxy] is best furry server, and then if they ask more I say there's epic and nice people and it vibes and you should join."
          </blockquote>
          <br>
          <p class="text-left text-bold text-purple-600" to="/minecraft">Sputnik#8522</p>
          <p class="dark:text-white text-black">A server regular</p>
        </div>
        <div class="card dark:bg-gray-700 bg-gray-200 mt-5 mb-5 rounded-3xl shadow-xl px-5 py-3 md:w-80 mx-auto">
          <img class="mx-auto rounded-full w-32 h-32" src="https://cdn.discordapp.com/attachments/721651110674169927/796167703357292584/hecs.png" alt="Fallax#8323" />
          <br>
          <blockquote class="dark:text-white font-black">
            "Pretty fun and great server"
          </blockquote>
          <br>
          <p class="text-left text-bold text-purple-600" to="/minecraft">Fallax#8323</p>
          <p class="dark:text-white text-black">Server Co-Ship Captain</p>
        </div>
        <p class="dark:text-white font-bold text-center text-3xl">Come and join in the action</p>
        <br />
        <div class="flex w-full justify-center">
         <a href="https://furrygalaxy.xyz/join"><button href="https://furrygalaxy.xyz/join" class="inline-block duration-100 inline-flex items-center justify-center focus:ring-4 focus:ring-yellow-300 focus:ring-opacity-80 bg-purple-600 text-white w-full text-center md:w-96 rounded py-3 px-5 rounded-xl"> <svg class="fill-current text-white w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 245 240"><path d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"/><path d="M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"/></svg>
          <span>Join Us</span></button></a>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

