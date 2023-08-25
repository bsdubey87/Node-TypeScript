import express from 'express'

const app = express();
const mainApp= async (): Promise<any> => {
app.listen(3000, ()=>{
    console.log('App is listening on port 4000')
})
}

mainApp();
export{ app};