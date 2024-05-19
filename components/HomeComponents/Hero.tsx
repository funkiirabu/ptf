// components/Hero.tsx

const Hero = () => {
    return (
      <div className="bg-gray-900 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Pugs that Fud.</h2>
          <p className="text-gray-300 mb-8">
            A collection soon coming to Sui.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Mint
          </button>
        </div>
      </div>
    );
  };
  
  export default Hero;
  