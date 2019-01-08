const express = require('express');
const app = express();

const courses = [
 {id: 1, name: 'course1' },
 {id: 2, name: 'course2' },
 {id: 2, name: 'course3' }
];
app.get('/', (req, res) => {
 res.send('Hello world');
});

app.get('/api/courses', (req, res) => {
  res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
 const course = courses.find(c => c.id === parseInt(req.params.id));
if(!course) res.status(404).send('the course with the given id was not found');
res.send(course);
});

//  /api/courses/1 endpoint

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));