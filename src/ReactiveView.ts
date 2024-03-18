import { PartialDeep } from 'type-fest';

import { Reaction } from './Reaction';
import { Selectors } from './Selectors';
import { SourceOf, State } from './State';

export interface ReactiveView<FullState extends State<object, object>> {
    get state(): FullState;

    update(toUpdate: object & PartialDeep<SourceOf<FullState>>): void;

    register(selectors: Selectors<FullState>): void;
    register(selectors: Selectors<FullState>, reactions: Reaction<FullState, any>[]): void;
}
