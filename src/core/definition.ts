import { Transition } from '@/core/Transition';
import { LogicException } from '@/exception/logic-exception';

export class Definition {
    private places: string[] = [];
    private transitions: Transition[] = [];
    private initialPlace: string = undefined;

    constructor(places: string[], transitions: Transition[], initialPlace?: string) {
        places.forEach((place) => {
            this.addPlace(place);
        });
        transitions.forEach((transition) => {
            this.addTransition(transition);
        });

        this.setInitialPlace(initialPlace);
    }

    public getInitialPlace() {
        return this.initialPlace;
    }

    public getPlaces() {
        return this.places;
    }

    public getTransitions() {
        return this.transitions;
    }

    private setInitialPlace(initialPlace: string) {
        if (!initialPlace) {
            return;
        }
        if (!this.places[initialPlace]) {
            throw new LogicException(`Place "${initialPlace}" cannot be the initial place as it does not exist.`);
        }

        this.initialPlace = initialPlace;
    }

    private addPlace(place: string) {
        if (!this.places.length) {
            this.initialPlace = place;
        }

        this.places[place] = place;
    }

    private addTransition(transition: Transition) {
        if (!this.places[transition.getFrom()]) {
            throw new LogicException(
                `Place "${transition.getFrom()}" referenced in transition "${transition.getName()}" does not exist.`,
            );
        }
        if (!this.places[transition.getTo()]) {
            throw new LogicException(
                `Place "${transition.getTo()}" referenced in transition "${transition.getName()}" does not exist.`,
            );
        }

        this.transitions.push(transition);
    }
}
