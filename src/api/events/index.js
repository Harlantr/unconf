import api from '../';

export const getEvents = () => api.get('/events');

export const updateEvent = event => api.put(`/events/${event._id}`, event);
