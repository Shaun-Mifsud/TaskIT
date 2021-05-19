import { IonDatetime } from "@ionic/angular";

export interface Category
{
    name: string;
    icon?:string;
    tasks: Task[];

}

// (new Date()).getTime(); -> saving
// new Date(list.startTime); -> loading
export interface Task
{
    name: string;
    complete: boolean;
    startTime?: number;       
    reminder?:number;
}