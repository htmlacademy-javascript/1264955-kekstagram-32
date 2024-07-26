import { getRandomInteger } from './util';

const PHOTOS_DESCRIPTIONS = [
  'грустное фото',
  'веселое фото',
  'отличное фото',
  'ужасное фото',
  'занимательное фото',
  'скучное фото',
  'прекрасное фото',
  'великолепное фото',
  'интересное фото'
];

const USERS_NAMES = [
  'Жорж',
  'Майкл',
  'Сюзанна',
  'Олег',
  'Роберто',
  'Хуан',
  'Денис',
  'Мария',
  'Иосиф',
  'Маргарита',
  'Алиса',
  'Виктор',
  'Просковья',
  'Ибрагим'
];

const USERS_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const POSTS_COUNT = 25;
const MAX_COMMENT_COUNT = 30;
let FIRST_COMMENT_ID = 1;

const MIN_ID_COUNT = 1;
const MAX_ID_COUNT = 25;
const MIN_URL_COUNT = 1;
const MAX_URL_COUNT = 25;
const MIN_LIKES_COUNT = 15;
const MAX_LIKES_COUNT = 200;
const MIN_AVATAR_COUNT = 1;
const MAX_AVATAR_COUNT = 6;

const createComment = () => ({
  id: FIRST_COMMENT_ID++,
  avatar: `img/avatar-${getRandomInteger(MIN_AVATAR_COUNT, MAX_AVATAR_COUNT)}.svg`,
  name: USERS_NAMES[getRandomInteger(0, USERS_NAMES.length - 1)],
  message: USERS_MESSAGES[getRandomInteger(0, USERS_MESSAGES.length - 1)],
});

const createPost = () => ({
  id: getRandomInteger(MIN_ID_COUNT, MAX_ID_COUNT),
  url: `photos/${getRandomInteger(MIN_URL_COUNT, MAX_URL_COUNT)}.jpeg`,
  description: PHOTOS_DESCRIPTIONS[getRandomInteger(0, PHOTOS_DESCRIPTIONS.length - 1)],
  likes: getRandomInteger(MIN_LIKES_COUNT, MAX_LIKES_COUNT),
  comments: Array.from({length: getRandomInteger(1, MAX_COMMENT_COUNT)}, createComment),
});

const createAllPosts = () => Array.from({length: POSTS_COUNT}, createPost);

export {createAllPosts};
