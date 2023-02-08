export enum LessonStatus {
    Scheduled = 'scheduled',
    Completed = 'completed',
}

export interface ILessonProps {
    photoUrl?: string;
    teacherFullName: string;
    language: string;
    date: string;
    time: string;
    price: string;
    status: LessonStatus;
    estimate?: number;
}
