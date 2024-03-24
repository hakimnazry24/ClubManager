import {Member} from "./Member";

export class ProgramComittee {
    constructor(
        public member: Member,
        public role: string,
    ) {
        this.member = member;
        this.role = role;

    }


}