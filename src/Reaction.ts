import { State } from './State';

export interface Reaction<FullState extends State<object, object>, T> {
    extractReactionCause(state: FullState): T;
    action(reactionCause: T): void;
}
