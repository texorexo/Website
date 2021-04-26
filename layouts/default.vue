<template>
  <div>
    <nav class="navbar">
      <img :src="require('@/assets/logo.webp')" alt="" class="icon" />
      <ul>
        <li class="button"><nuxt-link to="/">Home</nuxt-link></li>
        <li>
          <div
            @mouseover="serverHovered = true"
            @mouseleave="serverHovered = false"
            class="mega-menu-server"
          >
            <div class="mega-menu-title" @mouseleave="serverHovered = false">
              <span class="cursor-default">Server</span>
            </div>
            <div class="absolute cursor-default w-24">&nbsp;</div>
            <div v-if="serverHovered" class="mega-menu-popover">
              <nuxt-link class="some-item" to="/server/about">
                <div class="icon-right">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    style="fill: #d97706; transform: ; -ms-filter: "
                  >
                    <path
                      d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M13,17h-2v-6h2V17z M13,9h-2V7h2V9z"
                    ></path>
                  </svg>
                </div>
                <div class="text">
                  <div class="title">About Us</div>
                  <div class="description">Whats TFG? Why would I care?</div>
                </div>
              </nuxt-link>

              <nuxt-link class="some-item" to="/server/events">
                <div class="icon-right">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    style="fill: #d97706; transform: ; -ms-filter: "
                  >
                    <path
                      d="M12,22c5.514,0,10-4.486,10-10S17.514,2,12,2S2,6.486,2,12S6.486,22,12,22z M15.493,9c0.824,0,1.493,0.669,1.493,1.493 s-0.669,1.493-1.493,1.493S14,11.317,14,10.493S14.669,9,15.493,9z M11.192,15.919c0.529,0.107,1.085,0.107,1.616,0 c0.253-0.052,0.505-0.131,0.75-0.233c0.234-0.1,0.464-0.224,0.679-0.368c0.208-0.142,0.407-0.306,0.591-0.489 c0.183-0.182,0.347-0.381,0.489-0.592l1.658,1.117c-0.215,0.319-0.462,0.619-0.734,0.891c-0.271,0.271-0.57,0.518-0.885,0.73 c-0.322,0.218-0.665,0.403-1.021,0.554c-0.368,0.154-0.746,0.272-1.128,0.35C12.811,17.959,12.404,18,12,18 s-0.811-0.041-1.207-0.122c-0.383-0.077-0.761-0.195-1.127-0.349c-0.357-0.151-0.7-0.337-1.021-0.554 c-0.316-0.214-0.615-0.46-0.888-0.733c-0.271-0.27-0.519-0.569-0.733-0.889l1.658-1.117c0.143,0.211,0.307,0.41,0.488,0.59 c0.185,0.186,0.384,0.35,0.594,0.492c0.213,0.144,0.442,0.268,0.679,0.368C10.687,15.788,10.938,15.867,11.192,15.919z M8.5,9 C9.328,9,10,9.672,10,10.5S9.328,12,8.5,12S7,11.328,7,10.5S7.672,9,8.5,9z"
                    ></path>
                  </svg>
                </div>
                <div class="text">
                  <div class="title">Events</div>
                  <div class="description">
                    What's going on inside the ship???
                  </div>
                </div>
              </nuxt-link>

              <nuxt-link class="some-item" to="/server/apply">
                <div class="icon-right">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    style="fill: #d97706; transform: ; -ms-filter: "
                  >
                    <path
                      d="M20 6h-3V4c0-1.103-.897-2-2-2H9C7.897 2 7 2.897 7 4v2H4C2.897 6 2 6.897 2 8v3h20V8C22 6.897 21.103 6 20 6zM9 4h6v2H9V4zM14 14h-4v-2H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-8V14z"
                    ></path>
                  </svg>
                </div>
                <div class="text">
                  <div class="title">Apply</div>
                  <div class="description">
                    Help TFG fight against hate crimes
                  </div>
                </div>
              </nuxt-link>

              <hr />

              <div class="flex justify-between mb-3">
                <a
                  class="flex items-center text-gray-500 p-2 w-20 rounded-md mt-3"
                  href="https://blog.furrygalaxy.gq"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style="fill: #2a2a2a; transform: ; -ms-filter: "
                    class="mr-2"
                  >
                    <path
                      d="M19,20.001C19,11.729,12.271,5,4,5v2c7.168,0,13,5.832,13,13.001H19z"
                    ></path>
                    <path
                      d="M12,20.001h2C14,14.486,9.514,10,4,10v2C8.411,12,12,15.589,12,20.001z"
                    ></path>
                    <circle cx="6" cy="18" r="2"></circle>
                  </svg>
                  <span class="text-gray-700">Blog</span></a
                >

                <nuxt-link
                  class="flex items-center text-gray-500 p-2 w-25 rounded-md mt-3 mr-20"
                  to="/server/partners"
                  ><svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="handshake"
                    class="w-[24px] h-[24px] mr-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path
                      fill="2a2a2a"
                      d="M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"
                    />
                  </svg>
                  <span class="text-gray-700">Partners</span></nuxt-link
                >
              </div>

              <span class="text-gray-600 mt-8 ml-1 font-semibold"
                >Documents</span
              >

              <div class="flex justify-between">
                <a
                  class="flex items-center text-gray-500 p-2 w-20 rounded-md mt-1"
                  href="https://blog.furrygalaxy.gq"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    class="mr-2"
                    style="fill: #2a2a2a; transform: ; -ms-filter: "
                  >
                    <path
                      d="M21,3h-7c-0.771,0-1.468,0.301-2,0.78C11.468,3.301,10.771,3,10,3H3C2.447,3,2,3.448,2,4v15c0,0.553,0.447,1,1,1h5.758 c0.526,0,1.042,0.214,1.414,0.586l1.121,1.121c0.009,0.009,0.021,0.012,0.03,0.021c0.086,0.079,0.182,0.149,0.294,0.196 c0.001,0,0.001,0,0.002,0C11.74,21.974,11.869,22,12,22s0.26-0.026,0.381-0.076c0.001,0,0.001,0,0.002,0 c0.112-0.047,0.208-0.117,0.294-0.196c0.009-0.009,0.021-0.012,0.03-0.021l1.121-1.121C14.2,20.214,14.716,20,15.242,20H21 c0.553,0,1-0.447,1-1V4C22,3.448,21.553,3,21,3z M8.758,18H4V5h6c0.552,0,1,0.449,1,1v12.689C10.342,18.246,9.557,18,8.758,18z M20,18h-4.758c-0.799,0-1.584,0.246-2.242,0.689V6c0-0.551,0.448-1,1-1h6V18z"
                    ></path>
                  </svg>
                  <span class="text-gray-700">Rules</span></a
                >
              </div>
            </div>
          </div>
        </li>

        <li>
          <div
            @mouseover="MCHovered = true"
            @mouseleave="MCHovered = false"
            class="mega-menu-minecraft"
          >
            <div class="mega-menu-title" @mouseleave="MCHovered = false">
              <span class="cursor-default">Minecraft</span>
            </div>
            <div class="absolute cursor-default w-24">&nbsp;</div>
            <div v-if="MCHovered" class="mega-menu-popover">
              <nuxt-link class="some-item" to="/minecraft/">
                <div class="icon-right">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    style="fill: #065f46; transform: ; -ms-filter: "
                  >
                    <path
                      d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M13,17h-2v-6h2V17z M13,9h-2V7h2V9z"
                    ></path>
                  </svg>
                </div>
                <div class="text">
                  <div class="title">Info</div>
                  <div class="description">
                    What in Pete's abomination is this about?!?!
                  </div>
                </div>
              </nuxt-link>

              <nuxt-link class="some-item" to="/minecraft/map">
                <div class="icon-right">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    style="fill: #065f46; transform: ; -ms-filter: "
                  >
                    <path
                      d="M9,6.882l-7-3.5v13.236l7,3.5l6-3l7,3.5V7.382l-7-3.5L9,6.882z M15,15l-6,3V9l6-3V15z"
                    ></path>
                  </svg>
                </div>
                <div class="text">
                  <div class="title">Dynmap</div>
                  <div class="description">For easy navigation</div>
                </div>
              </nuxt-link>

              <nuxt-link class="some-item" to="/minecraft/store">
                <div class="icon-right">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    style="fill: #065f46; transform: ; -ms-filter: "
                  >
                    <path
                      d="M21.822,7.431C21.635,7.161,21.328,7,21,7H7.333L6.179,4.23C5.867,3.482,5.143,3,4.333,3H2v2h2.333l4.744,11.385 C9.232,16.757,9.596,17,10,17h8c0.417,0,0.79-0.259,0.937-0.648l3-8C22.052,8.044,22.009,7.7,21.822,7.431z"
                    ></path>
                    <circle cx="10.5" cy="19.5" r="1.5"></circle>
                    <circle cx="17.5" cy="19.5" r="1.5"></circle>
                  </svg>
                </div>
                <div class="text">
                  <div class="title">Store</div>
                  <div class="description">Gunna buy me some diamonds</div>
                </div>
              </nuxt-link>

              <hr />

              <div class="flex justify-between mt-2">
                <div class="flex items-center text-gray-700">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    width="15"
                    height="15"
                    data-icon="network-wired"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                    style="fill: #1f2937"
                    class="mr-2"
                  >
                    <path
                      fill="currentColor"
                      d="M640 264v-16c0-8.84-7.16-16-16-16H344v-40h72c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H224c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h72v40H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h104v40H64c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h304v40h-56c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h104c8.84 0 16-7.16 16-16zM256 128V64h128v64H256zm-64 320H96v-64h96v64zm352 0h-96v-64h96v64z"
                    ></path>
                  </svg>
                  <span>Server IP</span>
                </div>
                <span
                  @click="copySomething('join.galaxian.ml')"
                  class="px-3 py-2 rounded-xl bg-gray-200 cursor-pointer"
                  >join.galaxian.ml</span
                >
              </div>
              <div class="flex justify-between mt-3">
                <div class="flex items-center text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    style="fill: #1f2937; transform: ; -ms-filter: "
                    class="mr-2"
                  >
                    <path
                      d="M8.465,11.293c1.133-1.133,3.109-1.133,4.242,0L13.414,12l1.414-1.414l-0.707-0.707c-0.943-0.944-2.199-1.465-3.535-1.465 S7.994,8.935,7.051,9.879L4.929,12c-1.948,1.949-1.948,5.122,0,7.071c0.975,0.975,2.255,1.462,3.535,1.462 c1.281,0,2.562-0.487,3.536-1.462l0.707-0.707l-1.414-1.414l-0.707,0.707c-1.17,1.167-3.073,1.169-4.243,0 c-1.169-1.17-1.169-3.073,0-4.243L8.465,11.293z"
                    ></path>
                    <path
                      d="M12,4.929l-0.707,0.707l1.414,1.414l0.707-0.707c1.169-1.167,3.072-1.169,4.243,0c1.169,1.17,1.169,3.073,0,4.243 l-2.122,2.121c-1.133,1.133-3.109,1.133-4.242,0L10.586,12l-1.414,1.414l0.707,0.707c0.943,0.944,2.199,1.465,3.535,1.465 s2.592-0.521,3.535-1.465L19.071,12c1.948-1.949,1.948-5.122,0-7.071C17.121,2.979,13.948,2.98,12,4.929z"
                    ></path>
                  </svg>
                  <span>Dynmap Direct URL</span>
                </div>
                <span
                  @click="copySomething('dynmap.galaxian.ml')"
                  class="px-3 py-2 rounded-xl bg-gray-200 cursor-pointer"
                  >dynmap.galaxian.ml</span
                >
              </div>
            </div>
          </div>
        </li>
        <li>
          <div
            @mouseover="galaxaHovered = true"
            @mouseleave="galaxaHovered = false"
            class="mega-menu-galaxa"
          >
            <div class="mega-menu-title" @mouseleave="serverHovered = false">
              <span class="cursor-default">Galaxa</span>
            </div>
            <div class="absolute cursor-default w-24">&nbsp;</div>
            <div v-if="galaxaHovered" class="mega-menu-popover">
              <nuxt-link class="some-item" to="/server/about">
                <div class="icon-right">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    style="fill: #1e40af; transform: ; -ms-filter: "
                  >
                    <path
                      d="M12 4C9.243 4 7 6.243 7 9h2c0-1.654 1.346-3 3-3s3 1.346 3 3c0 1.069-.454 1.465-1.481 2.255-.382.294-.813.626-1.226 1.038C10.981 13.604 10.995 14.897 11 15v2h2v-2.009c0-.024.023-.601.707-1.284.32-.32.682-.598 1.031-.867C15.798 12.024 17 11.1 17 9 17 6.243 14.757 4 12 4zM11 18H13V20H11z"
                    ></path>
                  </svg>
                </div>
                <div class="text">
                  <div class="title">Project Info</div>
                  <div class="description">George, details.</div>
                </div>
              </nuxt-link>

              <nuxt-link class="some-item" to="/server/events">
                <div class="icon-right">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    style="fill: #1e40af; transform: ; -ms-filter: "
                  >
                    <path
                      d="M21,10.975V8c0-1.104-0.896-2-2-2h-6V4.688c0.305-0.274,0.5-0.668,0.5-1.11c0-0.828-0.672-1.5-1.5-1.5s-1.5,0.672-1.5,1.5 c0,0.442,0.195,0.836,0.5,1.11V6H5C3.896,6,3,6.896,3,8v2.998c-0.039,0.003-0.072,0.005-0.072,0.005C2.404,11.04,2,11.476,2,12v2 c0,0.553,0.447,1,1,1v5c0,1.104,0.896,2,2,2h14c1.104,0,2-0.896,2-2v-5c0.553,0,1-0.447,1-1v-1.938 c0.011-0.153-0.012-0.31-0.072-0.455C21.726,11.119,21.293,11.002,21,10.975z M7,12c0-1.104,0.672-2,1.5-2s1.5,0.896,1.5,2 s-0.672,2-1.5,2S7,13.104,7,12z M15.998,18C14.997,17.997,8.001,18,8,18v-2c0,0,7.001-0.002,8.002,0L15.998,18z M15.5,14 c-0.828,0-1.5-0.896-1.5-2s0.672-2,1.5-2s1.5,0.896,1.5,2S16.328,14,15.5,14z"
                    ></path>
                  </svg>
                </div>
                <div class="text">
                  <div class="title">Galaxa 3</div>
                  <div class="description">
                    The new features for the new her.
                  </div>
                </div>
              </nuxt-link>

              <hr />

              <div class="flex justify-between">
                <a
                  class="flex items-center text-gray-500 p-2 w-25 rounded-md mt-3"
                  href="https://github.com/texorexo/Galaxa.git"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    style="fill: #2a2a2a; transform: ; -ms-filter: "
                    class="mr-1"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.026,2c-5.509,0-9.974,4.465-9.974,9.974c0,4.406,2.857,8.145,6.821,9.465 c0.499,0.09,0.679-0.217,0.679-0.481c0-0.237-0.008-0.865-0.011-1.696c-2.775,0.602-3.361-1.338-3.361-1.338 c-0.452-1.152-1.107-1.459-1.107-1.459c-0.905-0.619,0.069-0.605,0.069-0.605c1.002,0.07,1.527,1.028,1.527,1.028 c0.89,1.524,2.336,1.084,2.902,0.829c0.091-0.645,0.351-1.085,0.635-1.334c-2.214-0.251-4.542-1.107-4.542-4.93 c0-1.087,0.389-1.979,1.024-2.675c-0.101-0.253-0.446-1.268,0.099-2.64c0,0,0.837-0.269,2.742,1.021 c0.798-0.221,1.649-0.332,2.496-0.336c0.849,0.004,1.701,0.115,2.496,0.336c1.906-1.291,2.742-1.021,2.742-1.021 c0.545,1.372,0.203,2.387,0.099,2.64c0.64,0.696,1.024,1.587,1.024,2.675c0,3.833-2.33,4.675-4.552,4.922 c0.355,0.308,0.675,0.916,0.675,1.846c0,1.334-0.012,2.41-0.012,2.737c0,0.267,0.178,0.577,0.687,0.479 C19.146,20.115,22,16.379,22,11.974C22,6.465,17.535,2,12.026,2z"
                    ></path>
                  </svg>
                  <span class="text-gray-700"> Github</span></a
                >
              </div>
            </div>
          </div>
        </li>
        <li><nuxt-link class="button" to="/dashboard">Dashboard</nuxt-link></li>
      </ul>

      <div></div>
    </nav>
    <Nuxt></Nuxt>
    <footer>
      <p class="footer-text">
        &copy; 2019-2021 Galaxian Group. All content is public domain unless
        stated.
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuActive: false,
      serverHovered: false,
      MCHovered: false,
      galaxaHovered: false,
    };
  },

  methods: {
    async copySomething(text) {
      try {
        await this.$copyText(text);
        return window.alert(`Copied ${text} to clipboard!`);
      } catch (e) {
        window.alert(e);
      }
    },
  },
};
</script>

