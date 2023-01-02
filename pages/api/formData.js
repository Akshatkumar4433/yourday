export default function handler(req,res) {
    
    const body = req.body;

    console.log('body: ', body.second);

    res.status(200).json({ data: `${body.first} ${body.second}` })
}