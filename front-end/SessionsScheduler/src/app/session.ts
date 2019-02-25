import { Speaker } from './speaker';

export class Session {
  id: number;
  name: string;
  topic: string;
  location?: string;
  startTime: Date;

  speakers?: Speaker[];
  isSelected?: boolean;
  hasConflict?: boolean;

  startDate?: Date;
}
