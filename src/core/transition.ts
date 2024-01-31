export class Transition {
    private readonly name: string;
    private readonly from: string;
    private readonly to: string;

    constructor(name: string, from: string, to: string) {
        this.name = name;
        this.from = from;
        this.to = to;
    }

    public getName(): string {
        return this.name;
    }

    public getFrom() {
        return this.from;
    }

    public getTo() {
        return this.to;
    }
}
