import mongoose from "mongoose";

const quizQuestionBlankAnswerSchema = new mongoose.Schema({
  answer_id: String,
  answer: String,
});

const quizQuestionSchema = new mongoose.Schema({
  question_id: {type: String, required: true},
  type: {
    type: String,
    enum: ["Multiple Choice Question", "True/False Question",
      "Multiple Blanks Question"],
    required: true
  },
  text: String,
  points: Number,
  question: String,
  choices_correct_answer: String,
  choices_possible_answers: [String],
  answer: Boolean,
  blanks_answer: [quizQuestionBlankAnswerSchema],
});

const quizSchema = new mongoose.Schema({
  quiz_name: String,
  quiz_type: {
    type: String,
    enum: ["Graded Quiz", "Practice Quiz", "Graded Survey", "Ungraded Survey"]
  },
  points: Number,
  assignment_group: {
    type: String,
    enum: ["quizzes", "exams",
      "assignments", "project"]
  },
  shuffle_answers: Boolean,
  time_limit: Number,
  multiple_attempts: Boolean,
  show_correct_answers: Boolean,
  access_code: String,
  one_question_at_a_time: Boolean,
  webcam_required: Boolean,
  lock_questions_after_answering: Boolean,
  due_date: Date,
  available_date: Date,
  until_date: Date,
  published: Boolean,
  quiz_instructions: String,
  questions: [quizQuestionSchema],
}, {
  collection: 'quizzes'
});

export default quizSchema;
