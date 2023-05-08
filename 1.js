const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

const xmlDOM = parser.parseFromString(xmlString,'text/xml');

const students = xmlDOM.querySelectorAll('student');

const result = {
  list: [],
};

students.forEach((student) => {
    const fullName = student.querySelector('name');
    const firstName = student.querySelector('first').textContent;
    const secondName = student.querySelector('second').textContent;
    const name = `${firstName} ${secondName}`;
    const age = student.querySelector('age').textContent;
    const prof = student.querySelector('prof').textContent;
    const lang = fullName.getAttribute('lang');

    result.list.push({ name, age, prof, lang });
});
  
console.log(result);