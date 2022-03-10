export interface Reservation {
    _id: string;
    name: string;
    phone: string;
    numberOfPeople: number;
    smoking: boolean;
    dateTime:string;
    specialRequests: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}