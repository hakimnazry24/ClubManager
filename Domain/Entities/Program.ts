import {ProgramComittee} from "./ProgramComittee";

class Program{
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public duration: number,
        public price: number,
        public startDate: Date,
        public endDate: Date,
        public status: boolean,
        public programComittee: ProgramComittee[] = []
    ){
        this.id = id;
        this.name = name;
        this.description = description;
        this.duration = duration;
        this.price = price;
        this.startDate = startDate;
        this.endDate = endDate;
        this.status = status;
        this.programComittee = programComittee;
    }

    public static fromJSON(json: any): Program {
        return new Program(json.id, json.name, json.description, json.duration, json.price, json.startDate, json.endDate, json.status);
    }

    public toJSON(): any {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            duration: this.duration,
            price: this.price,
            startDate: this.startDate,
            endDate: this.endDate,
            status: this.status
        };
    }

    public addProgramComittee(programComittee: ProgramComittee){
        this.programComittee.push(programComittee);
    }
}