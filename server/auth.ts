import { Request, Response, NextFunction } from 'express';
import { adminAuth } from './firebase-admin.js';
import { DecodedIdToken } from 'firebase-admin/auth';
import { db } from '../src/db/index.js';
import { users } from '../src/db/schema.js';
import { eq } from 'drizzle-orm';

export interface AuthRequest extends Request {
  user?: DecodedIdToken;
  dbUser?: any;
}

export const requireAuth = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized: Missing token' });
  }

  const token = authHeader.split('Bearer ')[1];
  try {
    const decodedToken = await adminAuth.verifyIdToken(token);
    req.user = decodedToken;
    
    // Fetch db user
    const dbUserResults = await db.select().from(users).where(eq(users.uid, decodedToken.uid));
    if (dbUserResults.length > 0) {
      req.dbUser = dbUserResults[0];
    }
    
    next();
  } catch (error) {
    console.error('Error verifying Firebase ID token:', error);
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};

export const protect = requireAuth;
