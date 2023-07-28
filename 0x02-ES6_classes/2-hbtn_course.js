export default class HolbertonCourse {
  #checkIfString(arr) {
    for (let i = 0; i < arr.length; i += 1) {
      if (typeof arr[i] != 'string') {
        return false;
      }
    }
    return true;
  }
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw TypeError('Name must be a string');
    }
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw TypeError('Length must be a number');
    }
    if (students instanceof Array) {
      if (this.#checkIfString(students)) {
        this._students = students;
      } else {
        throw TypeError('Students must be an array of strings');
      }
    } else {
      throw TypeError('Students must be an array of strings');
    }
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw TypeError('Name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw TypeError('Length must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (students instanceof Array) {
      if (this.#checkIfString(students)) {
        this._students = students;
      } else {
        throw TypeError('Students must be an array of strings');
      }
    } else {
      throw TypeError('Students must be an array of strings');
    }
  }
}
