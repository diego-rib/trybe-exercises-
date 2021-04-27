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

// Exercicio 1
const addProp = (object, key, value) => (object[key] = value);
addProp(lesson2, 'turno', 'manhã');

// Exercicio 2
const listKeys = (object) => Object.keys(object);

// Exercicio 3
const measureObject = (object) => listKeys(object).length;

// Exercicio 4
const listValues = (object) => Object.values(object);

// Exercicio 5
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

assignLessons();

// Exercicio 6
const totalStudents = () => {
  let total = 0;
  const keys = listKeys(AllLessons);
  for (let index = 0; index < keys.length; index += 1) {
    total += AllLessons[keys[index]]['numeroEstudantes'];
  }
  return total;
};

// Exercicio 7
const getValueByNumber = (lesson, position) => listValues(lesson)[position];

// Exercicio 8
const verifyPair = (lesson, key, value) => listKeys(lesson).includes(key) && lesson[key] === value;


// Bônus

// Exercicio 1
const countProfessorStudents = (lessons, professor, materia) => {
  let total = 0;

  const keys = listKeys(lessons);

  for (let index = 0; index < keys.length; index += 1) {

    const currentLesson = lessons[keys[index]];
    const values = listValues(currentLesson);

    if (values.includes(materia) && values.includes(professor)) {
      total += currentLesson['numeroEstudantes'];
    }

  }

  return total;
}

// Exercicio 2
const checkClasses = (lessons, professor) => {
  let materias = [];
  const keys = listKeys(lessons);
  for (let index = 0; index < keys.length; index += 1) {
    if (listValues(lessons[keys[index]]).includes(professor)) {
      materias.push(lessons[keys[index]]['materia']);
    }
  }
  return materias.sort();
}

const checkTotalStudents = (teacher, classes) => {
  let total = 0;
  const aulas = [...new Set(classes)];
  const keys = listKeys(AllLessons);
  for (let index = 0; index < aulas.length; index += 1) {
    total += countProfessorStudents(AllLessons, teacher, aulas[index]);
  }
  return total;
};

const createReport = (lessons, teacher) => {
  const classes = checkClasses(lessons, teacher);
  const students = checkTotalStudents(teacher, classes);
  return {
    professor: teacher, 
    aulas: classes, 
    estudantes: students,
  };
};
