const person = {
  firstName: 'Antonio',
  lastName: 'Gomez',
  hobby: 'Guitar',
  job: 'Landscaping',
  previousJob: 'Ice Cream Server',
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log('This persons name is:', fullName);
console.log('This persons current job is:', person.job);
console.log('This persons previous job is:', person.previousJob);
console.log('The complete person object: ', person);
