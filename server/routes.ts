import express from 'express';
import { db } from '../src/db/index.js';
import { users, ideas, events, films, tools, books, experiences } from '../src/db/schema.js';
import { eq, like, or, and, sql } from 'drizzle-orm';
import { protect, AuthRequest } from './auth.js';
import { adminAuth } from './firebase-admin.js';

export const router = express.Router();

// --- AUTH ROUTES ---
router.post('/auth/login', async (req, res) => {
  try {
    const { token } = req.body;
    const decodedToken = await adminAuth.verifyIdToken(token);
    const { uid, email, name, picture } = decodedToken;
    
    let dbUser;
    const existing = await db.select().from(users).where(eq(users.uid, uid));
    
    if (existing.length === 0) {
      const inserted = await db.insert(users).values({
        uid,
        email,
        name: name || 'کاربر',
        avatar: picture,
      }).returning();
      dbUser = inserted[0];
    } else {
      dbUser = existing[0];
    }
    
    res.json({
      _id: dbUser.id,
      name: dbUser.name,
      email: dbUser.email,
      avatar: dbUser.avatar,
      points: dbUser.points,
      token
    });
  } catch (error: any) { 
    console.error(error);
    res.status(500).json({ message: error.message }); 
  }
});

router.get('/auth/me', protect, async (req: AuthRequest, res) => {
  res.json({
      _id: req.dbUser.id,
      name: req.dbUser.name,
      email: req.dbUser.email,
      avatar: req.dbUser.avatar,
      points: req.dbUser.points
  });
});

// --- IDEAS ROUTES ---
router.get('/ideas', async (req, res) => {
  try {
    const { category, status, search } = req.query;
    
    let conditions = [];
    if (category && category !== 'همه') conditions.push(eq(ideas.category, category as string));
    if (status) conditions.push(eq(ideas.status, status as string));
    else conditions.push(eq(ideas.status, 'تایید شده'));
    
    if (search) {
      const searchStr = `%${search}%`;
      conditions.push(or(like(ideas.title, searchStr), like(ideas.description, searchStr)));
    }
    
    const results = await db.select({
      id: ideas.id,
      title: ideas.title,
      category: ideas.category,
      description: ideas.description,
      image: ideas.image,
      points: ideas.points,
      authorName: users.name,
      createdAt: ideas.createdAt
    }).from(ideas)
      .leftJoin(users, eq(ideas.authorId, users.id))
      .where(conditions.length > 0 ? and(...conditions) : undefined)
      .orderBy(sql`${ideas.createdAt} DESC`);
      
    res.json(results.map(r => ({ ...r, _id: r.id })));
  } catch (error: any) { res.status(500).json({ message: error.message }); }
});

// --- EVENTS ROUTES ---
router.get('/events', async (req, res) => {
  try {
    const { type, status } = req.query;
    let conditions = [];
    if (type && type !== 'همه') {
      if (type === 'گزارش') conditions.push(eq(events.status, 'برگزار شده'));
      else conditions.push(eq(events.type, type as string));
    }
    if (status) conditions.push(eq(events.status, status as string));
    
    const results = await db.select().from(events).where(conditions.length > 0 ? and(...conditions) : undefined).orderBy(sql`${events.date} DESC`);
    res.json(results.map(r => ({ ...r, _id: r.id })));
  } catch (error: any) { res.status(500).json({ message: error.message }); }
});

// --- TOOLS ROUTES ---
router.get('/tools', async (req, res) => {
  try {
    const { category, format, search } = req.query;
    let conditions = [];
    if (category && category !== 'همه') conditions.push(eq(tools.category, category as string));
    if (format && format !== 'همه') conditions.push(eq(tools.format, format as string));
    if (search) conditions.push(like(tools.title, `%${search}%`));
    
    const results = await db.select().from(tools)
      .where(conditions.length > 0 ? and(...conditions) : undefined)
      .orderBy(sql`${tools.createdAt} DESC`);
    res.json(results.map(r => ({ ...r, _id: r.id })));
  } catch (error: any) { res.status(500).json({ message: error.message }); }
});

// --- BOOKS ROUTES ---
router.get('/books', async (req, res) => {
  try {
    const { category, search } = req.query;
    let conditions = [];
    if (category && category !== 'همه') conditions.push(eq(books.category, category as string));
    if (search) conditions.push(like(books.title, `%${search}%`));
    
    const results = await db.select().from(books)
      .where(conditions.length > 0 ? and(...conditions) : undefined)
      .orderBy(sql`${books.createdAt} DESC`);
    res.json(results.map(r => ({ ...r, _id: r.id })));
  } catch (error: any) { res.status(500).json({ message: error.message }); }
});

// --- EXPERIENCES ROUTES ---
router.get('/experiences', async (req, res) => {
  try {
    const { category, search } = req.query;
    let conditions = [];
    if (category && category !== 'همه') conditions.push(eq(experiences.category, category as string));
    if (search) conditions.push(like(experiences.title, `%${search}%`));
    
    const results = await db.select().from(experiences)
      .where(conditions.length > 0 ? and(...conditions) : undefined)
      .orderBy(sql`${experiences.createdAt} DESC`);
    res.json(results.map(r => ({ ...r, _id: r.id })));
  } catch (error: any) { res.status(500).json({ message: error.message }); }
});
router.get('/films', async (req, res) => {
  try {
    const { category, level, search } = req.query;
    let conditions = [];
    if (category && category !== 'همه') conditions.push(eq(films.category, category as string));
    if (level) conditions.push(eq(films.level, level as string));
    if (search) conditions.push(like(films.title, `%${search}%`));
    
    const results = await db.select().from(films).where(conditions.length > 0 ? and(...conditions) : undefined).orderBy(sql`${films.createdAt} DESC`);
    res.json(results.map(r => ({ ...r, _id: r.id })));
  } catch (error: any) { res.status(500).json({ message: error.message }); }
});
