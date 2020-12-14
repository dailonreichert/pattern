import Observer from './Observer';

interface Subject {
    addObserver(observer: Observer): void;

    removeObserver(observer: Observer): void;

    notifyObservers(): void;
}

export default Subject;