<style lang="postcss">
html {
  @apply font-main overflow-hidden;
}

nav.navbar {
  @apply bg-gray-800 flex px-5 py-3 text-white justify-between;
}

nav.navbar img {
  @apply justify-items-start w-14 h-14;
}

nav.navbar ul {
  @apply flex items-center ml-10;
}

nav.navbar ul li {
  @apply mr-5;
}

.button {
  @apply px-3 py-2 rounded-xl shadow-inner;
  &:focus {
    @apply shadow-inner bg-gray-900;
  }
  &:hover {
    @apply shadow-xl bg-gray-900;
  }
}

.mega-menu-title {
  @apply font-bold;
}

.mega-menu-server .mega-menu-popover {
  @apply absolute text-black bg-white rounded-md shadow-xl xl:right-[530px] md:right-[280px] w-96 z-30 px-5 py-2 mt-6;
}

.mega-menu-minecraft .mega-menu-popover {
  @apply absolute text-black bg-white rounded-md shadow-xl xl:right-[400px] md:right-[180px] w-96 z-30 px-5 py-2 mt-6;
}

.mega-menu-galaxa .mega-menu-popover {
  @apply absolute text-black bg-white rounded-md shadow-xl xl:right-[400px] md:right-[180px] w-96 z-30 px-5 py-2 mt-6;
}

.mega-menu-popover .some-item {
  @apply flex items-center mb-3;
}

.mega-menu-server .mega-menu-popover .some-item .icon-right {
  @apply p-3 bg-yellow-400 rounded-md mr-5;
}

.mega-menu-minecraft .mega-menu-popover .some-item .icon-right {
  @apply p-3 bg-green-400 rounded-md mr-5;
}

.mega-menu-galaxa .mega-menu-popover .some-item .icon-right {
  @apply p-3 bg-blue-400 rounded-md mr-5;
}

.mega-menu-popover .some-item .text .title {
  @apply text-lg font-semibold text-gray-700;
}

.mega-menu-popover .some-item .text .description {
  @apply text-base text-gray-500;
}

.mega-menu-title {
  @apply px-3 py-2 rounded-xl shadow-inner;
  &:hover {
    @apply shadow-xl bg-gray-900;
  }
}

footer {
  @apply bg-gray-800 text-white h-32;
}

footer p {
  @apply container mx-auto my-auto text-center;
}
</style>
