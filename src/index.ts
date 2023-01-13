import { User } from "./User";
import { Company } from './Company';
import { GoogleMap } from "./Map";

const user = new User();
const company = new Company();

const map = new GoogleMap();
map.addMarker(user);
map.addMarker(company);