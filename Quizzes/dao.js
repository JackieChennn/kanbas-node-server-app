import model from "./model.js";

export const createQuiz = (quiz) => {
  delete quiz._id;
  return model.create(quiz);
}
export const findQuizByQuizName = (quiz_name) => model.findOne(
    {quiz_name: quiz_name});
export const findAllQuizzes = () => model.find();
export const findQuizById = (quizId) => model.findById(quizId);
export const findQuizzesByPublished = (published) => model.find({published: published});
export const updateQuiz = (quizId, quiz) => model.updateOne({_id: quizId},
    {$set: quiz});
export const deleteQuiz = (quizId) => model.deleteOne({_id: quizId});