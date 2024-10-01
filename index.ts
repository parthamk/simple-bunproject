import {Elysia} from 'elysia';
import {cors} from '@elysiajs/cors';


const app = new Elysia();

app.use(cors());

app.post('/api/biodata', (data)=>{
    const biodata = data.body;
    console.log('Recived biodata', biodata);
    return {message: 'Biodata received', data:biodata};
});

app.listen(8000, ()=>{
    console.log('Server running on port 8000');
})