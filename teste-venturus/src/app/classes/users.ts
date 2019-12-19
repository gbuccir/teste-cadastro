import { GroupRide } from '../enum/group-ride.enum';
import { Days } from '../enum/days.enum';

export class Users {
    public username: string;
    public name: string;
    public email: string;
    public city: string;
    public days: Array<Days>;
    public group: GroupRide;
    public id: number;
}
