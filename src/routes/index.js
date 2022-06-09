const blogRoute = require('./blogRoute')
const epsinfoRoute = require('./epsinfoRoute')
const examsRoute =  require('./examsRoute')
const useRoute = require('./userRoute')
const lesson1Route = require('./lesson1Route')
const lesson2Route = require('./lesson2Route')
const hangeulRoute = require('./hangeulRoute')
const lessonPracticeRoute = require('./lessonPracticeRoute')
const hangeulPracticeRoute = require('./hangeulPracticeRoute')
const practiceReadRoute = require('./practiceReadRoute')
const practiceListenRoute = require('./practiceListenRoute')
const qbank_readRoute = require('./qbank_readRoute')
const qbank_listenRoute = require('./qbank_listenRoute')
const dicRoute = require('./dicRoute')
const lessonCommentsRoute = require('./lessonCommentsRoute')
const pracListenCommentRoute = require('./pracListenCommentRoute')
const pracReadCommentRoute = require('./pracReadCommentRoute')
const courseviewsRoute = require('./courseviewsRoute')
const progressRoute = require('./progressRoute')
const notesRoute = require('./notesRoute')
const pracReadNoteRoute = require('./pracReadNoteRoute')
const pracListenNoteRoute = require('./pracListenNoteRoute')
const gamesQRoute = require('./gamesQRoute')
const gamesARoute = require('./gamesARoute')


// demo here
const commentDomeRoute = require('./commentDomeRoute')

const routes = [
    blogRoute,
    epsinfoRoute,
    examsRoute,
    useRoute,
    lesson1Route,
    lesson2Route,
    hangeulRoute,
    lessonPracticeRoute,
    hangeulPracticeRoute,
    practiceReadRoute,
    practiceListenRoute,
    qbank_readRoute,
    qbank_listenRoute,
    dicRoute,
    lessonCommentsRoute,
    pracListenCommentRoute,
    pracReadCommentRoute,
    courseviewsRoute,
    progressRoute,
    notesRoute,
    pracReadNoteRoute,
    pracListenNoteRoute,
    gamesARoute,
    gamesQRoute,

    // demo here
    commentDomeRoute
]
module.exports = routes