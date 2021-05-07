import { IonDatetime } from "@ionic/angular";

export interface List
{
    listName: string;

    // to be changed to array
    tasks: string;

    startTime: IonDatetime;       

    reminder:number;

    category:string;
}
