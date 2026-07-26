import { db } from '../src/db/index.js';
import { ideas, events, films, tools, books, experiences, users } from '../src/db/schema.js';
import { DATA } from '../src/data.js';

async function seed() {
  console.log("Seeding database...");
  try {
    const existingUsers = await db.select().from(users);
    if (existingUsers.length === 0) {
      await db.insert(users).values({ id: 1, uid: 'dummy-uid', name: 'ادمین نوآفر', email: 'admin@noafar.ir' });
    }
    const exFilms = await db.select().from(films);
    if (exFilms.length === 0) {
      await db.insert(films).values(DATA.academy.map(i => ({
        title: i.title, category: i.category, duration: i.duration, level: i.level, description: i.desc, image: i.image, points: i.points, views: i.views
      })));
    }
    const exTools = await db.select().from(tools);
    if (exTools.length === 0) {
      await db.insert(tools).values(DATA.toolbox.map(i => ({
        title: i.title, category: i.category, format: i.format, difficulty: i.difficulty, duration: i.duration, description: i.desc, image: i.image, points: i.points
      })));
    }
    const exIdeas = await db.select().from(ideas);
    if (exIdeas.length === 0) {
      await db.insert(ideas).values(DATA.ideas.map(i => ({
        title: i.title, category: i.category, description: i.desc, image: i.image, status: i.status, authorId: 1, authorName: i.author, points: i.points, likes: i.likes
      })));
    }
    const exEvents = await db.select().from(events);
    if (exEvents.length === 0) {
      await db.insert(events).values(DATA.events.map(i => ({
        title: i.title, type: i.type, status: i.status, location: i.location, duration: i.duration, description: i.desc, image: i.image, capacity: i.capacity, points: i.points
      })));
    }
    const exJourney = await db.select().from(experiences);
    if (exJourney.length === 0) {
      await db.insert(experiences).values(DATA.journey.map(i => ({
        title: i.title, category: i.category, summary: i.desc, readTime: i.readTime, image: i.image, authorId: 1, authorName: i.author, points: i.points, likes: i.likes
      })));
    }
    const exBooks = await db.select().from(books);
    if (exBooks.length === 0) {
      await db.insert(books).values(DATA.library.map(i => ({
        title: i.title, category: i.category, author: i.author, pages: i.pages, description: i.desc, coverImage: i.image, rating: Math.round(i.rating), points: i.points
      })));
    }
    console.log("Database seeded successfully!");
  } catch(e) { console.error(e); }
}
seed().then(() => process.exit(0)).catch(() => process.exit(1));
