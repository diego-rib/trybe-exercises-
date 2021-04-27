const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addProp = (object, key, value) => (object[key] = value);

const listKeys = (object) => Object.keys(object);

const measureObject = (object) => listKeys(object).length;

const listValues = (object) => Object.values(object);

const AllLessons = {
  lesson1: {},
  lesson2: {},
  lesson3: {},
};

const assignLessons = () => {
  Object.assign(AllLessons.lesson1, lesson1);
  Object.assign(AllLessons.lesson2, lesson2);
  Object.assign(AllLessons.lesson3, lesson3);
};

addProp(lesson2, 'turno', 'manhã');

assignLessons();

console.table(AllLessons);
