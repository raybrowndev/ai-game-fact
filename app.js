import express from 'express';
import chatCompletion from './services/openai.js';

const app = express();

app.use(express.static('public'));

app.get(
    '/fact',
    async (req, res) => {
        const response = await chatCompletion(
            // "Write a short, expressive poem about lemons, as if you are hungry. Just four lines!"
            "Give a single fun creative fact about a famous game. Keep it to less than 20 words"
        );
        res.send({ fact: response });
    }
);



// app.get(
//     '/test',
//     async (req, res) => {
//         const response = await chatCompletion("Provide an amusing sentence.");
//         res.send(response);
//     }
// );

export default app;