const hodl = [
  {
    name: 'HODL Whales',
    token: '$KRILL',
    blockchain: 'Solana',
    twitter: '@SolanaWhalesNFT',
    utility: 'Breeding',
    image: '/HODL-whale.jpg',
  },
]
// Add more projects below...

const bananos = [
  {
    name: 'Bananos Motorcycle Club',
    token: '$Sol',
    blockchain: 'Solana',
    twitter: '@BananosMC',
    utility: 'Game',
    image: '/bananos.jpg',
  },
]

const dogetrack = [
  {
    name: 'Doge Track',
    token: '$DTRK',
    blockchain: 'Solana',
    twitter: '@theDogeTrack',
    utility: 'Game/Staking',
    image: '/doge.jpg',
  },
]

const Sidebar = () =>  {
  return (
    // Above Table
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-white">Project Reports</h1>
          <p className="mt-2 text-sm font-bold text-white">
            Disclaimer: Anything that SolSeals provides is not a recommendation
            or financial advice and is solely informational. Do not invest in
            any asset, tokens, companies, or entities based on just the
            information that we provide. All of the information provided by
            SolSeals has come from sources we believe to be accurate and
            reliable, however there is no warranty or guarantee behind this
            information, whether expressed or implied.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-sky-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 sm:w-auto"
          >
            Add Project
          </button>
        </div>
      </div>

      {/* Main Table */}
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-9 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            {/* BELOW HIDES TABLE ON LARGER SCREEN AND HIDES ON MOBILE ONES */}
            <div className="hidden overflow-auto rounded-lg max-w-7xl shadow md:block">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Project Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Token
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Risk
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Utility
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>

                {/* PROJECTS */}
                <tbody className="divide-y divide-gray-200 bg-sky-900">
                  {/* MAP your consts above here with the name and .map */}
                  {hodl.map((project) => (
                    <tr key={project.twitter}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={project.image}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="font-medium tracking-wider text-yellow-300">
                              {project.name}
                            </div>
                            <div className="text-sky-100">
                              {project.twitter}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="font-semibold tracking-wide text-yellow-300">
                          {project.token}
                        </div>
                        <div className="font-semibold tracking-wide text-sky-100">
                          {project.blockchain}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <span className="inline-flex rounded-full bg-green-200 px-2 text-xs font-semibold leading-5 text-green-800">
                          Low
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold tracking-wide text-yellow-300">
                        {project.utility}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <a
                          href="#"
                          className="font-semibold tracking-wider text-sky-100 hover:text-sky-900"
                        >
                          Website
                          <span className="sr-only">, {project.name}</span>
                        </a>
                      </td>
                    </tr>
                  ))}

                  {bananos.map((project) => (
                    <tr key={project.twitter}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={project.image}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="font-medium tracking-wider text-yellow-300">
                              {project.name}
                            </div>
                            <div className="text-sky-100">
                              {project.twitter}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="font-semibold tracking-wide text-yellow-300">
                          {project.token}
                        </div>
                        <div className="font-semibold tracking-wide text-sky-100">
                          {project.blockchain}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <span className="inline-flex rounded-full bg-green-200 px-2 text-xs font-semibold leading-5 text-green-800">
                          Low
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold tracking-wide text-yellow-300">
                        {project.utility}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <a
                          href="#"
                          className="font-semibold tracking-wider text-sky-100 hover:text-sky-900"
                        >
                          Website
                          <span className="sr-only">, {project.name}</span>
                        </a>
                      </td>
                    </tr>
                  ))}

                  {dogetrack.map((project) => (
                    <tr key={project.twitter}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={project.image}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="font-medium tracking-wider text-yellow-300">
                              {project.name}
                            </div>
                            <div className="text-sky-100">
                              {project.twitter}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="font-semibold tracking-wide text-yellow-300">
                          {project.token}
                        </div>
                        <div className="font-semibold tracking-wide text-sky-100">
                          {project.blockchain}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <span className="inline-flex rounded-full bg-green-200 px-2 text-xs font-semibold leading-5 text-green-800">
                          Low
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold tracking-wide text-yellow-300">
                        {project.utility}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <a
                          href="#"
                          className="font-semibold tracking-wider text-sky-100 hover:text-sky-900"
                        >
                          Website
                          <span className="sr-only">, {project.name}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* test */}

        {/* MOBILE ADD TO OWN COMPONENT LATER ADJUST WIDTH FOR MOBILE */}
        {/* project 1 */}
        <div className="grid-cols1 grid gap-4 md:hidden">
          <div className="space-y-2 rounded-lg bg-sky-900 p-4 shadow">
            <div className="flex items-center space-x-2 text-sm">
              {bananos.map((project) => (
                <tr key={project.twitter}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={project.image}
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="font-medium tracking-wider text-yellow-300">
                          {project.name}
                        </div>
                        <div className="text-sky-100">{project.twitter}</div>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <div className="font-semibold tracking-wide text-yellow-300">
                      {project.token}
                    </div>
                    <div className="font-semibold tracking-wide text-sky-100">
                      {project.blockchain}
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <span className="inline-flex rounded-full bg-green-200 px-2 text-xs font-semibold leading-5 text-green-800">
                      Low
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm font-semibold tracking-wide text-yellow-300">
                    {project.utility}
                  </td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <a
                      href="#"
                      className="font-semibold tracking-wider text-sky-100 hover:text-sky-900"
                    >
                      Website
                      <span className="sr-only">, {project.name}</span>
                    </a>
                  </td>
                </tr>
              ))}
            </div>
          </div>

          {/* project 2 */}
          <div className="grid-cols1 grid gap-4 md:hidden">
            <div className="space-y-2 rounded-lg bg-sky-900 p-4 shadow">
              <div className="flex items-center space-x-2 text-sm">
                <div>
                  <a
                    href="#"
                    className="font-semibold tracking-wider text-sky-100"
                  >
                    Project Name
                  </a>
                </div>
                <div className="text-purple-500">Risk</div>
                <span className="inline-flex rounded-full bg-green-200 px-2 text-xs font-semibold leading-5 text-green-800">
                  Low
                </span>
              </div>
              <div className="text-sm text-red-700">description</div>
              <div className="text-sm font-medium text-yellow-300">200£</div>
            </div>
          </div>
          {/* project 3 */}
          <div className="grid-cols1 grid gap-4 md:hidden">
            <div className="space-y-2 rounded-lg bg-sky-900 p-4 shadow">
              <div className="flex items-center space-x-2 text-sm">
                <div>
                  <a
                    href="#"
                    className="font-semibold tracking-wider text-sky-100"
                  >
                    Project Name
                  </a>
                </div>
                <div className="text-purple-500">Risk</div>
                <span className="inline-flex rounded-full bg-green-200 px-2 text-xs font-semibold leading-5 text-green-800">
                  Low
                </span>
              </div>
              <div className="text-sm text-red-700">description</div>
              <div className="text-sm font-medium text-yellow-300">200£</div>
            </div>
          </div>
          {/* project 4 */}
          <div className="grid-cols1 grid gap-4 md:hidden">
            <div className="space-y-2 rounded-lg bg-sky-900 p-4 shadow">
              <div className="flex items-center space-x-2 text-sm">
                <div>
                  <a
                    href="#"
                    className="font-semibold tracking-wider text-sky-100"
                  >
                    Project Name
                  </a>
                </div>
                <div className="text-purple-500">Risk</div>
                <span className="inline-flex rounded-full bg-green-200 px-2 text-xs font-semibold leading-5 text-green-800">
                  Low
                </span>
              </div>
              <div className="text-sm text-red-700">description</div>
              <div className="text-sm font-medium text-yellow-300">200£</div>
            </div>
          </div>
          {/* project 5 */}
          <div className="grid-cols1 grid gap-4 md:hidden">
            <div className="space-y-2 rounded-lg bg-sky-900 p-4 shadow">
              <div className="flex items-center space-x-2 text-sm">
                <div>
                  <a
                    href="#"
                    className="font-semibold tracking-wider text-sky-100"
                  >
                    Project Name
                  </a>
                </div>
                <div className="text-purple-500">Risk</div>
                <span className="inline-flex rounded-full bg-green-200 px-2 text-xs font-semibold leading-5 text-green-800">
                  Low
                </span>
              </div>
              <div className="text-sm text-red-700">description</div>
              <div className="text-sm font-medium text-yellow-300">200£</div>
            </div>
          </div>
          {/* project 6 */}
          <div className="grid-cols1 grid gap-4 md:hidden">
            <div className="space-y-2 rounded-lg bg-sky-900 p-4 shadow">
              <div className="flex items-center space-x-2 text-sm">
                <div>
                  <a
                    href="#"
                    className="font-semibold tracking-wider text-sky-100"
                  >
                    Project Name
                  </a>
                </div>
                <div className="text-purple-500">Risk</div>
                <span className="inline-flex rounded-full bg-green-200 px-2 text-xs font-semibold leading-5 text-green-800">
                  Low
                </span>
              </div>
              <div className="text-sm text-red-700">description</div>
              <div className="text-sm font-medium text-yellow-300">200£</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
