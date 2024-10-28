import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-500 rounded-lg p-4 flex flex-col text-white mt-8">
      <h2 className="text-center">
        <span className="text-5xl font-extrabold">{price}</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <h2 className="text-3xl text-center my-6">{name}</h2>
      <div className="flex-grow">
        {features.map((feature, index) => (
          <Feature key={index} feature={feature}></Feature>
        ))}
      </div>
      <button className="mt-8 bg-slate-400 hover:bg-slate-700 hover:text-white text-black w-full font-bold py-3 rounded-xl">
        Buy Now
      </button>
    </div>
  );
};

export default PriceOption;
