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
    </div>
  );
}

export default TechFinder;
