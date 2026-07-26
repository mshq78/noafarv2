import { relations } from 'drizzle-orm';
import { integer, pgTable, serial, text, timestamp, boolean, jsonb } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  uid: text('uid').notNull().unique(),
  email: text('email'),
  name: text('name').notNull(),
  phone: text('phone'),
  avatar: text('avatar'),
  role: text('role').default('user'),
  points: integer('points').default(0),
  joinDate: timestamp('join_date').defaultNow(),
  progress: jsonb('progress').default([]),
  bookmarks: jsonb('bookmarks').default([]),
  likes: jsonb('likes').default([]),
  registeredEvents: jsonb('registered_events').default([]),
  savedTools: jsonb('saved_tools').default([]),
  myIdeas: jsonb('my_ideas').default([]),
});

export const ideas = pgTable('ideas', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  authorId: integer('author_id').references(() => users.id).notNull(),
  authorName: text('author_name'),
  category: text('category').notNull(),
  description: text('description').notNull(),
  tags: jsonb('tags').default([]),
  image: text('image'),
  status: text('status').default('در انتظار بررسی'),
  likes: integer('likes').default(0),
  likedBy: jsonb('liked_by').default([]),
  comments: jsonb('comments').default([]),
  points: integer('points').default(0),
  adminNote: text('admin_note'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const experiences = pgTable('experiences', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  authorId: integer('author_id').references(() => users.id).notNull(),
  authorName: text('author_name'),
  summary: text('summary').notNull(),
  category: text('category').notNull(),
  startingPoint: text('starting_point'),
  journey: text('journey'),
  challenges: text('challenges'),
  learnings: text('learnings'),
  result: text('result'),
  image: text('image'),
  readTime: text('read_time'),
  status: text('status').default('در انتظار بررسی'),
  likes: integer('likes').default(0),
  likedBy: jsonb('liked_by').default([]),
  comments: jsonb('comments').default([]),
  points: integer('points').default(0),
  createdAt: timestamp('created_at').defaultNow(),
});

export const events = pgTable('events', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  type: text('type').notNull(),
  status: text('status').default('آینده'),
  location: text('location'),
  date: timestamp('date'),
  duration: text('duration'),
  description: text('description'),
  image: text('image'),
  tags: jsonb('tags').default([]),
  capacity: integer('capacity'),
  registeredUsers: jsonb('registered_users').default([]),
  reportUrl: text('report_url'),
  points: integer('points').default(0),
  createdAt: timestamp('created_at').defaultNow(),
});

export const films = pgTable('films', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  category: text('category').notNull(),
  duration: text('duration'),
  level: text('level'),
  description: text('description'),
  videoUrl: text('video_url'),
  image: text('image'),
  chapters: jsonb('chapters').default([]),
  tags: jsonb('tags').default([]),
  views: integer('views').default(0),
  points: integer('points').default(0),
  createdAt: timestamp('created_at').defaultNow(),
});

export const tools = pgTable('tools', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  category: text('category').notNull(),
  format: text('format'),
  difficulty: text('difficulty'),
  duration: text('duration'),
  description: text('description'),
  pdfUrl: text('pdf_url'),
  embedUrl: text('embed_url'),
  image: text('image'),
  tags: jsonb('tags').default([]),
  points: integer('points').default(0),
  createdAt: timestamp('created_at').defaultNow(),
});

export const books = pgTable('books', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  author: text('author'),
  category: text('category'),
  pages: integer('pages'),
  description: text('description'),
  coverImage: text('cover_image'),
  pdfUrl: text('pdf_url'),
  tags: jsonb('tags').default([]),
  rating: integer('rating'),
  points: integer('points').default(0),
  createdAt: timestamp('created_at').defaultNow(),
});

export const ideasRelations = relations(ideas, ({ one }) => ({
  author: one(users, {
    fields: [ideas.authorId],
    references: [users.id],
  }),
}));

export const experiencesRelations = relations(experiences, ({ one }) => ({
  author: one(users, {
    fields: [experiences.authorId],
    references: [users.id],
  }),
}));
