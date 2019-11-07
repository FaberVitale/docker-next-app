interface CompanyInfo {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface GeoLocation {
  lat: string;
  lng: string;
}

interface Address extends GeoLocation {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

interface UserData extends CompanyInfo, Address {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}
