import express from 'express';

const app = express();

// app.get('/',(req,res)=>{
//     res.send('hello response')
// })

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:'this id first joke',
            content:`Why do programmers prefer dark mode? Because light attracts bugs.`
        },{
            id:2,
            title:'this id second joke',
            content:`Why do programmers quit their jobs? Because they don't get arrays.`
        },{
            id:3,
            title:'this id third joke',
            content:`What's the difference between a programmer and a software engineer? A programmer can write code, but a software engineer can write code that doesn't work, but looks really good doing it.`
        }
    ];
    res.send(jokes);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`we are serving on port ${PORT}`);
});