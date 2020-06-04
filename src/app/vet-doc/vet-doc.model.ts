import { ISickList } from '../sick-list/sick-list.model';

export interface IVetDoc {
    id?: number;
    Name_Doc?: string;
    sick_lists?: ISickList;
}

export class VetDoc implements IVetDoc {
    constructor(public id?: number, 
        public Name_Doc?: string,
        sick_lists?: ISickList){};
}