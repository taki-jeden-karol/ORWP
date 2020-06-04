import { ISickList } from '../sick-list/sick-list.model';

export interface IPatient {
    id?: number;
    Name_Patient?: string;
    Kind_Patient?: string;
    sick_lists?: ISickList;
}

export class Patient implements IPatient {
    constructor(public id?: number, 
                public Name_Patient?: string, 
                Kind_Patient?: string, 
                sick_lists?: ISickList){};
}