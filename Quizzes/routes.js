import * as dao from "./dao.js";

let currentQuiz = null;
export default function QuizRoutes(app) {
  const createQuiz = async (req, res) => {
    const quiz = await dao.createQuiz(req.body);
    res.json(quiz);
  };
  const deleteQuiz = async (req, res) => {
    const status = await dao.deleteQuiz(req.params.quizId);
    res.json(status);
  };
  const findAllQuizzes = async (req, res) => {
    const {published} = req.query;
    if (published) {
      const quizzes = await dao.findQuizzesByPublished(published);
      res.json(quizzes);
      return;
    }
    const quizzes = await dao.findAllQuizzes();
    res.json(quizzes);
  };
  const findQuizById = async (req, res) => {
    const quiz = await dao.findQuizById(req.params.quizId);
    res.json(quiz);
  };
  const updateQuiz = async (req, res) => {
    const {quizId} = req.params;
    const status = await dao.updateQuiz(quizId, req.body);
    currentQuiz = await dao.findQuizById(quizId);
    res.json(status);
  };
  // const signup = async (req, res) => {
  //   const user = await dao.findUserByUsername(req.body.username);
  //   if (user) {
  //     res.status(400).json(
  //         {message: "Username already taken"});
  //   }
  //   currentUser = await dao.createUser(req.body);
  //   res.json(currentUser);
  // };
  // const signin = async (req, res) => {
  //   const {username, password} = req.body;
  //   currentUser = await dao.findUserByCredentials(username, password);
  //   res.json(currentUser);
  // };
  // const signout = (req, res) => {
  //   currentUser = null;
  //   res.sendStatus(200);
  // };
  // const profile = async (req, res) => {
  //   res.json(currentUser);
  // };
  app.post("/api/quizzes", createQuiz);
  app.get("/api/quizzes", findAllQuizzes);
  app.get("/api/quizzes/:quizId", findQuizById);
  app.put("/api/quizzes/:quizId", updateQuiz);
  app.delete("/api/quizzes/:quizId", deleteQuiz);

  // app.post("/api/users/signout", signout);
  // app.post("/api/users/signup", signup);
  // app.post("/api/users/signin", signin);
  // app.post("/api/users/signout", signout);
  // app.post("/api/users/profile", profile);
}
