import { Patient, IPatient } from '../patient/patient.model';
import { VetDoc, IVetDoc } from '../vet-doc/vet-doc.model';

export interface ISickList {
    id?: number;
    patient?: IPatient;
    vetdoc?: IVetDoc;
}

export class SickList implements ISickList {
    constructor(public id?: number, public patient?: Patient, public vetdoc?: VetDoc){};
}