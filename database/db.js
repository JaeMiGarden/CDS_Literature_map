import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://root:root1234@cluster0.eyi6n.mongodb.net/munhak?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true
});


const db = mongoose.connection;

const handleOpen = () => console.log("CONNECTED TO DB");
const handleError = (error) => console.log("Error on Db Connection");

db.once("open", handleOpen);
db.on("error", handleError);
