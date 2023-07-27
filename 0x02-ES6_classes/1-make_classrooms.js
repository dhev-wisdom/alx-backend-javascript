import Classroom from './0-classroom';

export default function initializeRooms() {
  const class1 = new Classroom(19);
  const class2 = new Classroom(20);
  const class3 = new Classroom(34);

  return [class1, class2, class3];
}
