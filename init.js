
import './database/db';

import './database/model/Board'
import './database/model/User';

import app from './app';

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server On ${PORT}`);
})