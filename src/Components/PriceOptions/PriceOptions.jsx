import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    
        const priceOptions = [
          {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
              "Access to gym equipment",
              "Group fitness classes",
              "Free locker use",
              "1 complimentary personal training session"
            ]
          },
          {
            "id": 2,
            "name": "Standard Membership",
            "price": 49.99,
            "features": [
              "All Basic Membership features",
              "Access to swimming pool",
              "Unlimited group fitness classes",
              "2 complimentary personal training sessions",
              "Nutrition consultation"
            ]
          },
          {
            "id": 3,
            "name": "Premium Membership",
            "price": 69.99,
            "features": [
              "All Standard Membership features",
              "24/7 gym access",
              "Sauna and steam room access",
              "4 complimentary personal training sessions",
              "Priority booking for classes"
            ]
          },
          {
            "id": 4,
            "name": "Family Membership",
            "price": 99.99,
            "features": [
              "All Premium Membership features for up to 4 family members",
              "Family-friendly classes",
              "Discount on kids' programs",
              "Access to family lounge area"
            ]
          },
          {
            "id": 5,
            "name": "Student Membership",
            "price": 19.99,
            "features": [
              "All Basic Membership features",
              "Special student events",
              "Discount on merchandise",
              "Access to study area"
            ]
          }
        ]
      
      

    return (
        <div>
            <h2 className="text-5xl">Best Prices in the town</h2>
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;