export default function Component() {
    return (
      <div className="min-h-screen flex flex-col">
        <header className="relative h-64 md:h-96 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-gradient-x">
            <div className="absolute inset-0 opacity-50">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20 animate-gradient-y"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.2)_0%,_rgba(255,255,255,0)_50%)] animate-pulse"></div>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center drop-shadow-lg">
              IEEE default anos seguintes eu acho
            </h1>
          </div>
        </header>
        <main className="flex-grow bg-white p-6 md:p-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">Informações:</h2>
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
            </p>
            <p className="text-gray-700">
              nossa não acredito que to usando lorem ipsum de verdade me sinto como se tivesse programando de verdade
            </p>
          </div>
        </main>
      </div>
    )
  }