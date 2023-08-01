export default function getListStudentIds(arr) {
  if (Array.isArray(arr) && arr.length > 0) {
    const listt = [];
    arr.forEach((obj) => {
      const idd = obj.id;
      listt.push(idd);
    });
    return listt;
  }

  return [];
}
