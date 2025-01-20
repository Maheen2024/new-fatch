



export interface Product {
    id: string;
    type: string;
    pricePerDay: number;
    transmission: string;
    // image?: {
    //     asset : {
    //         _ref :string;
    //         _type : "image";
    //     }
    // };
    imageUrl: string;
    fuelCapacity: number;
    seatingCapacity: number;
    name: string;
    slug?: {
      current: string;
    };
  }