import { GroupRide } from '../enum/group-ride.enum';
import { Days } from '../enum/days.enum';
import { Address } from './address';

export class Users extends Address {
    public username: string;
    public name: string;
    public email: string;
    public address = new Address();
    public days: Array<Days>;
    public group: GroupRide;
    public posts:number;
    public albuns:number;
    public photos:number;
    public id: number;
}
