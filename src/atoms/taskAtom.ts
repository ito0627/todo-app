// atoms/taskAtom.ts
import { atom } from 'recoil';

export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export const taskState = atom<Task[]>({
  key: 'taskState',
  default: [],
});
