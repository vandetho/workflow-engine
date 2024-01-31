export default class Marking {
    private places: { [key: string]: number } = {};
    private context: { [key: string]: any } | null = null;

    constructor(representation = {}) {
        Object.keys(representation).forEach((place) => {
            this.mark(place);
        });
    }

    public mark(place: string): void {
        this.places[place] = 1;
    }

    public unmark(place: string): void {
        delete this.places[place];
    }

    public has(place: string): boolean {
        return !!this.places[place];
    }

    public getPlaces() {
        return this.places;
    }

    /**
     * @internal
     */
    public setContext(context: { [key: string]: any }): void {
        this.context = context;
    }

    /**
     * Returns the context after the subject has transitioned.
     */
    public getContext() {
        return this.context;
    }
}
