import taskManagerImg from '../assets/productsPhotos/Task manager.jpg'
import inventoryImg from '../assets/productsPhotos/inventory management.jpg'
import nooraniImg from '../assets/productsPhotos/Noorani Qaida post.png'
import wellbotImg from '../assets/productsPhotos/wellbot.jpg'

const products = [
  {
    id: 'task-manager',
    title: 'Task Management App',
    accent: 700,
    image: taskManagerImg,
    description: 'A clean task tracker built to actually get used, not just look nice in a demo.',
    techStack: ['React'],
  },
  {
    id: 'inventory',
    title: 'Local Inventory App',
    accent: 400,
    image: inventoryImg,
    description: 'Offline-first inventory tracking for hardware store owners, with PDF billing and customer credit tracking.',
    techStack: ['Flutter', 'Dart', 'Firebase'],
  },
  {
    id: 'noorani-qaida',
    title: 'Noorani Qaida',
    accent: 800,
    image: nooraniImg,
    description: 'Arabic pronunciation and Quran learning app with 17 audio lessons and interactive quizzes.',
    techStack: ['Flutter', 'Dart', 'SQFlite'],
  },
  {
    id: 'wellbot',
    title: 'WellBot',
    accent: 300,
    image: wellbotImg,
    description: 'All-in-one health tracker — food, water, and workouts in one dashboard.',
    techStack: ['Flutter', 'Dart', 'Gemini API', 'Firebase'],
  },
]

export default products
