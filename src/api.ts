const API_BASE = '/api';

export const api = {
  // Auth
  login: (token: string) => fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token })
  }).then(r => r.json()),
  
  me: (token: string) => fetch(`${API_BASE}/auth/me`, {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${token}` }
  }).then(r => r.json()),
  
  // Ideas
  getIdeas: (params: any = {}) => {
    const query = new URLSearchParams(params).toString();
    return fetch(`${API_BASE}/ideas?${query}`).then(r => r.json());
  },
  
  createIdea: (data: any, token: string) => fetch(`${API_BASE}/ideas`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(data)
  }).then(r => r.json()),
  
  // Events
  getEvents: (params: any = {}) => {
    const query = new URLSearchParams(params).toString();
    return fetch(`${API_BASE}/events?${query}`).then(r => r.json());
  },

  registerEvent: (id: string, token: string) => fetch(`${API_BASE}/events/${id}/register`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${token}` }
  }).then(r => r.json()),
  
  // Films
  getFilms: (params: any = {}) => {
    const query = new URLSearchParams(params).toString();
    return fetch(`${API_BASE}/films?${query}`).then(r => r.json());
  },

  completeFilm: (id: string, token: string) => fetch(`${API_BASE}/films/${id}/complete`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${token}` }
  }).then(r => r.json()),
  
  // Tools
  getTools: (params: any = {}) => {
    const query = new URLSearchParams(params).toString();
    return fetch(`${API_BASE}/tools?${query}`).then(r => r.json());
  },

  // Books
  getBooks: (params: any = {}) => {
    const query = new URLSearchParams(params).toString();
    return fetch(`${API_BASE}/books?${query}`).then(r => r.json());
  },

  // Experiences
  getExperiences: (params: any = {}) => {
    const query = new URLSearchParams(params).toString();
    return fetch(`${API_BASE}/experiences?${query}`).then(r => r.json());
  },
};
