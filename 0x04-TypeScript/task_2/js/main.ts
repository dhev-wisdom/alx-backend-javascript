export interface DirectorInterface {
  workFromHome(): string,
  getCoffeeBreak(): string,
  workDirectorTasks(): string,
}

export interface TeacherInterface {
  workFromHome(): string,
  getCoffeeBreak(): string,
  workDirectorTasks(): string,
}

export class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getToWork(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

export function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }

  return new Director();
}

export function isDirector(employee: Director | Teacher): employee is Director {
  return 'workDirectorTasks' in employee;
}

export function executeWork(employee: Director | Teacher) {
  if (employee instanceof Director) employee.workDirectorTasks();
  else if (employee instanceof Teacher) employee.workTeacherTasks();
}

const Subjects: 'Math' | 'History';

export function teachClass(todayClass: Subjects): 'Teaching Math' | 'Teaching History' {
  if (todayClass === 'Math') return 'Teaching Math';
  return 'Teaching History';
}

teachClass('Math');


createEmployee(200);
