import bcrypt from 'bcrypt';

const users = [
    {
        username: 'ryanc',
        password: bcrypt.hashSync('123456', 10),
        email: 'ryanchladek96@gmail.com',
        dateJoined: new Date()
    },
    {
        username: 'claytonk',
        password: bcrypt.hashSync('Dodgers123', 10),
        email: 'fake.email@example.com',
        dateJoined: new Date()
    }
]

export default users;