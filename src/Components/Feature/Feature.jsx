const Feature = ({ feature }) => {
  return (
    <div>
      <p className="my-2 flex gap-3 items-center">
        <img className="h-8 w-8 pt-1"
          src="https://cdn-icons-png.flaticon.com/128/16115/16115554.png"
          alt=""
        />
        {feature}
      </p>
      
    </div>
  );
};

export default Feature;
