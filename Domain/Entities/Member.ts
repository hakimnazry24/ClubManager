export class Member {
    constructor(
        public id: number,
        public name: string,
        public clubId: number,
        public roleId : number
    ) {
        this.id = id;
        this.name = name;
        this.clubId = clubId;
        this.roleId = roleId;
}

    public static fromJSON(json: any): Member {
        return new Member(json.id, json.name, json.clubId, json.roleId);
    }

    public toJSON(): any {
        return {
            id: this.id,
            name: this.name,
            clubId: this.clubId,
            roleId: this.roleId
        };
    }
}