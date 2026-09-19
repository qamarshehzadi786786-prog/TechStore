import { useState } from "react";

function TechFinder() {
  const [selected, setSelected] = useState("");
  return (
    <div>
      <section className="py-16 bg-gray-50 text-center">
        <div>
          <h1 className="text-4xl font-bold text-blue-800">
            Not Sure What You Need?
          </h1>

          <p className="text-gray-600 mt-3">
            Tell us what you're looking for and we'll help you find the right
            tech.
          </p>

          <h2 className="text-2xl font-semibold mt-8">
            What are you shopping for?
          </h2>
          <div className="flex justify-center gap-5 flex-wrap mt-6">
        <button 
  className="px-6 py-3 rounded-full border hover:bg-blue-800 hover:text-white cursor-pointer"
  onClick={() => setSelected("Work & Study")}
>
  💻 Work & Study
</button>


            <button 
  className="px-6 py-3 rounded-full border hover:bg-blue-800 hover:text-white cursor-pointer"
  onClick={() => setSelected("Gaming")}
>
  🎮 Gaming
</button>

<button 
  className="px-6 py-3 rounded-full border hover:bg-blue-800 hover:text-white cursor-pointer"
  onClick={() => setSelected("Creative Work")}
>
  🎨 Creative Work
</button>

<button 
  className="px-6 py-3 rounded-full border hover:bg-blue-800 hover:text-white cursor-pointer"
  onClick={() => setSelected("Everyday Use")}
>
  📱 Everyday Use
</button>
          </div>
        </div>
      </section>
      

{selected && (
  <div className="max-w-2xl mx-auto mt-8 px-6">
    <div className="bg-blue-800 border border-gray-200 rounded-2xl shadow-lg p-8 text-center">

      <div className="text-5xl mb-4">
        {selected === "Gaming" && "🎮"}
        {selected === "Work & Study" && "💻"}
        {selected === "Creative Work" && "🎨"}
        {selected === "Everyday Use" && "📱"}
      </div>

      <h3 className="text-2xl font-bold text-white mb-3">
        {selected}
      </h3>

      {selected === "Gaming" && (
        <>
          <p className="text-white mb-4">
            We recommend gaming laptops, keyboards and gaming accessories.
          </p>

          <div className="flex justify-center gap-3 flex-wrap">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
              Gaming Laptops
            </span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
              Keyboards
            </span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
              Gaming Accessories
            </span>
          </div>
        </>
      )}

      {selected === "Work & Study" && (
        <>
          <p className="text-white mb-4">
            We recommend laptops, monitors and productivity accessories.
          </p>

          <div className="flex justify-center gap-3 flex-wrap">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
              Laptops
            </span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
              Monitors
            </span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
              Accessories
            </span>
          </div>
        </>
      )}

      {selected === "Creative Work" && (
        <>
          <p className="text-white mb-4">
            We recommend powerful laptops, displays and creative accessories.
          </p>

          <div className="flex justify-center gap-3 flex-wrap">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
              Powerful Laptops
            </span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
              Displays
            </span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
              Creative Accessories
            </span>
          </div>
        </>
      )}

      {selected === "Everyday Use" && (
        <>
          <p className="text-white mb-4">
            We recommend smartphones, earbuds and smart everyday gadgets.
          </p>

          <div className="flex justify-center gap-3 flex-wrap">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
              Smartphones
            </span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
              Earbuds
            </span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
              Smart Gadgets
            </span>
          </div>
        </>
      )}

    </div>
  </div>
)}




    </div>

   
  );
}

export default TechFinder;
